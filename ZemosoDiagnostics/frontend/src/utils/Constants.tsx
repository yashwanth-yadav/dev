import React from 'react';
import Kidney from '../assets/logos/Kidney.svg';
import Throid from '../assets/logos/Throid.svg';
import Body from '../assets/logos/Body.svg';
import DiabetiesTest from '../assets/logos/DiabetiesTest.svg';
import Covid from '../assets/logos/Covid.svg';
import Liver from '../assets/logos/Liver.svg';
import Lipid from '../assets/logos/Lipid.svg';
import BloodCount from '../assets/logos/BloodCount.svg';
import Award from '../assets/logos/Award.svg';
import Altos from '../assets/logos/Altos.svg';
import GooglePay from '../assets/logos/GooglePay.svg';
import Home from '../assets/logos/Home.svg';
import Labcorp from '../assets/logos/Labcorp.svg';
import LabTechnician from '../assets/logos/LabTechnician.svg';
import NetBanking from '../assets/logos/NetBanking.svg';
import Paypal from '../assets/logos/Paypal.svg';
import Pdf from '../assets/logos/Pdf.svg';
import Reports from '../assets/logos/Reports.svg';
import Shield from '../assets/logos/Shield.svg';
import Test from '../assets/logos/Test.svg';
import ZemosoLogo from '../assets/logos/ZemosoLogo.svg';
import PDF_h from '../assets/logos/PDF_h.svg';
import Google from '../assets/logos/Google.svg';
import Facebook from '../assets/logos/Facebook.svg';
import Apple from '../assets/logos/Apple.svg';
import CardLogo from '../assets/logos/CardLogo.svg';
import Zemoso from '../assets/logos/Zemoso.svg';
import Avatar from '../assets/logos/Avatar.svg';
import EdwardHoward from '../assets/logos/edwardHoward.svg';
import CovidTest from '../assets/logos/covidTest.svg';
import FullBodyTest from '../assets/logos/bodyTest.svg';

import Homesq from '../assets/logos/Homesq.svg';
import Reportssq from '../assets/logos/Reportssq.svg';
import Testsq from '../assets/logos/Testsq.svg';
import Doctorsq from '../assets/logos/Doctorsq.svg';
import LabLogo from '../assets/logos/labLogo.svg';
import AvatarLogo from '../assets/logos/AvatarLogo.svg';

import Calendar from '../assets/icons/calendar.svg';
import ChevronUp from '../assets/icons/chevronUp.svg';
import Dollar from '../assets/icons/dollar.svg';
import Info from '../assets/icons/info.svg';
import MapPin from '../assets/icons/mapPin.svg';
import Search from '../assets/icons/search.svg';
import Selected from '../assets/icons/selected.svg';
import Sort from '../assets/icons/sort.svg';
import Trash from '../assets/icons/trash.svg';
import User from '../assets/icons/user.svg';
import ClockRed from '../assets/icons/clockRed.svg';
import Download from '../assets/icons/download.svg';
import Users from '../assets/icons/users.svg';
import Logout from '../assets/icons/log-out.svg';
import Map from '../assets/icons/map.svg';
import Offer from '../assets/icons/offer.svg';
import Twitter from '../assets/icons/twitter.svg';
import FacebookIcon from '../assets/icons/facebook.svg';
import HomeIcon from '../assets/icons/home.svg';
import HelpCircle from '../assets/icons/help-circle.svg';
import CreditCard from '../assets/icons/credit-card.svg';
import FileTextIcon from '../assets/icons/file-text.svg';
import CardIcon from '../assets/icons/card.svg';
import Cart from '../assets/icons/shopping-cart.svg';
import LabTechnicianIcon from '../assets/icons/labTechnician.svg';
import PickUp from '../assets/icons/pickUp.svg';
import TestConducted from '../assets/icons/testConducted.svg';

