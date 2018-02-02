import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RightSidePanelComponent } from '../components';
import { fetchFeaturedProjects } from '../actions';

class RightSidePanelContainer extends Component {
  componentDidMount() {
    const { fetchFeaturedProjects } = this.props;
    fetchFeaturedProjects();
  }

  render() {
    const { featuredProjects } = this.props;
    return <RightSidePanelComponent data={featuredProjects} />;
  }
}

const mapStateToProps = ({ featuredProjects }) => {
  return { featuredProjects };
};

export default connect(mapStateToProps, { fetchFeaturedProjects })(
  RightSidePanelContainer
);
