class PropertySerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :contact, :comments, :user_id

  belongs_to :user
end
