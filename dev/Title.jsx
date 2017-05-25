import React from "react";
import {render} from "react-dom";

export class Title extends React.Component {
    render () {
        const style = {
            fontFamily: 'Amarante',
            fontSize: "28px",
            textAlign: 'center',
            paddingTop: '30px'
        }
        
        return (
            <div>
                <h1 style={style}>{this.props.text}</h1>
            </div>
        );
    }
};