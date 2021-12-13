class PropertiesController < ApplicationController
    before_action :find_property, except: [:create, :index, :destroy]
    before_action :current_user

    # show all properties
    def index
        # render json: Property.all, status: :ok
        render json: current_user.propertys, status: :ok
    end 

    # create a property
    def create
        property = Property.create!(property_params)
        # if current_user
        #     property = current_user.properties.create!(property_params)
        #     render json: property, status: :created
        # end
        render json: property, status: :created
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
        if current_user
            current_user.properties.find_by(id: params[:id]).destroy
            head :no_content
        end
    end


    # private methods
    private

    def find_property
        @property = property.find_by(id: params[:id])
    end

    def property_params
        params.require(:property).permit(:name, :address, :contact, :comments, :user_id)
    end
end
