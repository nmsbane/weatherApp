//controllers
weatherApp.controller('homeCtrl', ['$scope', '$http', '$resource', '$localStorage',  'cityService', function($scope, $http, $resource,  $localStorage, cityService) {
    $scope.city = $localStorage.city || cityService.city;
    $scope.$watch('city', function() {
        cityService.city = $scope.city;
        $localStorage.city = $scope.city;
    });
    
}]);

weatherApp.controller('forecastCtrl', ['$scope', '$resource','$routeParams', '$localStorage', 'cityService', function($scope, $resource, $routeParams, $localStorage, cityService) {
    $scope.city = $localStorage.city || cityService.city;
    $scope.days = $routeParams.days || '2';
    $scope.weatherApi = $resource("http://api.openweathermap.org/data/2.5/forecast/daily", {
        callback: "JSON_CALLBACK" }, { get: { method: "JSONP" } });
    
    $scope.weatherResult = $scope.weatherApi.get({
        q: $scope.city,
        cnt: $scope.days,
        appid:'7195fc69e3799974d0fd0c3779210ce9'
    });
    
    $scope.convertToCelcius = function(degK) {
        return Math.round(degK - 273.15);
    }
    
    $scope.convertToDate = function(dt) {
        return new Date(dt*1000);
    }
}]);
