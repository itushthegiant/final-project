class User < ApplicationRecord

    has_many :properties

    has_secured_password
end
