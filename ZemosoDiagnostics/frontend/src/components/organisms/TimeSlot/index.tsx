import { Typography,Grid, Box } from '@mui/material';
import React, { useState } from 'react';
import { intervals, SlotProps } from '../../../utils/Constants';
import { TimeSlotProps, Slots } from '../../../utils/Types';
import Chip from '../../molecules/Chip';

interface TimeChipProps {
  timeslot: string;
}

const TimeChip = ({ timeslot }: TimeChipProps) => {
  return (
    <Typography variant="overline2">{timeslot}</Typography>
  )
}


const TimeSlot = ({ appointment, startTime, endTime, setTime }: TimeSlotProps) => {
  return (
    <Box display="flex" gap={"15px"}>
      <Typography variant="caption2" >{`${startTime} - ${endTime}`}</Typography>
      
      <Grid
        container
        sx={{
          gap: '10px',
          width: '270px',
          display: 'grid',
          gridTemplateColumns: '128px 128px'
        }}
      >
        {intervals(startTime, endTime)?.map((timeSlot: SlotProps, index: number) => {
          const slotTime = `${timeSlot.startTime.substring(0, 5)} - ${timeSlot.endTime.substring(0, 5)}`
          return (
              <Chip
              key={index}
                label={<TimeChip timeslot={slotTime} />}
                selected={timeSlot.startTime === appointment.time.startTime && timeSlot.endTime === appointment.time.endTime}
                id={`time-${index}`}
                size={'medium'}
              onClick={() => {
                setTime({...appointment, time: timeSlot})
              }}
              />
          );
        })}
      </Grid>
    </Box>
  );
};

export default TimeSlot;

