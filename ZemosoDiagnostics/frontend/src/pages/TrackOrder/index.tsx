import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineItem as MuiTimelineItem,
  TimelineSeparator
} from '@mui/lab';
import { Box as MuiBox, Divider, Grid, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import theme from '../../theme';
import { TIMELINES } from '../../utils/Constants';
import {
  BACK_TO_HOME,
  INSTRUCTIONS,
  INSTRUCTION_TEXT,
  TOTAL_PAID,
  TRACK_ADDRESS,
  TRACK_ORDER,
  TRACK_PERSON,
  TRACK_TEST
} from '../../utils/Messages';
import { TimeLinePropsType } from '../../utils/Types';
import Button from '../../components/atoms/Button';
import Icon from '../../components/atoms/Icon';
import Logo from '../../components/atoms/Logo';
import { FormTemplate } from '../../components/templates/FormTemplate';

const StyledBox = styled(MuiBox)`
  .formFooter {
    width: 100%;
    min-height: 4.375rem;
    display: flex;
    padding: 0.875rem 0rem;
    background-color: ${theme.palette.gammaWhite.main};
    box-sizing: border-box;
    box-shadow: ${theme.shadows[2]};

    .link {
      width: 100%;
      min-width: 8rem;
      max-width: 13.875rem;
      text-decoration: none;
      margin-left: auto;
      margin-right: 5.625rem;
    }

    .backToHome {
      width: 100%;
      padding: 1rem 0rem;
      border-radius: 0.5rem;
      color: ${theme.palette.gammaWhite.main};
      background-color: ${theme.palette.interactiveBlue500.main};
    }
  }
`;

const Box = styled(MuiBox)`
  padding: 5.625rem;
  box-sizing: border-box;

  .container {
    display: flex;
    justify-content: center;
  }

  .patientDetails {
    padding: 1rem;
    ${[theme.breakpoints.up('md')]} {
      border-right: 1px solid ${theme.palette.grey100.main};
    }
    ${[theme.breakpoints.down('md')]} {
      border-bottom: 1px solid ${theme.palette.grey100.main};
    }
    zoom: 1.3;
    box-shadow: ${theme.shadows[1]};

    .details {
      width: 80%;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      .patient {
        display: flex;
        gap: 0.5rem;
        align-items: center;

        path {
          stroke: ${theme.palette.structuralPurple800.main};
        }

        .basic {
          display: flex;
          flex-direction: column;
        }
      }

      .dropdownList {
        width: 100%;
        padding: 0.5rem;
        border-radius: 0.25rem;
        margin-top: 1rem;
        background-color: ${theme.palette.grey100.main};

        .instructions {
          display: flex;
          align-items: center;
        }

        .infoIcon {
          margin-right: 0.5rem;
        }

        .downIcon {
          margin-left: auto;
          cursor: pointer;
        }
      }
    }
  }

  .trackOrder {
    height: 36.438rem;
    box-shadow: ${theme.shadows[1]};
    padding: 2rem;

    .MuiTimelineItem-missingOppositeContent::before {
      display: none;
    }

    .roundedIcon {
      border: 2px solid ${theme.palette.grey200.main};
      width: 3.5rem;
      height: 3.5rem;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .active {
      border: 2px solid ${theme.palette.structuralPurple800.main};
      background-color: ${theme.palette.structuralPurple800.main};

      path {
        stroke: ${theme.palette.gammaWhite.main};
      }
    }

    .inactive {
      border: 2px solid ${theme.palette.structuralPurple800.main};

      path {
        stroke: ${theme.palette.structuralPurple800.main};
      }
    }

    .disabled {
      border: 2px solid ${theme.palette.grey200.main};

      path {
        stroke: ${theme.palette.grey300.main};
      }
    }

    .showTechnician {
      display: flex;
      width: fit-content;
      padding: 0.25rem;
      border-radius: 0.5rem;
      gap: 0.25rem;
      align-items: center;
      background-color: ${theme.palette.grey50.main};
    }
  }
`;

const TimeLineItem = ({
  icon,
  className,
  title,
  subTitle,
  end,
  showTechnician
}: TimeLinePropsType) => {
  return (
    <MuiTimelineItem>
      <TimelineSeparator>
        <MuiBox className={`roundedIcon ${className}`}>
          <Icon name={icon} />
        </MuiBox>
        {!end && (
          <TimelineConnector
            sx={{
              height: '2.875rem',
              width: '1px',
              backgroundColor: `${
                className === 'active'
                  ? theme.palette.structuralPurple800.main
                  : theme.palette.grey200.main
              }`
            }}
          />
        )}
      </TimelineSeparator>
      <TimelineContent>
        <Typography
          variant="body"
          component="div"
          color={`${theme.palette.gammaMedium.main}`}
          sx={{ fontWeight: '800' }}
        >
          {title}
        </Typography>
        <Typography variant="overline" color={`${theme.palette.gammaLow.main}`}>
          {showTechnician ? (
            <MuiBox className="showTechnician">
              <Logo name="edwardHoward" />
              {subTitle}
            </MuiBox>
          ) : (
            subTitle
          )}
        </Typography>
      </TimelineContent>
    </MuiTimelineItem>
  );
};

const Footer = () => {
  return (
    <MuiBox className="formFooter">
      <Link to="/" className="link">
        <Button className="backToHome" variant="contained">
          {BACK_TO_HOME}
        </Button>
      </Link>
    </MuiBox>
  );
};

export const TrackOrderPage = () => {
  const [activeInstructions, setActiveInstructions] =
    React.useState<boolean>(false);

  const handleInstructions = () => {
    setActiveInstructions(!activeInstructions);
  };
  return (
    <StyledBox>
      <FormTemplate footer={<Footer />}>
        <Box>
          <Grid container className="container">
            <Grid item md={5} className="patientDetails">
              <MuiBox className="details">
                <MuiBox className="patient">
                  <Icon name="user" />
                  <MuiBox className="basic">
                    <Typography variant="caption">{TRACK_PERSON}</Typography>
                    <Typography
                      variant="overline"
                      color={`${theme.palette.gammaLow.main}`}
                    >
                      {TRACK_TEST}
                    </Typography>
                  </MuiBox>
                </MuiBox>
                <Divider />
                <Typography
                  variant="caption"
                  color={`${theme.palette.gammaLow.main}`}
                >
                  {TRACK_ADDRESS}
                </Typography>
                <Typography
                  variant="caption"
                  color={`${theme.palette.gammaMedium.main}`}
                >
                  {TOTAL_PAID}
                </Typography>
                <MuiBox className="dropdownList">
                  <MuiBox className="instructions">
                    <Icon className="infoIcon" name="info" />
                    <Typography
                      variant="caption"
                      color={`${theme.palette.interactiveBlue800.main}`}
                    >
                      {INSTRUCTIONS}
                    </Typography>
                    <Icon
                      name={activeInstructions ? 'chevronUp' : 'chevronDown'}
                      className="downIcon"
                      onClick={handleInstructions}
                    />
                  </MuiBox>
                  <Typography
                    variant="caption"
                    color={`${theme.palette.gammaMedium.main}`}
                  >
                    {activeInstructions && INSTRUCTION_TEXT}
                  </Typography>
                </MuiBox>
              </MuiBox>
            </Grid>
            <Grid item md={0.5}></Grid>
            <Grid item md={6} className="trackOrder">
              <Typography variant="body3" sx={{ paddingLeft: '1rem;' }}>
                {TRACK_ORDER}
              </Typography>
              <Timeline>
                {TIMELINES.map((timeLineItem, index) => {
                  return (
                    <TimeLineItem
                      icon={timeLineItem.icon}
                      className={timeLineItem.className}
                      title={timeLineItem.title}
                      subTitle={timeLineItem.subTitle}
                      key={index}
                      end={index === TIMELINES.length - 1 ? true : false}
                      showTechnician={index === 1 ? true : false}
                    />
                  );
                })}
              </Timeline>
            </Grid>
          </Grid>
        </Box>
      </FormTemplate>
    </StyledBox>
  );
};
