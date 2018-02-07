import { FETCH_FEATURED_PROJECTS } from './types';

export const fetchFeaturedProjects = () => dispatch => {
  let featuredProjects = [
    {
      name: 'CodeWords',
      description: 'A digital remake of the popular board game, CodeNames.',
      highlights: ['1,000+ downloads on the App Store'],
      technologiesUsed: [
        'Native iOS SDK',
        'In-App Purchases',
        'Firebase Database',
        'Google AdMob'
      ],
      imageURL:
        'https://docs.google.com/drawings/d/e/2PACX-1vT0RkJhLV_FlhnNj7CijrT8XWiTq9zpt65llbyubZwM3sHH6wD-87JuNdAS1llNEAUArUE0v9ZoRS1l/pub?w=1048&h=1048',
      projectURL: 'https://krlargo.github.io/CodeWords'
    },
    {
      name: 'SyncedLists',
      description:
        'An iOS application that allows users to create and share checklists with realtime editing.',
      highlights: [],
      technologiesUsed: [
        'Native iOS SDK',
        'Firebase Authorization',
        'Firebase Database',
        'Google AdMob'
      ],
      imageURL:
        'https://docs.google.com/drawings/d/e/2PACX-1vT37SFAa9jyGZ1VrbNgjvemvSALQSLn4cQTqShjr5OrOJuc1H-88naiso9_J4_FqQdzq_gpB-2vxGJ8/pub?w=1049&h=1049',
      projectURL: 'https://krlargo.github.io/SyncedLists'
    },
    {
      name: 'QuickSplit',
      description:
        'An iOS application that uses a spreadsheet interface to make it easy to split shared items on dinner bills.',
      highlights: ['2,000+ downloads on the App Store'],
      technologiesUsed: [
        'Native iOS SDK',
        'In-App Purchases',
        'CoreData',
        'Google AdMob'
      ],
      imageURL:
        'https://docs.google.com/drawings/d/1NZenN700uCF4OEvn0BstWG4r-dlZVNFkP91xjyLaPe4/pub?w=1049&h=1049',
      projectURL: 'https://krlargo.github.io/QuickSplit'
    }
  ];

  dispatch({
    type: FETCH_FEATURED_PROJECTS,
    payload: featuredProjects
  });
};
