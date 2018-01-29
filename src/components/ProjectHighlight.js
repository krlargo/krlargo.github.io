import React, { Component } from 'react';

class ProjectHighlight extends Component {
  renderHighlights(highlights) {
    return highlights.map((highlight, index) => {
      return <li key={index}>{highlight}</li>;
    });
  }

  render() {
    const {
      name,
      description,
      highlights,
      technologiesUsed,
      imageURL
    } = this.props.project;

    return (
      <div className="section project-highlight">
        <h4>{name}</h4>
        <img src={imageURL} />
        <p>{description}</p>Highlights:
        <ul>{this.renderHighlights(highlights)}</ul>
        Technologies:
        {technologiesUsed.join(', ')}
      </div>
    );
  }
}

export default ProjectHighlight;
