import React from 'react';

class CollectionForm extends React.Component {
  /*
   * Constructor method takes in optional props, and calls the super class' constructor first.
   * After that, set the initial state, and bind all event handlers.
   */
  constructor(props) {
    super(props);
    this.state = {
      value: 'ready',
      username: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  /*
   * Event handler for the username input field.
   * Whenever it changes, update the local state of the component.
   */
  handleInputChange(event) {
    this.setState({
      value: 'active',
      username: event.target.value,
    });
  }

  /*
   * Event handler for the submit button click on the component.
   * For now, it prevents the default event, and console.logs some info.
   */
  handleButtonClick(event) {
    event.preventDefault();
    if (this.state.value !== 'busy') {
      /*
      const http://www.boardgamegeek.com/xmlapi/collection/zefquaavius?own=1;
      */
      console.log(this.state.username);
      this.setState({
        value: 'busy',
        username: this.state.username,
      });
      setTimeout(() => {
        console.log(`Button with text "${this.props.buttonText}" has been clicked.`);
        console.log(event);
        this.setState({
          value: 'ready',
          username: '',
        });
      }, 1000);
    } else {
      console.log('Form is busy.');
    }
  }

  /*
   * Required render method for this component, written in JSX markup.
   * Some of the usual HTML attributes change names for proper JSX, like className instead of class.
   * Note that you can insert actual JS code using the {} wrapper.
   */
  render() {
    const className = `CollectionForm CollectionForm--${this.state.value}`;
    const disabled = (this.state.value === 'busy');
    return (
      <aside id="CollectionForm" className="col-xs-4">
        <form className={className}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" className="form-control" name="username" onChange={this.handleInputChange} />
          </div>
          <button type="submit" className="btn btn-primary" disabled={disabled} onClick={this.handleButtonClick}>{this.props.buttonText}</button>
        </form>
      </aside>
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
