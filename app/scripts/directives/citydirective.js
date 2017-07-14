'use strict';

/**
 * @ngdoc directive
 * @name selectelApp.directive:mainDirective
 * @description
 * # mainDirective
 */
angular.module('selectelApp')
  .directive('cityDirective', function () {
    return {
      templateUrl: 'views/cityview.html',
      restrict: 'E',
      controller: 'cityCtrl',
      controllerAs: 'ctrl'
    };
  });
