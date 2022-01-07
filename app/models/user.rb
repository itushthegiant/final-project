class User < ApplicationRecord

    has_many :properties
    has_many :jobs

    has_secure_password

    validates :username, presence: true, uniqueness: true, length: { maximum: 20, minimum: 6} 
    validates :password, presence: true, length: { maximum: 20, minimum: 6} 
end
