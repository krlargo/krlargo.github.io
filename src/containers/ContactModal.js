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
            <div className="subsection" style={{ padding: '15px' }}>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  height: '20px'
                }}
              >
                <h3>Contact</h3>
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
          </div>
        </div>
      </div>
    );
  }
}

export default ContactModal;
