/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  ButtonProps as ButtonGroupProps,
  ChipProps,
  StepperProps
} from '@mui/material';
import { AppointmentProps } from '../pages/PatientDetailPage';

export interface SvgImageType {
  [key: string]: JSX.Element;
}

export interface IconPropsType {
  name:
    | 'download'
    | 'calendar'
    | 'chevronUp'
    | 'dollar'
    | 'info'
    | 'map'
    | 'search'
    | 'selected'
    | 'sort'
    | 'trash'
    | 'user'
    | 'clock'
    | 'chevronLeft'
    | 'chevronRight'
    | 'chevronsRight'
    | 'close'
    | 'fileText'
    | 'share'
    | 'back'
    | 'chevronDown'
    | 'mapPin'
    | 'logout'
    | 'home'
    | 'offer'
    | 'creditCard'
    | 'fileTextIcon'
    | 'helpCircle'
    | 'users'
    | 'clockRed'
    | 'add'
    | 'twitter'
    | 'facebook'
    | 'check'
    | 'chevronsRight_h'
    | 'card'
    | 'cart'
    | 'labTechnician'
    | 'pickUp'
    | 'testConducted';
  [key: string]: unknown;
}

export interface ImagePropsType {
  name:
    | 'appStore'
    | 'bodyTest'
    | 'cardiac'
    | 'family'
    | 'googlePlay'
    | 'paymentSuccess'
    | 'stress';
  [key: string]: unknown;
}

export const colorOptions = [
  'inherit',
  'primary',
  'secondary',
  'success',
  'error',
  'info',
  'warning',
  'interactiveBlue100',
  'interactiveBlue50',
  'interactiveBlue300',
  'interactiveBlue500',
  'interactiveBlue800',
  'structuralPurple50',
  'structuralPurple100',
  'structuralPurple500',
  'structuralPurple800',
  'gammaHigh',
  'gammaMedium',
  'gammaLow',
  'gammaButtonText',
  'gammaWhite',
  'grey50',
  'grey100',
  'grey200',
  'grey300',
  'grey500',
  'grey700',
  'red500',
  'greenSuccess',
  'red200'
] as const;

export interface LogoPropsType {
  name:
    | 'kidney'
    | 'throid'
    | 'body'
    | 'diabities'
    | 'covid'
    | 'liver'
    | 'lipid'
    | 'bloodCount'
    | 'award'
    | 'altos'
    | 'googlePay'
    | 'labcorp'
    | 'labTechnician'
    | 'netBanking'
    | 'paypal'
    | 'pdf'
    | 'reports'
    | 'shield'
    | 'test'
    | 'home'
    | 'zemosoLogo'
    | 'pdf_h'
    | 'google'
    | 'apple'
    | 'facebook'
    | 'home_sq'
    | 'reports_sq'
    | 'doctor_sq'
    | 'test_sq'
    | 'zemoso'
    | 'Avatar'
    | 'cardLogo'
    | 'labLogo'
    | 'avatar'
    | 'covidTest'
    | 'bodyTest'
    | 'edwardHoward';
}

export interface ProfileInfoProps extends LogoPropsType {
  username?: string;
  email?: string;
  phoneNumber: string;
}

export interface TestimonialProps extends LogoPropsType {
  username?: string;
  place?: string;
  feedback?: string;
}

export interface AccountOptionsProps {
  startIcon: IconPropsType['name'];
  primaryText: string;
  secondaryText?: string;
  handleOnClick?: () => void;
  endIcon: IconPropsType['name'];
}

export interface AccountOptionsProps {
  startIcon: IconPropsType['name'];
  primaryText: string;
  secondaryText?: string;
  handleOnClick?: () => void;
  endIcon: IconPropsType['name'];
}

export interface AccountOptionsProps {
  startIcon: IconPropsType['name'];
  primaryText: string;
  secondaryText?: string;
  handleOnClick?: () => void;
  endIcon: IconPropsType['name'];
}
export interface AccountInfoListProps extends ProfileInfoProps {
  accountOptionsList: AccountOptionsProps[];
  handleClose: () => void;
  isClosed: boolean;
}

