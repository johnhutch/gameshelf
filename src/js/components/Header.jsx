import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  render() {
    return (
      <header className="Header row">
        <div className="col-xs-12">
          <h1>{this.props.title}</h1>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  title: React.PropTypes.string,
};

Header.defaultProps = {
  title: 'Site Title',
};

export default Header;
