import React, {Component} from "react";
import {render} from "react-dom";

/* This component is based on the one by
    Brian at CodePen
    
    Updated to use class format of declaring
    React Components
*/
export class SmoothScroll extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick() {
        smoothScroll.scrollTo(this.props.id + '');
    }
    
    render () {
        return (
            <span onClick={this.handleClick} style={this.props.style}>
                {this.props.children}
            </span>
        );
    }
}

var smoothScroll = {
	timer: null,

	stop: function () {
		clearTimeout(this.timer);
	},

	scrollTo: function (id, callback) {
		var settings = {
			duration: 1000,
			easing: {
				outQuint: function (x, t, b, c, d) {
					return c*((t=t/d-1)*t*t*t*t + 1) + b;
				}
			}
		};
		var percentage;
		var startTime;
		var node = document.getElementById(id);
		var nodeTop = node.offsetTop;
		var nodeHeight = node.offsetHeight;
		var body = document.body;
		var html = document.documentElement;
		var height = Math.max(
			body.scrollHeight,
			body.offsetHeight,
			html.clientHeight,
			html.scrollHeight,
			html.offsetHeight
		);
		var windowHeight = window.innerHeight
		var offset = window.pageYOffset;
		var delta = nodeTop - offset;
		var bottomScrollableY = height - windowHeight;
		var targetY = (bottomScrollableY < delta) ?
			bottomScrollableY - (height - nodeTop - nodeHeight + offset):
			delta;

		startTime = Date.now();
		percentage = 0;

		if (this.timer) {
			clearInterval(this.timer);
		}

		function step () {
			var yScroll;
			var elapsed = Date.now() - startTime;

			if (elapsed > settings.duration) {
				clearTimeout(this.timer);
			}

			percentage = elapsed / settings.duration;

			if (percentage > 1) {
				clearTimeout(this.timer);

				if (callback) {
					callback();
				}
			} else {
				yScroll = settings.easing.outQuint(0, elapsed, offset, targetY, settings.duration);
				window.scrollTo(0, yScroll);
				this.timer = setTimeout(step, 10);     
			}
		}

		this.timer = setTimeout(step, 10);
	}
};