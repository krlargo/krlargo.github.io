import { FETCH_PROFILE_SUMMARY, FETCH_PROFILE_IMAGE_URL } from './types';

export const fetchProfileSummary = () => dispatch => {
  const profileSummary =
    "I'm a 2017 Computer Science graduate from UC Davis actively searching for a Software Engineering position in the Bay Area.";

  dispatch({
    type: FETCH_PROFILE_SUMMARY,
    payload: profileSummary
  });
};

export const fetchProfileImageURL = () => dispatch => {
  const profileImageURL = './src/images/profile-pictures/napa.jpg';

  dispatch({
    type: FETCH_PROFILE_IMAGE_URL,
    payload: profileImageURL
  });
};
