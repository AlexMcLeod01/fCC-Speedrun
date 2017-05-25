import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

/* 
    Thanks to Sia at stackoverflow:
   'https://stackoverflow.com/questions/34345722/enforcing-scrolltotop-behavior-using-react-router'
   
   This component scrolls the focus of the screen on route change to top left.
*/
class ScrollToTop extends Component {
    componentDidUpdate(prevProps) {
        if (this.props.location !== prevProps.location) {
            window.scrollTo(0, 0);
        }
    }
    
    render () {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

export default withRouter(ScrollToTop);