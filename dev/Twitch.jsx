import React from "react";
import {render} from "react-dom";
import {Title} from "./Title.jsx";
import {Header} from "./Header.jsx";
import $ from "jquery";

export class Twitch extends React.Component {
    componentDidMount () {
        for (var i = 0; i < 6; i++) {
            populateIt(i);
        }
    }
    render () {
        return (
            <div>
                <Header/>
                <Title text="Currently Twitching"/>
                <Container/>
            </div>
        );
    }
}

class Container extends React.Component {
    render () {
        const style = {
            marginLeft: 'auto',
            marginRight: 'auto',
            backgroundColor: '#333',
            height: '700px',
            width: '500px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            alignItems: 'center',
        };
        
        return (
            <div style={style}>
                <Channel id="one" src="https://static-cdn.jtvnw.net/jtv_user_pictures/freecodecamp-profile_image-d9514f2df0962329-300x300.png" text="FreeCodeCamp"/>
                <Channel id="two" src="https://static-cdn.jtvnw.net/jtv_user_pictures/esl_sc2-profile_image-d6db9488cec97125-300x300.jpeg" text="ESL_SC2"/>
                <Channel id="three" src="https://static-cdn.jtvnw.net/jtv_user_pictures/ogamingsc2-profile_image-9021dccf9399929e-300x300.jpeg" text="OgamingSC2"/>
                <Channel id="four" src="https://static-cdn.jtvnw.net/jtv_user_pictures/cretetion-profile_image-12bae34d9765f222-300x300.jpeg" text="cretetion"/>
                <Channel id="five" src="https://static-cdn.jtvnw.net/jtv_user_pictures/storbeck-profile_image-7ab13c2f781b601d-300x300.jpeg" text="storbeck"/>
                <Channel id="six" src="http://brokensink.com/images/dead_link.png" text="comster"/>
            </div>
        );
    }
}

class Channel extends React.Component {
    render () {
        const style = {
            backgroundColor: '#005194',
            height: '100px',
            width: '75%',
            borderStyle: 'solid',
            borderColor: 'white',
        };
        
        const aSty = {
            textDecoration: 'none',
        };
        
        const innerSty = {
            height: '100px',
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around'
        };
        
        return (
            <div style={style} id={this.props.id}>
                <a style={aSty} id={this.props.id + "a"}>
                    <div style={innerSty}>
                        <Icon id={this.props.id + "-pic"} src={this.props.src}/>
                        <Info id={this.props.id + "-channel"} text={this.props.text}/>
                        <Status id={this.props.id + "-status"}/>
                    </div>
                </a>
            </div>
        );
    }
}

class Icon extends React.Component {
    render () {
        const style = {
            borderRadius: '50%',
            width: '50px',
            marginLeft: '20px'
        };
        
        return (
            <div id={this.props.id}>
                <img src={this.props.src} style={style}/>
            </div>
        );
    }
}

class Info extends React.Component {
    render () {
        const style = {
            color: 'white',
            marginRight: '100px'
        };
        
        return (
            <div style={style} id={this.props.id}>
                {this.props.text}
            </div>
        );
    }
}

class Status extends React.Component {
    render () {
        const style = {
            color: 'white',
            width: '100px'
        };
        
        return (
            <div style={style} id={this.props.id}>
                Offline
            </div>
        );
    }
}

function fillIt(num, data) {
  if (data.stream != null) {
    $("#"+num+"-status").html(data.stream.game);
  } else {
    $("#"+num+"-status").html("Offline");
  }
}

function setLink(num, data, twit) {
  if (data.status === 422) {
    $("#"+num+"-status").html("User does not exist");
  } else {
    $("#"+num+"a").attr("href", "https://www.twitch.tv/" + twit);
  }
}

function populateIt(twit) {
  var twitchers = ["freecodecamp", "ESL_SC2", "OgamingSC2", "cretetion", "storbeck", "comster404"];
  var nums = ["one", "two", "three", "four", "five", "six"];

var URL = "https://wind-bow.gomix.me/twitch-api/";
  var url = "";
  url = URL + "streams/" + twitchers[twit] + "?callback=?";
  $.getJSON(url, function(data) {
    fillIt(nums[twit], data);
  });
  url = URL + "users/" + twitchers[twit] + "?callback=?";
  $.getJSON(url, function(data) {
    setLink(nums[twit], data, twitchers[twit]);
  });
}