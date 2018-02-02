import React, { Component } from 'react';

class CenterSection extends Component {
  constructor(props) {
    super(props);

    if (props.renderSubcontentDescription)
      this.renderSubcontentDescription = props.renderSubcontentDescription;
  }

  renderSubcontent = subcontents => {
    const keys = Object.keys(subcontents);

    return keys.map(key => {
      const object = subcontents[key];
      const { titleLeft, titleRight, description } = subcontents;

      return (
        <div className="subsection post" key={key}>
          <div className="post-header">
            <h4 style={{ float: 'left' }}>{titleLeft}</h4>
            <h4 style={{ float: 'right' }}>{titleRight}</h4>
          </div>
          {this.renderSubcontentDescription()};
        </div>
      );
    });
  };

  // By default, return description as a plain paragraph
  renderSubcontentDescription = description => {
    if (Array.isArray(description)) {
      // SubcontentDescription is an array
      return (
        <ul>
          {description.map((point, index) => {
            return <li key={index}>{point}</li>;
          })}
        </ul>
      );
    } else {
      // SubcontentDescription is plain text
      return <p>{description}</p>;
    }
  };

  render() {
    const { title, content, subcontents } = this.props;

    return (
      <div className="section">
        <div className="subsection">
          <h3>{title}</h3>
        </div>
        <div className="subsection post">
          <p>{content}</p>
        </div>
        {subcontents ? this.renderSubcontent(subcontents) : null}
      </div>
    );
  }
}

export default CenterSection;
