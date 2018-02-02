import { FETCH_WORK_HISTORY } from '../actions/types';

export const workHistoryReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_WORK_HISTORY:
      return action.payload;
    default:
      return state;
  }
};
