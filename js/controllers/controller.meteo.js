'use strict';

angular
  .module('meteo')
  .controller('MeteoController', MeteoController);

function MeteoController($http) {
  var vm = this;

  vm.refreshWeather = function (city){
    $http.get('http://api.openweathermap.org/data/2.5/weather?q='+city+'&APPID=093a59774aaa3c40102cbca0c0029891&units=metric')
      .success(function(weather){
        var infosDate = formattedDate();
        var temp = Math.round(weather.main.temp);
        var description = weather.weather[0].description.toUpperCase();
        var tempMin = Math.round(weather.main.temp_min);
        var tempMax = Math.round(weather.main.temp_max);
        var wind = Math.round(weather.wind.speed);
        var humidity = Math.round(weather.main.humidity);
        var city = weather.name;
        var country = weather.sys.country;
        vm.infosday = infosDate  ;
        vm.temp = temp + '°C  '  ;
        vm.description = description ;
        vm.minMax = 'Temp min. ' + tempMin + '°C / ' + 'max. ' +tempMax + '°C' ;
        vm.wind = 'Vent : ' + wind + ' m/s' ;
        vm.humidity = 'Humidité : ' + humidity + ' %' ;
        vm.city = '' + city + ', ' + country  ;
      });

      function formattedDate(date) {
          var d = new Date(date || Date.now());
          var month = '' + (d.getMonth() + 1);
          var day = '' + d.getDate();
          var year = d.getFullYear();
          var hours = pad(d.getHours());
          var minutes = pad(d.getMinutes()) ;

          if (month.length < 2) month = '0' + month;
          if (day.length < 2) day = '0' + day;
          if (hours.length < 2) hours = '0' + hours;
          if (minutes.length < 2) minutes = '0' + minutes;
          var infosDate = hours + ' : '+ minutes +' <br/> Le '+ day +"/" + month +"/" + year;
          return infosDate ;
      };

      function pad(n){
        if(n < 10){
          n = '0' + n ;
        }
        return n ;
      }


  }


}
