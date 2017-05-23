import React from "react";
import {render} from "react-dom";
import marked from "marked";
import {Header} from "./Header.jsx";

export class Markdown extends React.Component {
    render () {
        return (
            <div>
                <Header/>
                <Container/>
            </div>
        );
    }
}

class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "Heading\n=======\nSub-heading\n-----------\n\n\n### Another deeper heading\n\nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a \n\nline break\n\nText attributes *italic*, **bold**,\n\n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\nThe rain---not the reign---in\nSpain.\n\n *[Alex McLeod](https://AlexMcLeod01.github.io)*",
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange (event) {
        this.setState({
            value: event.target.value
        });
    }
    
    markedup (value) {
        var rawMarkup = marked(value, {sanitize: true});
        return { __html: rawMarkup };
    }
    
    render () {
        const style = {
            marginTop: '20px',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around'
        };
        
        const innerSty = {
            width: '40vw',
            height: '90vh',
            font: 'Verdana',
            backgroundColor: 'white',
            color: 'black',
            borderStyle: 'solid',
            borderWidth: '2px',
            overflowY: 'scroll'
        };
        
        return (
            <div style={style}>
                <TextBox handleChange={this.handleChange} value={this.state.value}/>
                <div style={innerSty}>
                    <span dangerouslySetInnerHTML={this.markedup(this.state.value)}/>
                </div>
            </div>
        );
    }
}

class TextBox extends React.Component {
    render() {
        const style = {
            width: '40vw',
            height: '90vh',
            font: 'Verdana',
        };
        
        return (
            <form>
                <textarea value={this.props.value} onChange={this.props.handleChange} style={style}/>
            </form>
        );
    }
}