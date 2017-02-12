import React from 'react';

class Games extends React.Component {
  /*
   * Constructor method takes in optional props, and calls the super class' constructor first.
   * After that, set the initial state, and bind all event handlers.
   */
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  /*
   * Required render method for this component, written in JSX markup.
   * Some of the usual HTML attributes change names for proper JSX, like className instead of class.
   * Note that you can insert actual JS code using the {} wrapper.
   */
  render() {
    return (
      <section id="Games" className="Games">
        Muh game!
      </section>
    );
  }
}

export default Games; // Makes this Games component an official module to use elsewhere.
