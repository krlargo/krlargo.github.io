import React, { Component } from 'react';

class CenterSection extends Component {
  renderSubcontent = subcontents => {
    const keys = Object.keys(subcontents);

    return keys.map(key => {
      const object = subcontents[key];
      const { titleLeft, titleRight, content } = object;

      return (
        <div className="subsection post" key={key}>
          <div className="post-header">
            <h4 style={{ float: 'left' }}>{titleLeft}</h4>
            <h4 style={{ float: 'right' }}>{titleRight}</h4>
          </div>
          {this.renderSubcontentContent(content)}
        </div>
      );
    });
  };

  // By default, return content as a plain paragraph
  renderSubcontentContent = content => {
    if (Array.isArray(content)) {
      // SubcontentContent is an array
      return (
        <ul>
          {content.map((point, index) => {
            return <li key={index}>{point}</li>;
          })}
        </ul>
      );
    } else {
      // SubcontentContent is plain text
      return <p>{content}</p>;
    }
  };

  render() {
    const { title } = this.props;
    const { content, subcontents } = this.props.data;

    return (
      <div className="section">
        <div className="subsection">
          <h3>{title}</h3>
        </div>
        {content ? (
          <div className="subsection post">
            <p>{content}</p>
          </div>
        ) : null}
        {subcontents ? this.renderSubcontent(subcontents) : null}
      </div>
    );
  }
}

export default CenterSection;
