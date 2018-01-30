import React, { Component } from 'react';

class ProjectHighlight extends Component {
  renderHighlights(highlights) {
    return highlights.length != 0 ? (
      <div>
        <div className="project-highlight-subtitle">Highlights</div>
        <ul className="project-highlights-list">
          {highlights.map((highlight, index) => {
            return <li key={index}>{highlight}</li>;
          })}
        </ul>
      </div>
    ) : null;
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
      <div className="section">
        <div className="project-highlight">
          <h4>{name}</h4>
          <img src={imageURL} />
          <div className="project-highlight-description">{description}</div>
          <div className="project-highlight-details">
            {this.renderHighlights(highlights)}
            <div className="project-highlight-subtitle">Technologies Used</div>
            <div className="project-highlight-technologies">
              {technologiesUsed.join(', ')}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectHighlight;
