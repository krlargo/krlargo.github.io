import React, { Component } from 'react';
import { Popup } from '../components';

class Header extends Component {
  constructor() {
    super();
    this.state = { popup: { visibility: false } };
  }

  componentDidMount() {
    // Pass header back to parent component
    this.props.getRef(this.header, 'header');
  }

  showPopup = refKey => {
    const ref = this.refs[refKey];

    if (ref) {
      const { x, y, width, height, left, bottom } = ref.getBoundingClientRect();

      const xPos = x + width / 2; // center-x
      const yPos = bottom; /* margin */

      this.setState({ popup: { x: xPos, y: yPos, visibility: true } });
    }
  };

  hidePopup = () => {
    this.setState({ popup: { visibility: false } });
  };

  render() {
    const { popup } = this.state;

    return (
      <div ref={x => (this.header = x)} className="header">
        <Popup
          message={'This part of the site is currently under construction.'}
          visibility={popup.visibility}
          hidePopup={this.hidePopup}
          selfDestruct={true}
          top={popup.y}
          x={popup.x}
        />

        <div className="navbar">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li ref="aboutButton">
              <a onClick={() => this.showPopup('aboutButton')}>About</a>
            </li>
            <li ref="portfolioButton">
              <a onClick={() => this.showPopup('portfolioButton')}>Portfolio</a>
            </li>
            <li ref="resumeButton">
              <a onClick={() => this.showPopup('resumeButton')}>Resume</a>
            </li>
            <li>
              <a onClick={this.props.presentContactModal}>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;
