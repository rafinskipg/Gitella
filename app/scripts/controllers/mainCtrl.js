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
      }, {
        "title": "Create a remote branch from a local one",
        "commands": [
          "git push origin LOCAL_BRANCH:REMOTE_BRANCH"
        ]
      }, {
        "title": "Delete a remote branch",
        "commands": [
          "git push origin :REMOTE_BRANCH"
        ]
      }, {
        "title": "delete / force delete local branch",
        "commands": [
          "git branch -d LOCAL_BRANCH",
          "git branch -D LOCAL_BRANCH"
        ]
      }, {
        "title": "Make an interactive rebase to join, rewrite, reorder commits",
        "commands": [
          "git rebase -i BRANCH/COMMIT"
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

