require('scrollReveal');

var controllers = angular.module('controllers',   [])
.controller('mainCtrl', [
  '$scope', 'commandsSrv',
  function($scope, commandsSrv ) {
    $scope.isLoaded = false;

    $scope.filters = {
      level: ''
    };
    $scope.images = [
      {
        url: 'images/badge_all_.png',
        filter: ''
      },
      {
        url: 'images/badge_rookie_.png',
        filter: 'rookie'
      },
      {
        url: 'images/badge_adept_.png',
        filter: 'adept'
      },
      {
        url: 'images/badge_warrior_.png',
        filter: 'warrior'
      },
      {
        url: 'images/badge_veteran_.png',
        filter: 'veteran'
      },
      {
        url: 'images/badge_latte_.png',
        filter: 'latte'
      }
    ];

    commandsSrv.getCommands().then(function(res){
      if(res.hasLocalStorage){
        $scope.setFilter('latte');
      }else{
        $scope.setFilter('');
      }
      $scope.gitCheats = res.commands.map(function(cheat){
        cheat.scrollReveal = "enter bottom over 1s and move 100px";
        return cheat;
      });
    });

    $scope.setFilter = function(filter){
      $scope.active = filter;
      var level = filter === 'latte' ? '' : filter;

      $scope.filters = {
        level : level
      };
      
      if(filter === 'latte'){
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

