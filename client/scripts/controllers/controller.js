myApp.controller('BaseController', ["$scope", "DataService", function($scope, DataService){

    $scope.dataService = DataService;

    if($scope.dataService.peopleData() === undefined){
        $scope.dataService.retrieveData();
    }

    console.log("Base Async: " , $scope.dataService.peopleData());
}]);

myApp.controller('AnotherController', ["$scope", "DataService", function($scope, DataService){

    $scope.dataService = DataService;

    if($scope.dataService.peopleData() === undefined){
        $scope.dataService.retrieveData();
    }

    console.log("Another Async: " , $scope.dataService.peopleData());
}]);

