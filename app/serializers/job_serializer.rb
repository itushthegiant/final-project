class JobSerializer < ActiveModel::Serializer
  attributes :id, :approved, :urgent, :description, :contact, :image
end
