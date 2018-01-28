import React, { Component } from 'react';

class LandingHeader extends Component {
  render() {
    return (
      <div className="landing-header">
        <div className="landing-header-text">
          {'{'}
          <br />
          &nbsp; {"name: 'Kevin Largo'"}
          <br />
          &nbsp; {"education: 'UC Davis'"}
          <br />
          &nbsp; {"degree: 'Computer Science'"}
          <br />
          &nbsp; {"location: 'Bay Area'"}
          <br />
          {'}'}
        </div>
      </div>
    );
  }
}

export default LandingHeader;
