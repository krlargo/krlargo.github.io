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
          <div className="page">
            <LandingHeader />
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
