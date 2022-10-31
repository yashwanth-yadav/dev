/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * @author Shubham Kukreti <shubham.kukreti@zemosolabs.com>
 */

import * as React from 'react';
import { useAutocomplete } from '@mui/base/AutocompleteUnstyled';
import { styled } from '@mui/material/styles';
import { autocompleteClasses } from '@mui/material/Autocomplete';
import { Typography } from '@mui/material';
import Chip from '../../atoms/Chip/ChipRect';
import theme from '../../../theme';

import { done } from '../../../utils/constants';
import Icons from '../../atoms/Icons/Icons';

const InputWrapper = styled('div')(
  () => `
  height: ${theme.spacing(12)};
  width: ${theme.spacing(100)};
  border: ${theme.spacing(0.25)} solid ${theme.palette.beta200.main};
  background-color: ${theme.palette.gammaWhite.main};
  border-radius: ${theme.spacing(2)};
  padding: 1px;
  display: flex;
  flex-wrap: wrap;

  &:hover {
    border-color: ${theme.palette.alpha200.main};
  }

  &.focused {
    border-color: ${theme.palette.alpha200.main};
    box-shadow: ${theme.spacing(0, 0, 0, 0.25)} ${theme.palette.alpha100.main};
  }

  & input {
    background-color: ${theme.palette.gammaWhite.main};
    height: 100%;
    box-sizing: border-box;
    padding: ${theme.spacing(1, 1.5)};
    width: 0;
    min-width: ${theme.spacing(7.5)};
    flex-grow: 1;
    border: 0;
    margin: 0;
    outline: 0;
    ::placeholder  {
      color: ${theme.palette.betaLow.main};
      font-family: ${theme.typography.fontFamily};
    }
  }

`
);

const Listbox = styled('ul')(
  () => `
  width: ${theme.spacing(75)};
  margin: ${theme.spacing(0.5, 0, 0)};
  padding: ${theme.spacing(0)};
  position: absolute;
  list-style: none;
  background-color: ${theme.palette.gammaWhite.main};
  overflow: auto;
  max-height: ${theme.spacing(62.5)};
  border-radius: ${theme.spacing(1)};
  box-shadow: ${theme.spacing(0, 0.5, 2)} rgba(0, 0, 0, 0.15);
  z-index: 1;
  font-size: ${theme.spacing(3.3)};

  & li {
    padding: ${theme.spacing(1.2, 3)};
    display: flex;
    font-family: ${theme.typography.fontFamily};

    & span {
      flex-grow: 1;
    }

    & img {
      display: none;
    }
  }

  & li[aria-selected='true'] {
    background-color: ${theme.palette.gammaColor1.main};
    font-weight: 600;

    & img {
      display:block;
      fill: ${theme.palette.alpha400.main};
    }
  }

  & li.${autocompleteClasses.focused} {
    background-color: ${theme.palette.alpha100.main};
    cursor: pointer;
    & img {
      display:block;
      fill: ${theme.palette.alpha400.main};
    }
    
  }
`
);

interface Props extends React.HTMLProps<HTMLInputElement> {
  label: string;
  placeholder: string;
  options: string[];
  chips: boolean;
  aqi_data: {
    name: string;
    AQIIndex: number;
  }[];
  currentStep?: number;
  setCity: (value: any) => void;
  setcurrentLoc: React.Dispatch<React.SetStateAction<string>>;
  setstepperData: React.Dispatch<
    React.SetStateAction<{
      firstStep: string;
      secondStep: string[];
      thirdStep: string[];
    }>
  >;
  stepperData: {
    firstStep: string;
    secondStep: string[];
    thirdStep: string[];
  };
  tempCity1: {
    name: string;
    AQIIndex: number;
  }[];
  tempCity2: {
    name: string;
    AQIIndex: number;
  }[];
  step: number;
  currentLoc: string;
}

