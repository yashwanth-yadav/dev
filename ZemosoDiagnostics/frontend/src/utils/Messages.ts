import { LogoPropsType, ImagePropsType, IconPropsType } from './Types';

import { TestMenuItemPropsType } from '../components/molecules/TestMenuItem';

export const SEARCH_BAR_PLACEHOLDER = 'Search for lab tests, packages';
export const CURRENT_LOCATION_VALUE = 'Mountain view, CA, USA';
export const STARTING_FROM_TEXT = 'Starting from $1299';
export const REPORTS_READY_TEXT = 'Reports ready in 24 Hrs';
export const TESTS_NUMBER = '42 tests';
export const VIEW_DETAILS_TEXT = 'View Details';
export const BOOK_NOW_TYPO = 'Book now';
export const BANNER_HEADING_TYPO = '60% off on your first order';
export const BANNER_SECONDARY_TYPO = 'Your health is our priority';
export const SIGNUPMESSAGE = 'or sign up with';
export const NAME = 'Abby';
export const PLACE = 'San Jose, CA';
export const FEEDBACK =
  'Very friendly and professional. Loved the follow-up and progress calls. I would like to suggest Zemoso diagnostics to my friends and family.';
export const FAQ = 'Frequently Asked Questions';
export const FAQS: string[] = [
  'How soon can i get the report?',
  'Who needs Full Body Check-up?',
  'Can children can take this test?',
  'How many persons can book appointment through one account?'
];
export const EDIT_BUTTON_TYPO = 'Edit';
export const OTP_LABEL = 'OTP';
export const ADDRESS_LABEL = 'Default Address';
export const VERIFIED = 'Verified';
export const PENDING = 'Pending';

export const TESTIMONIAL_LIST: {
  logo: LogoPropsType['name'];
  username: string;
  place: string;
  feedback: string;
}[] = [
  {
    logo: 'avatar',
    username: 'Abby',
    place: 'San Jose, CA',

    feedback:
      '“Very friendly and professional. Loved the follow-up and progress calls. I would like to suggest Zemoso diagnostics to my friends and family.”'
  },
  {
    logo: 'avatar',
    username: 'Abby',
    place: 'San Jose, CA',

    feedback:
      '“Very friendly and professional. Loved the follow-up and progress calls. I would like to suggest Zemoso diagnostics to my friends and family.”'
  },
  {
    logo: 'avatar',
    username: 'Abby',
    place: 'San Jose, CA',

    feedback:
      '“Very friendly and professional. Loved the follow-up and progress calls. I would like to suggest Zemoso diagnostics to my friends and family.”'
  }
];

export const CUSTOMER_TESTIMONIALS = 'Customer Testimonials';

export const PENDING_TYPO = 'Pending';

export const TEST_MENU_ITEM: TestMenuItemPropsType[] = [
  { logo: 'home_sq', name: 'Home visit' },
  { logo: 'test_sq', name: '1 test included' },
  { logo: 'doctor_sq', name: 'Free consultation' },
  { logo: 'reports_sq', name: 'Online reports' }
];

export const TEST_INFO_MESSAGES: string[] = [
  'To check if you have an active COVID-19 infection',
  'If you are showing symptoms of COVID-19 infection',
  'If you had a contact with someone with confirmed COVID-19'
];

export const TEST_INFO_DETAILS: string[] = [
  'This package covers nasal/oral swab test & same day pickup.It indicates if you currently have the COVID-19 infection.',
  ' Disclaimer 1:For travelling purposes, please ensure the name is as per govt ID proof.',
  'Disclaimer 2: Vaccination status will be required and Covid Positive Reports will be made available as per local ',
  'Municipal corporation guidelines.'
];

