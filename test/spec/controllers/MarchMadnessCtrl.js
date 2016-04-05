//https://docs.angularjs.org/guide/unit-testing
// /http://jasmine.github.io/2.4/introduction.html
describe('MarchMadnessCtrl', function() {
  beforeEach(module('MarchMadnessApp'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
  }));

  describe('Bracket.westRound64', function() {
    it('contains data from bracket-data.json that matches region and round', function() {
      var Bracket = {};
      var $scope = {};
      var controller = $controller('MarchMadnessCtrl', { Bracket: Bracket, $scope:$scope });
      var test = Bracket.getBracketData("west", "round1");
      expect($scope.westRound64).toEqual(test);
    });
  });
});
