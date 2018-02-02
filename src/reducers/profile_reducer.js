import {
  FETCH_PROFILE_SUMMARY,
  FETCH_PROFILE_IMAGE_URL
} from '../actions/types';

export const profileSummaryReducer = (state = '', action) => {
  switch (action.type) {
    case FETCH_PROFILE_SUMMARY:
      return action.payload;
    default:
      return state;
  }
};

export const profileImageURLReducer = (state = '', action) => {
  switch (action.type) {
    case FETCH_PROFILE_IMAGE_URL:
      return action.payload;
    default:
      return state;
  }
};
