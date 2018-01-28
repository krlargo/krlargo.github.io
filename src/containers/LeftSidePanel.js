import React, { Component } from 'react';

class LeftSidePanel extends Component {
  constructor() {
    super();

    this.state = {
      profileImageURL: './src/images/profile-pictures/napa.jpg',
      profileContent:
        'Computer Science graduate from UC Davis looking to land a software engineering role in the Bay Area.'
    };
  }

  render() {
    const { profileImageURL, profileContent } = this.state;
    return (
      <div>
        <div className="left-side-panel">
          <div className="section">
            <img src={profileImageURL} />
            <div className="profile-content">{profileContent}</div>
            <button
              className="btn btn-default"
              style={{ margin: '10px' }}
              onClick={() => {
                console.log('CLICKED');
              }}
            >
              GitHub
            </button>
            <a href="https://github.com/krlargo">Github</a>
            <a href="https://wwww.linkedin.com/in/kevinlargo">LinkedIn</a>
            <a href="https://itunes.apple.com/us/developer/kevin-largo/id1269350192?mt=8">
              App Store Link
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default LeftSidePanel;
