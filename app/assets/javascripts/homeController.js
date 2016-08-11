app.controller('homeController', function($scope,$http) {
    $scope.getCategoryList = function(){
    	$http({
		  method: 'GET',
		  url: '/get_category_list'
		}).then(function successCallback(response) {
 		    $scope.category = response.data;
		  }, function errorCallback(response) {
		  	console.log(response) 
		});
    }
    $scope.locationData = function(data){
        data.location=$('#location').val();
        console.log(data);
        if (data.location && data.category) {
          $http({
          method: 'GET',
          url: '/get_full_details',
          headers: {'Content-Type': 'application/x-www-form-urlencoded'},
          params : data
          }).then(function successCallback(response) {
             $scope.full_details = response.data;
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
     $scope.getLocations();

});