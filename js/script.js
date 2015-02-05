var todoApp = angular.module('TodoApp',['ngAnimate','like-button','current-weather']);

// good to add function to make sure the app is running properly
todoApp.run(function(){
  console.log('App started.');
});

// $scope needs to be passed through the function as a param
todoApp.controller('TodoList',['$scope',function($scope){
  // console.log('Controller working.');
  $scope.items = [];
  $scope.items.push({done:false,name:"go running"});
  $scope.items.push({done:false,name:"do dishes"});
  $scope.items.push({done:false,name:"eat salad"});
  $scope.weatherCities = [];
  $scope.newItem = '';
  console.log($scope.items);

  $scope.removeItem = function(itemIndex) {
    $scope.items.splice(itemIndex,1);
  };

  $scope.getData = function(){
    console.log($scope.items);
  }

  $scope.addItem = function(){
    // input field was called ng-model 'newItem', therefore, we call it by name here
    $scope.items.push({done:false,name:$scope.newItem});
    $scope.newItem = '';
  }

  $scope.move = function(i,dir){
    //  i is index and dir is direction of movement
    var targetIndex = i + dir;
    if(targetIndex < 0 || targetIndex >= $scope.items.length) {
      alert('invalid move');
      return;
    }
    var tempItem = $scope.items[i];
    $scope.items[i] = $scope.items[targetIndex];
    $scope.items[targetIndex] = tempItem;
  }


}])