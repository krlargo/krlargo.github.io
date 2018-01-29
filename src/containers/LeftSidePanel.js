import React, { Component } from 'react';
import { SkillsPanel, ProfilePanel } from '../components';

class LeftSidePanel extends Component {
  render() {
    return (
      <div className="left-side-panel">
        <ProfilePanel />
      </div>
    );
  }
}

export default LeftSidePanel;
