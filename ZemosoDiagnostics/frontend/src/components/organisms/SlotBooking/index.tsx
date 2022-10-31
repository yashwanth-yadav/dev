import { Box, Divider, Stack, Tab, Tabs, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import {
  AVAILABLE_SLOTS,
  Dates,
  MONTHS,
  SlotProps,
  WEEK_DAYS
} from '../../../utils/Constants';
import { SELECT_APPOINTMENT } from '../../../utils/Messages';
import { MonthChipProps, DateProps } from '../../../utils/Types';
import Button from '../../atoms/Button';
import Icon from '../../atoms/Icon';
import Chip from '../../molecules/Chip';
import TimeSlot from '../TimeSlot';
import moment from 'moment';
import { AppointmentProps } from '../../../pages/PatientDetailPage';

const MonthChip = ({ label }: MonthChipProps) => {
  return <Typography>{label}</Typography>;
};

const DateChip = ({ label }: DateProps) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minWidth: '100%'
      }}
    >
      <Typography variant="caption2">{label.day.substring(0, 3)}</Typography>
      <Typography variant="body3">{label.date}</Typography>
    </div>
  );
};
interface SlotBookingProps {
  handleAppointment: (arguemnt: AppointmentProps) => void;
  appointment: AppointmentProps;
}
const SlotBooking = ({ handleAppointment, appointment }: SlotBookingProps) => {
  const [dates, setDates] = useState<Dates[]>([]);

  const handleDate = async (data: Dates[]) => {
    await setDates(data);
  }
  const getCurrentMonthDates = async (month: string) => {
    const currentMonthDates = await Array.from(
      { length: moment(`2022-${month}`, 'YYYY-MM').daysInMonth() },
      (_x, i) => ({
        date: moment(`2022-${month}`, 'YYYY-MM')
          .startOf('month')
          .add(i, 'days')
          .date()
          .toString(),
        day: WEEK_DAYS[
          moment(`2022-${month}`, 'YYYY-MM')
            .startOf('month')
            .add(i, 'days')
            .weekday()
        ]
      })
    );
    setDates(currentMonthDates);
  };

  useEffect(() => {
    getCurrentMonthDates(appointment.month);
  },[appointment.month])
  
  return (
    <Box sx={{ width: '520px' }}>
      <Typography variant="subtitle1" sx={{ mb: '48px' }}>
        {SELECT_APPOINTMENT}
      </Typography>
      <Tabs
        data-testid="tab-1"
        value={appointment.month}
        visibleScrollbar={false}
        variant="scrollable"
        scrollButtons={true}
        ScrollButtonComponent={(props, ref) => {
          const { direction, ...other } = props;
          if (direction === 'left' && !props.disabled) {
            return (
              <Button
                data-testid="left-button-1"
                ref={ref}
                {...other}
                sx={{ minWidth: '0px' }}
              >
                <Icon name="chevronLeft" />
              </Button>
            );
          } else if (direction === 'right' && !props.disabled) {
            return (
              <Button
                data-testid="right-button-1"
                variant="text"
                ref={ref}
                {...other}
                sx={{ minWidth: '0px' }}
              >
                <Icon name="chevronLeft" sx={{ transform: 'rotate(180deg)' }} />
              </Button>
            );
          } else {
            return null;
          }
        }}
        aria-label="scrollable prevent tabs example"
        sx={{
          '.MuiTabs-indicator': {
            display: 'none'
          }
        }}
      >
        {MONTHS?.map((m: string, index: number) => {
          return (
            <Tab
              key={index}
              sx={{ padding: '0px', ml: index === 0 ? '0px' : '22px' }}
              disableRipple
              label={
                <Chip
                  label={<MonthChip label={m} />}
                  size="extraLarge"
                  selected={Number(appointment.month) === index + 1}
                  id={`month-${index}`}
                  onClick={() => {
                    getCurrentMonthDates((index + 1).toString())
                    handleAppointment({
                      ...appointment,
                      month: (index + 1).toString()
                    });
                  }}
                />
              }
            />
          );
        })}
      </Tabs>

      <Divider sx={{ mt: '27px', mb: '27px' }} />
      <Tabs
        value={appointment.date}
        variant="scrollable"
        scrollButtons={true}
        ScrollButtonComponent={(props, ref) => {
          const { direction, ...other } = props;
          if (direction === 'left' && !props.disabled) {
            return (
              <Button
                ref={ref}
                {...other}
                sx={{ minWidth: '0px', gap: '0px' }}
                data-testid="left-button-2"
              >
                <Icon name="chevronLeft" />
              </Button>
            );
          } else if (direction === 'right' && !props.disabled) {
            return (
              <Button
                data-testid="right-button-2"
                ref={ref}
                {...other}
                sx={{ minWidth: '0px' }}
              >
                <Icon name="chevronLeft" sx={{ transform: 'rotate(180deg)' }} />
              </Button>
            );
          } else {
            return null;
          }
        }}
        visibleScrollbar={false}
        aria-label="scrollable prevent tabs example"
        sx={{
          '.MuiTabs-indicator': {
            display: 'none'
          },
          display: 'flex'
        }}
      >
        {dates.map((i: Dates, index: number) => {
          return (
            <Tab
              key={index}
              label={
                <Chip
                  label={<DateChip label={i} />}
                  size="large"
                  selected={Number(appointment.date) - 1 === index}
                  id={`date-${index}`}
                  onClick={() =>
                    handleAppointment({
                      ...appointment,
                      date: i.date,
                      day: i.day
                    })
                  }
                />
              }
              sx={{
                padding: '0px',
                minWidth: '0px',
                ml: index === 0 ? '0px' : '16px'
              }}
            />
          );
        })}
      </Tabs>
      <Divider sx={{ mt: '27px', mb: '27px' }} />
      <Stack direction="column" gap="40px" sx={{ mt: '40px' }}>
        {AVAILABLE_SLOTS.map((i: SlotProps, index: number) => {
          return (
            <TimeSlot
              key={index}
              startTime={i.startTime}
              endTime={i.endTime}
              setTime={handleAppointment}
              id={0}
              appointment={appointment}
            />
          );
        })}
      </Stack>
    </Box>
  );
};

export default SlotBooking;
