import React, { Component } from 'react';
import { FeaturedProject } from '../components';

class RightSidePanelComponent extends Component {
  renderProjects(projects) {
    return projects.map(project => {
      return (
        <div className="subsection" key={project.name}>
          <FeaturedProject project={project} />
        </div>
      );
    });
  }

  render() {
    const projects = this.props.data;

    return (
      <div className="right-side-panel">
        <div className="section">
          <div className="subsection">
            <h3>Recent Projects</h3>
          </div>
          {this.renderProjects(projects)}
        </div>
      </div>
    );
  }
}

export default RightSidePanelComponent;
