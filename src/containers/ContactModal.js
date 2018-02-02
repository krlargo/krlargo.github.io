import React, { Component } from 'react';
import { XIcon } from '../images/tech-icons';

class ContactModal extends Component {
  constructor() {
    super();

    this.state = { xIsHighlighted: false };
  }

  render() {
    const { xIsHighlighted } = this.state;
    const { visibility, dismissModal } = this.props;
    return (
      <div
        className="modal-container"
        style={
          visibility
            ? { opacity: 1, visibility: 'visible' }
            : { opacity: 0, visibility: 'hidden' }
        }
        onClick={dismissModal}
      >
        <div
          className="contact-modal"
          onClick={event => {
            event.stopPropagation(); // Ignore container's dismissal call
          }}
        >
          <div className="section">
            <div className="subsection">
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center'
                }}
              >
                <h3>Contact Info</h3>
                <div
                  className="x-button"
                  onClick={dismissModal}
                  onMouseOver={() => this.setState({ xIsHighlighted: true })}
                  onMouseLeave={() => this.setState({ xIsHighlighted: false })}
                >
                  <XIcon color={xIsHighlighted ? '#666' : '#333'} />
                </div>
              </div>
            </div>
            <div className="subsection" style={{ textAlign: 'left' }}>
              <div>
                Contact me via <a href="mailto:krlargo@ucdavis.edu">email</a>.
                {
                  "If you'd like to contact me by phone, please send me an email first."
                }
              </div>
              <br />
              <div>
                I am <strong>actively</strong> looking for an{' '}
                <strong>Entry/Junior level</strong> Software Engineering
                position in the <strong>Bay Area</strong>. I am{' '}
                <strong>not</strong> currently available to relocate.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactModal;
