import React from "react";
import {render} from "react-dom";
import {Link} from "react-router-dom";
import { Button } from "./Button.jsx";
import { SmoothScroll } from "./SmoothScroll.jsx";
import MediaQuery from "react-responsive";

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
            backgroundColor: '#FFFFFF',
            width: '100%'
        };
        
        const textArea = {
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: '50px',
        };
        
        const sizeL = {
            marginLeft: 'auto',
            marginRight: 'auto',
            fontSize: 'large',
            width: '50vw',
            
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center'
        }
        
        const sizeS = {
            marginLeft: 'auto',
            marginRight: 'auto',
            fontSize: 'small',
            width: '75vw',
            
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center'
        }
        
        return (
            <div style={back}>
                <TitleBar/>
                <BlogTagline/>
                <Title/>
                <div style={textArea}>
                    <MediaQuery maxWidth={700} style={sizeS}>
                        <Image img="Boom.jpg"/>
                        <TextBoxPast/>
                        <TextBoxPresent/>
                        <TextBoxCTA/>
                        <SkillList/>
                    </MediaQuery>
                    <MediaQuery minWidth={700} style={sizeL}>
                        <Image img="Boom.jpg"/>
                        <TextBoxPast/>
                        <TextBoxPresent/>
                        <TextBoxCTA/>
                        <SkillList/>
                    </MediaQuery>
                </div>
                <Projects/>
                <Contact/>
            </div>
        );
    }
}

/* This is the Title portion of the site */
class TitleBar extends React.Component {
    render () {    
        const sizeL = {
            marginLeft: 'auto',
            marginRight: 'auto',
            display: 'flex',
            flexFlow: 'row no-wrap',
            justifyContent: 'space-around',
            alignItems: 'center',
            height: '75vh',
            backgroundImage: 'url(../images/titlepic.jpg)',
            backgroundSize: 'cover'
        };
        
        const sizeS = {
            marginLeft: 'auto',
            marginRight: 'auto',
            display: 'flex',
            flexFlow: 'row no-wrap',
            justifyContent: 'space-around',
            alignItems: 'center',
            height: '50vh',
            backgroundImage: 'url(../images/titlepic.jpg)',
            backgroundSize: 'cover'
        };
        
        return (
            <div>
                <MediaQuery maxWidth={700}>
                    {(matches) => {
                        if (matches) {
                            return (<div style={sizeS}><MainTitle/></div>);
                        } else {
                            return (<div style={sizeL}><MainTitle/></div>);
                        }
                    }}
                </MediaQuery>
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
                <h4>Get Hooked on Javascript With Me at <a href="https://javascriptjunky.wordpress.com">My Blog</a></h4>
            </div>
        );
    }
}

class MainTitle extends React.Component {
    render () {
        const style = {
            color: 'white',
            backgroundColor: '#333',
            fontFamily: 'Amarante',
            fontSize: 'x-large',
            textAlign: 'center',
            width: '40vw'
        };
        
        const styleS = {
            color: 'white',
            backgroundColor: '#333',
            fontFamily: 'Amarante',
            fontSize: 'medium',
            textAlign: 'center',
            width: '75vw'
        }
        
        return (
            <div>
                <MediaQuery maxWidth={700} style={styleS}>
                    <h1>Alex McLeod</h1>
                    <p></p>
                    <p></p>
                    <h3>Full-stack Web Developer Specializing in React</h3>
                </MediaQuery>
                <MediaQuery minWidth={701} style={style}>
                    <h1>Alex McLeod</h1>
                    <p></p>
                    <p></p>
                    <h3>Full-stack Web Developer Specializing in React</h3>
                </MediaQuery>
            </div>
        );
    }
}

/* This divider component is unused, but once was used */
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

/* This is the top of the About Me section */
class Title extends React.Component {
    render () {
        const style = {
            textAlign: 'center',
            color: 'black',
            fontFamily: 'Amarante',
            paddingTop: '50px'
        };
        
        return(
            <div style={style}>
                <h3>About Me</h3>
                <a name="about" id="about"/>
            </div>
        );
    }
}

