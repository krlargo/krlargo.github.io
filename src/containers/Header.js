import React, { Component } from 'react';
import { Popup } from '../components';
import { ContactModal } from '../containers';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      contactModalVisibility: false,
      popup: { visibility: false }
    };
  }

  componentDidMount() {
    // Pass header back to parent component
    this.props.getRef(this.header, 'header');
  }

  showPopup = refKey => {
    const ref = this.refs[refKey];

    switch (refKey) {
      case 'contactButton':
        this.setState({ contactModalVisibility: true });
        break;
      default:
        const {
          x,
          y,
          width,
          height,
          left,
          bottom
        } = ref.getBoundingClientRect();

        const xPos = x + width / 2; // center-x
        const yPos = bottom; /* margin */

        this.setState({ popup: { x: xPos, y: yPos, visibility: true } });
    }
  };

  hidePopup = () => {
    this.setState({ popup: { visibility: false } });
  };

  dismissModal = () => {
    if (this.state.contactModalVisibility) {
      this.setState({ contactModalVisibility: false });
    }
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

        <ContactModal
          visibility={this.state.contactModalVisibility}
          dismissModal={this.dismissModal}
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
            <li ref="contactButton">
              <a onClick={() => this.showPopup('contactButton')}>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;
