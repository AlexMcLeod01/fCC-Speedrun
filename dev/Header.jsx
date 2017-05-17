import React from "react";
import { render } from "react-dom";
import { Link } from 'react-router-dom';

export class Header extends React.Component {
    render () {
        const style = {
            listStyleType: 'none',
            margin: '0',
            padding: '0',
            overflow: 'hidden',
            backgroundColor: '#333'
        };
        
        const liStyle = {
            float: 'left',
            borderRight: "1px solid #bbb"
        };
        
        return (
            <div>
                <ul style={style}>
                    <li style={liStyle}><Link exact to="/" activeClassName='.active'>Home</Link></li>
                    <li style={liStyle}><Link to="/leader" activeClassName='.active'>Leader</Link></li>
                    <li style={liStyle}><Link to="/markdown" activeClassName='.active'>Markdown</Link></li>
                    <li style={liStyle}><Link to="/tictactoe" activeClassName='.active'>Tic Tac Toe</Link></li>
                    <li style={liStyle}><Link to="/twitch" activeClassName='.active'>Twitch</Link></li>
                    <li style={liStyle}><Link to="/wiki" activeClassName='.active'>Wiki</Link></li>
                    <li style={liStyle}><Link to="/weather" activeClassName='.active'>Weather</Link></li>
                    <li style={liStyle}><Link to="/randquote" activeClassName='.active'>Quote</Link></li>
                    <li style={liStyle}><Link to="/tribute" activeClassName='.active'>Tribute</Link></li>
                </ul>
            </div>
        );
    }
}