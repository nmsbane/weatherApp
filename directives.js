// Directives
weatherApp.directive('weatherReport', function(){
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'directives/weatherReport.html',
        scope: {
            weatherDay: "=", // passing the object
            dateFormat: "@", // pass the string
            convertToStandard: "&", // pass the function
            convertToDate: "&"
        }
    }
})