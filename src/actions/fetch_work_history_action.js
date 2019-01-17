import { FETCH_WORK_HISTORY } from './types';

export const fetchWorkHistory = () => dispatch => {
  let workHistory = [
    {
      titleLeft: 'AiNeed, Inc.',
      titleRight: 'React Native Developer 2018',
      content: [
        'Implemented frontend user interfaces using React Native and Redux.',
        'Worked with backend developers to design efficient queries and mutations using GraphQL.',
        'Collaborated with designers in order to provide feedback for product design and functionality.',
        'Developed an inbox and chatroom interface using graphql and other third-party dependencies.'
      ]
    },
    {
      titleLeft: 'Garcon LLC',
      titleRight: 'iOS Developer Intern 2016',
      content: [
        'Worked as the primary iOS engineer tasked with the development of the iOS platform using Swift, Objective-C and Xcode’s Interface Builder.',
        'Designed data structures and data models to manage persisted data retrieved from Firebase.',
        'Developed the user interface based on the design team’s specifications by implementing custom view controllers and programming custom segue transitions.',
        'Verified that views, controls, and gestures were consistent with Apple’s Human Interface Guidelines to present users with views that conform to iOS standards.',
        'Collaborated with the business team to assess time estimation, feasibility, and complexity of proposed application features.'
      ]
    }
  ];

  dispatch({
    type: FETCH_WORK_HISTORY,
    payload: workHistory
  });
};
