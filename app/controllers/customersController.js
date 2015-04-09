//Option 1
/*
app.controller('CustomersController', function($scope) {
    $scope.sortBy = 'name';
    $scope.reverse = false;   
    $scope.customers =[{name:'Olmas', city:'San Francisco', joined:'2000-02-14', order:'9.99'}, {name:'Guli', city:'San Francisco', joined:'2003-02-14', order:'15.99'}, {name:'Samiha', city:'Tashkent', joined:'2011-02-14', order:'45.99'}, {name:'Anisa', city:'Samarkand', joined:'2014-02-14', order:'109.99'}];
    $scope.doSort = function(propName) {
         $scope.sortBy = propName;
         $scope.reverse = !$scope.reverse;
    };
});*/

//Option 2
/*(function() {
    angular.module('customersApp').controller('CustomersController', function($scope) {
        $scope.sortBy = 'name';
        $scope.reverse = false;   
        $scope.customers =[{name:'Olmas', city:'San Francisco', joined:'2000-02-14', order:'9.99'}, {name:'Guli', city:'San Francisco', joined:'2003-02-14', order:'15.99'}, {name:'Samiha', city:'Tashkent', joined:'2011-02-14', order:'45.99'}, {name:'Anisa', city:'Samarkand', joined:'2014-02-14', order:'109.99'}];
        $scope.doSort = function(propName) {
             $scope.sortBy = propName;
             $scope.reverse = !$scope.reverse;
        };
    });
}());*/

//Option 3

(function () {
    var CustomersController = function($scope) {
        $scope.sortBy = 'name';
        $scope.reverse = false; 
  
        $scope.customers =[
            {
                id: 1,
                name:'Olmas', 
                city:'San Francisco', 
                joined:'2000-02-14', 
                orderTotal:9.99,
                orders: [
                {
                   id: 1,
                   product: 'Tennis racket',
                   total: 9.99
                }
                ]         
            }, 
            {
                id: 2,
                name:'Guli', 
                city:'Samarkand', 
                joined:'2005-05-14', 
                orderTotal:29.99,
                orders: [
                {
                   id: 2,
                   product: 'Face cream',
                   total: 9.99
                },
                {
                   id: 2,
                   product: 'Dress',
                   total: 20.00
                }
                ]         
            },
            {
                id: 3,
                name:'Samiha', 
                city:'Tashkent', 
                joined:'2011-12-14', 
                orderTotal:129.99,
                orders: [
                {
                   id: 3,
                   product: 'Crib',
                   total: 49.99
                },
                {
                   id: 3,
                   product: 'Dress',
                   total: 20.00
                },
                {
                   id: 3,
                   product: 'Stroller',
                   total: 60.00
                }
                ]
                        
            },
            {
                id: 4,
                name:'Anisa', 
                city:'Tashkent', 
                joined:'2013-08-14', 
                orderTotal:109.99,
                orders: [
                {
                   id: 4,
                   product: 'Baby swing',
                   total: 39.99
                },
                {
                   id: 4,
                   product: 'Shoes',
                   total: 30.00
                },
                {
                   id: 4,
                   product: 'Diapers',
                   total: 40.00
                }
                ]         
            }
 ];
        $scope.doSort = function(propName) {
             $scope.sortBy = propName;
             $scope.reverse = !$scope.reverse;
        };
    };
    
    CustomersController.$inject = ['$scope'];
    angular.module('customersApp').controller('CustomersController', CustomersController);
}());