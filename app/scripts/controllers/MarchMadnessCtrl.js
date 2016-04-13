var MarchMadness = angular.module('MarchMadnessApp', []);

MarchMadness.controller('MarchMadnessCtrl', ['$scope','$http','MarchMad', function($scope, $http, MarchMad){
    var MarchMadData = MarchMad.getBracketData();
    MarchMadData.then(function(data){
      $scope.Bracket = data;
    });
    $scope.getPosition = function(){
      if ($scope.query !== ""){
      $(document).ready(function(){
        $(".team-name").each(function(){
          if ($(this).text().toLowerCase() === $scope.query.toLowerCase()){
            var pos = $(this).offset();
            console.log(pos.top);
            $('html, body').animate({
              scrollTop: pos.top - 100
            }, 1000);
            return false;
          }
        });
      });
        /*
        $('html, body').animate({
          scrollTop: 300
        }, 1000);
        return event.preventDefault();
        */
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
}]);
