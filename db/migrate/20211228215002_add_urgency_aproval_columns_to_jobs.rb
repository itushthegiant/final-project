class AddUrgencyAprovalColumnsToJobs < ActiveRecord::Migration[6.1]
  def change
    add_column :jobs, :urgent, :integer
    add_column :jobs, :approved, :boolean, default: false
  end
end
