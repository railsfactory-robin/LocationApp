class Location < ActiveRecord::Base
	has_many :categories
	has_many :industries
	validates_uniqueness_of :name
end
