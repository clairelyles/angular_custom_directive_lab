angular.module('current-weather', [])
.directive('weather', function(){
    console.log('weather directive loading')
    return {
        restrict: 'E',

        scope: {
            location: '@'
        },
        controller: ['$scope','$http','$element', function($scope,$http,$element){
            $scope.wTemp=false;
            $scope.$watch('location',function(){
                if(!$scope.location) return;
                var req = {
                    url: "http://api.openweathermap.org/data/2.5/weather",
                    params: { // builds the URL for us
                        q: $scope.location,
                    }
                }

                $http(req).success(function(data) {
                    $scope.temp = Math.floor((((data.main.temp)-273.15) * 1.8000) + 32)
                    $scope.desc = data.weather[0].main.toLowerCase()
                })
            })
        }],
        replace: true,
        template: '<div class="well"><span ng-hide="wTemp"></span><span ng-show="wTemp"></span>The weather in {{location}} is {{temp}}&deg;F with {{desc}}</div>'
    }
})
