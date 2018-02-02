import { FETCH_ABOUT } from './types';

export const fetchAbout = () => dispatch => {
  let about = {};
  about.content =
    "I'm a Software Engineer from the Bay Area. I recently graduated from UC Davis (2017) where I received my B.S. in Computer Science. I specialize as a frontend engineer as well as an iOS developer.";

  dispatch({
    type: FETCH_ABOUT,
    payload: about
  });
};
