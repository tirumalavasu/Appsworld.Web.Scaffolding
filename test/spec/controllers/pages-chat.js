'use strict';

describe('Controller: PagesChatCtrl', function () {

  // load the controller's module
  beforeEach(module('appsworld'));

  var PagesChatCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PagesChatCtrl = $controller('PagesChatCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});