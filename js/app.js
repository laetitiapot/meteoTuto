window.onload = function infos(){
  getWeather('Lyon', render);
};

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
  document.getElementById("infosday").innerHTML = infosDate ;
  document.getElementById("temp").innerHTML = temp + '°C  ' ;
  document.getElementById("description").innerHTML = description;
  document.getElementById("minMax").innerHTML = 'Temp min. ' + tempMin + '°C / ' + 'max. ' +tempMax + '°C';
  document.getElementById("wind").innerHTML = '<i class="fa fa-flag" aria-hidden="true"></i> Vent : ' + wind + ' m/s';
  document.getElementById("humidity").innerHTML = '<i class="fa fa-tint" aria-hidden="true"></i> Humidité : ' + humidity + ' %';
  document.getElementById("city").innerHTML = '<i class="fa fa-map-marker" aria-hidden="true"></i> ' + city + ', ' + country ;
};


function getWeather(city, cb){
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "http://api.openweathermap.org/data/2.5/weather?q="+city+"&APPID=093a59774aaa3c40102cbca0c0029891&units=metric", true);
  xhr.onload = function (e) {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        var weather = JSON.parse(xhr.responseText);
        cb(weather);
        // render(weather);
      } else {
        console.error(xhr.statusText);
      }
    }
  };
  xhr.onerror = function (e) {
    console.error(xhr.statusText);
  };
  xhr.send(null);
}

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
