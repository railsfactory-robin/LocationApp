class AddCategoriesAssociationToLocation < ActiveRecord::Migration
  def self.up
      add_column :categories, :location_id, :integer
      add_index 'categories', ['location_id'], :name => 'index_location_id' 
  end

  def self.down
      remove_column :categories, :location_id
  end
end
