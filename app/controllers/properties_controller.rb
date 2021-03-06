class PropertiesController < ApplicationController
    before_action :find_property, except: [:create, :index, :destroy]
    before_action :current_user

    # show all properties
    def index
        if current_user.is_admin == true
            render json: Property.all, status: :ok
        else
            render json: current_user.properties, status: :ok
        end
    end 

    # create a property
    def create
        if current_user
            property = current_user.properties.create!(property_params)
            render json: property, status: :created
        end
    end
    

    # show property properties/:id
    def show
        render json: @property, status: :ok
    end

    # update property properties/:id
    def update
        @property.update!(property_params)
        render json: @property, status: :ok
    end

    # destroy property properties/:id
    def destroy
        Property.find_by(id: params[:id]).destroy
        head :no_content
    end


    # private methods
    private

    def find_property
        @property = Property.find_by(id: params[:id])
    end

    def property_params
        params.require(:property).permit(:id, :name, :address, :state, :city, :zipcode, :contact, :comments, :user_id)
    end
end
