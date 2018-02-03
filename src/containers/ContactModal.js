import React, { Component } from 'react';
import { XIcon } from '../images/tech-icons';

class ContactModal extends Component {
  constructor() {
    super();

    this.state = { xIsHighlighted: false };
  }

  render() {
    const { xIsHighlighted } = this.state;
    const { visibility, dismissModal, size } = this.props;
    const { width, height } = size || {};

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
          style={{ width, height }}
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
            {this.props.content}
          </div>
        </div>
      </div>
    );
  }
}

export default ContactModal;
