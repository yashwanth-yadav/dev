import React from 'react';
import SlotBooking from '.';
import { fireEvent, render, screen } from '@testing-library/react';

const mockFunction = jest.fn();

describe('SlotBooking test', () => {
  test('renders SlotBooking', () => {
    render(
      <SlotBooking
        appointment={{
          month: 'March',
          day: 'Tuesday',
          date: '1',
          time: { startTime: '07:00 AM', endTime: '08:00 AM' }
        }}
        handleAppointment={mockFunction}
      />
    );
    const element = screen.getByText('March') as HTMLButtonElement;
    expect(element).toBeInTheDocument();
    fireEvent.click(element);
    const date = screen.queryByText('1');
    if (date) {
      fireEvent.click(date);
      expect(date).toBeInTheDocument();
    }

    const time = screen.getByText('07:00 - 08:00');
    fireEvent.click(time);
    expect(time).toBeInTheDocument();
    const tab = screen.getByTestId('tab-1');
    expect(tab).toBeInTheDocument();
  });
});
