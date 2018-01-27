import React, { Component } from 'react';

class RightSidePanel extends Component {
  render() {
    // Nested container divs required for floating right panel
    return (
      <div className="right-side-panel">
        <div className="right-side-panel-content">Right Side Panel</div>
      </div>
    );
  }
}

export default RightSidePanel;
