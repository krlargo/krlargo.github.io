import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import scrollToComponent from 'react-scroll-to-component';
import {
  Header,
  LandingHeader,
  CenterPanelContainer,
  RightSidePanelContainer
} from '.';
import { LeftSidePanelComponent } from '../components';

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
      <div onClick={event => this.dismissModal(event)}>
        <Header getRef={(ref, key) => (this.childRefs[key] = ref)} />

        <div style={{ textAlign: 'center' }}>
          <LandingHeader scrollToMain={() => this.scrollToRef('main')} />
          <div ref="main" className="main-container">
            <div ref="contentContainer" className="content-container">
              <LeftSidePanelComponent />
              <CenterPanelContainer />
              <RightSidePanelContainer />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
