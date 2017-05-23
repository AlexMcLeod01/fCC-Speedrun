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
import {Markdown} from "./Markdown.jsx";
import {Leader} from "./Leader.jsx";
import {Portfolio} from "./Portfolio.jsx";
import ScrollToTop from "./ScrollToTop.jsx";
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
                            <Portfolio/>
                        </DocumentTitle>
                    </Route>
                    <Route path='/index.html'>
                        <DocumentTitle title="Alex McLeod's Portfolio">
                            <Portfolio/>
                        </DocumentTitle>
                    </Route>
                    <Route path='/leader'>
                        <DocumentTitle title="fCC Camper Leaderboard">
                            <Leader/>
                        </DocumentTitle>
                    </Route>
                    <Route path='/markdown'>
                        <DocumentTitle title="Markdown Previewer">
                            <Markdown/>
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
                        <DocumentTitle title="Wikipedia Viewer">
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

class Projects extends React.Component {
    render () {
        return (
            <div>
                <Header/>
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
                <Main/>
            </div>
        );
    }
}


render(
    <Router history={browserHistory}>
        <ScrollToTop>
            <App />
        </ScrollToTop>
    </Router>,
    document.getElementById('app')
);