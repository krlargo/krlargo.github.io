import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import scrollToComponent from 'react-scroll-to-component';
import {
  Header,
  LandingHeader,
  CenterPanelContainer,
  RightSidePanelContainer
} from '.';
import { Resume, LeftSidePanelComponent } from '../components';

class Home extends Component {
  constructor() {
    super();
    this.childRefs = {};
    this.state = { headerHeight: 0, display: 'main' };
  }

  setDisplay = display => {
    this.setState({ display });
  };

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

  renderMain = () => (
    <div>
      <LandingHeader scrollToMain={() => this.scrollToRef('main')} />
      <div ref="main" className="main-container">
        <div ref="contentContainer" className="content-container">
          <LeftSidePanelComponent />
          <CenterPanelContainer />
          <RightSidePanelContainer />
        </div>
      </div>
    </div>
  );

  renderResume = () => (
    <div className="iframe-container">
      <Resume />
    </div>
  );

  render() {
    const { display } = this.state;

    return (
      <div>
        <Header
          getRef={(ref, key) => (this.childRefs[key] = ref)}
          setDisplay={this.setDisplay}
        />

        <div style={{ textAlign: 'center' }}>
          <div style={{ height: '100vh', width: '100vw' }}>
            {(() => {
              switch (display) {
                case 'main':
                  return this.renderMain();
                  break;
                case 'resume':
                  return this.renderResume();
                  break;
                default:
                  return this.renderMain();
              }
            })()}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
