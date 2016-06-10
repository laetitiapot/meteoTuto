$(function(){
  getWeather('Lyon', render);
});

function getWeather(city, callback){
  var url = "http://api.openweathermap.org/data/2.5/weather?q="+city+"&APPID=093a59774aaa3c40102cbca0c0029891&units=metric";
  $.getJSON(url, function(jsonWeather){
    callback(jsonWeather);
  });
}

// Var datas
function render (weather) {
  // var date and hours
  var infosDate = formattedDate();
  var temp = Math.round(weather.main.temp);
  var description = weather.weather[0].description.toUpperCase();
  var tempMin = Math.round(weather.main.temp_min);
  var tempMax = Math.round(weather.main.temp_max);
  var wind = Math.round(weather.wind.speed);
  var humidity = Math.round(weather.main.humidity);
  var city = weather.name;
  var country = weather.sys.country;
  $("#infosday").html( infosDate );
  $("#temp").html( temp + '°C  ' );
  $("#description").html( description);
  $("#minMax").html( 'Temp min. ' + tempMin + '°C / ' + 'max. ' +tempMax + '°C');
  $("#wind").html( '<i class="fa fa-flag" aria-hidden="true"></i> Vent : ' + wind + ' m/s');
  $("#humidity").html( '<i class="fa fa-tint" aria-hidden="true"></i> Humidité : ' + humidity + ' %');
  $("#city").html( '<i class="fa fa-map-marker" aria-hidden="true"></i> ' + city + ', ' + country );
};

// Function formatting date and hours
function formattedDate(date) {
    var d = new Date(date || Date.now()),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();
        hours = pad(d.getHours());
        minutes = pad(d.getMinutes()) ;

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