import AppStore from '../assets/images/illustrations/app-store.svg';
import BodyTest from '../assets/images/illustrations/body-test.svg';
import Cardiac from '../assets/images/illustrations/cardiac.svg';
import Family from '../assets/images/illustrations/family.svg';
import GooglePlay from '../assets/images/illustrations/google-play.svg';
import PaymentSuccess from '../assets/images/illustrations/payment-success.svg';
import Stress from '../assets/images/illustrations/stress.svg';

import Close from '../assets/icons/close.svg';
import Clock from '../assets/icons/clock.svg';
import ChevronsRight from '../assets/icons/chevronsRight.svg';
import ChevronRight from '../assets/icons/chevronRight.svg';
import ChevronLeft from '../assets/icons/chevronLeft.svg';
import FileText from '../assets/icons/fileText.svg';
import Share from '../assets/icons/share.svg';
import Back from '../assets/icons/back.svg';
import ChecvronDown from '../assets/icons/chevronDown.svg';
import Check from '../assets/icons/check.svg';
import Add from '../assets/icons/add.svg';
import ChevronsRight_h from '../assets/icons/chevronsRight_h.svg';
import {
  LabDetails,
  MyAppointmentCardProps,
  PatientDetailsType,
  ReportCardProps,
  ReportsPageProps,
  ServiceCardProps,
  SignUpDetails,
  SlotTimeProps,
  SvgImageType,
  TestCardProps,
  TimeLinePropsType
} from './Types';
import moment from 'moment';

export const LOGOS: SvgImageType = {
  kidney: <Kidney />,
  throid: <Throid />,
  body: <Body />,
  diabities: <DiabetiesTest />,
  covid: <Covid />,
  liver: <Liver />,
  lipid: <Lipid />,
  bloodCount: <BloodCount />,
  google: <Google />,
  facebook: <Facebook />,
  apple: <Apple />,
  award: <Award />,
  altos: <Altos />,
  googlePay: <GooglePay />,
  home: <Home />,
  labcorp: <Labcorp />,
  labTechnician: <LabTechnician />,
  netBanking: <NetBanking />,
  paypal: <Paypal />,
  pdf: <Pdf />,
  reports: <Reports />,
  shield: <Shield />,
  test: <Test />,
  labLogo: <LabLogo />,
  zemosoLogo: <ZemosoLogo />,
  pdf_h: <PDF_h />,
  home_sq: <Homesq />,
  reports_sq: <Reportssq />,
  doctor_sq: <Doctorsq />,
  test_sq: <Testsq />,
  zemoso: <Zemoso />,
  Avatar: <AvatarLogo />,
  cardLogo: <CardLogo />,
  avatar: <Avatar />,
  covidTest: <CovidTest />,
  bodyTest: <FullBodyTest />,
  edwardHoward: <EdwardHoward />
};

export const ICONS: SvgImageType = {
  calendar: <Calendar />,
  chevronUp: <ChevronUp />,
  dollar: <Dollar />,
  info: <Info />,
  map: <MapPin />,
  search: <Search />,
  selected: <Selected />,
  sort: <Sort />,
  trash: <Trash />,
  user: <User />,
  download: <Download />,
  clock: <Clock />,
  chevronLeft: <ChevronLeft />,
  chevronRight: <ChevronRight />,
  chevronsRight: <ChevronsRight />,
  close: <Close />,
  fileText: <FileText />,
  share: <Share />,
  back: <Back />,
  chevronDown: <ChecvronDown />,
  mapPin: <Map />,
  logout: <Logout />,
  home: <HomeIcon />,
  offer: <Offer />,
  creditCard: <CreditCard />,
  fileTextIcon: <FileTextIcon />,
  helpCircle: <HelpCircle />,
  users: <Users />,
  check: <Check />,
  add: <Add />,
  chevronsRight_h: <ChevronsRight_h />,
  clockRed: <ClockRed />,
  facebook: <FacebookIcon />,
  twitter: <Twitter />,
  card: <CardIcon />,
  cart: <Cart />,
  labTechnician: <LabTechnicianIcon />,
  pickUp: <PickUp />,
  testConducted: <TestConducted />
};