export const REPORT_INFO = 'Reports ready in 24 Hours';
export const TEST_PRICE = 'Starting from $1200';
export const TEST_INFO_TYPO = 'Why you should book this package?';
export const ACCOUNT_OPTIONS_LIST: {
  startIcon: IconPropsType['name'];
  primaryText: string;
  secondaryText?: string;
  endIcon: IconPropsType['name'];
  handleOnClick?: () => void;
}[] = [
  {
    startIcon: 'mapPin',
    primaryText: 'Track My Orders',
    secondaryText: 'Track your recent orders & see order status ',
    endIcon: 'chevronRight'
  },
  {
    startIcon: 'users',
    primaryText: 'My Family & Friends',
    secondaryText: 'Manage & view family members & reports',
    endIcon: 'chevronRight'
  },
  {
    startIcon: 'creditCard',
    primaryText: 'Payments',
    secondaryText: 'Payment modes & refund status',
    endIcon: 'chevronRight'
  },
  {
    startIcon: 'home',
    primaryText: 'Manage Address',
    secondaryText: '2235 California Street Mountain View Cali...',
    endIcon: 'chevronRight'
  },
  {
    startIcon: 'offer',
    primaryText: 'Offers',
    secondaryText: 'See offers for more details',
    endIcon: 'chevronRight'
  },
  {
    startIcon: 'helpCircle',
    primaryText: 'Help',
    secondaryText: 'FAQ’s & general queries',
    endIcon: 'chevronRight'
  },
  {
    startIcon: 'fileTextIcon',
    primaryText: 'Terms & conditions',
    secondaryText: 'Get to know about our terms & conditons',
    endIcon: 'chevronRight'
  },
  {
    startIcon: 'logout',
    primaryText: 'Logout',
    endIcon: 'chevronRight',
  }
];

export const PATIENT_DETAILS = 'Patient Details';
export const E_REPORTS_INFO = 'E-Reports by 12hrs';

export const ZEMOSO_DIAGNOSTICS = 'Zemoso Diagnostics';
export const HOME = 'Home';
export const CONTACT_US = 'Contact us';
export const PRIVACY_POLICY = 'Privacy policy';
export const TERMS_AND_CONDITIONS = 'Terms & conditions';
export const TEST_YOU_CAN_CHOOSE_TEXT = 'Tests You Can Choose From';
export const SEE_MORE = 'See more';

export const TEST_DETAILS_LIST: {
  image: ImagePropsType['name'];
  title: string;
}[] = [
  {
    image: 'bodyTest',
    title: 'Full body checkup'
  },
  {
    image: 'cardiac',
    title: 'Cardiac Risk Assessment'
  },
  {
    image: 'stress',
    title: 'Stress Assessment'
  }
];

export const REPORTS = 'Reports';
export const UPCOMING_REPORTS = 'Upcoming Reports';
export const UPCOMING_TESTS = 'Upcoming Tests';
export const RECENT_REPORTS = 'Recent Reports';
export const RECENT_TESTS = 'Recent Tests';
export const TESTS_LIST_LABEL = 'Commonly Booked Test';
export const SAMPLE = 'Sample';
export const CARD_HOLDER = 'Card Holder';
export const EXPIRES = 'Expires';

export const SELECT_ADDRESS = 'Select Address';
export const ADD_ADDRESS = 'Add Address';

export const ADDRESS_LIST: {
  addressType: string;
  address: string;
  isSelected: boolean;
  isVerified: boolean;
}[] = [
  {
    addressType: 'HOME',
    address: '2235 California Street Mountain View California APT#021 - 11023',
    isSelected: true,
    isVerified: true
  },
  {
    addressType: 'OFFICE',
    address: '2235 California Street Mountain View California APT#021 - 11023',
    isSelected: true,
    isVerified: false
  }
];

export const ADD_PATIENT = 'Add Patient';
export const NEW_PATIENT = 'New Patient';

export const PATIENT_LIST: {
  name: string;
  details: string;
  isChecked: boolean;
}[] = [
  {
    name: 'Patrick Smith',
    details: 'Self, Male, 30 years',
    isChecked: false
  },
  {
    name: 'Will Smith',
    details: 'son, Male, 3 years',
    isChecked: false
  }
];

