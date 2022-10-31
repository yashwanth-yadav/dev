import React, { useEffect, useState } from 'react';
import theme from '../../../theme';
import AQIList from '../../molecules/AQIList/AQIList';
import HorizontalStepper from '../../organisms/HorizontalStepper/HorizontalStepper';
import LandingPageTemplate from '../../templates/LandingPageTemplate/LandingPageTemplate';
import axios from 'axios';
import LandingRightPart from './LandingRightPart';

const items: never[] = [];

interface LangingPageProps {
  setcurrentLoc: React.Dispatch<React.SetStateAction<string>>;
  currentLoc: string;
}

export default function LandingPage(props: LangingPageProps) {
  const [stepperData, setstepperData] = useState<{
    firstStep: string;
    secondStep: string[];
    thirdStep: string[];
  }>({
    firstStep: '',
    secondStep: [],
    thirdStep: []
  });
  const [city, setCity] = useState<any>(items);
  const [city2, setCity2] = useState<any>(items);
  const [step, setStep] = useState<number>(0);
  const [steps, setSteps] = useState<string[]>([]);
  const [currentLocationOptions, setcurrentLocationOptions] = useState<
    string[]
  >([]);
  const [jobLocationOptions, setJobLocationOptions] = useState<string[]>([]);
  const [skillOptions, setSkillOptions] = useState<string[]>([]);
  const [data, setData] = React.useState<any>();

  const [tempCity1, settempCity1] = useState<any>(items);
  const [tempCity2, settempCity2] = useState<any>(items);

  useEffect(() => {
    axios
      .get('http://3.22.198.76:8008/data')
      .then((res) => {
        setSteps(res.data[0].steps);
        setData(res.data[1].locations);
        setcurrentLocationOptions(res.data[0].currentLocationOptions);
        setJobLocationOptions(res.data[0].jobLocationOptions);
        setSkillOptions(res.data[0].skillOptions);
      })
      .catch((err) => console.log('Error :', err));
  }, []);

  return (
    <div data-testid="landingPage">
      <LandingPageTemplate
        left={
          <HorizontalStepper
            currentLoc={props.currentLoc}
            tempCity1={tempCity1}
            settempCity1={settempCity1}
            tempCity2={tempCity2}
            settempCity2={settempCity2}
            setstepperData={setstepperData}
            stepperData={stepperData}
            setcurrentLoc={props.setcurrentLoc}
            aqi_data={data}
            steps={steps}
            currentLocationOptions={currentLocationOptions}
            jobLocationOptions={jobLocationOptions}
            skillOptions={skillOptions}
            city={city}
            setCity={setCity}
            setCity2={setCity2}
            setStep={setStep}
          ></HorizontalStepper>
        }
        right={
          city.length == 0 ? (
            <LandingRightPart
              text={
                step === 2
                  ? 'Enter your Skills to know how many jobs are in this Location'
                  : 'Enter Location to know Time Air Quality Index (AQI)'
              }
              image={
                step === 0 ? 'stay' : (step === 1 ? 'work' : 'jobsIllustration')
              }
              height={theme.spacing(62)}
              width={
                step === 0
                  ? theme.spacing(64)
                  : (step === 1
                  ? theme.spacing(95)
                  : theme.spacing(104.25))
              }
              city2={city2}
              // setCity2={setCity2}
              step={step}
            ></LandingRightPart>
          ) : (
            <AQIList items={city} step={step} city2={city2}></AQIList>
          )
        }
      ></LandingPageTemplate>
    </div>
  );
}