const AutoCompleteSearch = ({
  label,
  options,
  placeholder,
  chips,
  setCity,
  aqi_data,
  currentStep,
  setstepperData,
  stepperData,
  setcurrentLoc
}: Props) => {
  const aqival = (name: any) => {
    for (const aqi of aqi_data) {
      if (name === aqi.name) {
        return aqi.AQIIndex;
      }
    }
  };

  const {
    getRootProps,
    getInputProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
    focused,
    setAnchorEl
  } = useAutocomplete({
    id: 'autocomplete',
    multiple: true,
    options: options,
    getOptionLabel: (option) => option,
    onChange: (
      // eslint-disable-next-line @typescript-eslint/ban-types
      _event: React.ChangeEvent<{}>,
      value: string[]
    ) => {
      if (!chips) {
        if (value.length > 1) {
          value.splice(0, 1);
        }
        setCity([
          {
            city: value[0],
            AQI: aqival(value[0])
          }
        ]);
        setstepperData({
          ...stepperData,
          firstStep: value[0]
        });
        setcurrentLoc(value[0]);
      }

      if (value.length > 2) {
        value.splice(2);
      }

      if (currentStep == 1) {
        setstepperData({
          ...stepperData,
          secondStep: value
        });
        if (value.length == 2) {
          setCity([
            {
              city: value[0],
              AQI: aqival(value[0])
            },
            {
              city: value[1],
              AQI: aqival(value[1])
            }
          ]);
        } else if (value.length == 1) {
          setCity([
            {
              city: value[0],
              AQI: aqival(value[0])
            }
          ]);
        }
      } else if (currentStep == 2) {
        if (value.length == 2) {
          setstepperData({
            ...stepperData,
            thirdStep: value
          });
          setCity([
            {
              city: value[0],
              AQI: aqival(value[0])
            },
            {
              city: value[1],
              AQI: aqival(value[1])
            }
          ]);
        } else if (value.length == 1) {
          setstepperData({
            ...stepperData,
            thirdStep: value
          });
          setCity([
            {
              city: value[0],
              AQI: aqival(value[0])
            }
          ]);
        }
      }
    }
  });

  return (
    <div data-testid="autoComplete">
      <div {...getRootProps()}>
        <Typography
          variant="subtitle1"
          color="betaHigh.main"
          sx={{ paddingBottom: theme.spacing(2) }}
        >
          {label}
        </Typography>
        <InputWrapper ref={setAnchorEl} className={focused ? 'focused' : ''}>
          {chips && currentStep == 1 ? (
            stepperData.secondStep.map((option: string, index: number) => (
              <Chip
                title={option}
                key={index}
                handleDelete={() => {
                  stepperData.secondStep.splice(index, 1);

                  if (stepperData.secondStep.length == 2) {
                    setstepperData({
                      ...stepperData,
                      secondStep: stepperData.secondStep
                    });
                    setCity([
                      {
                        city: stepperData.secondStep[0],
                        AQI: aqival(stepperData.secondStep[0])
                      },
                      {
                        city: stepperData.secondStep[1],
                        AQI: aqival(stepperData.secondStep[1])
                      }
                    ]);
                  } else if (stepperData.secondStep.length == 1) {
                    setstepperData({
                      ...stepperData,
                      secondStep: stepperData.secondStep
                    });
                    setCity([
                      {
                        city: stepperData.secondStep[0],
                        AQI: aqival(stepperData.secondStep[0])
                      }
                    ]);
                  } else if (stepperData.secondStep.length == 0) {
                    setstepperData({
                      ...stepperData,
                      secondStep: stepperData.secondStep
                    });
                    setCity([]);
                  }
                }}
              />
            ))
          ) : currentStep == 2 && chips ? (
            stepperData.thirdStep.map((option: string, index: number) => (
              <Chip
                title={option}
                key={index}
                handleDelete={() => {
                  stepperData.thirdStep.splice(index, 1);
                  if (stepperData.thirdStep.length == 2) {
                    setstepperData({
                      ...stepperData,
                      thirdStep: stepperData.thirdStep
                    });
                    setCity([
                      {
                        city: stepperData.thirdStep[0],
                        AQI: aqival(stepperData.thirdStep[0])
                      },
                      {
                        city: stepperData.thirdStep[1],
                        AQI: aqival(stepperData.thirdStep[1])
                      }
                    ]);
                  } else if (stepperData.thirdStep.length == 1) {
                    setstepperData({
                      ...stepperData,
                      thirdStep: stepperData.thirdStep
                    });
                    setCity([
                      {
                        city: stepperData.thirdStep[0],
                        AQI: aqival(stepperData.thirdStep[0])
                      }
                    ]);
                  } else if (stepperData.thirdStep.length == 0) {
                    setstepperData({
                      ...stepperData,
                      thirdStep: stepperData.thirdStep
                    });
                    setCity([]);
                  }
                }}
              />
            ))
          ) : (
            <Typography
              variant="caption2"
              color="betaLow.main"
              sx={{ margin: 'auto', marginLeft: theme.spacing(2) }}
            >
              {stepperData.firstStep}
            </Typography>
          )}
          <input
            {...getInputProps()}
            placeholder={
              currentStep === 0
                ? (stepperData.firstStep == ''
                  ? placeholder
                  : '')
                : currentStep === 1
                ? (stepperData.secondStep.length == 0
                  ? placeholder
                  : '')
                : (stepperData.thirdStep.length == 0
                ? placeholder
                : '')
            }
            role="input"
          />
        </InputWrapper>
      </div>
      {groupedOptions.length > 0 ? (
        <Listbox {...getListboxProps()}>
          {(groupedOptions as typeof options).map((option, index) => (
            // eslint-disable-next-line react/jsx-key
            <li {...getOptionProps({ option, index })}>
              <span>{option}</span>
              <Icons icon={done} />
            </li>
          ))}
        </Listbox>
      ) : null}
    </div>
  );
};

export default AutoCompleteSearch;
