import React, { Component } from 'react';
import {
  Header,
  LandingHeader,
  LeftSidePanel,
  Content,
  RightSidePanel
} from '.';

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <div style={{ textAlign: 'center' }}>
          <LandingHeader />
          <div className="page">
            <div className="content-container">
              <LeftSidePanel />
              <Content />
              <RightSidePanel />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
