var MarchMadness = angular.module('MarchMadnessApp', []);

MarchMadness.controller('MarchMadnessCtrl', ['$scope','$http','Bracket', function($scope, $http, Bracket){
  var run = Bracket.getBracketData("west","round1");
  run.then(function(data){
		$scope.westRound64 = data;
    console.log(data);
	 	});
  $scope.getIndex = function(){
    return 1;
  }
}]);

MarchMadness.service('Bracket',['$http','$q', function($http,$q){
  var eastRound1, eastRound2, westRound1, tempStorage;
  this.getBracketData =  function(region,round){
      var test = $http.get("scripts/bracket-data.json").then(function(response){
          switch (region) {
            case "west":
              tempStorage = response.data.west;
              break;
            default:
          }
          switch (round) {
            case 'round1':
              tempStorage = tempStorage.round1;
              break;
            default:
          }
          return tempStorage;
      });
        return test;
  }
}]);
