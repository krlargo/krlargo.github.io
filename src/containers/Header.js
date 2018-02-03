import React, { Component } from 'react';
import { Popup } from '../components';
import { ContactModal } from '../containers';

/*
<iframe src="https://docs.google.com/document/d/e/2PACX-1vQdGvrj1Ic80pjKW-wBtnRtbGLmInj06DXSdYbTQYh7zO8IqlBgeqIm5Rq0XABaXswX3jpvVT3A4-A1/pub?embedded=true"></iframe>
*/

/*
<div className="subsection" style={{ textAlign: 'left' }}>
  <p>
    I am <strong>actively</strong> looking for an{' '}
    <strong>Entry/Junior level</strong> Software Engineering
    position in the <strong>Bay Area</strong>. I am{' '}
    <strong>not</strong> currently available to relocate.<br />
    <br />
    Contact me via email at{' '}
    <a href="mailto:krlargo@ucdavis.edu">krlargo@ucdavis.edu</a>.
  </p>
</div>
*/

class Header extends Component {
  resumeContent = (
    <iframe src="https://docs.google.com/document/d/e/2PACX-1vQdGvrj1Ic80pjKW-wBtnRtbGLmInj06DXSdYbTQYh7zO8IqlBgeqIm5Rq0XABaXswX3jpvVT3A4-A1/pub?embedded=true" />
  );

  contactContent = (
    <div className="subsection" style={{ textAlign: 'left' }}>
      <p>
        I am <strong>actively</strong> looking for an{' '}
        <strong>Entry/Junior level</strong> Software Engineering position in the{' '}
        <strong>Bay Area</strong>. I am <strong>not</strong> currently available
        to relocate.<br />
        <br />
        Contact me via email at{' '}
        <a href="mailto:krlargo@ucdavis.edu">krlargo@ucdavis.edu</a>.
      </p>
    </div>
  );

  constructor() {
    super();
    this.state = {
      modal: { visibility: false, content: null, size: null },
      underConstructionPopup: { visibility: false },
      resumeURL:
        'https://docs.google.com/document/d/e/2PACX-1vQdGvrj1Ic80pjKW-wBtnRtbGLmInj06DXSdYbTQYh7zO8IqlBgeqIm5Rq0XABaXswX3jpvVT3A4-A1/pub'
    };
  }

  componentDidMount() {
    // Pass header back to parent component
    this.props.getRef(this.header, 'header');
  }

  presentPopup = refKey => {
    if (
      this.state.underConstructionPopup.visibility ||
      this.state.modal.visibility
    )
      return;

    const ref = this.refs[refKey];
    let modal = {},
      visibility = false,
      content = null,
      size = null;

    switch (refKey) {
      case 'contactButton':
        visibility = true;
        content = this.contactContent;
        size = { width: '500px', height: null };
        modal = { visibility, content, size };
        this.setState({ modal });
        break;
      case 'resumeButton':
        visibility = true;
        content = this.resumeContent;
        size = { width: null, height: '100%' };
        modal = { visibility, content, size };
        this.setState({ modal });
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

        this.setState({
          underConstructionPopup: { x: xPos, y: yPos, visibility: true }
        });
    }
  };

  dismissPopup = () => {
    this.setState({ underConstructionPopup: { visibility: false } });
  };

  dismissModal = () => {
    if (this.state.modal.visibility) {
      const modal = { visibility: false };
      this.setState({ modal });
    }
  };

  render() {
    const { underConstructionPopup, modal } = this.state;
    const { resumeURL } = this.state; //this.props

    return (
      <div ref={x => (this.header = x)} className="header">
        <Popup
          message={'This part of the site is currently under construction.'}
          visibility={underConstructionPopup.visibility}
          dismissPopup={this.dismissPopup}
          selfDestruct={true}
          top={underConstructionPopup.y}
          x={underConstructionPopup.x}
        />

        <ContactModal
          visibility={modal.visibility}
          size={modal.size}
          dismissModal={this.dismissModal}
          content={modal.content}
        />

        <div className="navbar">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li ref="portfolioButton">
              <a onClick={() => this.presentPopup('portfolioButton')}>
                Portfolio
              </a>
            </li>
            <li ref="resumeButton">
              <a onClick={() => this.presentPopup('resumeButton')}>Resume</a>
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
