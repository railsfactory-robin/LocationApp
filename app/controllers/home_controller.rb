class HomeController < ApplicationController

	def index
		
	end
	def get_location_list
		@locations = Location.all.map(&:name)
		render json: @locations.to_json
	end
	def get_category_list
		@category = Category.all.map(&:name)
		render json: @category.to_json
	end
	def get_full_details
		@full_details = 'hello'
		if params[:location] && params[:category] && params[:keyword]
			@full_details = Industry.get_by_location_category_keyword(params[:location],params[:category],params[:keyword])
		elsif params[:location] && params[:category]
		 	@full_details = Industry.get_by_location_category(params[:location],params[:category])
		else
			@full_details = "no result found";
		end 
		render json: @full_details.to_json
	end	
	
end
