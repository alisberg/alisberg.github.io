'use strict';

angular.module('jaimino')
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.menu = [
    {
      'title': 'About',
      'link': '#about-me',
      'scroll': 'about-me'
    },
    {
      'title': 'Portfolio',
      'link': '#portfolio',
      'scroll': 'portfolio'
    },
    {
      'title': 'Something',
      'link': '#something',
      'scroll': 'something'
    },
    {
      'title': 'Contact',
      'link': '#contact',
      'scroll': 'contact'
    }
    ];

    $scope.isCollapsed = true;

    $scope.isActive = function(route) {
      return route === "#" + $location.path();
    };

    function cutUrl(str) {
      var matched = str.match(/([^/]*\/){2}/);
      return matched ? matched[0] : str/* or null if you wish */;
    }

    $scope.isDropdownActive = function(route) {
      return route === "#" + cutUrl($location.path());
    };

  });
