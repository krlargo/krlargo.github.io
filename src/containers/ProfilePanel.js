import React, { Component } from 'react';
import { AppStoreIcon, GitHubIcon, LinkedInIcon } from '../images/tech-icons';

class ProfilePanel extends Component {
  constructor() {
    super();

    this.state = {
      profileImageURL: './src/images/profile-pictures/napa.jpg',
      profileSummary:
        "I'm a 2017 Computer Science graduate from UC Davis actively searching for a Software Engineering position in the Bay Area."
    };
  }

  render() {
    const { profileImageURL, profileSummary } = this.state;
    const iconColor = '#333';

    return (
      <div className="profile">
        <img src={profileImageURL} />
        <div className="profile-summary">{profileSummary}</div>
        <div className="profile-link">
          <AppStoreIcon color={iconColor} />
          <a href="https://itunes.apple.com/us/developer/kevin-largo/id1269350192?mt=8">
            App Store Link
          </a>
        </div>
        <div className="profile-link">
          <GitHubIcon color={iconColor} />
          <a href="https://github.com/krlargo">GitHub</a>
        </div>
        <div className="profile-link">
          <LinkedInIcon color={iconColor} />
          <a href="https://www.linkedin.com/in/kevinlargo">LinkedIn</a>
        </div>
      </div>
    );
  }
}

export default ProfilePanel;
