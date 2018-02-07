import React, { Component } from 'react';

class FeaturedProject extends Component {
  constructor(props) {
    super(props);
    this.state = { showDetails: false, expandedDetailHeight: 0 };
  }

  componentDidMount() {
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

  renderDetails() {
    const { highlights, technologiesUsed } = this.props.project;
    const { showDetails, expandedDetailHeight } = this.state;
    const buttonText = 'Show Details';
    return (
      <div>
        <div
          className="featured-project-details-button"
          onClick={() => this.setState({ showDetails: !showDetails })}
        >
          <div className="featured-project-details-button-text">
            {showDetails ? 'Hide' : 'Details'}
          </div>
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

  render() {
    const { name, description, imageURL, projectURL } = this.props.project;
    const { showDetails } = this.state;

    return (
      <div className="featured-project">
        <h4>{name}</h4>
        <img
          src={imageURL}
          onClick={() => {
            window.open(projectURL);
          }}
        />
        <div className="featured-project-description">{description}</div>
        {this.renderDetails()}
      </div>
    );
  }
}

export default FeaturedProject;
