import React from "react";
import {render} from "react-dom";
import {Link} from "react-router-dom";
import { Button } from "./Button.jsx";

export class Portfolio extends React.Component {
    render () {
        const linkSty = {
            color: 'white',
            textDecoration: 'none'
        };
        
        const back = {
            backgroundColor: 'teal'
        };
        
        const textArea = {
            marginLeft: 'auto',
            marginRight: 'auto',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '50vw',
            marginTop: '30px'
        };
        
        const middleLine = {
            border: 'solid 2px',
            height: '190px',
            width: '0px',
            marginLeft: '40px',
            marginRight: '15px',
            marginTop: '20px'
        };
        
        return (
            <div style={back}>
                <Title/>
                <div style={textArea}>
                    <Image img="Boom.jpg"/>
                    <div style={middleLine}></div>
                    <TextBox/>
                </div>
                <SkillList/>
                <Projects/>
                <Contact/>
            </div>
        );
    }
}

class Divider extends React.Component {
    render () {
        const style = {
            border: 'solid 2px',
            width: '30vw',
            height: '0px',
            marginLeft: 'auto',
            marginRight: 'auto'
        };
        
        return (
            <div style={style}>
            </div>
        );
    }
}

class Title extends React.Component {
    render () {
        const style = {
            textAlign: 'center',
            color: 'white',
            fontFamily: 'Verdana',
            paddingTop: '30px'
        };
        
        return(
            <div style={style}>
                <h1>About Me</h1>
                <Divider/>
            </div>
        );
    }
}

class Image extends React.Component {
    render () {
        const style = {
            width: '10vw',
            border: 'solid 5px',
            borderRadius: '50%',
            marginTop: '40px'
        };
        
        return (
            <div>
                <img style={style} src={"../images/"+this.props.img}/>
            </div>
        );
    }
}

class TextBox extends React.Component {
    render () {
        return (
            <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.</p> 
            </div>
        );
    }
}

class SkillList extends React.Component {
    render () {
        const style = {
            width: '25vw',
            textAlign: 'center',
            marginLeft: 'auto',
            marginRight: 'auto'
        };
        
        const listSty = {
            display: 'flex',
            flexDirection: 'column',
            flexWrap: 'wrap',
            justfiyContent: 'space-between',
            alignItems: 'space-between',
            height: '90px',
            width: '25vw',
            textAlign: 'left'
        }
        
        const liSty = {
            marginBottom: '5px'
        }
        
        return (
            <div style={style}>
                <h3>LOOK WHAT I CAN DO</h3>
                <ul style={listSty}>
                    <li style={liSty} className="fa fa-chevron-right">HTML</li>
                    <li style={liSty} className="fa fa-chevron-right">CSS</li>
                    <li style={liSty} className="fa fa-chevron-right">JavaScript</li>
                    <li style={liSty} className="fa fa-chevron-right">ES2015</li>
                    <li style={liSty} className="fa fa-chevron-right">ReactJS</li>
                    <li style={liSty} className="fa fa-chevron-right">NodeJS</li>
                    <li style={liSty} className="fa fa-chevron-right">ExpressJS</li>
                    <li style={liSty} className="fa fa-chevron-right">MongoDB</li>
                </ul>
            </div>
        );
    }
}

class Projects extends React.Component {
    render () {
        const style = {
            display: 'flex',
            flexFlow: 'row wrap',
            justifyContent: 'space-around'
        }
        
        const center = {
            marginLeft: 'auto',
            marginRight: 'auto',
            width: '75vw',
            textAlign: 'center',
        };
        
        return (
            <div style={center}>
                <Divider/>
                <h2>My Work</h2>
                <div style={style}>
                    <ProjectImage img="../images/tribute.png" route="/tribute"/>
                    <ProjectImage img="../images/randquote.png" route="/randquote"/>
                    <ProjectImage img="../images/weather.png" route="/weather"/>
                    <ProjectImage img="../images/wiki.png" route="/wiki"/>
                    <ProjectImage img="../images/twitch.png" route="/twitch"/>
                    <ProjectImage img="../images/tic.png" route="/tictactoe"/>
                    <ProjectImage img="../images/leader.png" route="/leader"/>
                    <ProjectImage img="../images/markdown.png" route="/markdown"/>
                </div>
            </div>
        );
    }
}

class ProjectImage extends React.Component {
    render () {
        const style = {
            width: '200px',
            height: '150px',
            paddingBottom: '15px'
        }
        
        return (
            <div>
                <Link to={this.props.route}>
                    <img src={this.props.img} style={style}/>
                </Link>
            </div>
        );
    }
}

class Contact extends React.Component {
    render () {
        const style = {
            marginLeft: 'auto',
            marginRight: 'auto',
            display: 'flex',
            flexDirection: 'row',
            justfiyContent: 'center',
            alignItems: 'center'
        };
        
        const center = {
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: '20px',
            textAlign: 'center',
            width: '30vw'
        };
        
        return (
            <div style={center}>
                <Divider/>
                <h2>Contact Me!</h2>
                <div style={style}>
                    <SocialIcon link="mailto:AlexMcLeod01+portfolio@gmail.com" img="../images/email.png" alt="Email Me!"/>
                    <SocialIcon link="https://github.com/AlexMcLeod01" img="../images/Github.png" alt="Follow me on Github!"/>
                    <SocialIcon link="https://www.linkedin.com/pub/alex-mcleod/134/335/606" img="../images/linkedin.png" alt="Check me out on Linkedin"/>
                    <SocialIcon link="http://www.facebook.com/mnkykngtrtlmstr" img="../images/facebook.png" alt="Follow me on Facebook"/>
                </div>
            </div>
        );
    }
}

class SocialIcon extends React.Component {
    render () {
        const style = {
            width: '50px',
            height: '50px',
            borderRadius: '5px'
        };
        
        return (
            <a href={this.props.link} style={style}>
                <img src={this.props.img} alt={this.props.alt} style={style}/>
            </a>
        );
    }
}