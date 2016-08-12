class CreateIndustries < ActiveRecord::Migration
  def change
    create_table :industries do |t|
      t.string :name
      t.string :address
      t.string :contact
      t.belongs_to :category, index: true
      t.belongs_to :location, index: true
      t.timestamps null: false
    end
  end
end
