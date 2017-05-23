import React from "react";
import {render} from "react-dom";
import {Title} from "./Title.jsx";
import {Header} from "./Header.jsx";

var Carousel = require('nuka-carousel');

const Pics = React.createClass ({
    mixins: [Carousel.ControllerMixin],
    render () {
        const style = {
            maxHeight: '50vh',
            maxWidth: '50vw',
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: '20px'
        };
        
        return (
            <Carousel style={style} ref="carousel" data={this.setCarouselData.bind(this, 'carousel')} autoplay={true} speed="10" wrapAround={true}>
                <img style={style} src="http://i345.photobucket.com/albums/p379/AlexMcLeod01/20170426_084844_zpskf4fe31g.jpg"/>
                <img style={style} src="http://i345.photobucket.com/albums/p379/AlexMcLeod01/20170426_101108_zpsmsgiv75o.jpg"/>
                <img style={style} src="http://i345.photobucket.com/albums/p379/AlexMcLeod01/20170426_101214_01_zpsawtptzdj.jpg"/>
                <img style={style} src="http://i345.photobucket.com/albums/p379/AlexMcLeod01/20170426_135134_zpspiriyhb3.jpg"/>
                <img style={style} src="http://i345.photobucket.com/albums/p379/AlexMcLeod01/20170428_092055_zps0quqcnwj.jpg"/>
                <img style={style} src="http://i345.photobucket.com/albums/p379/AlexMcLeod01/20170425_084045_zpsxgtspiel.jpg"/>
            </Carousel>
        )
    }
});

class Description extends React.Component {
    render () {
        const style = {
            marginLeft: 'auto',
            marginRight: 'auto',
            maxWidth: '50vw'
        }
        
        return (
            <p style={style}>Oahu is a U.S. island in the Central Pacific, part of the Hawaiian island chain and home to the state capital, Honolulu. Highlights of the city include historic Chinatown and the Punchbowl, a crater-turned-cemetery. Waikiki is an iconic beach, dining and nightlife area. West of Honolulu is Pearl Harbor, site of the WWII's 1941 bombing attack and home to the USS Arizona Memorial. But most important for spiritualists, O'ahu has a great energy and very active spirit.</p>
        );
    }
};

class Link extends React.Component {
    render () {
        const style = {
            marginLeft: 'auto',
            marginRight: 'auto',
            textAlign: 'center',
            marginTop: '30px'
        }
        
        return (
            <p style={style}>For more information about O'ahu, click <a href="https://www.gohawaii.com/oahu/">here.</a></p>
        );
    }
};

class List extends React.Component {
    render () {
        const style = {
            textAlign: 'left',
            marginTop: '30px',
            width: '50vw',
            marginLeft: 'auto',
            marginRight: 'auto'
        }
        
        const headStyle = {
            textAlign: 'center'
        }
        
        return (
            <div style={style}>
                <h3 style={headStyle}>A Brief History of O'ahu</h3>
                <ul>
                    <li>1795: King Kamehameha I led his forces in the legendary Battle of Nuuanu near the scenic precipices of the Nuuanu Pali Lookout.</li>
                    <li>1810: Unification of the Hawaiian Islands under one rule</li>
                    <li>1893: American colonists overthrew the Hawaiian Kingdom and Queen Liliuokalani in a controversial coup</li>
                    <li>1898: Hawaii became a territory of the United States</li>
                    <li>1959: Hawaii became the 50th state of the United States</li>
                </ul>
            </div>
        );
    }
};

export class Tribute extends React.Component {
    render () {        
        return (
            <div>
                <Header/>
                <Title text="Tribute to O'ahu!"/>
                <Pics/>
                <Description/>
                <List/>
                <Link/>
            </div>            
        );
    }
}