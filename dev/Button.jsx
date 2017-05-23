import React from "react";
import {render} from "react-dom";

export class Button extends React.Component {    
    render () {        
        const style = {
            height: '30px',
            width: '100px',
            backgroundColor: this.props.color,
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
            <div style={style} id={this.props.id} className={this.props.class}>
                <div style={text}>
                    {this.props.text}
                </div>
            </div>
        );
    }
}
Button.defaultProps = {
    color: '#0000FF',
    class: 'button',
    text: 'Click',
    float: 'left'
}

export class ButtonLink extends React.Component {
    render () {
        const link = {
            textDecoration: 'none',
            color: 'white'
        };
        
        return (
            <div>
                <a href={this.props.link} style={link} className={this.props.linkClass}>
                    <Button text={this.props.text} id={this.props.id} float={this.props.float} class={this.props.class}/>
                </a>
            </div>
        );
    }
}