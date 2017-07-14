'use strict';

describe('Controller: CitycontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('selectelApp'));

  var CitycontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CitycontrollerCtrl = $controller('CitycontrollerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CitycontrollerCtrl.awesomeThings.length).toBe(3);
  });
});