export const IMAGES: SvgImageType = {
  appStore: <AppStore />,
  bodyTest: <BodyTest />,
  cardiac: <Cardiac />,
  family: <Family />,
  googlePlay: <GooglePlay />,
  paymentSuccess: <PaymentSuccess />,
  stress: <Stress />
};

export const PATIENT_DETAILS: PatientDetailsType[] = [
  {
    name: 'Patrick Smith',
    test: 'Covid RTPCR Test',
    relation: 'Self',
    gender: 'M',
    age: 30,
    price: 1200,
    noOfTests: 1
  },
  {
    name: 'Peter Smith',
    test: 'Covid RTPCR Test',
    relation: 'Self',
    gender: 'M',
    age: 30,
    price: 2400,
    noOfTests: 2
  }
];

export const RECENT_REPORTS: ReportCardProps[] = [
  {
    labName: 'Los Altos Center Lab',
    testName: 'COVID RT-PCR Test',
    date: '02 Feb 2022',
    time: '08.30 AM',
    isPending: false
  },
  {
    labName: 'Los Altos Center Lab',
    testName: 'COVID RT-PCR Test',
    date: '02 Feb 2022',
    time: '08.30 AM',
    isPending: false
  },
  {
    labName: 'Los Altos Center Lab',
    testName: 'COVID RT-PCR Test',
    date: '02 Feb 2022',
    time: '08.30 AM',
    isPending: false
  }
];

export const UPCOMING_TESTS: MyAppointmentCardProps[] = [
  {
    startLogo: 'covidTest',
    patientName: 'Patrick Smith',
    day: 'Wed',
    date: '23',
    fromTime: '7.00 am',
    toTime: '8.00 am',
    labName: 'Los Altos Center Lab',
    testName: 'Covid RTPCR'
  }
];

export const RECENT_TESTS: MyAppointmentCardProps[] = [
  {
    startLogo: 'covidTest',
    patientName: 'Peter Smith',
    day: 'Fri',
    date: '18',
    fromTime: '7.00 am',
    toTime: '8.00 am',
    labName: 'Los Altos Center Lab',
    testName: 'Covid RTPCR'
  },
  {
    startLogo: 'bodyTest',
    patientName: 'Peter Smith',
    day: 'Fri',
    date: '19',
    fromTime: '7.00 am',
    toTime: '8.00 am',
    labName: 'Los Altos Center Lab',
    testName: 'Full Body Checkup'
  }
];

export const TEST_CARDS: TestCardProps[] = [
  {
    logo: 'body',
    label: 'Full Body Check'
  },
  {
    logo: 'covid',
    label: 'Covid RTPCR'
  },
  {
    logo: 'liver',
    label: 'Liver Function Test'
  },
  {
    logo: 'bloodCount',
    label: 'Complete Blood Count'
  },
  {
    logo: 'diabities',
    label: 'Diabetes Test'
  },
  {
    logo: 'kidney',
    label: 'Kidney Function Test'
  },
  {
    logo: 'throid',
    label: 'Thyroid Test'
  },
  {
    logo: 'lipid',
    label: 'Lipid Profile'
  }
];

export const LAB_DETAILS = {
  labId: 1,
  name: 'Los Altos Center Lab',
  rating: '4.3',
  slotsAvailable: '4',
  reportTime: 'Reports ready in 24 hrs',
  price: '$1200 for 1 Test'
};
export const UPCOMING_REPORTS: ReportsPageProps[] = [
  {
    id: 1,
    month: '',
    date: '',
    time: '',
    lab_id: LAB_DETAILS,
    patient_id: []
  }
];
export const SERVICES_LIST: ServiceCardProps[] = [
  {
    logo: 'test',
    description: '1600+ Tests'
  },
  {
    logo: 'home',
    description: 'At Home Services'
  },
  {
    logo: 'labTechnician',
    description: 'Certified Professionals'
  },
  {
    logo: 'award',
    description: 'CLIA Certified Labs'
  },
  {
    logo: 'reports',
    description: 'Reports in 24 - 48 Hours'
  },
  {
    logo: 'shield',
    description: 'Safe and Hygenic'
  }
];
export const BOOKING_FOR: string[] = [
  'Myself',
  'Mother',
  'Father',
  'Son',
  'Daughter',
  'Others'
];

