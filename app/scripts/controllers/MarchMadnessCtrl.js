var MarchMadness = angular.module('MarchMadnessApp', []);

MarchMadness.controller('MarchMadnessCtrl', ['$scope','$http','Bracket', function($scope, $http, Bracket){
  var westR64 = Bracket.getBracketData("west","round1");
  westR64.then(function(data){
		$scope.westRound64 = data;
	});
  var eastR64 = Bracket.getBracketData("east","round1");
  eastR64.then(function(data){
		$scope.eastRound64 = data;
	});
  var southR64 = Bracket.getBracketData("south","round1");
  southR64.then(function(data){
		$scope.southRound64 = data;
	});
  var midwestR64 = Bracket.getBracketData("midwest","round1");
  midwestR64.then(function(data){
		$scope.midwestRound64 = data;
	});
}]);

MarchMadness.service('Bracket',['$http','$q', function($http,$q){
  var eastRound1, eastRound2, westRound1,southRound1, southRound2, eastRound1,
   tempStorage;
  this.getBracketData =  function(region,round){
      var test = $http.get("scripts/bracket-data.json").then(function(response){
          switch (region) {
            case "west":
              tempStorage = response.data.west;
              break;
            case "east":
              tempStorage = response.data.east;
              break;
            case "south":
              tempStorage = response.data.south;
              break;
            case "midwest":
              tempStorage = response.data.midwest;
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
