(function() {
    var customersFactory = function() {
        var customers = [
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
}());