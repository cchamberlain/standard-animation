System.registerModule("es6/standard-animation.js", [], function() {
  "use strict";
  var __moduleName = "es6/standard-animation.js";
  angular.module('standardAnimation', ['ngAnimate', 'standardControls']).factory('d3', ['$window', function($window) {
    return $window.d3;
  }]).directive('standardFade', function() {
    return {
      restrict: 'A',
      scope: {sChain: '&'},
      controller: ['$scope', '$window', '$animate', 'd3', function($scope, $window, $animate, d3) {
        $scope.start = function() {
          $scope.sChain();
        };
      }],
      link: function(scope, element) {
        element.bind('click', function() {
          scope.$apply(function() {
            scope.start();
          });
        });
      }
    };
  });
  return {};
});
System.get("es6/standard-animation.js" + '');
