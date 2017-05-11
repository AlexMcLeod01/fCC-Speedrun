import React from "react";
import {render} from "react-dom";
import DocumentTitle from "react-document-title";
import {Tribute} from "./Tribute.jsx";
import {RandQuote} from "./RandQuote.jsx";
import { BrowserRouter as Router,
        Route,
        Link,
        IndexRoute,
        Switch,
        browserHistory } from 'react-router-dom';

class Header extends React.Component {
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
                    <li style={liStyle}><Link exact to="/" activeClassName="active">Home</Link></li>
                    <li style={liStyle}><Link to="/randquote" activeClassName="active">Quote</Link></li>
                    <li style={liStyle}><Link to="/tribute" activeClassName="active">Tribute</Link></li>
                </ul>
            </div>
        );
    }
}

class Main extends React.Component {
    render () {
        return (
            <div>
                <Switch>
                    <Route exact path='/'>
                        <RandQuote/>
                    </Route>
                    <Route path='/index.html'>
                        <RandQuote/>
                    </Route>
                    <Route path='/randquote'>
                        <RandQuote/>
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