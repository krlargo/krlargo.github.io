import React, { Component } from 'react';

class ProjectHighlight extends Component {
  constructor(props) {
    super(props);
    this.state = { showDetails: false, expandedDetailHeight: 0 };
  }

  componentDidMount() {
    // Calculate expandedDetailHeight for dropdown transition
    /*          ________________________  _
               | highlightsSubtitle     |  |
               |  - higlights           |  |
      details: | highlightsMarginBottom |   > calculatedHeight
               | technologiesSubtitle   |  |
               |   tech, tech, tech     | _|
               '------------------------'
    */

    const {
      highlightsSubtitle,
      highlights,
      technologiesSubtitle,
      technologies
    } = this.refs;

    const highlightsSubtitleHeight = highlightsSubtitle
      ? highlightsSubtitle.getBoundingClientRect().height
      : 0;
    const highlightsHeight = highlights
      ? highlights.getBoundingClientRect().height
      : 0;
    const highlightsMarginBottom = highlights
      ? parseInt(
          window.getComputedStyle(highlights).getPropertyValue('margin-bottom')
        )
      : 0;
    const technologiesSubtitleHeight = technologiesSubtitle.getBoundingClientRect()
      .height;
    const technologiesHeight = technologies.getBoundingClientRect().height;

    const expandedDetailHeight =
      highlightsSubtitleHeight +
      highlightsHeight +
      highlightsMarginBottom +
      technologiesSubtitleHeight +
      technologiesHeight;

    this.setState({ expandedDetailHeight });
  }

  renderHighlights(highlights) {
    return highlights.length != 0 ? (
      <div>
        <div ref="highlightsSubtitle" className="featured-project-subtitle">
          Highlights
        </div>
        <ul ref="highlights" className="featured-project-highlights-ul">
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

    const { showDetails, expandedDetailHeight } = this.state;

    return (
      <div className="section">
        <div className="featured-project">
          <h4>{name}</h4>
          <img
            src={imageURL}
            onClick={() => this.setState({ showDetails: !showDetails })}
          />
          <div className="featured-project-description">{description}</div>
          <div
            ref="details"
            className="featured-project-details"
            style={{ height: showDetails ? expandedDetailHeight : '0' }}
          >
            <div>{this.renderHighlights(highlights)}</div>
            <div
              ref="technologiesSubtitle"
              className="featured-project-subtitle"
            >
              Technologies Used
            </div>
            <div ref="technologies" className="featured-project-technologies">
              {technologiesUsed.join(', ')}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectHighlight;
