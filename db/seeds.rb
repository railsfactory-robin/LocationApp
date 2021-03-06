# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
require 'csv'

CSV.foreach("db/csv_data/industries.csv") do |row|
  Industry.find_or_create_by(name: row[0],address: row[1],contact: row[2],location_id: row[3],category_id: row[4])
end