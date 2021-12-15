class PropertySerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :state, :city, :zipcode, :contact, :comments

  belongs_to :user
end
