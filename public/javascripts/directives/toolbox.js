angular.module('components', [])

  /*
  .directive('toolbox', function() {
    return {
      restrict: 'E',
      scope: {title: '@'},
      transclude: true,
      templateUrl:'templates/toolbox.html',
      replace: true
    };
    */

      .directive('toolbox', function() {
    return {
      restrict: 'E',
      scope: {title: '@'},
      transclude: true,
      template:
        "<div class='toolbox drag resize ui-widget-content'>" +
          "<div class='toolbox-title ui-widget-header'>{{title}}</div>" +
          "<div class='toolbox-body' ng-transclude></div>" +
        "</div>",
      replace: true
    };

  });
