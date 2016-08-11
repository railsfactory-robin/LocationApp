class CreateIndustries < ActiveRecord::Migration
  def change
    create_table :industries do |t|
      t.string :name
      t.string :address
      t.string :contact
      t.references :location, index: true
      t.references :category, index: true
      t.timestamps null: false
    end
  end
end
