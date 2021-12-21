class JobSerializer < ActiveModel::Serializer
  attributes :id, :job_type, :description, :contact
end
