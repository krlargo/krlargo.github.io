import React, { Component } from 'react';
import { SkillsPanel, ProfilePanel } from '.';

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
            <h3>Technical Skills</h3>
          </div>
          <div className="subsection">
            <SkillsPanel />
          </div>
        </div>
      </div>
    );
  }
}

export default LeftSidePanel;
