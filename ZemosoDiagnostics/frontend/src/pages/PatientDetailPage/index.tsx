/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Box, Card, Divider, Typography, Stack } from '@mui/material';
import Icon from '../../components/atoms/Icon';
import { FormTemplate } from '../../components/templates/FormTemplate';
import Stepper from '../../components/molecules/Stepper';
import FormControl from '../../components/organisms/FormControl';
import TestInfo from '../../components/molecules/TestInfo';
import { LabTestsForm } from '../../components/organisms/LabTestsForm';
import axios from 'axios';
import theme from '../../theme';
import {
  InitialPatientDetails,
  AddressFormProps,
  LabDetails
} from '../../utils/Types';
import {
  LABSTEPS,
  PATIENT_STEPS,
  SlotProps,
  SampleAddress,
  MONTHS,
  Sampleaddress
} from '../../utils/Constants';
import { handleText } from '../../utils/utilityFunctions';
import { useNavigate } from 'react-router-dom';
import AddPatient from '../../components/organisms/AddPatient';
import { PatientForm } from '../../components/organisms/PatientForm';
import SelectAddress from '../../components/organisms/SelectAddress';
import AddressForm from '../../components/organisms/AddressForm';
import { useAuth0 } from '@auth0/auth0-react';
import { CARD_DETAILS_INFO, PAYMENT_OPTIONS_LIST } from '../../utils/Messages';
import Logo from '../../components/atoms/Logo';
import { PatientDetails } from '../../components/molecules/PatientDetails';
import ReviewDetails from '../../components/molecules/ReviewDetails';
import SlotBooking from '../../components/organisms/SlotBooking';
import CreditCardDetails from '../../components/organisms/CreditCardDetails';
import AlertDialog from './Dialog';

