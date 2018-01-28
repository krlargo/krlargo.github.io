import React, { Component } from 'react';

class LandingHeader extends Component {
  // The complete text to show
  landingHeaderText = "{\n  name: 'Kevin Largo',\n  education: 'UC Davis',\n  degree: 'Computer Science',\n  location: 'Bay Area'\n}";

  constructor() {
    super();

    this.state = {
      index: 0,
      jsx: null
    };
  }

  // Start typing after delay
  componentDidMount() {
    setTimeout(this.startTypingAnimation.bind(this), 1000);
  }

  startTypingAnimation() {
    if (!this.animationInterval)
      this.animationInterval = setInterval(this.type.bind(this), 65);
  }

  // Convert substring to formatted JSX
  stringToJSX = text => {
    const completeLines = this.landingHeaderText.split('\n');
    return text.split('\n').map((line, index) => {
      // Only append cursor | when NOT atEndOfLine
      const atEndOfLine = line == completeLines[index];

      switch (line[0]) {
        case '{':
        case '}':
          return <div>{line}</div>; // Don't append &nbsp;
        default:
          return (
            <div>
              &nbsp;{line}
              {atEndOfLine ? '' : '|'}
            </div>
          );
      }
    });
  };

  // Simulate typing, increment index and update JSX
  type = () => {
    const {
      state,
      stringToJSX,
      landingHeaderText,
      animationInterval,
      blinkCursor
    } = this;

    const { index } = state;

    if (index >= landingHeaderText.length) {
      clearInterval(animationInterval);
      this.setState({ index: 0, blinkCount: 0 });
      //this.animationInterval = null;
      this.animationInterval = setInterval(blinkCursor.bind(this), 500);
      return;
    }

    this.setState({
      index: index + 1,
      jsx: stringToJSX(landingHeaderText.substring(0, index + 1))
    });
  };

  // At the end of typing, link cursor three times before disappearing
  blinkCursor = () => {
    const { state, stringToJSX, landingHeaderText } = this;
    const { blinkCount } = state;

    if (blinkCount >= 6) {
      clearInterval(this.animationInterval);
      this.animationInterval = null;
      return;
    }

    // Appended to landingHeaderText as flashing cursor
    const toggledCursor = blinkCount % 2 ? '' : '|';

    this.setState({
      blinkCount: blinkCount + 1,
      jsx: stringToJSX(landingHeaderText + toggledCursor)
    });
  };

  render() {
    return (
      <div
        className="landing-header"
        onClick={this.startTypingAnimation.bind(this)}
      >
        <div className="landing-header-text">{this.state.jsx}</div>
      </div>
    );
  }
}

export default LandingHeader;
