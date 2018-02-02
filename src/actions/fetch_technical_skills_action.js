import { FETCH_TECHNICAL_SKILLS } from './types';

export const fetchTechnicalSkills = () => dispatch => {
  const technicalSkills = {
    General: {
      'C/C++': {},
      Java: {},
      GitHub: {}
    },
    Web: {
      'React/Redux': {},
      Node: {},
      Express: {},
      Firebase: {},
      SQL: {},
      NoSQL: {}
    },
    Mobile: {
      iOS: {
        Swift: {},
        'Objective-C': {},
        Xcode: {},
        'iOS SDK': {},
        'Cocoa Touch': {},
        'Core Data': {},
        Storyboard: {},
        'Interface Builder': {},
        XCTesting: {}
      },
      'React Native': {}
    }
  };

  dispatch({
    type: FETCH_TECHNICAL_SKILLS,
    payload: technicalSkills
  });
};
