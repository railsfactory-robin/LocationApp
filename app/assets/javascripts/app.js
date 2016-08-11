var app = angular.module('locationApp', ['ui.bootstrap']);
	app.directive('autoComplete', function($timeout) {
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
	});
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