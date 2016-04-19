var MarchMadness = angular.module('MarchMadnessApp', []);

MarchMadness.controller('MarchMadnessCtrl', ['$scope','$http','MarchMad', function($scope, $http, MarchMad){
    var MarchMadData = MarchMad.getBracketData();
    MarchMadData.then(function(data){
      $scope.Bracket = data;
    });
    $scope.getPosition = function(event){
      if ($scope.query !== ""){
        MarchMad.FindTeam(event, $scope.query);
      }
    };
}]);

MarchMadness.service('MarchMad',['$http', function($http){
  this.getBracketData =  function(){
      var data = $http.get("scripts/bracket-data.json").then(function(response){
          return response.data;
      });
      return data;
  };

  //Service to find team in DOM
  this.FindTeam = function(event, data){
    if (event.keyCode === 13){
      $(".team-name").each(function(){
        if ($(this).text().toLowerCase() === data.toLowerCase()){
          var pos = $(this).offset();
          $('html, body').animate({
            scrollTop: pos.top - 100
          }, 1000);
          return false;
        }
    });
    }
  };
}]);
