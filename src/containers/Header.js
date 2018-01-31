import React, { Component } from 'react';

class Header extends Component {
  componentDidMount() {
    // Pass header back to parent component
    this.props.getRef(this.header, 'header');
  }

  render() {
    return (
      <div ref={x => (this.header = x)} className="header">
        <div className="navbar">
          <ul>
            <li>
              <a
                onClick={() => {
                  this.refs.main.scrollIntoView();
                }}
              >
                Home
              </a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Portfolio</a>
            </li>
            <li>
              <a href="/">Resume</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;
