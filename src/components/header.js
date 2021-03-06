import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import './header.css';

class Header extends Component {
  constructor (props) {
    super(props);
    this.state = {toggled: false};
  }

  toggle = () => {
    this.setState({toggled: !this.state.toggled});
  };

  render () {
    return (
      <header>
        <nav id="menu" className={'show-' + this.state.toggled}>
          <button onClick={this.toggle}>{this.state.toggled ? 'Hide' : 'Show'} Menu</button>
          <Link to="/">Home</Link>
          <Link to="/#speakers">Speakers</Link>
          <Link to="/#organizers">Organizers</Link>
          <Link to="/#sponsors">Sponsors</Link>
          <Link to="/calendar">Calendar</Link>
          <Link to="/code-of-conduct">Code of Conduct</Link>
          <Link to="/about-us">About</Link>
        </nav>
      </header>
    );
  }
};

Header.propTypes = {
  siteTitle: PropTypes.string
};

export default Header;
