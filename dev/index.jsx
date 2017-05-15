import React from "react";
import {render} from "react-dom";
import DocumentTitle from "react-document-title";
import {Header} from "./Header.jsx";
import {Tribute} from "./Tribute.jsx";
import {RandQuote} from "./RandQuote.jsx";
import {Weather} from "./Weather.jsx";
import {Wikipedia} from "./Wikipedia.jsx";
import {Twitch} from "./Twitch.jsx";
import {Tic} from "./Tic.jsx";
import { BrowserRouter as Router,
        Route,
        Link,
        IndexRoute,
        Switch,
        browserHistory } from 'react-router-dom';

class Main extends React.Component {
    render () {
        return (
            <div>
                <Switch>
                    <Route exact path='/'>
                        <DocumentTitle title="Alex McLeod's Portfolio">
                            <Tic/>
                        </DocumentTitle>
                    </Route>
                    <Route path='/index.html'>
                        <DocumentTitle title="Alex McLeod's Portfolio">
                            <Tic/>
                        </DocumentTitle>
                    </Route>
                    <Route path='/tictactoe'>
                        <DocumentTitle title="Tic Tac Toe">
                            <Tic/>
                        </DocumentTitle>
                    </Route>
                    <Route path='/twitch'>
                        <DocumentTitle title="Twitch TV Viewer">
                            <Twitch/>
                        </DocumentTitle>
                    </Route>
                    <Route path='/wiki'>
                        <DocumentTitle title="Alex McLeod's Portfolio">
                            <Wikipedia/>
                        </DocumentTitle>
                    </Route>
                    <Route path='/weather'>
                        <DocumentTitle title="Local Weather">
                            <Weather/>
                        </DocumentTitle>
                    </Route>
                    <Route path='/randquote'>
                        <DocumentTitle title="Random Quote Machine">
                            <RandQuote/>
                        </DocumentTitle>
                    </Route>
                    <Route path='/tribute'>
                        <DocumentTitle title="Tribute to O'ahu!">
                            <Tribute/>
                        </DocumentTitle>
                    </Route>
                </Switch>
            </div>
        );
    }
}

class App extends React.Component {
    render () {
        const style = {
            backgroundColor: 'teal',
            color: 'white',
            height: '200vh',
            width: '100vw'
        };
        
        return (
            <div style={style}>
                <Header/>
                <Main/>
            </div>
        );
    }
}


render(
    <Router onUpdate={()=>window.scrollTo(0,0)} history={browserHistory}>
        <App />
    </Router>,
    document.getElementById('app')
);