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
      technicalSkills,
      display: {
        TechnicalSkills: true
      }
    };
  }

  componentDidMount() {
    const rect = this.refs.technicalSkills.getBoundingClientRect();
    this.setState({ containerWidth: rect.width });
  }

  // Recursively calculate current skill's table height, accounting for child tables
  calculateTableHeight(object, key) {
    if (!this.state.display[key]) return 0;

    const objectKeys = Object.keys(object);
    const childCount = objectKeys.length;
    let count = childCount;

    const sum = objectKeys.reduce((sum, currentKey) => {
      const currentObject = object[currentKey];
      return sum + this.calculateTableHeight(currentObject, currentKey);
    }, 0);

    return sum + count;
  }

  // Adds styling for all transitioning
  transitionDuration(duration) {
    return {
      '-webkit-transition': `${duration}s`,
      '-moz-transition': `${duration}s`,
      '-o-transition': `${duration}s`,
      transition: `${duration}s`
    };
  }

  // Recusrively render tables, accounting for child tables
  renderSkills(object, key, isTopLevel = false) {
    const objectKeys = Object.keys(object);
    const cellCount = objectKeys.length;
    const cellHeight = 30 + 1;
    const height = this.calculateTableHeight(object, key) * cellHeight;

    const display = this.state.display;

    return (
      <ul style={{ height, ...this.transitionDuration(0.25) }}>
        {objectKeys.map((skill, index) => {
          console.log(
            skill + 'OBJECT[SKILL]: ' + JSON.stringify(object[skill])
          );
          return (
            <div>
              <li
                onClick={() => {
                  display[skill] = !display[skill]; // Toggle current display value
                  this.setState({ display });
                }}
              >
                {skill}
                <div style={{ float: 'right', fontSize: '8px' }}>
                  {Object.keys(object[skill]).length == 0 ? '' : ' ▼'}
                </div>
              </li>
              {this.renderSkills(object[skill], skill)}
            </div>
          );
        })}
      </ul>
    );
  }

  render() {
    const { containerWidth, technicalSkills } = this.state;
    const { display } = this.state;
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
            {this.renderSkills(technicalSkills, 'TechnicalSkills', true)}
          </div>
        </div>
      </div>
    );
  }
}

export default SkillsPanel;
