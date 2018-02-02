import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'react-redux';
import { AboutPanel, ExperiencePanel, WorkHistoryPanel } from '../components';
import { CenterSection } from '.';
import { fetchAbout } from '../actions';

class CenterPanel extends Component {
  componentDidMount() {
    this.props.fetchAbout();
  }

  render() {
    const { about } = this.props;

    // Nested container divs required for floating left panel
    return (
      <div className="center-panel">
        <CenterSection title="About" content={about.content} />
        <WorkHistoryPanel />
        <ExperiencePanel />
      </div>
    );
  }
}

const mapStateToProps = ({ about }) => {
  return { about };
};

export default connect(mapStateToProps, { fetchAbout })(CenterPanel);
