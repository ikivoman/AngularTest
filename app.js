var app = angular.module('enApp', []);

app.model = [{name: "sds"}, {name: "sdf"}];

app.controller('appController', ['$scope', function($scope){
	$scope.model = app.model;
	$scope.greet = function(){return "Greet"};
}]);

app.directive('tomte', function(){
  return {
  	restrict: 'E',
    templateUrl: "tomteItem.html",
    scope: {},
    controller: ['$scope', function($scope) {
      $scope.getItem = function(index){
      	return app.model[index].name;
      };
      $scope.greet = function(){return "Gröt"};
    }],
    controllerAs: "tomteCtrl"
  }}        
  )
