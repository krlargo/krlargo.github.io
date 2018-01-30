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
    this.state = { containerWidth: 0 };
  }

  componentDidMount() {
    const rect = this.refs.iconContainer.getBoundingClientRect();
    this.setState({ containerWidth: rect.width });
  }

  render() {
    const { containerWidth } = this.state;
    const techIcons = [
      SwiftIcon,
      CppIcon,
      JavaIcon,
      JavaScriptIcon,
      ReactIcon,
      FirebaseIcon
    ];
    const iconSize = containerWidth / 3;

    return (
      <div className="section tecnhologies-panel">
        <div className="icon-container" ref="iconContainer">
          <h3>Technical Skills</h3>
          {techIcons.map((Icon, index) => (
            <Icon width={iconSize} height={iconSize} key={index} />
          ))}
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
      </div>
    );
  }
}

export default SkillsPanel;
