import React, { Component } from 'react';
import { Contact, Popup } from '../components';
import { ContactModal } from '../containers';

class Header extends Component {
  resumeContent = (
    <iframe src="https://docs.google.com/document/d/e/2PACX-1vQdGvrj1Ic80pjKW-wBtnRtbGLmInj06DXSdYbTQYh7zO8IqlBgeqIm5Rq0XABaXswX3jpvVT3A4-A1/pub?embedded=true" />
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
        content = <Contact />;
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
      case 'portfolioButton':
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
      // Return original modified state so that modal doesn't collapse on dismissal
      let { modal } = this.state;
      modal.visibility = false;
      this.setState({ modal });
    }
  };

  render() {
    const { underConstructionPopup, modal } = this.state;
    const { setDisplay } = this.props;
    const { resumeURL } = this.state; //this.props

    return (
      <div ref={x => (this.header = x)} className="header">
        <Popup
          message={
            <div>
              This part of the site is currently under construction, but you can
              view it from my{' '}
              <a href="https://krlargo.github.io/home/#Projects">old website</a>{' '}
              in the meantime.
            </div>
          }
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
              <a onClick={() => setDisplay('main')}>Home</a>
            </li>
            <li ref="portfolioButton">
              <a onClick={() => this.presentPopup('portfolioButton')}>
                Portfolio
              </a>
            </li>
            <li ref="resumeButton">
              <a onClick={() => setDisplay('resume')}>Resume</a>
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
