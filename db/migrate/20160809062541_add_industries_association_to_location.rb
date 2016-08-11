class AddIndustriesAssociationToLocation < ActiveRecord::Migration
  def self.up
      add_column :industries, :location_id, :integer
      add_index 'industries', ['location_id'], :name => 'index_location_id' 
  end

  def self.down
      remove_column :industries, :location_id
  end
end
