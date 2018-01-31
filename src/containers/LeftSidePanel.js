import React, { Component } from 'react';
import { SkillsPanel, ProfilePanel } from '../components';

class LeftSidePanel extends Component {
  render() {
    return (
      <div className="left-side-panel">
        <div className="section">
          <ProfilePanel />
        </div>
        <div className="section">
          <SkillsPanel />
        </div>
      </div>
    );
  }
}

export default LeftSidePanel;
