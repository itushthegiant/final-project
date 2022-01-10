class Property < ApplicationRecord
    belongs_to :user
    has_many :jobs, dependent: :destroy

    validates_presence_of :name, :contact, :address, :city, :state, :zipcode


end
