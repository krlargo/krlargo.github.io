import React, { Component } from 'react';
import {
  CppIcon,
  FirebaseIcon,
  JavaIcon,
  JavaScriptIcon,
  ReactIcon,
  SwiftIcon,
  SwiftIconColored
} from '../images/tech-icons';

class SkillsPanel extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="tecnhologies-panel">
        <SwiftIcon width={75} height={75} />
        <CppIcon width={75} height={75} />
        <JavaIcon width={75} height={75} />
        <JavaScriptIcon width={75} height={75} />
        <FirebaseIcon width={75} height={75} />
        <ReactIcon width={75} height={75} />
        <ul>
          <li>Mobile</li>
          <ul>
            <li>React Native</li>
            <li>iOS</li>
            <ul>
              <li>Swift</li>
              <li>Objective-C</li>
              <li>Xcode</li>
              <li>iOS SDK</li>
              <li>Cocoa Touch</li>
              <li>Core Data</li>
              <li>Storyboard</li>
              <li>Interface Builder</li>
              <li>XCTesting</li>
            </ul>
          </ul>
          <li>Web</li>
          <ul>
            <li>React.js</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>Firebase</li>
          </ul>
        </ul>
      </div>
    );
  }
}

export default SkillsPanel;
