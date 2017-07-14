'use strict';

/**
 * @ngdoc function
 * @name selectelApp.controller:MainctrlCtrl
 * @description
 * # MainctrlCtrl
 * Controller of the selectelApp
 */
angular.module('selectelApp')
    .controller('cityCtrl', function ($http) {
        var ctrl = this;
        ctrl.cities = [];
        ctrl.currCity = 'Санкт-Петербург';
        ctrl.tempr = 0;
        ctrl.press = 0;
        ctrl.weatherStatus = 0;
        ctrl.getTemperature = function(){
            if(ctrl.currCity === ''){
                console.log('no city');
            }
            else{
                console.log('have city ' + ctrl.currCity);
                //http://api.openweathermap.org/data/2.5/weather?q=Moscow&appid=4970776c786cba5aadf2d75d2eda1337
                var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + ctrl.currCity + '&APPID=4970776c786cba5aadf2d75d2eda1337&units=metric';
                
                $http.get(url)
                .then(function(response){
                    if(response.status === 200 && response.statusText === 'OK'){
                        console.log(response);
                        ctrl.tempr = response.data.main.temp;
                        ctrl.press = response.data.main.pressure * 0.75;
                        if(response.data.weather[0].main === 'Rain'){
                            ctrl.weatherStatus = 1;
                        }
                        else if(response.data.weather[0].main === 'Snow' || ctrl.tempr < 0){
                            ctrl.weatherStatus = 2;
                        }
                        else if(response.data.weather[0].main === 'Clear' || ctrl.tempr > 25){
                            ctrl.weatherStatus = 3;
                        }
                        else {
                            ctrl.weatherStatus = 0;
                        }
                    }
                });
            }
        };
    ctrl.getTemperature();
        
    });