export interface FormControlProps {
  activeStep: number;
  buttonText?: string;
  day?: string;
  month?: string;
  toTime?: string;
  fromTime?: string;
  date?: string;
  numberOfPatients?: number;
  labName?: string;
  testPrice?: string;
  isSelectPatient?: boolean;
  islabs: boolean;
  handleButton: (currentStep: number) => void;
  appointment?: AppointmentProps
}

export type textColor = typeof colorOptions[number];

export interface ButtonProps extends ButtonGroupProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export interface NavItemProps {
  label: string;
  selected?: boolean;
}
export interface TestCardProps {
  id?: number;
  logo: LogoPropsType['name'];
  label: string;
}

export interface MyAppointmentCardProps {
  startLogo: LogoPropsType['name'];
  testName: string;
  labName: string;
  day: string;
  patientName: string;
  date: string;
  fromTime: string;
  toTime: string;
}
export interface AddressCardPropsType {
  addressType: string;
  address: string;
  isSelected: boolean;
  isVerified: boolean;
  handleChange?: () => void;
}

export interface TestimonialListProps {
  testimonialList: {
    logo: LogoPropsType['name'];
    username: string;
    place: string;
    feedback: string;
  }[];
}

export interface ReportCardProps {
  labName: string;
  testName: string;
  date?: string;
  time?: string;
  isPending: boolean;
}
export interface ReportsPageProps {
  id: number;
  date: string;
  month: string;
  time: string;
  lab_id: LabDetails;
  patient_id: any[];
}
export interface TestInfoProps {
  testName: string;
}

export interface ChipsProps extends ChipProps {
  id: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  selected: boolean;
}
export interface PatientDetailsType {
  name: string;
  test: string;
  relation: string;
  gender: string;
  age: number;
  price: number;
  noOfTests: number;
}

export interface PatientDetailsPropsType {
  patientDetails: PatientDetailsType[];
}

export interface ReportsInfoPropsType {
  upcomingReports: ReportsPageProps[];
  recentReports: ReportCardProps[];
}

export interface MyAppointmentCardPropsType {
  upcomingTests: MyAppointmentCardProps[];
  recentTests: MyAppointmentCardProps[];
}
export interface LabDetailCardProps {
  lab: LabDetails;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  selected: boolean;
}

export type LabDetails = {
  labId: number;
  name: string;
  rating: string;
  slotsAvailable: string;
  reportTime: string;
  price: string;
  [key: string]: any;
};
export interface ReviewDetailsProps {
  date: string;
  time: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export interface ReviewDetailsProps {
  date: string;
  time: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export interface ServiceCardProps {
  logo: LogoPropsType['name'];
  description: string;
}
export interface InitialPatientDetails {
  name: string;
  bookingFor: string;
  gender: string;
  age: number;
}

export interface DateFieldProps {
  label: string;
  handleChange?: (...args: any[]) => void;
}

export interface InputFieldProps {
  label: string;
  placeholder: string;
  handleChange?: (...args: any[]) => void;
  value?: any;
}

export interface SignUpDetails {
  firstName: string;
  lastName: string;
  emailId: string;
}

export interface SteppersProps extends StepperProps {
  steps: string[];
  step: number;
  labStepper: boolean;
}

export interface AddressFormProps {
  houseNumber: string;
  roadOrArea: string;
  zipCode: string;
  cityOrState: string;
}

export interface Slots {
  id: number;
  label: string;
}

export interface Dates {
  date: string;
  day: string;
}
export interface Time {
  time: number;
  meridian: 'AM' | 'PM';
}
export interface TimeSlotProps {
  id: number;
  startTime: string;
  endTime:string;
  setTime: (argument: AppointmentProps) => void;
  appointment: AppointmentProps;
}

export interface MonthChipProps {
  label: string;
}
export interface DateProps {
  label: Dates;
}

export interface SlotTimeProps {
  startTime: Time;
  endTime: Time;
}

export interface TimeLinePropsType {
  icon: IconPropsType['name'];
  className: string;
  title: string;
  subTitle: string;
  [key: string]: any;
}

export interface OtpFieldPropsType {
  handleChange?: (...args: any[]) => void;
}

export interface FormProps {
  handleForm?: (form: 'mobileForm' | 'otpForm') => void;
}

export interface UserPropsType {
  userId: string;
  userName: string;
  email: string;
}
