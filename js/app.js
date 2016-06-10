// Datas weather
var weather = {
  "coord": {
    "lon": 4.85,
    "lat": 45.75
  },
  "weather": [
    {
      "id": 803,
      "main": "Clouds",
      "description": "broken clouds",
      "icon": "04d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 20.06,
    "pressure": 1013,
    "humidity": 53,
    "temp_min": 18.33,
    "temp_max": 23.89
  },
  "wind": {
    "speed": 1.69,
    "deg": 37.0041
  },
  "rain": {},
  "clouds": {
    "all": 56
  },
  "dt": 1465544230,
  "sys": {
    "type": 3,
    "id": 62901,
    "message": 0.0284,
    "country": "FR",
    "sunrise": 1465530641,
    "sunset": 1465586998
  },
  "id": 2996944,
  "name": "Lyon",
  "cod": 200
};
//console.log(weather);


// Function datas rounded to the nearest integer
function Round(x){
	if (typeof x === "number") {
		
		return Math.round(x);
	}
};
// Function formatting date and hours
function formattedDate(date) {
    var d = new Date(date || Date.now()),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();
        hours = d.getHours(); 
        minutes = d.getMinutes() ;

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    if (hours.length < 2) hours = '0' + hours;
    if (minutes.length < 2) minutes = '0' + minutes;
    var infosDate = '<div id ="hours"> '+ hours + ' : '+ minutes +'</div> '+'<div id ="day"> '+ day +"/" + month +"/" + year +'</div> ';
    return infosDate ;
};

// Var datas
var temp = Round(weather.main.temp);
var description = weather.weather[0].description.toUpperCase();
var tempMin = Round(weather.main.temp_min);
var tempMax = Round(weather.main.temp_max);
var wind = Round(weather.wind.speed);
var humidity = Round(weather.main.humidity);
var city = weather.name;
var country = weather.sys.country;
// var date and hours
var infosDate = formattedDate();

console.log(description);
//
window.onload = function infos(){
	document.getElementById("infosday").innerHTML = infosDate ;
	document.getElementById("temp").innerHTML = temp + '°C  ' ;
  document.getElementById("description").innerHTML = description;
	document.getElementById("minMax").innerHTML = 'Temp min. ' + tempMin + '°C / ' + 'max. ' +tempMax + '°C';
	document.getElementById("wind").innerHTML = "<span class='glyphicon glyphicon-flag'></span> Vent : " + wind + ' m/s';
	document.getElementById("humidity").innerHTML = "<span class='glyphicon glyphicon-tint'></span> Humidité : " + humidity + ' %';
	document.getElementById("city").innerHTML = "<span class='glyphicon glyphicon-map-marker'></span> " + city + ', ' + country ;
	

};