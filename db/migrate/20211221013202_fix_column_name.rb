class FixColumnName < ActiveRecord::Migration[6.1]
  def change
    rename_column :jobs, :discription, :description
  end
end
