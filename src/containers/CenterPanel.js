import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'react-redux';
import { ExperiencePanel } from '../components';
import { CenterSection } from '.';
import { fetchAbout, fetchWorkHistory } from '../actions';

class CenterPanel extends Component {
  componentDidMount() {
    const { fetchAbout, fetchWorkHistory } = this.props;
    fetchAbout();
    fetchWorkHistory();
  }

  render() {
    const { about, workHistory } = this.props;

    // Nested container divs required for floating left panel
    return (
      <div className="center-panel">
        <CenterSection title="About" data={about} />
        <CenterSection title="Work History" data={workHistory} />
        <ExperiencePanel />
      </div>
    );
  }
}

const mapStateToProps = ({ about, workHistory }) => {
  return { about, workHistory };
};

export default connect(mapStateToProps, { fetchAbout, fetchWorkHistory })(
  CenterPanel
);
