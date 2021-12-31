class Job < ApplicationRecord
    belongs_to :user
    belongs_to :property

    has_many_attached :images
end