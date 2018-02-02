import React, { Component } from 'react';

class Popup extends Component {
  componentWillReceiveProps(newProps) {
    // If a new popup is called, reset timer
    if (newProps.x != this.props.x) clearTimeout(this.countDown);
  }

  componentWillUnmount() {
    clearTimeout(this.countDown);
  }

  setCountdown = () => {
    this.countDown = setTimeout(this.props.dismissPopup, 3000);
  };

  render() {
    const { message, visibility, top, x, selfDestruct } = this.props;
    const modal = {
      width: 220,
      padding: 10
    };
    const arrow = { width: 12 };

    if (selfDestruct) this.setCountdown();

    return (
      <div
        className="popup"
        style={{
          opacity: visibility ? 1 : 0,
          position: 'absolute',
          top: `${top}px`,
          left: `${x - modal.width / 2}px`,
          width: `${modal.width}px`,
          textAlign: 'center'
        }}
        onClick={() => this.props.dismissPopup}
      >
        <div
          className="arrow-up"
          style={{
            position: 'relative',
            margin: '0 auto',
            borderWidth: arrow.width
          }}
        />
        <div className="section" style={{ marginTop: 0 }}>
          <div className="subsection">{message}</div>
        </div>
      </div>
    );
  }
}

export default Popup;
