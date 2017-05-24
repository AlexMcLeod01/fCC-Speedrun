import React from "react";
import {render} from "react-dom";
import {Link} from "react-router-dom";
import { Button } from "./Button.jsx";

export class Portfolio extends React.Component {
    render () {
        return (
            <div>
                <Header/>
                <Container/>
            </div>
        );
    }
}

class Container extends React.Component {
    render () {
        const linkSty = {
            color: 'black',
            textDecoration: 'none'
        };
        
        const back = {
            backgroundColor: '#FFFFFF'
        };
        
        const textArea = {
            marginLeft: 'auto',
            marginRight: 'auto',
            fontSize: 'large',
            display: 'flex',
            width: '50vw',
            marginTop: '50px'
        };
        
        const flex = {
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center'
        };
        
        const titleStyle = {
            width: '98.25vw',
            height: '75vh',
            marginLeft: 'auto',
            marginRight: 'auto',
            display: 'flex',
            flexFlow: 'row no-wrap',
            justifyContent: 'space-around',
            alignItems: 'center',
            backgroundColor: '#D3D3D3',
            background: '-webkit-gradient(linear, 0 0, 0 0, from(#d3d3d3), to(#545454))',
            background: '-moz-linear-gradient(#d3d3d3, #545454)',
            background: 'linear-gradient(#d3d3d3, #545454)',
        };
        
        return (
            <div style={back}>
                <div style={titleStyle}>
                    <MainTitle/>
                    <Image img="Boom.jpg"/>
                </div>
                <BlogTagline/>
                <Title/>
                <div style={Object.assign({}, textArea, flex)}>
                    <TextBoxPast/>
                    <TextBoxPresent/>
                    <TextBoxCTA/>
                    <SkillList/>
                </div>
                <Projects/>
                <Contact/>
            </div>
        );
    }
}

class BlogTagline extends React.Component {
    render () {
        const style = {
            textAlign: 'center',
            marginTop: '40px'
        };
        
        return (
            <div style={style}>
                <h3>Get Hooked on Javascript With Me on <a href="javascriptjunky.wordpress.com">My Blog</a></h3>
            </div>
        );
    }
}

class MainTitle extends React.Component {
    render () {
        const style = {
            color: 'white',
            fontFamily: 'Amita',
            fontSize: 'x-large'
        };
        
        const left = {
            textAlign: 'right'
        };
        
        const right = {
            textAlign: 'right'
        }
        
        return (
            <div style={style}>
                <h1 style={left}>Alex McLeod</h1>
                <p></p>
                <p></p>
                <h3 style={right}>Full-stack Web Developer Specializing in React</h3>
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
            color: 'black',
            fontFamily: 'Amita',
            paddingTop: '50px'
        };
        
        return(
            <div style={style}>
                <h1>About Me</h1>
                <a name="about"/>
                <Divider/>
            </div>
        );
    }
}

class Image extends React.Component {
    render () {
        const style = {
            width: '20vw',
            borderRadius: '50%',
        };
        
        return (
            <div>
                <img style={style} src={"../images/"+this.props.img}/>
            </div>
        );
    }
}

class TextBoxPast extends React.Component {
    render () {
        return (
            <div>
                <p>When I was a kid, I first learned to program in Basic. In high school, I learned Science and Math by programming the concepts into my TI-83+. In the years since, I've worked in all sorts of places: a defense contractor, a BMW Megafactory, and three of the oldest companies in the country, just to name a few. I've moved around a lot, gotten married, and learned Kung Fu and Qigong from a genuine master, and the best teacher I've ever encountered. Still, I was missing the challenge of programming.</p>
            </div>
        );
    }
}

class TextBoxPresent extends React.Component {
    render () {
        return (
            <div>
                <p>To satisfy my need for programming, I started learning Full-Stack Javascript Web Development. This page is even written in a framework that some are calling the future: ReactJS. It may or may not be the future of web development, but it is a great framework for someone who thinks the way I do. It forces you to break everything into tiny pieces and build by arranging the pieces into larger more complex pieces that do more and more complex things.</p>
            </div>
        );
    }
}

class TextBoxCTA extends React.Component {
    render () {
        const style = {
            width: '50vw',
            textAlign: 'left'
        };
        
        return (
            <div style={style}>
                <p>At my <a href="javascriptjunky.wordpress.com">blog</a>, I break down the lessons I learn as I develop various projects, or learn about new Javascript features and frameworks. On this site, I have samples of my work. You could also <a href="mailto:alexmcleod01+portfolio@gmail.com">contact</a> me if you are looking for a web developer who specializes in React.</p>
            </div>
        );
    }
}



class SkillList extends React.Component {
    render () {
        const style = {
            width: '25vw',
            textAlign: 'center'
        };
        
        const listSty = {
            display: 'flex',
            flexDirection: 'column',
            flexWrap: 'wrap',
            justfiyContent: 'space-between',
            alignItems: 'space-between',
            height: '90px',
            width: '25vw',
            textAlign: 'left',
            fontFamily: 'Advent Pro'
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
                <a name="work"/>
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
            width: '204px',
            display: 'flex',
            flexDirection: 'row',
            justfiyContent: 'center',
            alignItems: 'center',
        };
        
        const center = {
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: '20px',
            textAlign: 'center',
            width: '30vw'
        };
        
        const back = {
            width: '98.25vw',
            backgroundColor: '#D3D3D3',
            background: '-webkit-gradient(linear, 0 0, 0 0, from(#d3d3d3), to(#545454))',
            background: '-moz-linear-gradient(#d3d3d3, #545454)',
            background: 'linear-gradient(#d3d3d3, #545454)',
        }
        
        return (
            <div style={back}>
                <div style={center}>
                    <a name="contact"/>
                    <Divider/>
                    <h2>Contact Me!</h2>
                    <div style={style}>
                        <SocialIcon link="mailto:AlexMcLeod01+portfolio@gmail.com" img="../images/email.png" alt="Email Me!"/>
                        <SocialIcon link="https://github.com/AlexMcLeod01" img="../images/Github.png" alt="Follow me on Github!"/>
                        <SocialIcon link="https://www.linkedin.com/pub/alex-mcleod/134/335/606" img="../images/linkedin.png" alt="Check me out on Linkedin"/>
                        <SocialIcon link="http://www.facebook.com/mnkykngtrtlmstr" img="../images/facebook.png" alt="Follow me on Facebook"/>
                    </div>
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

class Header extends React.Component {
    render () {
        const style = {
            listStyleType: 'none',
            margin: '0',
            padding: '0',
            overflow: 'hidden',
            backgroundColor: '#333',
            width: '100vw',
            position: 'fixed'
        };
        
        const liStyle = {
            float: 'left',
            borderRight: "1px solid #bbb"
        };
        
        return (
            <div>
                <ul style={style}>
                    <li style={liStyle}><a href="#about" activeClassName='.active'>ABOUT</a></li>
                    <li style={liStyle}><a href="#work" activeClassName='.active'>WORK</a></li>
                    <li style={liStyle}><a href="#contact" activeClassName='.active'>CONTACT</a></li>
                    <li style={liStyle}><a href="https://javascriptjunky.wordpress.com">BLOG</a></li>
                </ul>
            </div>
        );
    }
}