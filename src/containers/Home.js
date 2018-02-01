import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import scrollToComponent from 'react-scroll-to-component';
import {
  Header,
  LandingHeader,
  LeftSidePanel,
  CenterPanel,
  RightSidePanel
} from '.';

class Home extends Component {
  constructor() {
    super();
    this.childRefs = {};
    this.state = { headerHeight: 0 };
  }

  scrollToRef = refKey => {
    const headerRef = this.childRefs['header'];
    const headerHeight = headerRef.getBoundingClientRect().height;

    scrollToComponent(this.refs[refKey], {
      offset: -headerHeight, // Account for header offset
      align: 'top',
      ease: 'inOutQuad',
      duration: 1000
    });
  };

  render() {
    return (
      <div>
        <Header
          getRef={(ref, key) => (this.childRefs[key] = ref)}
          scrollToRef={this.scrollToRef}
        />
        <div style={{ textAlign: 'center' }}>
          <LandingHeader scrollToMain={() => this.scrollToRef('main')} />
          <div ref="main" className="main-container">
            <div ref="contentContainer" className="content-container">
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
