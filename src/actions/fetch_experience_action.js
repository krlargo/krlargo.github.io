import { FETCH_EXPERIENCE } from './types';

export const fetchExperience = () => dispatch => {
  let experience = {};

  const experience1 = {
    titleLeft: 'Mobile Development',
    content:
      "I've been developing for iOS since Swift first released in 2014. I currently have three of my own apps available on the App Store that I'm actively maintaining. In addition to Swift, I also have working knowledge of Objective-C and I can develop cross-platform apps using React Native."
  };

  const experience2 = {
    titleLeft: 'Web Development',
    content:
      'I currently develop websites using the MERN stack (MongoDB, Express.js, React.js, Node.js). This entire page was developed and designed from scratch using React.'
  };

  const experience3 = {
    titleLeft: 'User Interface Design',
    content:
      'I develop and design all my user interfaces and app icons myself. I personally believe that an excellent interface is equally as important as program functionality.'
  };

  experience.subcontents = [experience1, experience2, experience3];

  dispatch({
    type: FETCH_EXPERIENCE,
    payload: experience
  });
};
