var app = angular.module("portfolio", ["ngRoute"])

    .config(['$routeProvider',function($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl : "/pages/index.html",
                controller: 'HomeCtrl'
            })
            .when("/about", {
                templateUrl : "/pages/about.html",
                controller: 'AboutCtrl'
            })
            .when("/contact", {
                templateUrl : "/pages/contact.html",
                controller: 'ContactCtrl'
            })
            .when("/services", {
                templateUrl : "/pages/services.html",
                controller: 'ServicesCtrl'
            })
            .when("/works", {
                templateUrl : "/pages/works.html",
                controller: 'WorksCtrl'
            }).
            otherwise({redirectTo: '/'})
    }])
    .controller("HomeCtrl", [function ($scope) {
        console.log("This is Home");
    }])
