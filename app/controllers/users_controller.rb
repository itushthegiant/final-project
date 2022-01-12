class UsersController < ApplicationController

    #####################
    ### create a user ###
    #####################
    def create
        user = User.create!(user_params)
        # respond_to do |format|
        #     if user.save
        #       # Tell the UserMailer to send a welcome email after save
        #       UserMailer.with(user: user).welcome_email.deliver_now
      
              session[:user_id] = user.id
        #       format.html { redirect_to(user, notice: 'User was successfully created.') }
        #       format.json { render json: user, status: :created, location: user }
        #     else
        #       format.html { render action: 'new' }
        #       format.json { render json: user.errors, status: :unprocessable_entity }
        #     end
        #   end
        render json: user, status: :created
    end

    #######################
    # show user users/:id #
    #######################
    def show
        if current_user
            render json: current_user, status: :ok
        else
            render json: {}, status: :unauthorized
        end
    end



    private

    def user_params
        params.permit(:username, :password, :email_address, :password_confirmation, :company_name, :is_admin)
    end
end
