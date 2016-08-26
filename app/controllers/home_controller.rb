class HomeController < ApplicationController

	def index
		
	end
	def get_location_list
 		@locations = Location.all.map(&:name)
 		render json: @locations.to_json
	end
	def get_category_list
		@category = {}
		@category["category"] = Category.all.collect {|x| {id: x.id,name: x.name}}
		render json: @category.to_json
	end
	def get_full_details
 		@full_details = {};
		if params[:location] && params[:category]
		 	@full_details = Industry.get_by_location_category(params[:location],params[:category])
		else
			@full_details = "no result found";
		end 
		render json: @full_details.to_json
	end	
	def login
 		@user = User.find_by_email(params[:email])
		if @user
			render json: @user.to_json
		else
			@error ={}
 			@error["error"] = "username or password is incorrect"
			render json: @error.to_json
		end
	end
	def savelocation
 		@location =Location.new(loc_params);
 		@message={};
	     if @location.save
	     	@message['success'] = "Location data saved successfully"
	        render json: @message.to_json
	    else
	        @message['error'] = "Location data cannot be saved"
	        render json: @message.to_json
	    end
	end
	def savecategory
		@category =Category.new(cat_params);
 		@message={};
	     if @category.save
	     	@message['success'] = "category data saved successfully"
	        render json: @message.to_json
	    else
	        @message['error'] = "category data cannot be saved"
	        render json: @message.to_json
	    end
	end

	def loc_params
	    params.permit(:name, :state, :country)
	 end
	 def cat_params
	    params.permit(:name)
	 end
end
