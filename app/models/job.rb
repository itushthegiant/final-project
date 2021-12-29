class Job < ApplicationRecord
    belongs_to :user
    belongs_to :property

    has_one_attached :image
end
