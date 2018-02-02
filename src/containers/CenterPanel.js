import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'react-redux';
import { CenterSection } from '../components';
import { fetchAbout, fetchWorkHistory, fetchExperience } from '../actions';

class CenterPanel extends Component {
  componentDidMount() {
    const { fetchAbout, fetchWorkHistory, fetchExperience } = this.props;
    fetchAbout();
    fetchWorkHistory();
    fetchExperience();
  }

  render() {
    const { about, workHistory, experience } = this.props;

    // Nested container divs required for floating left panel
    return (
      <div className="center-panel">
        <CenterSection title="About" data={about} />
        <CenterSection title="Work History" data={workHistory} />
        <CenterSection title="Experience" data={experience} />
      </div>
    );
  }
}

const mapStateToProps = ({ about, workHistory, experience }) => {
  return { about, workHistory, experience };
};

export default connect(mapStateToProps, {
  fetchAbout,
  fetchWorkHistory,
  fetchExperience
})(CenterPanel);
