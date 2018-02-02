import { combineReducers } from 'redux';
import { aboutReducer } from './about_reducer';
import { workHistoryReducer } from './work_history_reducer';
import { experienceReducer } from './experience_reducer';
import {
  profileSummaryReducer,
  profileImageURLReducer
} from './profile_reducer';
//import { technicalSkillsReducer } from './technical_skills_reducer';
import { featuredProjectsReducer } from './featured_projects_reducer';

const rootReducer = combineReducers({
  about: aboutReducer,
  workHistory: workHistoryReducer,
  experience: experienceReducer,
  profileSummary: profileSummaryReducer,
  profileImageURL: profileImageURLReducer,
  //  technicalSkills: technicalSkillsReducer,
  featuredProjects: featuredProjectsReducer
});

export default rootReducer;
