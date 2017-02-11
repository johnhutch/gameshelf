import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    console.log(`Button with text "${this.props.buttonText}" has been clicked.`);
    console.log(event);
  }

  render() {
    return (
      <form className="Form">
        <label className="Form__label" htmlFor="username">Username</label>
        <input type="text" className="Form__input Form__input--text" name="username" />
        <button type="submit" className="Form__button Form__button--submit" onClick={this.handleClick}>{this.props.buttonText}</button>
      </form>
    );
  }
}

Form.propTypes = {
  buttonText: React.PropTypes.string,
};

Form.defaultProps = {
  buttonText: 'Submit',
};

export default Form;
