import React, { Component } from 'react';

class Content extends Component {
  render() {
    // Nested container divs required for floating left panel
    return (
      <div className="content">
        <div className="content">Content</div>
      </div>
    );
  }
}

export default Content;
