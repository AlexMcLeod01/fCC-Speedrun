import React from "react";
import {render} from "react-dom";

export class Button extends React.Component {    
    render () {        
        const style = {
            height: '30px',
            width: '100px',
            backgroundColor: '#D3D3D3',
            background: '-webkit-gradient(linear, 0 0, 0 0, from(#d3d3d3), to(#a8a8a8))',
            background: '-moz-linear-gradient(#d3d3d3, #a8a8a8)',
            background: 'linear-gradient(#d3d3d3, #a8a8a8)',
            borderTop: '1px solid #7e7e7e',
            color: 'rgba(22,33,16,1)',
            textAlign: 'center',
            display: 'table',
            cursor: 'pointer',
            float: this.props.float
        };
    
/*a.forrst:active {
    background: #3c592a;
    background: -webkit-gradient(linear, 0 0, 0 0, from(#3c592a), to(#58853e));
    background: -moz-linear-gradient(#3c592a, #58853e);
    background: linear-gradient(#3c592a, #58853e); }
  */      
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