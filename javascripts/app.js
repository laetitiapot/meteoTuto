var weather = {
  "coord": {
    "lon": 4.85,
    "lat": 45.75
  },
  "weather": [
    {
      "id": 800,
      "main": "Clear",
      "description": "clear sky",
      "icon": "01d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 291.41,
    "pressure": 1017,
    "humidity": 71,
    "temp_min": 290.37,
    "temp_max": 293.15
  },
  "wind": {
    "speed": 4.11,
    "gust": 7.2
  },
  "rain": {
    "3h": 0.005
  },
  "clouds": {
    "all": 0
  },
  "dt": 1465460821,
  "sys": {
    "type": 3,
    "id": 62901,
    "message": 0.0313,
    "country": "FR",
    "sunrise": 1465444253,
    "sunset": 1465500564
  },
  "id": 2996944,
  "name": "Lyon",
  "cod": 200
};
console.log(weather);
alert(weather.weather);
// Arrondis
function Round(x){
	if (typeof x === "number") {
		
		return Math.round(x);
	}
};
var temp = weather.main.temp;
temp = Round(temp);
document.write(temp);

/*
var temp = Math.round(weather.main.temp);
var description = Math.round(weather.main.temp);
var tempMin = Math.round(weather.main.temp_min);
var tempMax = Math.round(weather.main.temp_max);
var wind = Math.round(weather.wind.speed);
var pressure = Math.round(weather.main.pressure);
*/


var city = weather.name;
var country = weather.sys.country;



/*var date = new Date();
var hours = date.getHours() ; 
var minutes = date.getMinutes()
var day = date.getDate();
var month = date.getMonth()+1;
var year = date.getFullYear();
var infosDate = hours + " : " + minutes + " " +  day + "/" + month + "/" + year ;*/

window.onload = function infos(){
	//document.getElementById("day").innerHTML = infosDate ;
	//document.getElementById("temp").innerHTML = temp ;
	//document.getElementById("minMax").innerHTML = tempMin + '°C / ' + tempMax + '°C';
	//document.getElementById("wind").innerHTML = wind;
	//document.getElementById("pressure").innerHTML = pressure;
	document.getElementById("city").innerHTML = "<span class='glyphicon glyphicon-map-marker'></span> " + city + ', ' + country ;
	

};