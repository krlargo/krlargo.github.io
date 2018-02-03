import React, { Component } from 'react';
import { Popup } from '../components';
import { ContactModal } from '../containers';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      contactModalVisibility: false,
      popup: { visibility: false },
      resumeURL:
        'https://docs.google.com/document/d/e/2PACX-1vQdGvrj1Ic80pjKW-wBtnRtbGLmInj06DXSdYbTQYh7zO8IqlBgeqIm5Rq0XABaXswX3jpvVT3A4-A1/pub'
    };
  }

  componentDidMount() {
    // Pass header back to parent component
    this.props.getRef(this.header, 'header');
  }

  presentPopup = refKey => {
    if (this.state.popup.visibility || this.state.contactModalVisibility)
      return;

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

  dismissPopup = () => {
    this.setState({ popup: { visibility: false } });
  };

  dismissModal = () => {
    if (this.state.contactModalVisibility) {
      this.setState({ contactModalVisibility: false });
    }
  };

  render() {
    const { popup } = this.state;
    const { resumeURL } = this.state; //this.props

    return (
      <div ref={x => (this.header = x)} className="header">
        <Popup
          message={'This part of the site is currently under construction.'}
          visibility={popup.visibility}
          dismissPopup={this.dismissPopup}
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
            {/*<li ref="aboutButton">
              <a onClick={() => this.presentPopup('aboutButton')}>About</a>
            </li>*/}
            <li ref="portfolioButton">
              <a onClick={() => this.presentPopup('portfolioButton')}>
                Portfolio
              </a>
            </li>
            <li ref="resumeButton">
              <a href={resumeURL} target="_blank">
                Resume
              </a>
            </li>
            <li ref="contactButton">
              <a onClick={() => this.presentPopup('contactButton')}>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;
