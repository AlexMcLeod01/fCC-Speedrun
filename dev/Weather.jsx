import React from "react";
import {render} from "react-dom";
import $ from "jquery";
import {Title} from "./Title.jsx";
import {Header} from "./Header.jsx";

export class Weather extends React.Component {
    componentDidMount() {
        getLocation();
    }
    
    componentDidUpdate() {
        getLocation();
    }
    
    render () {        
        return (
            <div>
                <Header/>
                <Title text="Local Weather"/>
                <Icon/>
                <Temperature/>
                <Location/>
            </div>            
        );
    }
}

class Icon extends React.Component {
    render () {
        const style = {
            display: 'block',
            textAlign: 'center',
            marginTop: '60px'
        };
        
        return (
            <div id="weather-icon" style={style}>
            </div>
        );
    }
}

class Temperature extends React.Component {
    render () {
        const style = {
            textAlign: 'center',
            marginTop: '60px',
            fontSize: '30px'
        };
        
        return (
            <div id="current-temp" style={style}>
            </div>
        );
    }
}

class Location extends React.Component {
    render () {
        const style = {
            textAlign: 'center',
            marginTop: '20px',
            fontSize: '30px'
        };
        
        return (
            <div id="location" style={style}>
            </div>
        );
    }
}


/*
    The following is code from the first time
    doing the Weather API project.
    
    I may or may not have changed some of it by the time this project gets uploaded
*/
function kelvinToCel(kel) {
  return Math.round(10 * (kel - 273.15))/10;
}
function kelvinToFah(kel) {
  return Math.round(10 * ((kelvinToCel(kel) * 1.8) + 32))/10;
}

var getLocation = function() {
  var zip, country, city, region;
  var data = $.getJSON("http://freegeoip.net/json/", function(data) {
    city = data.city;
    region = data.region_code;
    zip = data.zip_code;
    country = data.country_code;
    //add location to page, to make sure it's right
    $("#location").html(city + ", " + region);
    var url = "http://api.openweathermap.org/data/2.5/weather?zip=" + zip + "," + country + "&APPID=e36e63677b6306e1f0fb7c631c2cc092"
    $.getJSON(url, function(dat) {
      var icon, temp, weather, stat;
      //get weather icon
      icon = "http://openweathermap.org/img/w/" + dat.weather[0].icon;
      //add icon to page
      $("#weather-icon").html("<img src=\"" + icon + ".png\">");
      //get temperature
      stat = true;
      temp = dat.main.temp;
      //set temperature
      function updateTemp() {
        if (stat) {
          $("#current-temp").html(kelvinToFah(temp) + "&deg;F");
        } else {
          $("#current-temp").html(kelvinToCel(temp) + "&deg;C");
        }
      }
      updateTemp();
      //if temp clicked, change to celcius
      $("#current-temp").on("click", function() {
        if (stat) {
          stat = false;
        } else {
          stat = true;
        }
        updateTemp();
      });
      //get current weather
      weather = dat.weather[0].main;
      //add weather to page
      $("#current-weather").html(weather);
      //alert(kelvinToCel(temp));
    });
  });
}