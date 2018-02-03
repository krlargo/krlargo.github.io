import React, { Component } from 'react';

class Resume extends Component {
  render() {
    return (
      <iframe
        className="resume-iframe"
        scrolling="no"
        src="https://docs.google.com/document/d/e/2PACX-1vQdGvrj1Ic80pjKW-wBtnRtbGLmInj06DXSdYbTQYh7zO8IqlBgeqIm5Rq0XABaXswX3jpvVT3A4-A1/pub?embedded=true"
      />
    );
  }
}

export default Resume;
