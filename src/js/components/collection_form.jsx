import React from 'react';

class CollectionForm extends React.Component {
  /*
   * Constructor method takes in optional props, and calls the super class' constructor first.
   * After that, set the initial state, and bind all event handlers.
   */
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.handleClick = this.handleClick.bind(this);
  }

  /*
   * Event handler for the submit button click on the component.
   * For now, it prevents the default event, and console.logs some info.
   */
  handleClick(event) {
    event.preventDefault();
    console.log(`Button with text "${this.props.buttonText}" has been clicked.`);
    console.log(event);
  }

  /*
   * Required render method for this component, written in JSX markup.
   * Some of the usual HTML attributes change names for proper JSX, like className instead of class.
   * Note that you can insert actual JS code using the {} wrapper.
   */
  render() {
    return (
      <form className="CollectionForm">
        <label className="CollectionForm__label" htmlFor="username">Username</label>
        <input type="text" className="CollectionForm__input CollectionForm__input--text" name="username" />
        <button type="submit" className="CollectionForm__button CollectionForm__button--submit" onClick={this.handleClick}>{this.props.buttonText}</button>
      </form>
    );
  }
}

/*
 * Component property for what types you are expecting when
 * the component is actually created with ReactDOM.render.
 */
CollectionForm.propTypes = {
  buttonText: React.PropTypes.string,
};

/*
 * Component property for the default values of props
 * in case you don't supply a value when using ReactDOM.render.
 */
CollectionForm.defaultProps = {
  buttonText: 'Submit',
};

export default CollectionForm; // Makes this CollectionForm component an official module to use elsewhere.
