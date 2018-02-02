import { FETCH_ABOUT } from '../actions/types';

export const aboutReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_ABOUT:
      return action.payload;
    default:
      return state;
  }
};
