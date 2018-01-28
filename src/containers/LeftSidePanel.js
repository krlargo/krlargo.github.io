import React, { Component } from 'react';
import { ProfilePanel, TechnologiesPanel } from '../components';

class LeftSidePanel extends Component {
  render() {
    return (
      <div>
        <div className="left-side-panel">
          <div className="section">
            <ProfilePanel />
            <TechnologiesPanel />
          </div>
        </div>
      </div>
    );
  }
}

export default LeftSidePanel;
