// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/app.html",
  })

  .state('app.intro', {
    url: "/intro",
    views: {
      'tab-intro': {
        templateUrl: "templates/intro.html",
        controller: "IntroCtrl"
      }
    }
  })

  .state('app.menu', {
    url: "/menu",
    views: {
      'tab-menu': {
        templateUrl: "templates/menu.html",
        controller: "MenuCtrl"
      }
    }
  })


  

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/intro');
});