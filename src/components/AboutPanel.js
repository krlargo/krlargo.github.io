import React, { Component } from 'react';

class AboutPanel extends Component {
  constructor(props) {
    super(props);

    const about =
      "I'm a Software Engineer from the Bay Area. I recently graduated from UC Davis (2017) where I received my B.S. in Computer Science. While I'm open to most software engineering positions in the industry, I'm especially interested in mobile development. I've spent nearly all of my time this past summer developing iOS apps (you can check out my work below). Ideally, I'd like to land a position as a Junior iOS Software Engineer at a startup with a focus on mobile development.";
    this.state = { about };
  }

  render() {
    const { about } = this.state;
    return (
      <div className="section">
        <div className="subsection">
          <h3>About</h3>
        </div>
        <div className="subsection post">
          <p>{about}</p>
        </div>
      </div>
    );
  }
}

export default AboutPanel;
