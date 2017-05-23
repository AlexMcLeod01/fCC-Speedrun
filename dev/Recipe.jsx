import React from "react";
import {render} from "react-dom";
import { Title } from "./Title.jsx";
import { Button } from "./Button.jsx";
import {Header} from "./Header.jsx";
import Modal from 'react-modal';


export class Recipe extends React.Component {
    render () {
        const style = {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        };
        
        return (
            <div>
                <Header/>
                <Title text="Recipe Box"/>
                <div style={style}>
                    <Box/>
                    <Button text="Add Recipe"/>
                </div>
            </div>
        );
    }
}

class Box extends React.Component {
    render () {
        const style = {
            width: '90vw',
            minHeight: '50vh',
            backgroundColor: 'white'
        };
        
        return (
            <div style={style}>
                <Modal name='Peanut Chicken'/>
            </div>
        );
    }
}

class RecipeCard extends React.Component {
    constructor() {
        super();
        
        this.state = {
            modalIsOpen: false
        };
        
        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }
    
    openModal() {
        this.setState({modalIsOpen: true});
    }
    
    afterOpenModal() {
        this.subtitle.style.color = "#F00";
    }
    
    closeModal() {
        this.setState({modalIsOpen: false});
    }
    
    render() {
        const customStyles = {
            content : {
                top: '50%',
                left: '50%',
                right: 'auto',
                bottom: 'auto',
                marginRight: '-50%',
                transform: 'translate(-50%, -50%)',
                color: 'black'
  }
};
        return (
            <div>
                <button onClick={this.openModal}>{this.props.name}</button>
                <Modal
                    isOpen={this.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    contentLabel={this.props.name}
                    style={customStyles}
                    >
                    <h2 ref={subtitle => this.subtitle = subtitle}>{this.props.name}</h2>
                    <button onClick={this.closeModal}>Close</button>
                    <div>I am a modal</div>
                </Modal>
            </div>
        );
    }
}