import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AppStoreIcon, GitHubIcon, LinkedInIcon } from '../images/tech-icons';
import { fetchProfileSummary, fetchProfileImageURL } from '../actions';

class ProfilePanel extends Component {
  componentDidMount() {
    const { fetchProfileSummary, fetchProfileImageURL } = this.props;
    fetchProfileSummary();
    fetchProfileImageURL();
  }

  render() {
    const { profileSummary, profileImageURL } = this.props;
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

const mapStateToProps = ({ profileSummary, profileImageURL }) => {
  return { profileSummary, profileImageURL };
};

export default connect(mapStateToProps, {
  fetchProfileSummary,
  fetchProfileImageURL
})(ProfilePanel);
