import React, { Component } from 'react';

class ExperiencePanel extends Component {
  constructor(props) {
    super(props);

    const experience1 = {
      type: 'Mobile Development',
      description:
        "I've been developing for iOS since Swift first released in 2014. I currently have three of my own apps available on the App Store that I'm actively maintaining. In addition to Swift, I also have working knowledge of Objective-C and I can develop cross-platform apps using React Native."
    };

    const experience2 = {
      type: 'Web Development',
      description:
        "I currently develop websites using the MERN stack (MongoDB, Express.js, React.js, Node.js). When it comes to UI/UX, I'm the sole developer and designer of my websites. This entire page was developed from scratch (from the above header animation above to the dropdown lists to the side) using React."
    };

    this.state = {
      experience: {
        experience1,
        experience2
      }
    };
  }

  renderExperiences() {
    const { experience } = this.state;
    const keys = Object.keys(experience);

    return keys.map(key => {
      const object = experience[key];
      const { type, description } = object;

      return (
        <div className="subsection post" key={key}>
          <div className="post-header">
            <h4 style={{ float: 'left' }}>{type}</h4>
          </div>
          <p>{description}</p>
        </div>
      );
    });
  }

  render() {
    const { company, position, responsibilities } = this.state.experience;
    return (
      <div className="section">
        <div className="subsection">
          <h3>Experience</h3>
        </div>
        {this.renderExperiences()}
      </div>
    );
  }
}

export default ExperiencePanel;
