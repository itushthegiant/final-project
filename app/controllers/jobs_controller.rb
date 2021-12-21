class JobsController < ApplicationController
    before_action :find_job, except: [:create, :index, :destroy]
    before_action :current_user

    # show all jobs
    def index
        render json: current_user.jobs, status: :ok
    end 

    # create a job
    def create
        if current_user
            job = current_user.jobs.create!(job_params)
            render json: job, status: :created
        end
    end
    

    # show job jobs/:id
    def show
        render json: @job, status: :ok
    end

    # update job jobs/:id
    def update
        @job.update!(job_params)
        render json: @job, status: :ok
    end

    # destroy job jobs/:id
    def destroy
        if current_user
            current_user.jobs.find_by(id: params[:id]).destroy
            head :no_content
        end
    end


    # private methods
    private

    def find_job
        @job = Job.find_by(id: params[:id])
    end

    def job_params
        params.require(:job).permit(:type, :discription, :contact, :user_id, :property_id)
    end
end
