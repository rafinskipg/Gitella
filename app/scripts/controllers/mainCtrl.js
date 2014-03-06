require('scrollReveal');

var controllers = angular.module('controllers',   [])
.controller('mainCtrl', [
  '$scope', 'commandsSrv',
  function($scope, commandsSrv ) {
    $scope.isLoaded = false;
    $scope.filters = {
      level: ''
    };

    commandsSrv.getCommands().then(function(response){
      $scope.gitCheats = response.data;

      $scope.gitCheats = $scope.gitCheats.map(function(cheat){
        cheat.scrollReveal = "enter bottom over 1s and move 100px";
        return cheat;
      });
      var locals = commandsSrv.getLocals();
      $scope.gitCheats.map(function(cheat){
          if(locals.indexOf(cheat.id) != -1){
            cheat.checked = true;
          } else{
            cheat.checked = false;
          }
      });
    });

    $scope.isVisible = function(){
      console.log('eee');return true;
    }

    $scope.setFilter = function(level, checkedOnly){
      $scope.filters = {
        level : level
      };
      if(checkedOnly){
        $scope.filters.checked = true;
      }
    }

    $scope.$on('ngRepeatFinished', function(ngRepeatFinishedEvent) {
      if(typeof(window.scrollReveal == 'function')){
        window.scrollSuperReveal = new scrollReveal({reset: true});
      }
      $scope.isLoaded = true;
    });


    $scope.mark = function(command){
      command.checked = !command.checked;
      commandsSrv.save(command);
    };
}]);

