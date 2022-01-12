class PropertySerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :state, :city, :zipcode, :contact

  
  belongs_to :user
end
