import React, { Component } from 'react';
import {
  Header,
  LandingHeader,
  LeftSidePanel,
  CenterPanel,
  RightSidePanel
} from '.';

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <div style={{ textAlign: 'center' }}>
          <LandingHeader />
          <div className="main-container">
            <div className="content-container">
              <LeftSidePanel />
              <CenterPanel />
              <RightSidePanel />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
