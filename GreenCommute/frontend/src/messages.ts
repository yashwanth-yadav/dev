export const AQI_LIST_TEXT =
  'Real Time Air Quality Index(AQI) in this location';
export const GREEN_COMMUTE_ROUTES = 'Green Commute Routes';
export const APPROXIMATELY = 'Approximately';
export const CAB_FAIR = '45';
export const FILE_UPLOAD = 'File Upload';
export const CLICK_HERE_TO_UPLOAD_FILES = 'Click Here to Upload Files';
export const ABC = 'Hi abc!';
export const SUCCESSFUL_UPLOAD_MESSAGE =
  'Your Resume got Uploaded Successfully !';
export const OKAY = 'OKAY';
export const METRO_TEXT = 'Catch a blue line metro towards Raidurg';
export const METRO_FARE = 100;
export const METRO_DISTANCE = '25 Kms';
export const METRO_TIME = '1 hr 20 mins';
export const METRO_MAP_TEXT = 'View in Google Maps';
export const JOB_LOCATION = 'Hyderabad,Telangana,India';
export const JOB_LOCATION2 = 'Hitec City, Hyderabad - 500072';
export const COMMUTE_ROUTES = 'Commute routes available';
export const LAST_SEARCHED = '10 mins ago';
export const LAST_SEARCHED2 = '30 mins ago';

export const nxtPage = 'Next Page Navigation..';
export const grnCommute2000 = 'More than 2000 people are using Green Commute';
export const DESCRIPTION = 'Description';
export const ABOUT_THE_COMPANY = 'About the Company';
export const SEE_MORE = 'SEE MORE';
export const COMPANY_DESCRIPTIN = `Open Text is seeking a talented, personable interaction
                  designer who can assist the User Experience Design team by
                  working with other designers and development teams on a
                  variety of projects. The OpenText User Experience Design group
                  is a distributed multi-disciplinary team of professionals that
                  are responsible for enhancing the UX of the company’s
                  collective product suites worldwide.`;

export const ABOUT_THE_COMPANY_ONE = `High level of proficiency with leading UX Design software
                  packages, such as Axure, Sketch, InVision, or Experience
                  Design including the core Adobe Creative Suite products.`;

export const ABOUT_THE_COMPANY_TWO = `Excellent written and oral communication and presentation
                  skills `;
export const ButtonsOfFilterPopup = {
  BUTTON1: 'Clear all',
  BUTTON2: 'Apply'
};
export const FilterTitles = {
  DISTANCE: 'Distance',
  DATE_POSTED: 'Date Posted',
  JOB_TYPE: 'Job Type',
  EXPERIENCE_LEVEL: 'Experience Level',
  TRANSPORT: 'Transport',
  GREEN_COMMUTE: 'Green Commute'
};
export const GreenCommuteOptions = {
  OPTION1: 'Yes',
  OPTION2: 'No'
};

export const FIND_JOBS_TYPO = 'Find Jobs';
export const JOB_LIST_TYPO = 'Job list';

export const CLEAR_ALL = 'Clear All';

export const BASED_ON_YOUR_TYPO = 'Based on your search';

export interface filterItem {
  id: number;
  value: string;
  isChecked: boolean;
}
export const filterConstants = {
  distance: [
    { id: 1, value: '0 - 10 kms', isChecked: false },
    {
      id: 2,
      value: '21 - 30 kms',
      isChecked: false
    },
    {
      id: 3,
      value: '31 - 40 kms',
      isChecked: false
    },
    {
      id: 4,
      value: '41 - 50 kms',
      isChecked: false
    }
  ],

  datePosted: [
    {
      id: 5,
      value: 'Past 24hrs',
      isChecked: false
    },
    {
      id: 6,
      value: 'Past week',
      isChecked: false
    },
    {
      id: 7,
      value: 'Past month',
      isChecked: false
    },
    {
      id: 8,
      value: 'Anytime',
      isChecked: false
    }
  ],

  jobType: [
    { id: 9, value: 'Full-Time', isChecked: false },
    { id: 10, value: 'Internship', isChecked: false },
    { id: 11, value: 'Contract', isChecked: false },
    { id: 12, value: 'Remote', isChecked: false }
  ],

  experienceLevel: [
    { id: 13, value: 'Fresher', isChecked: false },
    { id: 14, value: 'Mid-Level', isChecked: false },
    { id: 15, value: 'Director', isChecked: false },
    { id: 16, value: 'Executive', isChecked: false }
  ],
  transport: [
    { id: 17, value: 'Metro', isChecked: false },
    { id: 18, value: 'Motor Cycle', isChecked: false },
    { id: 19, value: 'Bus', isChecked: false },
    { id: 20, value: 'Car Pooling', isChecked: false }
  ]
};
