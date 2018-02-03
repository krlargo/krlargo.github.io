import { FETCH_ABOUT } from './types';

export const fetchAbout = () => dispatch => {
  let about = {};
  about.content =
    "I'm a Software Engineer from the Bay Area. I recently graduated from UC Davis where I received my B.S. in Computer Science. I currently specialize in iOS and Frontend Web Development, but I'm constantly expanding my skillset.\n\n" +
    "I'm a DIY type of developer. While I understand the efficiency of using libraries and templates, I prefer figuring out how to do things myself." +
    'I also design all my websites and apps myself, down to each icon. This entire webpage was designed and developed from scratch, as with all my apps.';
  dispatch({
    type: FETCH_ABOUT,
    payload: about
  });
};
