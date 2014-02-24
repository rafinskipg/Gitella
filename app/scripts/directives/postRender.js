angular.module('directives',  [])
  .directive('onFinishRender', function ($timeout) {
    return {
        restrict: 'AE',
        link: function (scope, element, attr) {
            if (scope.$last === true) {
                $timeout(function () {
                    scope.$emit('ngRepeatFinished');
                });
            }
        }
    }
  });