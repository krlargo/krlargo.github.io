import { FETCH_TECHNICAL_SKILLS } from '../actions/types';

export const technicalSkillsReducer = (state = { General: {} }, action) => {
  switch (action.type) {
    case FETCH_TECHNICAL_SKILLS:
      return action.payload;
    default:
      return state;
  }
};
