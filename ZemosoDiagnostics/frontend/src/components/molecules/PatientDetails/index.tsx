import { Box as MuiBox, Divider, Typography } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import theme from '../../../theme';
import { E_REPORTS_INFO, PATIENT_DETAILS } from '../../../utils/Messages';
import { PatientDetailsPropsType } from '../../../utils/Types';
import Icon from '../../atoms/Icon';

/**
 * @author Nagavinay Chinthada <nagavinay.chinthada@zemosolabs.com>
 */

const Box = styled(MuiBox)`
  width: 100%;

  min-height: 12.125rem;
  min-width: 18rem;
  box-sizing: border-box;
  border: 1px solid ${theme.palette.grey100.main};
  border-radius: 0.75rem;
  padding: 1rem;
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
  background-color: ${theme.palette.gammaWhite.main};

  .heading {
    display: flex;
    border-bottom: 1px solid ${theme.palette.grey100.main};
  }

  .details {
    width: 100%;

    padding: 0.75rem 0rem;
    min-height: 8rem;
    box-sizing: border-box;
    display: flex;
    gap: 0.75rem;
    flex-direction: column;

    .person {
      display: flex;

      .basic {
        display: flex;
        gap: 0.5rem;
        margin-left: auto;
        color: ${theme.palette.gammaLow.main};

        .divider {
          height: 1rem;
        }
      }
    }

    .test {
      display: flex;
      color: ${theme.palette.gammaHigh.main};

      .basic {
        display: flex;
        gap: 1.5rem;
        margin-left: auto;

        .price {
          font-weight: 600;
        }

        .trash {
          position: relative;
          left: 8px;
          cursor: pointer;
        }
      }
    }

    .noOfTests {
      position: relative;
      top: -0.5rem;
      color: ${theme.palette.gammaLow.main};
    }

    .eReports {
      font-weight: 500;
    }
  }
`;

export const PatientDetails = ({ patientDetails }: PatientDetailsPropsType) => {
  return (
    <Box data-testid="patient-details">
      <MuiBox className="heading">
        <Icon name="user" />
        <Typography
          variant="overline2"
          color={`${theme.palette.gammaLow.main}`}
        >
          {PATIENT_DETAILS}
          {` (${patientDetails.length})`}
        </Typography>
      </MuiBox>
      <>
        {patientDetails.map((patient, index) => {
          return (
            <MuiBox className="details" key={index}>
              <MuiBox className="person">
                <Typography
                  variant="caption2"
                  color={`${theme.palette.gammaHigh.main}`}
                >
                  {patient.name}
                </Typography>
                <MuiBox className="basic">
                  <Typography variant="caption">{patient.relation}</Typography>
                  <Divider orientation="vertical" className="divider" />
                  <Typography variant="caption">{patient.gender}</Typography>
                  <Divider orientation="vertical" className="divider" />
                  <Typography variant="caption">{patient.age}</Typography>
                </MuiBox>
              </MuiBox>
              <MuiBox className="test">
                <Typography variant="caption">COVID RT-PCR Test</Typography>
                <MuiBox className="basic">
                  <Typography variant="caption" className="price">
                    $1200
                  </Typography>
                  <Icon name="trash" className="trash" />
                </MuiBox>
              </MuiBox>
              <Typography variant="caption" className="noOfTests">
                1 Test
              </Typography>
              <Typography
                variant="caption1"
                className="eReports"
                color={`${theme.palette.greenSuccess.main}`}
              >
                {E_REPORTS_INFO}
              </Typography>
            </MuiBox>
          );
        })}
      </>
    </Box>
  );
};
