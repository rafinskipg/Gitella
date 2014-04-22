var services = angular.module('services', [])
  .factory('commandsSrv', ['$http', '$q', function($http, $q) {

  var getCommands = function(){
    var deferred = $q.defer();
    var locals = getLocals();

    $http.get('data/commands.json').then(function(response){
      var hasFoundSomeone = false;
      response.data.map(function(cheat){
          if(locals.indexOf(cheat.id) != -1){
            cheat.checked = true;
            hasFoundSomeone = true;
          } else{
            cheat.checked = false;
          }
      });
      if(locals.length > 0 && !hasFoundSomeone){
        locals = [];
        saveLocals(locals);
      }
      deferred.resolve({ commands: response.data, hasLocalStorage: locals.length > 0});
    }).catch(deferred.reject);

    return deferred.promise;
  };

  var save = function(command){
    var commandsSaved = getLocals(); 
    if(command.checked){
      commandsSaved.push(command.id);
    }else{
      itemsFound = commandsSaved.filter(function(com){
        return com != command.id;
      });
      console.log(itemsFound);
      commandsSaved = itemsFound;
    }
    saveLocals(commandsSaved);
    
  }
  var saveLocals = function(locals){
    localStorage.setItem("gitella", JSON.stringify(locals));
  }
  var getLocals = function(){
    var commands =  JSON.parse(localStorage.getItem("gitella"));
    if(!commands || !commands.length > 0){
      commands = [];
    }
    return commands;
  }

  return {
      getCommands: getCommands,
      save: save
    };
}]);
