app.controller('adminControl', function($scope,$http,$location, $sessionStorage) {

  $scope.initilize = function(){
    $scope.add_location = true;
    $scope.add_category = false;
    $scope.add_industry = false;
    $scope.loc ={};
   }

  $scope.splitLoaction = function(place){
     var place = place.split(',');
     if (place.length == 3) {
      $scope.loc.city = place[0];
      $scope.loc.state = place[1];
      $scope.loc.country = place[2];
    } if (place.length == 2) {
      $scope.loc.city = place[0];
      $scope.loc.state = place[0];
      $scope.loc.country = place[1];
    }if(place.length > 3){
      $scope.loc.city = place[place.length-3];
      $scope.loc.state = place[place.length-2];
      $scope.loc.country = place[place.length-1];
    }
  }

  $scope.swithToLocation = function(){
    $scope.add_location = true;
    $scope.add_category = false;
    $scope.add_industry = false;
  }
  $scope.swithToCategory = function(){
    $scope.add_location = false;
    $scope.add_category = true;
    $scope.add_industry = false;
  }
  $scope.swithToIndustry = function(){
    $scope.add_location = false;
    $scope.add_category = false;
    $scope.add_industry = true;
  }
  $scope.saveLocation = function(loc){
     $scope.success_message = false;
     $scope.error_message = false;
    if (loc.city && loc.state && loc.country) {
      data = {};
      data.name = loc.city;
      data.state = loc.state;
      data.country = loc.country;
      $http({
        method: 'GET',
        url: '/savelocation',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        params : data
        }).then(function successCallback(response) {
            $scope.loc ='';
             if (response.data.success) {
             $scope.success_message = true;
             $scope.message = response.data.success;
           }else{
             $scope.error_message = true;
             $scope.message = response.data.error;
          }
         }, function errorCallback(response) {
          console.log(response) 
        });
    }
  }
  $scope.addCategory = function(category){
     if (category) {
      data={};
      data.name = category.cat;
           $http({
        method: 'GET',
        url: '/savecategory',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        params : data
        }).then(function successCallback(response) {
          category.cat='';
            if (response.data.success) {
             $scope.success_message = true;
             $scope.message = response.data.success;
           }else{
             $scope.error_message = true;
             $scope.message = response.data.error;
          }
         }, function errorCallback(response) {
          console.log(response) 
        });
    }
  }

  $scope.initilize();

});