class Image extends React.Component {
    render () {
        const sizeL = {
            borderRadius: '50%',
            width: '20vw'
        }
        
        const sizeS = {
            borderRadius: '50%',
            width: '50vw'
        }
        
        return (
            <div>
                <MediaQuery maxWidth={700}>
                    {(matches) => {
                        if (matches) {
                            return <img style={sizeS} src={"../images/"+this.props.img}/>;
                        } else {
                            return <img style={sizeL} src={"../images/"+this.props.img}/>;
                        }
                    }}
                </MediaQuery>
            </div>
        );
    }
}

/* This is the body text */
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
        return (
            <div>
                <p>At my <a href="javascriptjunky.wordpress.com">blog</a>, I break down the lessons I learn as I develop various projects, or learn about new Javascript features and frameworks. On this site, I have samples of my work. You could also <a href="mailto:alexmcleod01+portfolio@gmail.com">contact</a> me if you are looking for a web developer who specializes in React.</p>
            </div>
        );
    }
}

/* This is the Skill List */
class SkillList extends React.Component {
    getContent (listSty, style) {
        return (
            <div style={style}>
                <h3>My Skills</h3>
                <ul style={listSty}>
                    <SkillIcon img="../images/React.png" alt="ReactJS">React: What this page and all the linked projects are made of</SkillIcon>
                    <SkillIcon img="../images/es6.png" alt="Javascript/ES2015">ES2015: To make React easier to use</SkillIcon>
                    <SkillIcon img="../images/nodejs.png" alt="NodeJS">Node: For creating backends in Javascript</SkillIcon>
                    <SkillIcon img="../images/mongodb.png" alt="MongoDB">MongoDB: The standard database for this stack</SkillIcon>
                    <SkillIcon img="../images/git.png" alt="git">git: Who doesn't use git these days?</SkillIcon>
                    <SkillIcon img="../images/HTML.png" alt="HTML5">HTML</SkillIcon>
                    <SkillIcon img="../images/css.png" alt="CSS3">CSS3</SkillIcon>
                    <SkillIcon img="../images/jquery.png" alt="jQuery">jQuery: Because the internet needs duct-tape</SkillIcon>
                </ul>
            </div>
        );
    }
    
    render () {
        const styleL = {
            marginLeft: 'auto',
            marginRight: 'auto',
            width: '50vw',
            textAlign: 'center'
        };
        
        const styleS = {
            marginLeft: 'auto',
            marginRight: 'auto',
            width: '80vw',
            textAlign: 'center'
        }
        
        const listSty = {
            marginLeft: 'auto',
            marginRight: 'auto',
            listStyleType: 'none',
            display: 'flex',
            flexFlow: 'row wrap',
            justfiyContent: 'space-between',
            alignItems: 'space-between',
            textAlign: 'center',
            fontFamily: 'Amiko'
        }
        
        return (
            <div>
                <MediaQuery maxWidth={700}>
                    {(matches) => {
                        if (matches) {
                            return this.getContent(listSty, styleS);
                        } else {
                            return this.getContent(listSty, styleL);
                        }
                    }}
                </MediaQuery>
            </div>
        );
    }
}

class SkillIcon extends React.Component {
    render () {
        const style = {
            width: '100%',
            maxWidth: '100px',
            maxHeight: '100px',
            borderRadius: '5px'
        };
        
        const sizing = {
            width: '25%',
            maxWidth: '100px'
        }
        
        return (
            <li style={sizing}>
                <img src={this.props.img} alt={this.props.alt} style={style}/>
                {this.props.children}
            </li>
        );
    }
}

