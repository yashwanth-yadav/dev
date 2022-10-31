import React from 'react';
import styled from 'styled-components';
import { Box as MuiBox, Typography } from '@mui/material';
import Button from '../../atoms/Button';
import Icon from '../../atoms/Icon';
import theme from '../../../theme';

import LabDetailsCard from '../../molecules/LabDetailsCard';
import { LabDetails } from '../../../utils/Types';
import { ADD_TEST, SELECT_LAB, SORT } from '../../../utils/Messages';

/**
 * @author Nagavinay Chinthada <nagavinay.chinthada@zemosolabs.com>
 */

const Box = styled(MuiBox)`
  width: 100%;
  padding: 1.5rem;
  box-sizing: border-box;

  .addTestBtn {
    margin-left: auto;
    display: flex;
    align-items: flex-start;
    margin-bottom: 1rem;
  }

  .selectLabHeader {
    display: flex;
    align-items: center;
    margin-bottom: 1.5rem;
  }

  .sortBtn {
    margin-left: auto;

    path {
      fill: ${theme.palette.grey300.main};
    }
  }

  .labCards {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;

interface LabTestsFormProps {
  handleSelectedlab: (labdetails: LabDetails, id: number) => void;
  selectedLab?: number;
  labsData: any[];
}
export const LabTestsForm = ({
  handleSelectedlab,
  selectedLab,
  labsData
}: LabTestsFormProps) => {
  const handleCards = (id: number) => {
    if (id !== selectedLab) {
      handleSelectedlab(labsData[id - 1], id);
    }
  };

  return (
    <Box data-testid="lab-tests-form">
      <Button className="addTestBtn" size="large">
        <Icon name="add" />
        <Typography
          variant="body"
          color={`${theme.palette.interactiveBlue500.main}`}
        >
          {ADD_TEST}
        </Typography>
      </Button>

      <MuiBox className="selectLabHeader">
        <Typography variant="body">{SELECT_LAB}</Typography>
        <Button size="large" className="sortBtn">
          <Icon name="sort" />
          <Typography
            variant="caption1"
            color={`${theme.palette.gammaLow.main}`}
          >
            {SORT}
          </Typography>
        </Button>
      </MuiBox>

      <MuiBox className="labCards">
        {labsData.map((card, index) => {
          return (
            <LabDetailsCard
              lab={{
                labId: card.labId,
                name: card.name,
                rating: card.rating,
                slotsAvailable: card.slotsAvailable,
                reportTime:"Reports ready in 24 hrs",
                price: card.price
              }}
              onClick={() => handleCards(card.labId)}
              key={index}
              data-testid={`lab-details-card-${index}`}
              selected={selectedLab === card.labId}
            />
          );
        })}
      </MuiBox>
    </Box>
  );
};
