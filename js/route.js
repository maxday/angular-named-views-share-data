demoApp.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/demo');

  $stateProvider

    .state('demo', {
    url: '/demo',
    views: {
      'main@': {
        templateUrl: 'MainTemplate.html'
      },

      'header@demo': {

        templateUrl: 'header/HeaderTemplate.html',
        controller: 'HeaderController',
        controllerAs: 'headerController'

      },

      'menu@demo': {
        
        templateUrl: 'menu/MenuTemplate.html',
        controller: 'MenuController',
        controllerAs: 'menuController'
      }
    }

  });

});
