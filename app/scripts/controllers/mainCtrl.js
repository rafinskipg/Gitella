require('scrollReveal');

var controllers = angular.module('controllers',  [])
.controller('mainCtrl', [
  '$scope', 
  function($scope) {
    $scope.isLoaded = false;
    $scope.gitCheats = [
      {
        "title": "History",
        "commands": [
          "git log"
        ]
      },
      {
        "title": "List of remote repositories",
        "commands": [
          "git remote -v"
        ]
      },
      {
        "title": "Pull changes from original repo to fork",
        "commands": [
          "git remote add superOrigin https://github.com/other-guy/other-guys-repo.git ", 
          "git pull superOrigin superOriginBranchName"
        ]
      }
    ];

    $scope.gitCheats = $scope.gitCheats.map(function(cheat){
      cheat.scrollReveal = "enter bottom over 1s and move 100px";
      return cheat;
    });
    $scope.$on('ngRepeatFinished', function(ngRepeatFinishedEvent) {
      if(typeof(window.scrollReveal == 'function')){
        window.scrollSuperReveal = new scrollReveal({reset: true});
      }
      $scope.isLoaded = true;
    });
}]);