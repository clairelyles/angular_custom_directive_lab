angular.module('current-weather', [])
.directive('weather', function(){
    console.log('weather directive loading')
    return {
        restrict: 'E',
        scope: {
            location: '@'
        },
        controller: ['$scope','$http','$element', function($scope,$http,$element){

            var req = {
                url: "http://api.openweathermap.org/data/2.5/weather",
                params: {
                    q: $scope.location,
                }
            }

            $http(req).success(function(data) {
                $scope.name = $scope.location
                $scope.temp = Math.floor((((data.main.temp)-273.15) * 1.8000) + 32)
                $scope.desc = data.weather[0].main.toLowerCase()
            })
        }],
        replace: true,
        template: '<div>The weather in {{name}} is {{temp}}&deg; with {{desc}}</div>'
    }
})
