class JobSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  include ImageConcern
  attributes :id, :approved, :urgent, :description, :contact, :images_urls, :is_done, :property, :created_at, :updated_at
  belongs_to :user, include_nested_associations: true

  

  def images_urls
    object.images.map do |image|
      url_for(image)
    end
  end
end
