app.controller('homeController', function($scope,$http,$location) {
    $scope.getCategoryList = function(){
    	$http({
		  method: 'GET',
		  url: '/get_category_list',
      headers: {'Content-Type': 'application/json'}
		}).then(function successCallback(response) {
          console.log(response.data.category)
  		    $scope.category = response.data.category;
		  }, function errorCallback(response) {
		  	console.log(response) 
		});
    }
    $scope.locationData = function(data){
        data.location=$('#location').val();
         if (data.location && data.category) {
          $http({
          method: 'GET',
          url: '/get_full_details',
          headers: {'Content-Type': 'application/x-www-form-urlencoded'},
          params : data
          }).then(function successCallback(response) {
            console.log("Dddddddddddddddddddddddddd")
            console.log(response.data)
             $scope.full_details = response.data;
             $location.path('/fulldetails')
          }, function errorCallback(response) {
            console.log(response) 
          }); 
        }
    }
     $scope.getLocations = function(){
        $scope.location = [];
        $http({
         method: 'GET',
         url: '/get_location_list'
         }).then(function successCallback(response) {
             $scope.location = response.data;
              $("#location").autocomplete({
                    source:  $scope.location
              });
         }, function errorCallback(response) {
            console.log(response) 
         });
      }
     /*$scope.getLocations();*/

});