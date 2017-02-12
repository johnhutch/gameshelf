import React from 'react';
import CollectionForm from './CollectionForm.jsx';
import Games from './Games.jsx';

class Main extends React.Component {
  /*
   * Closest we get to a "global" state set for our app, as this is the top level
   * "root" component
   * http://andrewhfarmer.com/react-ajax-best-practices/
   */
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  /*
   * Render subcomponents for <main> html element
   */
  render() {
    return (
      <div className="container">
        <CollectionForm buttonText="Get Collection" />
        <Games />
      </div>
    );
  }
}


export default Main;
