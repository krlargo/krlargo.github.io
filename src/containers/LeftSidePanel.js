import React, { Component } from 'react';
import { SkillsPanel, ProfilePanel } from '../components';

class LeftSidePanel extends Component {
  render() {
    return (
      <div className="left-side-panel">
        <div className="section">
          <div className="subsection">
            <ProfilePanel />
          </div>
        </div>
        <div className="section">
          <div className="subsection">
            <SkillsPanel />
          </div>
        </div>
      </div>
    );
  }
}

export default LeftSidePanel;