export const CARD_DETAILS = 'Card Details';
export const ADD_CARD = 'Add Card';
export const OTHER_PAYMENT_OPTIONS = 'Other Payment Options';
export const CARD_DETAILS_INFO = {
  cardNumber: '1244 1234 1345 3255',
  cardHolderName: 'Yessie',
  expiryDate: '02/25'
};

export const PAYMENT_OPTIONS_LIST: {
  logo: LogoPropsType['name'];
  name: string;
}[] = [
  {
    logo: 'paypal',
    name: 'PayPal'
  },
  {
    logo: 'googlePay',
    name: 'Google Pay'
  },
  {
    logo: 'netBanking',
    name: 'Net Banking'
  }
];

export const TIME_SLOT_SELECTED = 'Time Slots Selected';
export const WHY_CHOOSE_US = 'Why Choose us';
export const LAB_NAME = 'Los Altos Center Lab';
export const LAB_RATING = '4.3';
export const LAB_AVAILABLE_SLOTS = '4 Slots Available';
export const LAB_REPORTS_TIME = 'Reports ready in 24 hrs';
export const TEST_AMOUNT = '$1200 for 1 Test';
export const ADD_PATIENT_DETAILS = 'Add Patient Details';
export const BOOKING_FOR_WHOM = 'Booking for whom';
export const GENDER_LABEL = 'Gender';
export const SAVE_DETAILS_CHECKBOX_LABEL = 'Save details for future';
export const CONTINUE = 'Continue';
export const HAVE_ACCOUNT = 'Already have an account?';
export const LOGIN = 'Login';
export const FIRST_NAME_LABEL = 'First Name';
export const LAST_NAME_LABEL = 'Last Name';
export const EMAIL_ID_LABEL = 'Email Id';
export const FIRST_NAME_PLACEHOLDER = 'eg: Patrick';
export const LAST_NAME_PLACEHOLDER = 'eg: Smith';
export const EMAIL_PLACEHOLDER = 'eg: patricksmith@gmail.com';

export const USER_DATA = {
  username: 'Patrick Smith',
  email: 'patricksmith@gmail.com',
  accountOptionsList: ACCOUNT_OPTIONS_LIST,
  phoneNumber: '+1 330-617-3324'
};
export const CANCEL_TYPO = 'Cancel';
export const TEST_TYPO = 'for 1 Test';
export const ADD_TEST = 'Add Test';
export const SORT = 'Sort';
export const SELECT_LAB = 'Select Lab';
export const NEXT = 'next';
export const BACK = 'back';
export const SELECT_APPOINTMENT = 'Select Appointment';

export const ORDER_PLACED = 'Your order has been placed';
export const INSTRUCTIONS = 'Instructions';
export const INSTRUCTION_TEXT =
  " Please don't eat or drink anything other than water for 8-10 hours prior to the appointment.";
export const BACK_TO_HOME = 'Back to Home';
export const TRACK_YOUR_ORDER = 'Track Your Order';
export const TRACK_ORDER = 'Track your order';
export const TRACK_ADDRESS =
  '2235 California Street Mountain View California APT..';
export const TOTAL_PAID = 'Total Amount Paid - $1200';
export const TRACK_TEST = 'COVID RT-PCR Test';
export const TRACK_PERSON = 'Patrick Smith';
export const GREET_USER = 'Hey ';
export const ENTER_MOBILE = 'Enter your Mobile Number';
export const ENTER_OTP = 'Enter the OTP to verify your details';
export const MOBILE_FIELD_LABEL = 'Mobile Number';
export const MOBILE_FIELD_PLACEHOLDER = '+1 (330) 617-3324';
export const GET_OTP = 'Get OTP';
export const VERIFY = 'Verify';
