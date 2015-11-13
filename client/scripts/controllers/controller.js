myApp.controller('BaseController', ["$scope", "DataService", function($scope, DataService){
    $scope.people = [];
    $scope.dataService = DataService;

    if($scope.dataService.peopleData() === undefined){
        $scope.dataService.retrieveData();
    }

    $scope.people = $scope.dataService.peopleData();

    console.log("Base Async: " , $scope.dataService.peopleData());
}]);

myApp.controller('AnotherController', ["$scope", "DataService", function($scope, DataService){
    $scope.people = [];

    $scope.dataService = DataService;

    if($scope.dataService.peopleData() === undefined){
        $scope.dataService.retrieveData();
    }

    $scope.people = $scope.dataService.peopleData();

    console.log("Another Async: " , $scope.dataService.peopleData());
}]);