/* This is the Projects List */
class Projects extends React.Component {
    render () {
        const center = {
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: '50px',
            
            width: '75vw',
            
            textAlign: 'center',
            fontFamily: 'Amarante'
        };
        
        const style = {
            display: 'flex',
            flexFlow: 'column',
            justifyContent: 'space-around',
            alignItems: 'center'
        };
        
        
        return (
            <div style={center}>
                <a name="work" id="work"/>
                <h3>My Work</h3>
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
            width: '100%',
            maxWidth: '421px',
            maxHeight: '317px',
            paddingBottom: '15px'
        };
        
        const box = {
            width: '80%',
            marginRight: 'auto',
            marginLeft: 'auto',
            display: 'flex',
            justifyContent: 'center'
        };
        
        return (
            <div style={box}>
                <Link to={this.props.route}>
                    <img src={this.props.img} style={style}/>
                </Link>
            </div>
        );
    }
}


/* This is the Contact Me section */
class Contact extends React.Component {
    render () {
        const style = {
            marginLeft: 'auto',
            marginRight: 'auto',
            width: '30vw',
            display: 'flex',
            flexDirection: 'row',
            justfiyContent: 'center',
            alignItems: 'center',
        };
        
        const center = {
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: '50px',
            textAlign: 'center',
            width: '30vw'
        };
        
        const back = {
            width: '100%',
            backgroundColor: '#D3D3D3',
            background: '-webkit-gradient(linear, 0 0, 0 0, from(#d3d3d3), to(#545454))',
            background: '-moz-linear-gradient(#d3d3d3, #545454)',
            background: 'linear-gradient(#d3d3d3, #545454)',
            fontFamily: 'Amarante',
            marginTop: '50px'
        }
        
        return (
            <div style={back}>
                <div style={center}>
                    <a name="contact" id="contact"/>
                    <h3>Contact Me!</h3>
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
            width: '25%'
        };
        
        const imSty = {
            width: '100%',
            maxWidth: '50px',
            maxHeight: '50px',
            borderRadius: '5px'
        }
        
        return (
            <a href={this.props.link} style={style}>
                <img src={this.props.img} alt={this.props.alt} style={imSty}/>
            </a>
        );
    }
}

/* This is the Header */
class Header extends React.Component {
    render () {
        
        /* The Large screen versions */
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
        
        const buttonSty = {
            display: 'block',
            color: 'white',
            textAlign: 'center',
            padding: '14px 16px',
            cursor: 'pointer'
        };
        /* The Small Screen Versions */
        const buttonStyS = {
            display: 'block',
            color: 'white',
            textAlign: 'center',
            padding: '4px 6px',
            cursor: 'pointer',
            fontSize: 'small'
        };
        
        return (
            <div>
                <MediaQuery minWidth={701}>
                    <ul style={style}>
                        <li style={liStyle} className='lihover'><SmoothScroll id="about" style={buttonSty} activeClassName='active'>ABOUT</SmoothScroll></li>
                        <li style={liStyle} className='lihover'><SmoothScroll id="work" style={buttonSty} activeClassName='active'>WORK</SmoothScroll></li>
                        <li style={liStyle} className='lihover'><SmoothScroll id="contact" style={buttonSty} activeClassName='active'>CONTACT</SmoothScroll></li>
                        <li style={liStyle}><a href="https://javascriptjunky.wordpress.com">BLOG</a></li>
                    </ul>
                </MediaQuery>
                <MediaQuery maxWidth={700}>
                    <ul style={style}>
                        <li style={liStyle} className='lihover'><SmoothScroll id="about" style={buttonStyS} activeClassName='active'>ABOUT</SmoothScroll></li>
                        <li style={liStyle} className='lihover'><SmoothScroll id="work" style={buttonStyS} activeClassName='active'>WORK</SmoothScroll></li>
                        <li style={liStyle} className='lihover'><SmoothScroll id="contact" style={buttonStyS} activeClassName='active'>CONTACT</SmoothScroll></li>
                        <li style={liStyle}><a href="https://javascriptjunky.wordpress.com">BLOG</a></li>
                    </ul>
                </MediaQuery>
            </div>
        );
    }
}