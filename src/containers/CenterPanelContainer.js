import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CenterPanelComponent } from '../components';
import { fetchAbout, fetchWorkHistory, fetchExperience } from '../actions';

class CenterPanelContainer extends Component {
  componentDidMount() {
    const { fetchAbout, fetchWorkHistory, fetchExperience } = this.props;
    fetchAbout();
    fetchWorkHistory();
    fetchExperience();
  }

  render() {
    const { about, workHistory, experience } = this.props;
    const data = [
      { title: 'About', data: about },
      { title: 'Work History', data: workHistory },
      { title: 'Experience', data: experience }
    ];

    return <CenterPanelComponent data={data} />;
  }
}

const mapStateToProps = ({ about, workHistory, experience }) => {
  return { about, workHistory, experience };
};

export default connect(mapStateToProps, {
  fetchAbout,
  fetchWorkHistory,
  fetchExperience
})(CenterPanelContainer);
