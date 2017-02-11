import React, { Component } from 'react';

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        // this.handleClick = this.handleClick.bind(this);    
    }

    render() {
        return (
            <form className="Form">
                <label className="Form__label" htmlFor="username">Username:</label>
                <input type="text" className="Form__input Form__input--text" name="username" />
                <button type="submit" className="Form__button Form__button--submit" onClick={this.handleClick}>{this.props.buttonText}</button>            
            </form>
        );
    }

    handleClick(event) {
        console.log(event);
    }
}
