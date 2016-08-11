class Industry < ActiveRecord::Base
	belongs_to :category
	has_many :locations
	
	def self.get_by_location_category_keyword(location,category,keyword)
		self.where(categories_id: categories_id,locations_id: locations_id)
	end
end
