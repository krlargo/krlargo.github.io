import React, { Component } from 'react';
import { AboutPanel, ExperiencePanel, WorkHistoryPanel } from '../components';

class CenterPanel extends Component {
  render() {
    // Nested container divs required for floating left panel
    return (
      <div className="center-panel">
        <AboutPanel />
        <WorkHistoryPanel />
        <ExperiencePanel />
      </div>
    );
  }
}

export default CenterPanel;
