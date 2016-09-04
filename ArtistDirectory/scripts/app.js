
window.scrollTo(0, 1);
var myApp = angular.module("artistsDirectory",[
                                                "ngRoute",
                                                "artistsControllers"
                                               
                                               ]);



myApp.config(function($routeProvider){
	
	$routeProvider.
	when("/list", {
		
		templateUrl : "partials/list.html",
		controller : "ListController"
	}).
	when("/details/:itemID",{
		
		templateUrl : "partials/details.html",
		controller : "DetailsController"
		
	}).
	otherwise({
		
		redirectTo : "/list"
		
	});
	
	
});
