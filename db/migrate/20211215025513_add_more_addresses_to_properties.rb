class AddMoreAddressesToProperties < ActiveRecord::Migration[6.1]
  def change
    add_column :properties, :zipcode, :integer
    add_column :properties, :state, :string
    add_column :properties, :city, :string
  end
end
