import React from "react";
import { render } from "react-dom";
import { Title } from "./Title.jsx";
import { Button } from "./Button.jsx";
import {Header} from "./Header.jsx";
import $ from "jquery";

export class Leader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "All Time",
            change: 1
        }
        this.onClick = this.onClick.bind(this);
    }
    
    onClick() {
        if (this.state.text == "All Time") {
            this.setState({
                text: "Recent",
                change: 2
            });
        } else {
            this.setState({
                text: "All Time",
                change: 1
            })
        }
    }
    
    render () {
        const style = {
            backgroundColor: 'teal',
            height: '1000vh',
        };
        
        const innerSty = {
            display: 'flex',
            justifyContent: 'center'
        };
        
        return (
            <div style={style}>
                <Header/>
                <Title text="fCC Leaderboard"/>
                <div style={innerSty} onClick={this.onClick}>
                    <Button id="Switcher" text={this.state.text}/>
                </div>
                <Container change={this.state.change}/>
            </div>
        );
    }
}

class Container extends React.Component {
    constructor(props) {
        super(props);
        var x = [];
        for (var i = 0; i < 101; i++) {
            x.push({username: i, recent: i, alltime: i});
        }
        this.state = {
            monthlyJSON: x,
            allTimeJSON: x
        }
        this.fillInCampers = this.fillInCampers.bind(this);
    }
    
    fillInCampers () {
        var array;
        if (this.props.change == 1) {
            array = this.state.monthlyJSON;
        } else {
            array = this.state.allTimeJSON;
        }
        var data = [],
            x;
        data.push(<Row number="#" name="Camper Name" month="Last 30 Days" allTime="All Time Points"/>);
        for (var i = 0; i < 100; i++) {
            x = array[i];
            console.log(Object.keys(x));
            data.push(<Row key={"a"+i} number={i+1} name={x.username} month={x.recent} allTime={x.alltime}/>);
        }
        return data
    }
    
    componentDidMount () {
        var that = this;
        var url = "https://fcctop100.herokuapp.com/api/fccusers/top/recent",
            url2 = "https://fcctop100.herokuapp.com/api/fccusers/top/alltime";
        $.getJSON(url, function(response) {
            that.setState({monthlyJSON: response});
            
        })
        $.getJSON(url2, function(response) {
            that.setState({allTimeJSON: response});
        })
        
    }
    
    render () {
        const style = {
            backgroundColor: 'white',
            width: '90vw',
            height: '960vh',
            color: 'black',
            fontSize: '20px',
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: '20px',
            display: 'flex',
            flexDirextion: 'column',
            flexWrap: 'wrap'
        };
        var data = this.fillInCampers();
        
        return (
            <div style={style}>
                {data}
            </div>
        );
    }
}

class Row extends React.Component {
    constructor(props){
        super(props);
    }
    render () {
        const style = {
            width: '90vw',
            height: '50px',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around'
        };
        
        const innerSty = {
            border: 'solid 2px',
            width: '25%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        };
        
        return (
            <div style={style}>
                <div style={innerSty}>
                    {this.props.number}
                </div>
                <div style={innerSty}>
                    {this.props.name}
                </div>
                <div style={innerSty}>
                    {this.props.month}
                </div>
                <div style={innerSty}>
                    {this.props.allTime}
                </div>
            </div>
        );
    }
}