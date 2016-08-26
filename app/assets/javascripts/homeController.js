app.controller('homeController', function($scope,$http,$location, $sessionStorage) {

    $scope.$on('$routeChangeStart', function (scope, next, current) {
       if(!$location.absUrl().split('?')[0].split("/").slice(-1)[0] && current){
          location.reload();
        }
    });
   $scope.homepage = function(){
    $scope.header = false;
    $scope.data = {};
    $location.path('/');
   }
  $scope.initialize = function(){
    $scope.header = false;
    if ($location.absUrl().split('?')[0].split("/").slice(-1)[0]) {
      $scope.header = true;
    }else{
      $scope.header = false;
    }
    if ($sessionStorage.full_details) {
       $scope.data = {};
       $scope.full_details = $sessionStorage.full_details;
       if($location.absUrl().split('?')[0].split("/").slice(-1)[0] == 'fulldetails'){
        $scope.data.category = $sessionStorage.entry_details.category;
        $scope.data.location = $sessionStorage.entry_details.location;
       }
    }
  }
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
           $sessionStorage.full_details = $scope.full_details;
           $sessionStorage.entry_details = data;
           $location.path('/fulldetails');
           $scope.header = true;
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

    //indivigual industry details assigining to session storage

    $scope.detailsModel = function(details){
       $sessionStorage.indivigual_details = details;
      $location.path('/indivigual_details')
    }

    //indivigual industry details

    $scope.indivigual_det = function(){
       $scope.model_details = $sessionStorage.indivigual_details;
    }

    // login page

    $scope.login = function(email,password){
      login ={};
         console.log("username= "+email+" password= "+password);
        login.email = email;
        login.password = password;
        $http({
          method: 'GET',
          url: '/login',
          headers: {'Content-Type': 'application/x-www-form-urlencoded'},
          params : login
        }).then(function successCallback(response) {
          console.log("login data")
          console.log(response.data)
          if (!response.data.error) {
            $('.modal-backdrop').hide();
            $location.path("/admin_home")
          }else{
            $scope.login_error = response.data.error;
          }
         }, function errorCallback(response) {
          console.log("errorr")
          console.log(response) 
        }); 
    }
      $scope.initialize();


});