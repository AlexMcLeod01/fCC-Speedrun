import React from "react";
import {render} from "react-dom";
import $ from "jquery";

export class RandQuote extends React.Component {
    render () {        
        const style = {
            backgroundColor: 'teal',
            height: '200vh',
            width: '100vw',
            color: 'white'
        }
        return (
            <div style={style}>
                <Title/>
                <Container/>
                <ButtonHolder/>
            </div>            
        );
    }
}

class Title extends React.Component {
    render () {
        const style = {
            textAlign: "center",
            marginTop: '50px'
        }
        return (
            <div style={style}>
                <h2>Random Quote Generator</h2>
            </div>
        );
    }
}

class Container extends React.Component {
    render () {
        const style = {
            backgroundColor: '#005050',
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: '30px',
            height: '50px',
            width: '100vw',
            textAlign: 'center',
            display: 'table'
        };
        
        const divSty = {
            display: 'table-cell',
            verticalAlign: 'middle'
        };
        
        return (
            <div style={style}>
                <div className="message" style={divSty}>
                    The quote goes here.
                </div>
            </div>
        );
    }
}

class ButtonHolder extends React.Component {
    render () {
        const style = {
            display: 'block',
            marginTop: '50px',
            marginLeft: 'auto',
            marginRight: 'auto',
            width: '350px'
        };
        return (
            <div style={style}>
                <Button id="getQuote" text="Get Quote!" float="left"/>
                <Tweet float="right"/>
            </div>
        );
    }
}

class Button extends React.Component {
    render () {
        const style = {
            height: '30px',
            width: '100px',
            backgroundColor: '#00A0A0',
            border: '2px solid',
            borderRadius: '50px',
            textAlign: 'center',
            font: 'bold 3.2em/100px',
            display: 'table',
            cursor: 'pointer',
            float: this.props.float
        };
        
        const text = {
            display: 'table-cell',
            verticalAlign: 'middle'
        };
        
        return (
            <div style={style} id={this.props.id}>
                <div style={text}>
                    {this.props.text}
                </div>
            </div>
        );
    }
}

class Tweet extends React.Component {
    render () {
        return (
            <div>
                <a className="twitter-share-button" href="https://twitter.com/intent/tweet/?text=">
                    <Button text="Tweet!" id="twitter-share-button" float={this.props.float}/>
                </a>
            </div>
        );
    }
}

//Code reused from first pass thru of fCC
//Random number generator
function getRandNum(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

//Function to generate a random quote
function randQuote() {
  var quotes = [
    "Fear is the path to the dark side...-Yoda",
    "Anger, fear, aggression...the dark side of the Force are they. -Yoda",
    "No! Try not! Do...or do not. There is no try. -Yoda",
    "A good speach is comparatively the same like a miniskirt: it must be long enough to cover the important things and short enough to keep things interesting. -Sifu Wong",
    "And this is very important: smile from your heart... -Sifu Wong",
    "In my experience, there is no such thing as luck. -Obi Wan Kenobi",
    "There can be only one. -Christopher Lambert",
    "Everything is hard before it is easy. -Goethe",
    "That feeling of 'us', it buffers many people from their psychological demons. -Sebastian Junger",
    "If you earn $68K per year, then globally speaking, you are the 1%. -Will MacAskill",
    "I wanna be, the very best. Like no one ever was. -Pokemon Theme Song",
    "I am an old man and have known a great many troubles, but most of them never happened. -Mark Twain"
  ];
    var str = quotes[getRandNum(0, quotes.length)];
  return str;
}

//This waits for the document to load
$(document).ready(function() {
  //Gets the quote when clicked
  $("#getQuote").on("click", function() {
    //Function to change the html and display the quote
    var newQuote = randQuote();
    $(".message").html(newQuote);
    $(".twitter-share-button").attr("href", 'https://twitter.com/intent/tweet?text=' + newQuote);
  });
});