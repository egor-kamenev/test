'use strict';

describe('Directive: buildWidget', function () {

  // load the directive's module
  beforeEach(module('crossoverApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<build-widget></build-widget>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the buildWidget directive');
  }));
});
