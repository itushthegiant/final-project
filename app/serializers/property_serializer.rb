class PropertySerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :contact, :comments
end
