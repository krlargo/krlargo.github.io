import { FETCH_WORK_HISTORY } from './types';

export const fetchWorkHistory = () => dispatch => {
  let workHistory = {};

  const workHistory1 = {
    titleLeft: 'Garcon LLC',
    titleRight: 'iOS Developer Intern',
    content: [
      'Worked as the primary iOS engineer tasked with the development of the iOS platform using Swift, Objective-C and Xcode’s Interface Builder.',
      'Designed data structures and data models to manage persisted data retrieved from Firebase.',
      'Developed the user interface based on the design team’s specifications by implementing custom view controllers and programming custom segue transitions.',
      'Verified that views, controls, and gestures were consistent with Apple’s Human Interface Guidelines to present users with views that conform to iOS standards.',
      'Collaborated with the business team to assess time estimation, feasibility, and complexity of proposed application features.'
    ]
  };
  const workHistory2 = {
    titleLeft: 'Garcon LLC',
    titleRight: 'iOS Developer Intern',
    content: [
      'Worked as the primary iOS engineer tasked with the development of the iOS platform using Swift, Objective-C and Xcode’s Interface Builder.',
      'Designed data structures and data models to manage persisted data retrieved from Firebase.',
      'Developed the user interface based on the design team’s specifications by implementing custom view controllers and programming custom segue transitions.',
      'Verified that views, controls, and gestures were consistent with Apple’s Human Interface Guidelines to present users with views that conform to iOS standards.',
      'Collaborated with the business team to assess time estimation, feasibility, and complexity of proposed application features.'
    ]
  };

  workHistory.subcontents = [workHistory1, workHistory2];

  dispatch({
    type: FETCH_WORK_HISTORY,
    payload: workHistory
  });
};
