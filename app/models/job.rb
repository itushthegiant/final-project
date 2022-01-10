class Job < ApplicationRecord
    belongs_to :user
    belongs_to :property

    has_many_attached :images

    validates_presence_of :description, :contact, :urgent
    validates :description, length: { in: 5..70 }
    validates :contact, length: { in: 10..30 }
end