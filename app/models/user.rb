class User < ApplicationRecord

    has_many :properties
    has_many :jobs

    has_secure_password
end
