class RemoveColumnsFromCategory < ActiveRecord::Migration
  def change
    remove_column :categories, :location_id, :integer
  end
end
