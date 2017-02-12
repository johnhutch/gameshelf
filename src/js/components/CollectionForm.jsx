import React from 'react';
import axios from 'axios';

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
   * Event handler for updating the component's state as the user
   * types in the username input element.
   */
  handleInputChange(event) {
    event.preventDefault();
    this.setState({ username: event.target.value }); // Update the local state. We'll need this username for submit.
    this.props.onInputChange(event.target.value); // This was supplied as a prop by the Main component, and triggers a global state change.
  }

  /*
   * Event handler for the submit button click on the component.
   * For now, it prevents the default event, and console.logs some info.
   */
  handleButtonClick(event) {
    event.preventDefault();
    if (this.state.username) {
      this.setState({ value: 'busy' });
      const username = this.state.username;
      this.serverRequest =
        axios
          .get(`https://bgg-json.azurewebsites.net/collection/${username}`)
          .then((response) => {
            this.props.onButtonClick(response.data); // This was supplied as a prop by the Main component, and triggers a global state change.
            this.setState({ value: 'ready' }); // Update the local state of the form, now that the request is done.
          })
          .catch(error => console.log(error));
    }
  }

  /*
   * Required render method for this component, written in JSX markup.
   * Some of the usual HTML attributes change names for proper JSX, like className instead of class.
   * Note that you can insert actual JS code using the {} wrapper.
   */
  render() {
    const isDisabled = (this.state.value === 'busy');
    return (
      <form className="CollectionForm">
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" className="form-control" name="username" onChange={this.handleInputChange} />
        </div>
        <button type="submit" className="btn btn-primary" disabled={isDisabled} onClick={this.handleButtonClick}>{this.props.buttonText}</button>
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
  onInputChange: React.PropTypes.func.isRequired,
  onButtonClick: React.PropTypes.func.isRequired,
};

/*
 * Component property for the default values of props
 * in case you don't supply a value when using ReactDOM.render.
 */
CollectionForm.defaultProps = {
  buttonText: 'Submit',
};

export default CollectionForm;
