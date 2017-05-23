import React from "react";
import {render} from "react-dom";
import $ from "jquery";
import {Title} from "./Title.jsx";
import {Header} from "./Header.jsx";
import {Button, ButtonLink} from "./Button.jsx";

export class Wikipedia extends React.Component {
    render () {
        return (
            <div>
                <Header/>
                <Title text="Wikipedia Viewer"/>
                <Results/>
                <Input/>
                <ButtonHolder/>
            </div>
        );
    }
}

class Results extends React.Component {
    render () {
        const style = {
            textAlign: 'center'
        };
        
        return (
            <div style={style}>
                <div id="first">
                </div>
                <div id="second">
                </div>
                <div id="third">
                </div>
            </div>
        );
    }
}

class Input extends React.Component {
    render () {
        const style = {
            fontColor: 'black',
            boxSizing: 'border-box',
            border: '2px solid #ccc',
            borderRadius: '4px',
            fontSize: '16px',
            backgroundColor: 'white',
            backgroundPosition: '10px 10px',
            backgroundRepeat: 'no-repeat',
            padding: '12px 20px 12px 40px',
            width: '100%'
        };
        
        const sty = {
            width: '30vw',
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: '50px'
        }
        
        return (
            <div style={sty}>
                <input style={style} type="text" id="text-input" name="search" placeholder="Search..."/>
            </div>
        );
    }
}

class ButtonHolder extends React.Component {
    componentDidMount () {
        //Gets the search info when clicked
        $("#search").on('click', getPage);
        $("#text-input").on('keypress', function(e) {
            if (e.which == 13) {
                $('#search').click();
            }
        });
    }
    render () {
        const style = {
            display: 'block',
            marginTop: '30px',
            marginLeft: 'auto',
            marginRight: 'auto',
            width: '350px'
        };
        
        return (
            <div style={style}>
                <Button id="search" text="Search" float="left"/>
                <ButtonLink link="https://en.wikipedia.org/wiki/Special:Random" id="random" text="Random" float="right"/>
            </div>
        );
    }
}


//Original code from first run through
function getPage() {
  var search = document.getElementById('text-input').value;
    
  var url = "https://en.wikipedia.org/w/api.php?action=opensearch&datatype=jsonp&search=" + search + "&limit=3&callback=?";
  var result = [],
      summary = [],
      link = [];
  $.ajax({
    type: "GET",
    url: url,
    dataType: 'jsonp',
    success: function(data) {
      for (var i = 0; i < data[1].length; i++) {
        result.push(data[1][i]);
      }
      for (var j = 0; j < data[2].length; j++) {
        summary.push(data[2][j]);
      }
      for (var k = 0; k < data[3].length; k++) {
        link.push(data[3][k]);
      }
      $("#first").html("\<h5\>\<a href=\"" + link[0] + "\"\>" + result[0] + "\<\/a\>\<\/h5\>\n\<p\>" + summary[0] + "\<\/p\>");
      $("#second").html("\<h5\>\<a href=\"" + link[1] + "\"\>" + result[1] + "\<\/a\>\<\/h5\>\n\<p\>" + summary[1] + "\<\/p\>");
      $("#third").html("\<h5\>\<a href=\"" + link[2] + "\"\>" + result[2] + "\<\/a\>\<\/h5\>\n\<p\>" + summary[2] + "\<\/p\>");
    }
  });
  
  return;
}