import React, { Component } from 'react';

class ProfilePanel extends Component {
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
      <div className="profile-panel">
        <img src={profileImageURL} />
        <div className="profile-content">{profileContent}</div>
        <ul>
          <li>
            <a href="https://github.com/krlargo">Github</a>
          </li>
          <li>
            <a href="https://wwww.linkedin.com/in/kevinlargo">LinkedIn</a>
          </li>
          <li>
            <a href="https://itunes.apple.com/us/developer/kevin-largo/id1269350192?mt=8">
              App Store Link
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default ProfilePanel;
