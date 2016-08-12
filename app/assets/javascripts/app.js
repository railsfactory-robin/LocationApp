var app = angular.module('locationApp', ["ngRoute"]);
app.config(function($routeProvider,$locationProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "home/content.html.erb"
    })
    .when("/fulldetails", {
        templateUrl : "home/fulldetails.html.erb"
    })
    .when("/green", {
        templateUrl : "green.htm"
    })
    .when("/blue", {
        templateUrl : "blue.htm"
    })
    .otherwise({
        templateUrl : "/asa"
    });
    // use the HTML5 History API
    $locationProvider.html5Mode({
	  enabled: true,
	  requireBase: false
	});
});
	/*app.directive('autoComplete', function($timeout) {
	    return function(scope, iElement, iAttrs) {
	            iElement.autocomplete({
	                source: scope[iAttrs.uiItems],
	                select: function() {
	                    $timeout(function() {
	                      iElement.trigger('input');
	                    }, 0);
	                }
	            });
	    };
	});*/
	/*app.service('location',function($http,$q){

 		this.getLocations = function(){
 			var deferred = $q.defer();
			$http({
		 	 method: 'GET',
		  	 url: '/get_location_list'
			 }).then(function successCallback(response) {
			 	console.log(response.data)
			 	 deferred.resolve(response.data);
  		 	 }, function errorCallback(response) {
		  		console.log(response) 
			 });
			  return deferred.promise;			
		}
	});
*/

/*app.factory("States", function(){
  var states = ["Wyoming"];
  
  return states;
  
});*/