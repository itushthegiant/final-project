class Property < ApplicationRecord
    belongs_to :user
    has_many :jobs, dependent: :destroy

    validates_presence_of :name, :contact, :address, :city, :state, :zipcode

    validates :zipcode, length: { is: 5 }
    validates :name, length: { in: 5..30 }
    validates :contact, length: { in: 10..30 }
    validates :address, length: { in: 5..30 }
    validates :city, length: { maximum: 20 }
end
