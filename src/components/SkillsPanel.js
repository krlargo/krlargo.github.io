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
      cellHeight: 0,
      technicalSkills,
      display: {
        TechnicalSkills: true
      }
    };
  }

  componentDidMount() {
    const { technicalSkills, GeneralRef } = this.refs;
    const containerWidth = technicalSkills.getBoundingClientRect().width;
    const cellHeight = GeneralRef.getBoundingClientRect().height;
    this.setState({ containerWidth, cellHeight });
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
  renderSkills(object, key, depth) {
    const objectKeys = Object.keys(object);
    const cellCount = objectKeys.length;
    const cellHeight = this.state.cellHeight - 1; // Account for border width
    const height = this.calculateTableHeight(object, key) * cellHeight;
    const rootButtonColorValue = 51;

    const display = this.state.display;

    // Use dynamic background coloring for varying nested list colors
    const buttonColorValue = rootButtonColorValue + 45 * depth;
    const buttonColor = `rgb(${buttonColorValue}, ${buttonColorValue}, ${buttonColorValue})`;
    const hoverColor = `rgb(${buttonColorValue +
      rootButtonColorValue}, ${buttonColorValue +
      rootButtonColorValue}, ${buttonColorValue + rootButtonColorValue})`;

    return (
      <ul style={{ height, ...this.transitionDuration(0.25) }}>
        {objectKeys.map((skill, index) => {
          const backgroundColor =
            this.state.isHovered == skill ? hoverColor : buttonColor;
          const hasChildren = Object.keys(object[skill]).length != 0;

          return (
            <div key={skill}>
              <li
                ref={`${skill}Ref`}
                style={{ backgroundColor }}
                onClick={() => {
                  display[skill] = !display[skill]; // Toggle current display value
                  this.setState({ display });
                }}
                onMouseOver={() => {
                  if (hasChildren) this.setState({ isHovered: skill });
                }}
                onMouseLeave={() => this.setState({ isHovered: null })}
              >
                {skill}
                <div style={{ float: 'right', fontSize: '8px' }}>
                  {hasChildren ? '▼' : ''}
                </div>
              </li>
              {this.renderSkills(object[skill], skill, depth + 1)}
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
      <div className="technical-skills" ref="technicalSkills">
        <h3>Technical Skills</h3>

        <div className="technical-skills-icons">
          {techIcons.map((Icon, index) => (
            <Icon width={iconSize} height={iconSize} key={index} />
          ))}
        </div>
        <div className="technical-skills-list-container">
          {this.renderSkills(technicalSkills, 'TechnicalSkills', 0)}
        </div>
      </div>
    );
  }
}

export default SkillsPanel;
