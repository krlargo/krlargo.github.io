import React, { Component } from 'react';

class CenterPanel extends Component {
  render() {
    // Nested container divs required for floating left panel
    return (
      <div className="center-panel">
        <div className="section">Blog Post</div>
        <div className="section">Blog Post</div>
      </div>
    );
  }
}

export default CenterPanel;
