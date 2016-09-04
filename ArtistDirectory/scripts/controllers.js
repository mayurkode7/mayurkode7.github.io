var artistsControllers = angular.module ("artistsControllers",[]);

artistsControllers.controller("ListController",function($scope,$http){
	
	
	$http.get("data.json").success(function(data){
		

		$scope.artists = data;
		$scope.artistsOrder = "name";
		
	});
		
});

artistsControllers.controller ("DetailsController",function($scope,$http,$routeParams){
	
	$http.get("data.json").success(function(data){
		

		$scope.artists = data;
		$scope.whichItem = $routeParams.itemID;
		
	});
	
	
	
});