describe('MarchMadService', function () {
  var MarchMad, $rootScope, httpBackend;

  beforeEach(function (){
    // load the module.
    module('MarchMadnessApp');

    // get your service, also get $httpBackend
    // $httpBackend will be a mock, thanks to angular-mocks.js
    inject(function($httpBackend, _MarchMad_, _$rootScope_) {
      MarchMad = _MarchMad_;
      httpBackend = $httpBackend;
      $rootScope = _$rootScope_;
    });
  });

  // make sure no expectations were missed in your tests.
  // (e.g. expectGET or expectPOST)
  afterEach(function() {
    httpBackend.verifyNoOutstandingExpectation();
    httpBackend.verifyNoOutstandingRequest();
  });

  it('should return core data and ensure JSON is set proper;y', function (){
    // data from bracket-data.json
    var returnData = {
      "final4" :{
        "game1":{
          "teamOne": "Villanova",
          "teamTwo": "Oklahoma",
          "teamOneRank": 2,
          "teamTwoRank": 2,
          "teamOneScore": 95,
          "teamTwoScore": 51,
          "winner": 1,
          "stage": "Final 4"
        },
        "game2": {
          "teamOne": "UNC",
          "teamTwo": "Syracuse",
          "teamOneRank": 1,
          "teamTwoRank": 10,
          "teamOneScore": 83,
          "teamTwoScore": 66,
          "winner": 1,
          "stage": "Final 4"
        },
        "champ": {
          "teamOne": "Villanova",
          "teamTwo": "UNC",
          "teamOneRank": 2,
          "teamTwoRank": 1,
          "teamOneScore": 77,
          "teamTwoScore": 74,
          "winner": 1,
          "stage": "Championship"

        }
      }
    };

    // expectGET to make sure this is called once.
    httpBackend.expectGET('scripts/bracket-data.json').respond(returnData);

    // make the call.
    var returnedPromise = MarchMad.getBracketData();

    // set up a handler for the response, that will put the result
    // into a variable in this scope for you to test.
    var result;
    returnedPromise.then(function(response) {
      $rootScope.Bracket = response;
      $rootScope.Bracket.final4.game1 = response.final4.game1;
    });

    // flush the backend to "execute" the request to do the expectedGET assertion.
    httpBackend.flush();

    // check the result.
    // (after Angular 1.2.5: be sure to use `toEqual` and not `toBe`
    // as the object will be a copy and not the same instance.)
    expect($rootScope.Bracket).toEqual(returnData);
  });
});
