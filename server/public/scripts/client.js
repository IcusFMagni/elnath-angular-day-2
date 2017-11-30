var app = angular.module('RestaurantApp', [])

app.controller('FoodController', ['$http', function ($http){
    console.log('food controller has been loaded')
    var self = this;
    self.foodArray = []
    self.newFood = {is_hot: false}
    self.getFood = function () {
        $http({
            method: 'GET',
            url: '/food',
        }).then (function (response){
            console.log('response', response)
            self.foodArray = response.data
        })
    }

    self.addFood = function (newFood){
        $http({
            method: 'POST',
            url: '/food',
            data: newFood
        }).then (function (response){
            console.log(response, "is the response")
            self.newFood = {is_hot: false}
            self.getFood();
        })
    }

    self.getFood()

}]);