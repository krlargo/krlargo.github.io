import React, { Component } from 'react';

class ExperiencePanel extends Component {
  constructor(props) {
    super(props);

    const experience1 = {
      company: 'Garcon LLC',
      position: 'iOS Developer Intern',
      responsibilities: [
        'Worked as the primary iOS engineer tasked with the development of the iOS platform using Swift, Objective-C and Xcode’s Interface Builder.',
        'Designed data structures and data models to manage persisted data retrieved from Firebase.',
        'Developed the user interface based on the design team’s specifications by implementing custom view controllers and programming custom segue transitions.',
        'Verified that views, controls, and gestures were consistent with Apple’s Human Interface Guidelines to present users with views that conform to iOS standards.',
        'Collaborated with the business team to assess time estimation, feasibility, and complexity of proposed application features.'
      ]
    };

    this.state = {
      experience: {
        experience1
      }
    };
  }

  renderExperiences() {
    const { experience } = this.state;
    const keys = Object.keys(experience);

    return keys.map(key => {
      const object = experience[key];
      const { company, position, responsibilities } = object;

      return (
        <div className="subpost" key={key}>
          <div className="post-header">
            <h4 style={{ float: 'left' }}>{company}</h4>
            <h4 style={{ float: 'right' }}>{position}</h4>
          </div>
          <ul>
            {responsibilities.map((responsibility, index) => {
              return <li key={index}>{responsibility}</li>;
            })}
          </ul>
        </div>
      );
    });
  }

  render() {
    const { company, position, responsibilities } = this.state.experience;
    return (
      <div className="section">
        <div className="post">
          <h3>Experience</h3>
          {this.renderExperiences()}
        </div>
      </div>
    );
  }
}

export default ExperiencePanel;
