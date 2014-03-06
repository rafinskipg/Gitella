var services = angular.module('services', [])
  .factory('commandsSrv', ['$http', '$q', function($http, $q) {

  var getCommands = function(){
    return $http.get('data/commands.json');
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
    localStorage.setItem("gitella", JSON.stringify(commandsSaved));
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
      save: save,
      getLocals: getLocals
    };
}]);
