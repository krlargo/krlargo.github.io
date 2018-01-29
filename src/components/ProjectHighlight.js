import React, { Component } from 'react';

class ProjectHighlight extends Component {
  constructor() {
    super();

    this.state = {
      name: 'Project 1',
      description: 'This is a project',
      imageURL:
        'https://docs.google.com/drawings/d/1NZenN700uCF4OEvn0BstWG4r-dlZVNFkP91xjyLaPe4/pub?w=1049&h=1049'
    };
  }

  render() {
    const { name, description, imageURL } = this.state;

    return (
      <div className="project-highlight">
        <div className="section">
          <h4>{name}</h4>
          <img src={imageURL} />
          <p>{description}</p>
        </div>
      </div>
    );
  }
}

export default ProjectHighlight;
