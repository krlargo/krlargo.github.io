import React, { Component } from 'react';
import { ProjectHighlight } from '../components';

class RightSidePanel extends Component {
  render() {
    return (
      <div className="right-side-panel">
        <ProjectHighlight />
        <ProjectHighlight />
      </div>
    );
  }
}

export default RightSidePanel;
