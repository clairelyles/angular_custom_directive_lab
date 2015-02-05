angular.module('like-button',[])
.directive('likeButton', function(){
    console.log('like directive loading')
    return {
        // <like-button>
        restrict: 'E',
        scope: { // can use @ (string) or = (processes stuff inside '' as js) // @? or =? indicates optional element
            startingValue: '=?'
        },
        controller: ['$scope', function($scope){
            $scope.likes = $scope.startingValue ? $scope.startingValue : 0
            $scope.increaseCount = function(){
                // alert('this like button works!');
                $scope.likes += 1;
            }
        }],
        replace: true,
        template:  '<button class="btn btn-primary" ng-click="increaseCount()">Like {{likes}}</button>'
    }
})
