import { FETCH_EXPERIENCE } from '../actions/types';

export const experienceReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_EXPERIENCE:
      return action.payload;
    default:
      return state;
  }
};
