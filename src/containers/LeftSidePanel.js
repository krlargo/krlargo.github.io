import React, { Component } from 'react';

class LeftSidePanel extends Component {
  render() {
    // Nested container divs required for floating left panel
    return (
      <div className="left-side-panel">
        <div className="left-side-panel-content">Left Side Panel</div>
      </div>
    );
  }
}

export default LeftSidePanel;
