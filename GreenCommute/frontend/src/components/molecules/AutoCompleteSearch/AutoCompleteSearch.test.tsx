import * as React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';
import AutoCompleteSearch from './AutoCompleteSearch';

test('checks whether component renders', () => {
  render(
    <AutoCompleteSearch
      setcurrentLoc={() => console.log('set current loc data')}
      chips={true}
      label="Where do you want to work?"
      placeholder="Enter your job location"
      options={['New Delhi', 'Bangalore', 'Hyderabad']}
      aqi_data={[
        { name: 'Hyderabad', AQIIndex: 333 },
        { name: 'Banglore', AQIIndex: 345 }
      ]}
      setCity={() => {
        console.log('Handle finish triggerd');
      }}
      setstepperData={() => console.log('set current loc data')}
      stepperData={{
        firstStep: '',
        secondStep: [],
        thirdStep: []
      }}
      tempCity1={[]}
      tempCity2={[]}
      step={0}
      currentLoc={''}
    />
  );

  const element = screen.getByText('Where do you want to work?');
  const input = screen.getByRole('input');

  expect(element).toBeInTheDocument();
  expect(input).toBeInTheDocument();
});

test('checks options list', async () => {
  render(
    <AutoCompleteSearch
      setcurrentLoc={() => console.log('set current loc data')}
      chips={true}
      label="Where do you want to work?"
      placeholder="Enter your job location"
      options={['New Delhi', 'Bangalore', 'Hyderabad']}
      aqi_data={[
        { name: 'Hyderabad', AQIIndex: 333 },
        { name: 'Banglore', AQIIndex: 345 }
      ]}
      setCity={(city) => {
        console.log(city);
      }}
      setstepperData={() => console.log('set current loc data')}
      stepperData={{
        firstStep: '',
        secondStep: [],
        thirdStep: []
      }}
      tempCity1={[]}
      tempCity2={[]}
      step={0}
      currentLoc={''}
    />
  );

  const autoComplete = screen.getByTestId('autoComplete');
  const input = screen.getByRole('input');
  autoComplete.focus();
  await fireEvent.change(input, { target: { value: 'Bangalore' } });
  await fireEvent.keyDown(autoComplete, { key: 'ArrowDown' });
  await fireEvent.keyDown(autoComplete, { key: 'Enter' });
  expect(input).toHaveValue('');
});
