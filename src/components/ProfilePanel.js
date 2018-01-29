import React, { Component } from 'react';
import { AppStoreIcon, GitHubIcon, LinkedInIcon } from '../images/tech-icons';

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
        <div className="section">
          <img src={profileImageURL} />
          <div className="profile-content">
            {profileContent}

            <div className="profile-link">
              <AppStoreIcon height={25} width={25} />
              <a href="https://itunes.apple.com/us/developer/kevin-largo/id1269350192?mt=8">
                App Store Link
              </a>
            </div>
            <div className="profile-link">
              <GitHubIcon height={26} width={26} />
              <a href="https://github.com/krlargo">GitHub</a>
            </div>
            <div className="profile-link">
              <LinkedInIcon height={22} width={22} color={'black'} />
              <a href="https://www.linkedin.com/in/kevinlargo">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfilePanel;
