class RemoveColumnsFromLocation < ActiveRecord::Migration
  def change
    remove_column :locations, :district, :string
    remove_column :locations, :pincode, :string
  end
end
