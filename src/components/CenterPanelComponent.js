import React, { Component } from 'react';
import { CenterSection } from '.';

/* Manages stacked styling for CenterSections */
class CenterPanelComponent extends Component {
  render() {
    const parentData = this.props.data;

    return (
      <div className="center-panel">
        {(() => {
          const keys = Object.keys(parentData);

          return keys.map(key => {
            const { title, data } = parentData[key];
            return <CenterSection key={title} title={title} data={data} />;
          });
        })()}
      </div>
    );
  }
}

export default CenterPanelComponent;
