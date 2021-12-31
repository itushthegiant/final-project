class AddIsDoneColumnToJobs < ActiveRecord::Migration[6.1]
  def change
    add_column :jobs, :is_done, :boolean, default: false
  end
end
