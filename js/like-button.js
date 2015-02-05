angular.module('like-button',[])
.directive('likeButton', function(){
    console.log('like directive loading')
    return {
        restrict: 'E',
        scope: {
            startingValue: '=?'
        },
        controller: ['$scope', function($scope){
            $scope.value = $scope.startingValue ? $scope.startingValue : 0
            $scope.increaseCount = function(){
                // alert('this like button works!');
                $scope.value += 1
            }

        }],
        replace: true,
        template:  '<button class="btn btn-primary" ng-click="increaseCount()">Like {{value}}</button>'
    }
})
