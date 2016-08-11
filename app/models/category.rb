class Category < ActiveRecord::Base
	has_many :industries
	belongs_to :location
end
