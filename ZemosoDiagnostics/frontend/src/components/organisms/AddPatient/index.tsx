import { Box, Typography } from '@mui/material';
import React, { useState } from 'react';
import styled from 'styled-components';
import theme from '../../../theme';
import { ADD_PATIENT, NEW_PATIENT } from '../../../utils/Messages';
import Icon from '../../atoms/Icon';
import SelectPatient from '../../molecules/SelectPatient';

/**
 * @author Parupudi Chintaiah Yashwanth Yadav <yashwanth.parupudi@zemosolabs.com>
 */

const MainBox = styled(Box)`
  width: 583px;
  height: 560px;
  align-tems: center;
  justify-content: center;
  box-shadow: 0px 0px 26px rgba(233, 232, 237, 0.5);
  border-radius: 8px;
  .cardDetails {
    color: ${theme.palette.gammaMedium.main};
    font-size: 20px;
    line-height: 24px;
    letter-spacing: -0.005em;
    flex: 1;
  }
`;

interface AddPatientPropsType {
  patientList: any;
  setNoOfPatients: React.Dispatch<React.SetStateAction<number>>;
  noOfPatients: number;
  setIsInSelectPatientform: React.Dispatch<React.SetStateAction<boolean>>;
  handlePatientsList: (
    patientList: {
      name: string;
      details: string;
      isChecked: boolean;
    }[]
  ) => void;
}

const AddPatient = ({
  patientList,
  setNoOfPatients,
  setIsInSelectPatientform,
  handlePatientsList
}: AddPatientPropsType) => {
  const [updatedPatientList, setupdatedPatientList] =
    useState<any>(patientList);

  const handleAddPatient = () => {
    setIsInSelectPatientform(false);
  };
  const handlePatientOption = (index: number) => {
    updatedPatientList[index].isChecked = !updatedPatientList[index].isChecked;
    let count = 0;
    for (let i = 0; i < patientList.length; i++) {
      if (updatedPatientList[i].isChecked) {
        count++;
      }
    }
    setNoOfPatients(count);
    console.log('No of patients77777  :  ', updatedPatientList);

    setupdatedPatientList([...updatedPatientList]);
    handlePatientsList(updatedPatientList);
  };

  return (
    <MainBox data-testid="add-patient">
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'row',
          paddingX: theme.spacing(6),
          paddingY: theme.spacing(8.125),
          paddingBottom: theme.spacing(4.75)
        }}
      >
        <Typography variant="subtitle1" className="cardDetails">
          {ADD_PATIENT}
        </Typography>
        <Box
          data-testid="add-patient-button"
          display="flex"
          onClick={handleAddPatient}
          sx={{
            justifyContent: 'center',
            '&:hover': {
              cursor: 'pointer'
            }
          }}
        >
          <Icon name="add"></Icon>
          <Typography
            variant="body"
            sx={{ color: theme.palette.interactiveBlue500.main }}
          >
            {NEW_PATIENT}
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          borderBottom: `${theme.spacing(0.25)} solid ${
            theme.palette.grey100.main
          }`,
          marginX: theme.spacing(6)
        }}
      ></Box>
      <Box
        sx={{
          paddingLeft: theme.spacing(6),
          paddingTop: theme.spacing(9),
          paddingBottom: theme.spacing(19)
        }}
      >
        {updatedPatientList.map((value: any, index: number) => {
          return (
            <Box key={index} sx={{ paddingBottom: theme.spacing(10.5) }}>
              <SelectPatient
                name={value.name}
                details={`${value.relation}, ${value.gender}, ${value.age} years`}
                isChecked={value.isChecked}
                handleChecked={() => {
                  handlePatientOption(index);
                }}
              ></SelectPatient>
            </Box>
          );
        })}
      </Box>
    </MainBox>
  );
};

export default AddPatient;
