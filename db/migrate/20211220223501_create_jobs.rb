class CreateJobs < ActiveRecord::Migration[6.1]
  def change
    create_table :jobs do |t|
      t.string :type
      t.string :discription
      t.string :contact

      t.timestamps
    end
  end
end