export const GENDERS: string[] = ['Male', 'Female', 'Others'];

export const initialSignUpDetails: SignUpDetails = {
  firstName: '',
  lastName: '',
  emailId: ''
};

export const LAB_DETAILS_CARDS: LabDetails[] = [
  {
    labId: 1,
    name: 'Los Altos Center Lab',
    rating: '4.3',
    slotsAvailable: '4 Slots Available',
    reportTime: 'Reports ready in 24 hrs',
    price: '$1200 for 1 Test'
  },
  {
    labId: 1,
    name: 'Los Altos Center Lab',
    rating: '4.3',
    slotsAvailable: '4 Slots Available',
    reportTime: 'Reports ready in 24 hrs',
    price: '$1200 for 1 Test'
  }
];

export const SampleAddress = {
  houseNumber: '',
  roadOrArea: '',
  zipCode: '',
  cityOrState: ''
};
export const Sampleaddress = {
  houseNumber: '',
  area: '',
  zipCode: '',
  city: ''
};

export interface SlotProps {
  startTime: string;
  endTime: string;
}
export const intervals = (startString: string, endString: string) => {
  const result: string[] = [];
  const finalResult: SlotProps[] = [];
  const start = moment(startString, 'hh:mm a');
  const end = moment(endString, 'hh:mm a');
  start.minutes(Math.ceil(start.minutes() / 15) * 15);
  let endTime = moment(startString, 'hh:mm a');
  const current = moment(start);

  while (current <= end) {
    endTime = moment(current, 'hh:mm a');
    if (result.includes(current.format('hh:mm a'))) {
      return null;
    } else {
      result.push(current.format('hh:mm a'));
      endTime.add(60, 'minutes');
      if (endTime <= end)
        finalResult.push({
          startTime: current.format('hh:mm a'),
          endTime: endTime.format('hh:mm a')
        });
      current.add(60, 'minutes');
    }
  }

  console.log('slots = ', finalResult);
  return finalResult;
};

export const WEEK_DAYS = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];

export interface Dates {
  date: string;
  day: string;
}

export const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

export const AVAILABLE_SLOTS: SlotProps[] = [
  {
    startTime: '06:00 AM',
    endTime: '12:00 PM'
  },
  {
    startTime: '01:00 PM',
    endTime: '04:00 PM'
  }
];

export const PATIENT_STEPS = ['Home', 'Covid RTPCR', 'Add Patient'];
export const LABSTEPS = [
  'Lab Test',
  'Select Appointment',
  'Add Address',
  'ReviewOrder'
];
export const TIMELINES: TimeLinePropsType[] = [
  {
    icon: 'check',
    className: 'active',
    title: 'Order placed',
    subTitle: 'Placed on Mon, 22 Feb, 11.00 AM'
  },
  {
    icon: 'labTechnician',
    className: 'inactive',
    title: 'Lab technician assigned',
    subTitle: 'Esther Howard'
  },
  {
    icon: 'pickUp',
    className: 'disabled',
    title: 'Sample collection',
    subTitle: 'On Tue, 23 Feb, 7.00 - 8.00 AM'
  },
  {
    icon: 'testConducted',
    className: 'disabled',
    title: 'Sample being examined',
    subTitle: 'Estimated time - 24 hrs'
  },
  {
    icon: 'fileText',
    className: 'disabled',
    title: 'Report ready',
    subTitle: ''
  }
];
