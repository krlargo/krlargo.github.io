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

    const technicalSkills = {
      General: {
        'C/C++': {},
        Java: {},
        GitHub: {}
      },
      Web: {
        'React/Redux': {},
        Node: {},
        Express: {},
        Firebase: {},
        SQL: {},
        NoSQL: {}
      },
      Mobile: {
        iOS: {
          Swift: {},
          'Objective-C': {},
          Xcode: {},
          'iOS SDK': {},
          'Cocoa Touch': {},
          'Core Data': {},
          Storyboard: {},
          'Interface Builder': {},
          XCTesting: {}
        },
        'React Native': {}
      }
    };

    this.state = {
      containerWidth: 0,
      displayGeneral: false,
      displayWeb: false,
      displayMobile: false,
      displayiOS: false
    };
  }

  componentDidMount() {
    const rect = this.refs.technicalSkills.getBoundingClientRect();
    this.setState({ containerWidth: rect.width });
  }

  render() {
    const { containerWidth } = this.state;
    const {
      displayGeneral,
      displayWeb,
      displayMobile,
      displayiOS
    } = this.state;
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
      <div className="section">
        <div className="technical-skills" ref="technicalSkills">
          <h3>Technical Skills</h3>

          <div className="technical-skills-icons">
            {techIcons.map((Icon, index) => (
              <Icon width={iconSize} height={iconSize} key={index} />
            ))}
          </div>
          <div className="technical-skills-list-container">
            <ul>
              <li
                onClick={() =>
                  this.setState({ displayGeneral: !displayGeneral })
                }
              >
                General
              </li>
              <ul
                style={{
                  height: displayGeneral ? '90px' : '0'
                }}
              >
                <li>C/C++</li>
                <li>Java</li>
                <li>GitHub</li>
              </ul>
              <li onClick={() => this.setState({ displayWeb: !displayWeb })}>
                Web
              </li>
              <ul style={{ height: displayWeb ? '180px' : '0' }}>
                <li>React/Redux</li>
                <li>Node</li>
                <li>Express</li>
                <li>Firebase</li>
                <li>SQL</li>
                <li>NoSQL</li>
              </ul>
              <li
                onClick={() => this.setState({ displayMobile: !displayMobile })}
              >
                Mobile
              </li>
              <ul
                style={{
                  height: displayMobile ? (displayiOS ? '330px' : '60px') : '0'
                }}
              >
                <li onClick={() => this.setState({ displayiOS: !displayiOS })}>
                  iOS
                </li>
                <ul style={{ height: displayiOS ? '270px' : '0' }}>
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
                <li>React Native</li>
              </ul>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default SkillsPanel;
