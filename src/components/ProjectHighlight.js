import React, { Component } from 'react';

class ProjectHighlight extends Component {
  renderHighlights(highlights) {
    return highlights.map((highlight, index) => {
      return <li key={index}>highlight</li>;
    });
  }

  renderSkills(skills) {
    return skills.map((skill, index) => {
      return (
        <p key={index}>
          {skill}
          {index == skills.length - 1 ? '' : ','}
        </p>
      );
    });
  }

  render() {
    const {
      name,
      description,
      highlights,
      technicalSkills,
      imageURL
    } = this.props.project;

    return (
      <div className="project-highlight">
        <div className="section">
          <h4>{name}</h4>
          <img src={imageURL} />
          <p>{description}</p>
          {this.renderHighlights(highlights)}
          <ul>{this.renderSkills(technicalSkills)}</ul>
        </div>
      </div>
    );
  }
}

export default ProjectHighlight;
