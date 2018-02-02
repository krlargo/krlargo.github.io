import { FETCH_FEATURED_PROJECTS } from '../actions/types';

export const featuredProjectsReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_FEATURED_PROJECTS:
      return action.payload;
    default:
      return state;
  }
};
