var controllers = angular.module("controllers",[]);

controllers.controller("mainController",function($scope,INC_CONVERSION,HAL_CONVERSION,CFL_CONVERSION,LED_CONVERSION){

	$scope.lumens = [375,600,900,1125,1600];
	$scope.current_lumens = 600;
	$scope.current_cost = 13;
	$scope.current_hours = 4;
	$scope.total_days = 365;
	

	
	$scope.calculate = function(){
		
		$scope.inc_wattage = ($scope.current_lumens * INC_CONVERSION).toFixed(1);
		$scope.hal_wattage = ($scope.current_lumens * HAL_CONVERSION).toFixed(1);
		$scope.cfl_wattage = ($scope.current_lumens * CFL_CONVERSION).toFixed(1);
		$scope.led_wattage = ($scope.current_lumens * LED_CONVERSION).toFixed(1);
		
		if($scope.current_hours > 24 ) { $scope.current_hours = 24;}
		
		var total_hours = $scope.total_days * $scope.current_hours;
		var cost = $scope.current_cost / 100;
		
		
		$scope.inc_cost = ((($scope.inc_wattage * total_hours) / 1000 ) * cost).toFixed(2);
		$scope.hal_cost = ((($scope.hal_wattage * total_hours) / 1000 ) * cost).toFixed(2);
		$scope.cfl_cost = ((($scope.cfl_wattage * total_hours) / 1000 ) * cost).toFixed(2);
		$scope.led_cost = ((($scope.led_wattage * total_hours) / 1000 ) * cost).toFixed(2);
		

	};
	
	$scope.calculate();
	
});





var app = angular.module("myCalculator",["controllers"]);


app.constant("INC_CONVERSION",0.0625);
app.constant("HAL_CONVERSION",0.0450);
app.constant("CFL_CONVERSION",0.0146);
app.constant("LED_CONVERSION",0.0125);


app.run(function($rootScope){
	
	$rootScope.app = "Energy Consumption Calculator";
	
});





