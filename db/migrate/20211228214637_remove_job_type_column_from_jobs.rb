class RemoveJobTypeColumnFromJobs < ActiveRecord::Migration[6.1]
  def change
    remove_column :jobs, :job_type
  end
end
