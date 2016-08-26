class Industry < ActiveRecord::Base
	belongs_to :category
	has_many :locations
	
	# def self.get_by_location_category_keyword(location,category,keyword)
	# 	self.where(categories_id: categories_id,locations_id: locations_id)
	# end
	def self.get_by_location_category(location,category_id)
 		location = Location.find_by_name(location)
		location_id = location.id if location
		Industry.where(location_id: location_id,category_id: category_id)
	end
end
