import React from "react";
import { render } from "react-dom";
import { Title } from "./Title.jsx";
import $ from "jquery";

export class Leader extends React.Component {
    render () {
        const style = {
            backgroundColor: 'teal',
            height: '1000vh'
        };
        
        return (
            <div style={style}>
                <Title text="fCC Leaderboard"/>
                <Container/>
            </div>
        );
    }
}

//var data = [];

var fillInCampers = function (array) {
    var data = [];
    data.push(<Row number="#" name="Camper Name" month="Last 30 Days" allTime="All Time Points"/>);
        for (var i = 0; i < 101; i++) {
            var x = array[i];
            data.push(<Row key={i} number={i} name={x.username} month={x.recent} allTime={x.alltime}/>);
        }
    return data;
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
            allTimeJSON: x,
            display: fillInCampers(x)
        }
        var that = this;
    }
    
    componentDidMount () {
        that.getData().then(
            that.setState({
                display: fillInCampers(that.monthlyJSON)
            })
        );
    }
    
    setMon(data, data2) {
        this.setState({
            monthlyJSON: data,
            allTimeJSON: data2,
            display: fillInCampers(data)
        });
        
    }
    
    getData () {
        var url = "https://fcctop100.herokuapp.com/api/fccusers/top/recent",
            url2 = "https://fcctop100.herokuapp.com/api/fccusers/top/alltime";
        fetch(url).then(
            function(res) {
                if (res.status !== 200) {
                    console.error("ERROR");
                    return;
                }
                res.json().then(function(dat) {
                    that.setState({
                        monthlyJSON: dat
                    });
                });
            }
        );
        fetch(url2).then(
            function(res) {
                if (res.status !== 200) {
                    console.error("ERROR");
                    return;
                }
                res.json().then(function(dat) {
                    that.setState({
                        allTimeJSON: dat
                    });
                });
            }
        );
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
            display: 'flex',
            flexDirextion: 'column',
            flexWrap: 'wrap'
        };
        var data = fillInCampers(this.state.monthlyJSON);
        return (
            <div style={style}>
                {this.state.display}
            </div>
        );
    }
}

class Row extends React.Component {
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