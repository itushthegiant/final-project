class UsersController < ApplicationController

    #####################
    ####create a user
    #####################
    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    #####################
    # show user users/:id
    #####################
    def show
        if current_user
            render json: current_user
        else
            render json: {}, status: :unauthorized
        end
    end


    private

    def user_params
        params.permit(:username, :password)
    end
end
