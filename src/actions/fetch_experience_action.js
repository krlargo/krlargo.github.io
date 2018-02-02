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
      "I currently develop websites using the MERN stack (MongoDB, Express.js, React.js, Node.js). When it comes to UI/UX, I'm the sole developer and designer of my websites. This entire page was developed from scratch (from the above header animation above to the dropdown lists to the side) using React."
  };

  experience.subcontents = [experience1, experience2];

  dispatch({
    type: FETCH_EXPERIENCE,
    payload: experience
  });
};
