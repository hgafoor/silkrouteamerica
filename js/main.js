(function(){
 var sraapp = angular.module('sraApp', ['ngRoute']);
 // configure our routes


   sraapp.config(function($routeProvider) {
       $routeProvider
           // route for the home page
           .when('/', {
               templateUrl : 'templates/home.html',
               controller  : 'mainController'
           })

           // route for the about page
           .when('/about', {
               templateUrl : 'templates/about.html',
               controller  : 'aboutController'
           })

           // route for the contact page
           .when('/contact', {
               templateUrl : 'templates/contacts.html',
               controller  : 'contactController'
           })

           // route for the women clothing page
           .when('/women', {
               templateUrl : 'templates/women.html',
               controller  : 'ProductsController'
           })
           // route for the men clothing page
           .when('/men', {
               templateUrl : 'templates/men.html',
               controller  : 'ProductsController'
           })
           // route for the women clothing page
           .when('/kids', {
               templateUrl : 'templates/kids.html',
               controller  : 'ProductsController'
           })
           // route for the women clothing page
           .when('/accessories', {
               templateUrl : 'templates/accessories.html',
               controller  : 'ProductsController'
           })
           // route for the women clothing page
           .when('/clearance', {
               templateUrl : 'templates/clearance.html',
               controller  : 'ProductsController'
           })
           .when('/:productId', {
               templateUrl : 'templates/productDetails.html',
               controller  : 'ProductDetailsCtrl'

           });


   });

   // create the controller and inject Angular's $scope
    sraapp.controller('mainController', function($scope, $http, $location) {
        // create a message to dispdlay in our view
        //$scope.message = 'Everyone come and see how good I look!';

        $http.get('data/sample.json').success(function(data) {
          $scope.products = data;
          console.log(data);

        });

    });

    sraapp.controller('aboutController', function($scope) {
        $scope.message = 'about controller';

    });

    sraapp.controller('contactController', function($scope) {
        $scope.message = 'contact form controller';

    });

    sraapp.controller('ProductsController', function($scope, $http) {
         // create a message to dispdlay in our view
         //$scope.message = 'Everyone come and see how good I look!';


         $http.get('data/sample.json').success(function(data) {
           $scope.products = data;
           console.log(data);

  });

  });

  sraapp.controller('ProductDetailsCtrl', function ($scope, $routeParams, $http){
         $scope.name = $routeParams.productId;

         $http.get('data/sample.json').success(function(data) {
           $scope.product = data.filter(function(entry){
             return entry.id == $scope.name;
           })[0];
           console.log($routeParams);
         });
 });

})();
