class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :company_name, :email_address, :is_admin

  has_many :properties
end
