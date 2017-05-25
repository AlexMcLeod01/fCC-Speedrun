import React from "react";
import {render} from "react-dom";
import $ from "jquery";
import {Title} from "./Title.jsx";
import {Header} from "./Header.jsx";

export class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lat: 0,
            lon: 0,
            city: 0,
            State: 0,
            temp: 0,
            tFah: 0,
            tCel: 0,
            icon: 0,
            fahren: 1
        }
        this.getLocation = this.getLocation.bind(this);
        this.getCity = this.getCity.bind(this);
        this.getWeather = this.getWeather.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    componentDidMount() {
        this.getLocation();
    }
    
    componentDidUpdate() {
        if (this.state.lat === 0 && this.state.lon === 0) {
            this.getLocation();
        } else if (this.state.city === 0) {
            this.getCity();
        } else if (this.state.icon === 0) {
            this.getWeather();
        }
    }
    
    getLocation() {
        var GoogleAPIKey = "AIzaSyCq7nx_oYrKTed_zUceAA7Y7JOkIxC-AiU";
        var locationURL = "https://www.googleapis.com/geolocation/v1/geolocate?key=" + GoogleAPIKey;
        var that = this;
        fetch(locationURL, {method: 'post'})
            .then(function(res) {return res.json();})
            .then(function(data) {
                that.setState({
                    lat: data.location.lat,
                    lon: data.location.lng
                });
            })
            .catch(function(error) {
                console.log("Request Failed", error);
            })
    }
           
    getCity() {
        var GoogleAPIKey = "AIzaSyCzjT1ckluVgkcJ9K6UHswDzLrbINUaKYY";
        var geocodeURL = "https://maps.googleapis.com/maps/api/geocode/json?latlng="+this.state.lat+","+this.state.lon+"&key="+GoogleAPIKey;
        var that = this;
        $.getJSON(geocodeURL, function(data) {
            var obj = data.results[0].address_components;
            that.setState({
                city: obj[2].short_name,
                State: obj[5].short_name,
            });
        });
    }
    
    getWeather() {
        const API_KEY = "ac3602900b117851d300d71e6a7329ec";
        const URL = "https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/" + API_KEY + "/" + this.state.lat + "," + this.state.lon;
        var that = this;
        fetch(URL)
            .then(function(res) {return res.json().then(function(data) {
                var obj = data.currently;
                that.setState({
                    temp: obj.temperature + "\xB0F",
                    tFah: obj.temperature,
                    tCel: fahToCel(obj.temperature),
                    icon: obj.icon
                })
            })})
    }
    
    handleClick() {
        if (this.state.fahren === 1) {
            var T = this.state.temp;
            this.setState({
                temp: this.state.tCel + "\xB0C",
                fahren: 0
            })
        } else {
            this.setState({
                temp: this.state.tFah + "\xB0F",
                fahren: 1
            })
        }
    }
    
    render () {        
        return (
            <div>
                <Header/>
                <Title text="Local Weather"/>
                <Icon icon={this.state.icon}/>
                <Temperature temp={this.state.temp} handleClick={this.handleClick}/>
                <Location city={this.state.city} State={this.state.State}/>
                <Powered/>
            </div>            
        );
    }
}

class Icon extends React.Component {
    render () {
        const style = {
            display: 'block',
            textAlign: 'center',
            marginTop: '60px',
            fontSize: '90px'
        };
        
        var icon;
        switch (this.props.icon) {
            case 'clear-day':
                icon = "wi-day-sunny";
                break;
            case 'clear-night':
                icon = "wi-night-clear";
                break;
            case 'rain':
                icon = "wi-rain";
                break;
            case 'snow':
                icon = "wi-snow";
                break;
            case 'sleet':
                icon = "wi-sleet";
                break;
            case 'wind':
                icon = "wi-strong-wind";
                break;
            case 'fog':
                icon = "wi-fog";
                break;
            case 'cloudy':
                icon = "wi-cloudy";
                break;
            case 'partly-cloudy-day':
                icon = "wi-day-cloudy";
                break;
            case 'partly-cloudy-night':
                icon = "wi-night-partly-cloudy";
                break;
            case 'hail':
                icon = "wi-hail";
                break;
            case 'thunderstorm':
                icon = "wi-storm-showers";
                break;
            case 'tornado':
                icon = "wi-tornado";
                break;
            default:
                icon = "wi-refresh";
                break;
        }
        
        return (
            <div id="weather-icon" style={style}>
                <i className={"wi " + icon}/>
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
            <div id="current-temp" style={style} onClick={this.props.handleClick}>{this.props.temp}
            </div>
        );
    }
}

class Location extends React.Component {
    render () {
        const style = {
            textAlign: 'center',
            marginTop: '20px',
            marginBottom: '50px',
            fontSize: '30px'
        };
        
        return (
            <div id="location" style={style}>
                {this.props.city + ", " + this.props.State}
            </div>
        );
    }
}

class Powered extends React.Component {
    render () {
        const style = {
            fontSize: 'small',
            marginTop: '25vh',
            width: '25vw',
            textAlign: 'center',
            marginLeft: 'auto',
            marginRight: 'auto'
        };
        
        return (
            <div style={style}><a href="https://darksky.net/poweredby/">Powered By Dark Sky</a></div>
        );
    }
}


/*
    The following is code from the first time
    doing the Weather API project.
    
    I may or may not have changed some of it by the time this project gets uploaded
*/
function fahToCel(fah) {
    console.log(fah);
    return Math.round(10 * (fah - 32) * (5/9))/10;
}
/*
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
*/