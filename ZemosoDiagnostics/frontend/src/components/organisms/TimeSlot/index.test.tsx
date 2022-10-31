import React from 'react'
import { screen, render, fireEvent } from '@testing-library/react'
import TimeSlot from '.'

const mockFunction = jest.fn();

test('checks whether the TimeSlot Component renders', () => {
    render(
      <TimeSlot
        id={0}
        startTime={'05:00 AM'}
        endTime={'09:00 AM'}
        setTime={mockFunction}
        appointment={{
          month: '',
          day: '',
          date: '',
          time: { startTime: '', endTime: '' }
        }}
      />
    );

    const slotElement = screen.getByText('06:00 - 07:00');
    expect(slotElement).toBeInTheDocument();
    fireEvent.click(slotElement);
    const durationTimings = screen.getByText('05:00 AM - 09:00 AM');
    expect(durationTimings).toBeInTheDocument();
})

test('checks whether the TimeSlot Component renders', () => {
  render(
    <TimeSlot
      id={0}
      startTime={'05:00 AM'}
      endTime={'08:00 AM'}
      setTime={mockFunction}
      appointment={{
        month: '',
        day: '',
        date: '',
        time: { startTime: '', endTime: '' }
      }}
    />
  );

  const slotElement = screen.getByText('05:00 - 06:00');
  expect(slotElement).toBeInTheDocument();
  fireEvent.click(slotElement);
  const durationTimings = screen.getByText('05:00 AM - 08:00 AM');
  expect(durationTimings).toBeInTheDocument();
});