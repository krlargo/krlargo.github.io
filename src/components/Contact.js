import React, { Component } from 'react';

export default class Contact extends Component {
  render() {
    return (
      <div className="subsection" style={{ textAlign: 'left' }}>
        <p>
          I am <strong>actively</strong> looking for an{' '}
          <strong>Entry/Junior level</strong> Software Engineering position in
          the <strong>Bay Area</strong>. I am <strong>not</strong> currently
          available to relocate.<br />
          <br />
          Contact me via email at{' '}
          <a href="mailto:krlargo@ucdavis.edu">krlargo@ucdavis.edu</a>.
        </p>
      </div>
    );
  }
}
