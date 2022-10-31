/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import { fireEvent } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import '@testing-library/jest-dom';
import HorizontalStepper from './HorizontalStepper';

const steps = ['Your Location', 'Job Location', 'Your Skills'];
const cityoptions = ['New Delhi', 'Bangalore', 'Hyderabad'];
const joboptions = ['UI/UX Designer', 'Graphic Designer', 'DevOps'];

afterEach(cleanup);
describe('testing HorizontalStepper', () => {
  it('should render the text', () => {
    const history = createMemoryHistory();
    render(
      <Router location={history.location} navigator={history}>
        <HorizontalStepper
          aqi_data={[
            { name: 'Hyderabad', AQIIndex: 333 },
            { name: 'Banglore', AQIIndex: 345 }
          ]}
          steps={steps}
          currentLocationOptions={cityoptions}
          jobLocationOptions={cityoptions}
          skillOptions={joboptions}
          city={[
            { name: 'Hyderabad', AQIIndex: 333 },
            { name: 'Banglore', AQIIndex: 345 }
          ]}
          setCity={() => {
            console.log('Handle finish triggerd');
          }}
          setCity2={() => {
            console.log('Handle finish triggerd');
          }}
          setStep={() => {
            console.log('Handle finish triggerd');
          }}
          setcurrentLoc={() => console.log('set current loc data')}
          setstepperData={() => console.log('set current loc data')}
          stepperData={{
            firstStep: '',
            secondStep: [],
            thirdStep: []
          }}
          tempCity1={[]}
          settempCity1={() => {
            console.log('Handle finish triggerd');
          }}
          tempCity2={[]}
          settempCity2={() => {
            console.log('Handle finish triggerd');
          }}
          currentLoc={''}
        />
      </Router>
    );
    const divElement = screen.getByRole('text');

    expect(divElement).toBeInTheDocument();
  });
});

describe('testing handleNext', () => {
  it('should render the sending waves button', () => {
    const history = createMemoryHistory();
    render(
      <Router location={history.location} navigator={history}>
        <HorizontalStepper
          aqi_data={[
            { name: 'Hyderabad', AQIIndex: 333 },
            { name: 'Banglore', AQIIndex: 345 }
          ]}
          steps={steps}
          currentLocationOptions={cityoptions}
          jobLocationOptions={cityoptions}
          skillOptions={joboptions}
          city={[
            { name: 'Hyderabad', AQIIndex: 333 },
            { name: 'Banglore', AQIIndex: 345 }
          ]}
          setCity={() => {
            console.log('Handle finish triggerd');
          }}
          setCity2={() => {
            console.log('Handle finish triggerd');
          }}
          setStep={() => {
            console.log('Handle finish triggerd');
          }}
          setcurrentLoc={() => console.log('set current loc data')}
          setstepperData={() => console.log('set current loc data')}
          stepperData={{
            firstStep: '',
            secondStep: [],
            thirdStep: []
          }}
          tempCity1={[]}
          settempCity1={() => {
            console.log('Handle finish triggerd');
          }}
          tempCity2={[]}
          settempCity2={() => {
            console.log('Handle finish triggerd');
          }}
          currentLoc={''}
        />
      </Router>
    );

    fireEvent.click(screen.getByRole('next'));
    expect(screen.getAllByPlaceholderText('Enter your job location'))
      .toBeTruthy;
    expect(handleNext).toHaveBeenCalled;
  });
});

describe('testing skip', () => {
  it('should render the sending waves button', () => {
    const history = createMemoryHistory();
    render(
      <Router location={history.location} navigator={history}>
        <HorizontalStepper
          aqi_data={[
            { name: 'Hyderabad', AQIIndex: 333 },
            { name: 'Banglore', AQIIndex: 345 }
          ]}
          steps={steps}
          currentLocationOptions={cityoptions}
          jobLocationOptions={cityoptions}
          skillOptions={joboptions}
          city={[
            { name: 'Hyderabad', AQIIndex: 333 },
            { name: 'Banglore', AQIIndex: 345 }
          ]}
          setCity={() => {
            console.log('Handle finish triggerd');
          }}
          setCity2={() => {
            console.log('Handle finish triggerd');
          }}
          setStep={() => {
            console.log('Handle finish triggerd');
          }}
          setcurrentLoc={() => console.log('set current loc data')}
          setstepperData={() => console.log('set current loc data')}
          stepperData={{
            firstStep: '',
            secondStep: [],
            thirdStep: []
          }}
          tempCity1={[]}
          settempCity1={() => {
            console.log('Handle finish triggerd');
          }}
          tempCity2={[]}
          settempCity2={() => {
            console.log('Handle finish triggerd');
          }}
          currentLoc={''}
        />
      </Router>
    );

    fireEvent.click(screen.getByRole('skip'));
    expect(handleSkip).toHaveBeenCalled;
  });
});

function handleNext() {
  throw new Error('Function not implemented.');
}

function handleSkip() {
  throw new Error('Function not implemented.');
}
