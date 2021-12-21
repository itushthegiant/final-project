class AddPropertyIdToJobs < ActiveRecord::Migration[6.1]
  def change
    add_column :jobs, :property_id, :integer
  end
end