export interface AppointmentProps {
  month: string;
  date: string;
  day: string;
  time: SlotProps;
}
const PatientDetailsPage = () => {
  const {user} = useAuth0();
  const navigate = useNavigate();
  const [isSelectPatient, setisSelectPatient] = useState<boolean>(false);
  const [noOfPatients, setNoOfPatients] = useState<number>(0);

  const [patientsList, setPatientsList] = useState<any>([]);
  const [listOfPatients, setlistOfPatients] = useState<any>([]);
  console.log('list of patients', listOfPatients);

  const [step, setStep] = useState<number>(1);
  const [labs, setLabs] = useState<boolean>(false);
  const [steps, setSteps] = useState<string[]>(PATIENT_STEPS);
  const [selectedLab, setSelectedLab] = React.useState<any>(null);
  const [selectedCardId, setSelectedCardId] = React.useState<number>();
  const [address, setAddress] = useState<any>(Sampleaddress);

  const [selectAddressList, setSelectAddressList] = useState<any>([]);

  const [open, setOpen] = React.useState(false);

  const [labsData, setlabsData] = useState<any>([]);

  useEffect(() => {
    const promises = [];

    promises.push(axios.get('https://cloud-svc.zemosodia50.ga/labs/'));
    promises.push(
      axios.get(`https://cloud-svc.zemosodia50.ga/patients/${user?.sub}`)
    );
    promises.push(
      axios.get(`https://cloud-svc.zemosodia50.ga/addresses/${user?.sub}`)
    );
    promises.push(
      axios.get(`https://cloud-svc.zemosodia50.ga/appointments/${user?.sub}`)
    );

    Promise.all(promises)
      .then((responses) => {
        return Promise.all(
          responses.map((response) => {
            return response.data;
          })
        );
      })
      .then((data) => {
        console.log('Extracted data is &&&&7', data);
        setlabsData(data[0]);
        if (data[1].length > 0) {
          setisSelectPatient(true);
        } else if (data[2].length > 0) {
          setisSelectAddress(true);
        }


        setPatientsList(data[1]);
        setSelectAddressList(data[2]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleNewAppointment = () => {

    const newAppointment = {
      patientId: listOfPatients[0].patientId,
      labId: '1',
      month: appointment.month.toString(),
      date: appointment.date.toString(),
      time: appointment.time.startTime.toString()
    };
    console.log('appoint mae ',newAppointment);
    console.log('selectlab',selectedLab);
    axios
      .post(
        'https://cloud-svc.zemosodia50.ga/appointments/',
        newAppointment
      )
      .then((res) => {
        console.log('Post appointment ----', res);
      })
      .catch((err) => console.log(err));
  };

  const handleNewPatient = () => {
    const newPatientDetails = {
      userId: user?.sub?.toString(),
      relation: patientDetails.bookingFor,
      name: patientDetails.name,
      age: patientDetails.age,
      gender: patientDetails.gender,
      isChecked: false
    };

    axios
      .post('https://cloud-svc.zemosodia50.ga/patients/', {
        userId: user?.sub?.toString(),
        relation: patientDetails.bookingFor.toString(),
        name: patientDetails.name.toString(),
        age:  patientDetails.age.toString(),
        gender: patientDetails.gender.toString()
      })
      .then((res) => {
        console.log('Post patient : ----', res);
      })
      .catch((err) => console.log(err));
    setPatientsList([...patientsList.concat(newPatientDetails)]);
  };
  const initialPatientDetails: InitialPatientDetails = {
    name: '',
    bookingFor: 'Self',
    gender: 'Male',
    age: 0
  };

  const handlePatientsList = (
    checkedPatientsList: { name: string; details: string; isChecked: boolean }[]
  ) => {
    setlistOfPatients([]);
    console.log('Selected patients ****************', checkedPatientsList);
    const checkedPatients: any = [];
    for (const element of checkedPatientsList) {
      if (element.isChecked) {
        checkedPatients.push(element);
      }
    }

    console.log('checked patients ****************', checkedPatients);

    setlistOfPatients([...checkedPatients]);
  };

  const [patientDetails, setPatientDetails] =
    React.useState<InitialPatientDetails>(initialPatientDetails);

  const [isSelectAddress, setisSelectAddress] = useState<boolean>(false);
  const handleNewAddress = () => {
    console.log('Adress is : ******', address);

    const newAddressDetails = {
      userId: user?.sub?.toString(),
      houseNo: address.houseNumber,
      area: address.roadOrArea,
      zipCode: address.zipCode,
      city: address.cityOrState,
      isSelected: false
    };

    axios
      .post('https://cloud-svc.zemosodia50.ga/addresses/', {
        userId: user?.sub?.toString(),
        houseNo: address.houseNumber,
        area: address.roadOrArea,
        zipCode: address.zipCode,
        city: address.cityOrState,
      })
      .then((res) => {
        console.log('Posted Address ----', res.data);
      });

    setSelectAddressList([...selectAddressList.concat(newAddressDetails)]);
    setAddress(SampleAddress);
  };

  const [appointment, setAppointment] = useState<AppointmentProps>({
    month: '',
    day: '',
    date: '',
    time: { startTime: '', endTime: '' }
  });

  const handleAppointment = (data: AppointmentProps) => {
    setAppointment(data);
  };

  const handleTimeSlot = () => {
    setStep(1);
  };

  const handleSelectedLab = (labDetails: any, id: number) => {
    setSelectedCardId(id);
    setSelectedLab(labDetails);
  };

  const handleBack = () => {
    if (step == 1 && !labs) {
      navigate('/');
    } else if (step == 2 && !labs) {
      if (patientsList.length > 0) {
        setisSelectPatient(true);
      }
      setStep(step - 1);
    } else if (step == 2 && !labs && patientsList.length != 0) {
      setisSelectPatient(false);
    } else if (labs && step == steps.length - 1) {
      setStep(step - 1);
    } else if (step == 2 && isSelectAddress && labs) {
      setStep(step - 1);
      setisSelectAddress(false);
    } else if (step == 3 && labs) {
      setisSelectPatient(true);
      setStep(step - 1);
    } else if (step === 4 && labs) {
      setSteps([...LABSTEPS]);
      setStep(step - 1);
    } else if (step !== 0) {
      setStep(step - 1);
    } else if (labs && step === 0) {
      setSteps([...PATIENT_STEPS]);
      setStep(2);
      setLabs(false);
    }
  };
  const handleNext = () => {
    if (step == 0) {
      if (selectedLab == null) {
        setOpen(true);
        return;
      }
      setStep(step + 1);
    } 
    else if (step == 1 && labs) {
      if (
        appointment.month == '' ||
        appointment.day == '' ||
        appointment.date == '' ||
        appointment.time.startTime == '' ||
        appointment.time.endTime == ''
      ) {
        setOpen(true);
        return;
      }
      setStep(step + 1);
    } else if (
      (step === 2 && patientsList.length === 0 && !labs) ||
      (step === 2 && patientsList.length != 0 && !labs && !isSelectPatient)
    ) {
      if (patientDetails.name == '') {
        setOpen(true);
        return;
      }
      handleNewPatient();
      setisSelectPatient(true);
    } else if (labs && step == steps.length - 2 && isSelectAddress) {
      let valid=false;
      for(let i=0;i<selectAddressList.length;i++){
        if(selectAddressList[i].isSelected==true){
          valid=true;
          break;
        }
      }
      if (!valid) {
        setOpen(true);
        return;
      }
      setStep(step + 1);
    } else if (
      (step === 2 && selectAddressList.length == 0 && labs) ||
      (step === 2 && selectAddressList.length != 0 && labs)
    ) {
      if (address.houseNumber==''||address.roadOrArea==''||address.zipCode==''||address.cityOrState=='') {
        setOpen(true);
        return;
      }
      handleNewAddress();
      setisSelectAddress(true);
    } else if (step == steps.length - 3 && selectAddressList.length > 0) {
      setStep(step + 1);
      setisSelectAddress(true);
    } else if (step === 3 && labs) {
      setSteps([]);
      setStep(step + 1);
    } else if (step === 4 && labs) {
      handleNewAppointment();
    } else if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      if (noOfPatients == 0) {
        setOpen(true);
        return;
      }
      setSteps([...LABSTEPS]);
      setStep(0);
      setLabs(true);
    }
  };

  const ShowLabTestsForm = () => {
    return (
      <Card
        data-testid="test-info"
        sx={{
          borderRadius: theme.spacing(2),
          maxWidth: theme.spacing(145.75),
          minHeight: theme.spacing(140),
          boxShadow: theme.shadows[1]
        }}
      >
        <LabTestsForm
          labsData={labsData}
          handleSelectedlab={handleSelectedLab}
          selectedLab={selectedCardId}
        />
      </Card>
    );
  };

  const ShowSlotBooking = () => {
    return (
      <Card
        data-testid="test-info"
        sx={{
          borderRadius: theme.spacing(2),
          maxWidth: theme.spacing(145.75),
          minHeight: theme.spacing(140),
          boxShadow: theme.shadows[1],
          p: '24px'
        }}
      >
        <SlotBooking
          handleAppointment={handleAppointment}
          appointment={appointment}
        />
      </Card>
    );
  };

  const ShowReviewDetailsForm = () => {
    return (
      <Card
        data-testid="test-info"
        sx={{
          borderRadius: theme.spacing(2),
          width: theme.spacing(145.75),
          minHeight: theme.spacing(140),
          boxShadow: theme.shadows[1],
          px: '72px',
          py: '24px'
        }}
      >
        <Box
          sx={{
            mx: '1.25rem',
            mt: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            maxwidth: '28.125rem',
            alignItems: 'center',
            mb: '1.25rem'
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              py: '0.25rem',
              pl: '0.25rem',
              width: '100%',
              border: `1px solid ${theme.palette.grey100.main}`,
              borderRadius: '0.5rem',
              minHeight: '3.25rem'
            }}
          >
            <Logo name="labLogo" />
            <Box
              sx={{
                ml: '0.75rem',
                display: 'flex',
                flex: 1,
                wordWrap: 'break-word'
              }}
            >
              <Typography
                sx={{
                  display: 'flex',
                  flex: 1,
                  ...theme.typography.body3,
                  color: theme.palette.gammaHigh.main
                }}
              >
                {selectedLab?.name}
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              width: '100%',
              marginTop: '12px',
              backgroundColor: '#FFFFFF',
              boxShadow: '0px 0px 12px rgba(233, 232, 237, 0.53)',
              borderRadius: '12px'
            }}
          >
            <Box sx={{ margin: '12px', display: 'flex' }}>
              <Typography
                sx={{
                  ...theme.typography.caption2,
                  color: theme.palette.gammaMedium.main
                }}
              >
                Item total
              </Typography>
              <Typography
                sx={{
                  marginLeft: 'auto',
                  ...theme.typography.caption2,
                  color: theme.palette.gammaMedium.main
                }}
              >
                $1200{' '}
              </Typography>
            </Box>
            <Box sx={{ margin: '12px', display: 'flex' }}>
              <Typography
                sx={{
                  ...theme.typography.caption2,
                  color: theme.palette.gammaMedium.main
                }}
              >
                Discount
              </Typography>
              <Typography
                sx={{
                  marginLeft: 'auto',
                  ...theme.typography.caption2,
                  color: theme.palette.greenSuccess.main
                }}
              >
                -$100{' '}
              </Typography>
            </Box>
            <Box sx={{ margin: '12px', display: 'flex' }}>
              <Typography
                sx={{
                  ...theme.typography.caption2,
                  color: theme.palette.gammaMedium.main
                }}
              >
                Grand Total
              </Typography>
              <Typography
                sx={{
                  marginLeft: 'auto',
                  ...theme.typography.caption1,
                  color: theme.palette.gammaHigh.main
                }}
              >
                $1100{' '}
              </Typography>
            </Box>{' '}
          </Box>

          <Box sx={{ mb: '0.625rem', mt: '17px', width: '100%' }}>
            <PatientDetails patientDetails={listOfPatients} />
          </Box>
          <Box sx={{ mb: '0.625rem', width: '100%' }}>
            <ReviewDetails
              onClick={handleTimeSlot}
              date={`${appointment.day.substring(0, 3)}, ${MONTHS[
                Number(appointment.month) - 1
              ].substring(0, 3)} ${appointment.date}, 2022`}
              time={`${appointment.time.startTime.substring(0, 5)} - ${
                appointment.time.endTime
              }`}
            />
          </Box>
        </Box>
      </Card>
    );
  };

  const renderForm = (currentStep: number, isLabs: boolean) => {
    switch (currentStep) {
      case 0:
        if (isLabs) {
          return <ShowLabTestsForm />;
        } else {
          return <>duplicate</>;
        }
      case 1:
        if (isLabs) {
          return <ShowSlotBooking />;
        } else {
          return <TestInfo testName={'Covid RTPCR'} />;
        }

      case 2:
        if (!isLabs && !isSelectPatient) {
          return (
            <PatientForm
              setPatientsList={setPatientsList}
              patientsList={patientsList}
              isSelectPatient={isSelectPatient}
              patientDetails={patientDetails}
              setPatientDetails={setPatientDetails}
            ></PatientForm>
          );
        } 

        else if (selectAddressList.length > 0 && isLabs) {
          return (
            <SelectAddress
              addressList={selectAddressList}
              setSelectAddressList={setSelectAddressList}
              setIsInSelectAddressform={setisSelectAddress}
            />
          );
        }
        else if (patientsList.length > 0 && !isLabs) {
          return (
            <AddPatient
              handlePatientsList={handlePatientsList}
              patientList={patientsList}
              noOfPatients={noOfPatients}
              setNoOfPatients={setNoOfPatients}
              setIsInSelectPatientform={setisSelectPatient}
            />
          );
        } else if (isLabs && !isSelectAddress) {
          return (
            <Card
              sx={{
                borderRadius: theme.spacing(2),
                maxWidth: theme.spacing(145.75),
                minHeight: theme.spacing(140),
                boxShadow: theme.shadows[1],
                padding: '20px'
              }}
            >
              <AddressForm address={address} setAddress={setAddress} />
            </Card>
          );
        } 
        return <>default</>;
      case 3:
        return <ShowReviewDetailsForm />;
      case 4:
        return (
          <div
            style={{
              width: '100%',
              marginLeft: '80px',
              marginRight: '100px',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between'
            }}
          >
            <div style={{ width: 'max-content' }}>
              <ShowReviewDetailsForm />
            </div>
            <Divider
              orientation="vertical"
              sx={{
                width: '1px',
                height: 'inherit',
                background: 'grey100.main'
              }}
            />
            <div>
              <CreditCardDetails
                cardDetailsInfo={CARD_DETAILS_INFO}
                paymentOptionsList={PAYMENT_OPTIONS_LIST}
              />
            </div>
          </div>
        );
      default:
        return <>default</>;
    }
  };

  return (
    <FormTemplate
      footer={
        <FormControl
          activeStep={step}
          handleButton={handleNext}
          labName={selectedLab?.name}
          testPrice={selectedLab?.price}
          buttonText={handleText(
            step,
            labs,
            isSelectPatient,
            selectAddressList,
            isSelectAddress
          )}
          numberOfPatients={noOfPatients}
          isSelectPatient={isSelectPatient}
          islabs={labs}
          appointment={appointment}
        />
      }
    >
      {step !== 4 ? (
        <>
          <AlertDialog open={open} setOpen={setOpen}></AlertDialog>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              marginTop: '5rem',
              marginLeft: '4.6875rem'
            }}
          >
            <Box
              onClick={handleBack}
              sx={{
                display: 'flex',
                cursor: 'pointer',
                flexDirection: 'row',
                alignSelf: 'flex-start'
              }}
            >
              <Icon name="back" />
              <Typography
                sx={{
                  marginLeft: '0.25rem',
                  ...theme.typography.body3,
                  color: theme.palette.interactiveBlue500.main
                }}
              >
                Back
              </Typography>
            </Box>

            <Stack
              direction="column"
              justifyContent="center"
              alignItems="center"
              sx={{ flexGrow: 1 }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flex: 1,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                <Box
                  sx={{
                    display: 'flex'
                  }}
                >
                  <Stepper steps={steps} step={step} labStepper={labs} />
                </Box>
              </Box>

              <Box
                sx={{
                  marginTop: '3.125rem',
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',

                  justifyContent: 'center'
                }}
              >
                {renderForm(step, labs)}
              </Box>
            </Stack>
          </Box>
        </>
      ) : (
        <>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              marginTop: '5rem',
              marginLeft: '4.6875rem'
            }}
          >
            <Box
              onClick={handleBack}
              sx={{
                display: 'flex',
                cursor: 'pointer',
                flexDirection: 'row',
                alignSelf: 'flex-start'
              }}
            >
              <Icon name="back" />
              <Typography
                sx={{
                  marginLeft: '0.25rem',
                  ...theme.typography.body3,
                  color: theme.palette.interactiveBlue500.main
                }}
              >
                Back
              </Typography>
            </Box>

            <Box
              sx={{
                display: 'flex',
                flex: 1,
                flexDirection: 'row',
                alignItems: 'flex-start',
              }}
            >
              <Box
                sx={{
                  display: 'flex'
                }}
              >
                <Typography variant="subtitle1" sx={{ pl: '150px' }}>
                  Check out
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box
            sx={{
              marginTop: '3.125rem',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',

              justifyContent: 'center'
            }}
          >
            {renderForm(step, labs)}
          </Box>
        </>
      )}
    </FormTemplate>
  );
};

export default PatientDetailsPage;
