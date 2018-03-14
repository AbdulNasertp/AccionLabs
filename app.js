
var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope, $http) {

  $http.get("http://jsonplaceholder.typicode.com/posts")
  .then(function(response) {
    console.log(response.data);
      $scope.rows = response.data;      
  });

  $scope.myAsc = false;
  $scope.pageSize = 25;
  $scope.orderByMe = function(x) {
    if($scope.myAsc)
        $scope.myOrderBy = x;
    else
       $scope.myOrderBy = "-" + x;
    
    $scope.myAsc = !$scope.myAsc;
    $scope.pageSize =  $scope.pageSize + 25;    
  }
});