import React from "react";
import {render} from "react-dom";
import {Title} from "./Title.jsx";
import {Header} from "./Header.jsx";
import {Button, ButtonLink} from "./Button.jsx";
import $ from "jquery";

export class RandQuote extends React.Component {
    render () {        
        const style = {
            height: '200vh',
            width: '100vw'
        }
        return (
            <div style={style}>
                <Header/>
                <Title text="Random Quote Generator"/>
                <Container/>
                <ButtonHolder/>
            </div>            
        );
    }
}

class Container extends React.Component {
    render () {
        const style = {
            backgroundColor: '#005194',
            color: 'white',
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
            verticalAlign: 'middle',
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
    componentDidMount() {
        $("#getQuote").on("click", function() {
            //Function to change the html and display the quote
            var newQuote = randQuote();
            $(".message").html(newQuote);
            $(".twitter-share-button").attr("href", 'https://twitter.com/intent/tweet?text=' + newQuote);
        });
    }
    
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
                <ButtonLink link="https://twitter.com/intent/tweet/?text=" text="Tweet!" linkClass="twitter-share-button" float="right"/>
            </div>
        );
    }
}

//Code reused from first pass thru of fCC

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
    var str = quotes[Math.floor(Math.random() * (quotes.length))];
  return str;
}