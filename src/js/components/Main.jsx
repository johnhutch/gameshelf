import React from 'react';
import CollectionForm from './CollectionForm.jsx';
import Games from './Games.jsx';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  /*
   * Render subcomponents for <main> html element
   */
  render() {
    return (
      <main className="Main row">
        <aside className="col-xs-4">
          <CollectionForm buttonText="Get Collection" />
        </aside>
        <article className="col-xs-8">
          <Games />
        </article>
      </main>
    );
  }
}

export default Main;
