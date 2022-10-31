import {
  Box,
  Card,
  CardActions,
  CardContent,
  CircularProgress,
  Divider,
  Modal,
  Typography
} from '@mui/material';
import React, { useState } from 'react';
import theme from '../../../theme';
import { more, leftArrow, arrowRight } from '../../../utils/constants';
import IconButtonAtom from '../../atoms/IconButton/IconButtonAtom';
import Icons from '../../atoms/Icons/Icons';
import CommonRoutes from '../../molecules/CommonRoutes/CommonRoutes';
import RouteCab from '../RouteCab/RouteCab';
import {
  COMPANY_DESCRIPTIN,
  DESCRIPTION,
  ABOUT_THE_COMPANY,
  ABOUT_THE_COMPANY_ONE,
  ABOUT_THE_COMPANY_TWO,
  SEE_MORE
} from '../../../messages';
import FileUpload from '../FileUpload/FIleUpload';

const bottomMargin = {
  marginBottom: theme.spacing(1)
};

interface Props {
  routeSource?: string;
  routeDestination?: string;
  logo?: any;
  jobRole?: string;
  company?: string;
  time?: string;
  location: string;
  city: string;
  state: string;
  pincode: string;
  isSaved?: boolean;
  handleSave?: () => void;
  saveLoad?: boolean;
}

const JobDescriptionCard = ({
  logo,
  jobRole,
  company,
  location,
  time,
  city,
  state,
  pincode,
  routeSource,
  routeDestination,
  handleSave,
  isSaved,
  saveLoad
}: Props) => {
  const [routes, setRoutes] = useState(true);
  const [fileUploadOpen, setFileUploadOpen] = useState(false);
  const handlingApply = () => {
    setFileUploadOpen(true);
    console.log(fileUploadOpen);
  };

  return (
    <>
      <Modal open={fileUploadOpen}>
        <FileUpload
          open={true}
          setFileUploadOpen={setFileUploadOpen}
        ></FileUpload>
      </Modal>
      <Card
        data-testid="jobDescription"
        variant="outlined"
        sx={{
          height: theme.spacing(183.5),
          maxWidth: theme.spacing(100),
          width: 'inherit',
          borderRadius: theme.spacing(3),
          border: 'none'
        }}
      >
        <CardContent
          sx={{
            padding: theme.spacing(0)
          }}
        >
          <Box
            sx={{
              height: theme.spacing(165),
              widhth: theme.spacing(92),
              borderRadius: theme.spacing(3),
              padding: theme.spacing(4),
              paddingBottom: theme.spacing(0)
            }}
          >
            <Box
              sx={{
                height: theme.spacing(45),
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
                paddingBottom: theme.spacing(0)
              }}
            >
              <Icons
                icon={logo}
                height={theme.spacing(14)}
                width={theme.spacing(14)}
              />
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <Typography
                  variant="subtitle1"
                  color="betaHigh.main"
                  sx={bottomMargin}
                >
                  {jobRole}
                </Typography>
                <Typography
                  variant="caption2"
                  color="betaMedium.main"
                  sx={bottomMargin}
                >
                  {company}
                </Typography>
                <Typography
                  variant="caption2"
                  color="betaMedium.main"
                  sx={bottomMargin}
                >
                  {location}, {city}, {state}, {pincode}
                </Typography>
                <Typography
                  variant="caption1"
                  color="betaMedium.main"
                  sx={bottomMargin}
                >
                  {time}
                </Typography>

                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    height: theme.spacing(24),
                    alignItems: 'center',
                    justifyContent: 'space-evenly'
                  }}
                >
                  {saveLoad ? (
                    <CircularProgress size={20} sx={{ color : theme.palette.alpha400.main }} />
                  ) : (
                    <IconButtonAtom
                      sx={{
                        height: theme.spacing(8),
                        width: theme.spacing(24.75),
                        borderRadius: theme.spacing(2),
                        backgroundColor: 'gammaWhite.main',
                        cursor: 'pointer',
                        color: 'alpha400.main',
                        borderColor: 'alpha300.main',
                        '&:hover': {
                          backgroundColor: 'gammaWhite.main',
                          borderColor: 'alpha300.main'
                        }
                      }}
                      textVariant="caption1"
                      variant="outlined"
                      handleClick={handleSave}
                    >
                      {isSaved ? 'Unsave' : 'Save'}
                    </IconButtonAtom>
                  )}
                  <IconButtonAtom
                    sx={{
                      height: theme.spacing(8),
                      width: theme.spacing(24.75),
                      borderRadius: theme.spacing(2),
                      backgroundColor: 'alpha400.main',
                      cursor: 'pointer',
                      color: 'gammaWhite.main',
                      borderColor: 'alpha400.main',
                      '&:hover': {
                        backgroundColor: 'alpha400.main',
                        borderColor: 'alpha400.main'
                      }
                    }}
                    textVariant="caption1"
                    variant="contained"
                    handleClick={handlingApply}
                  >
                    Apply
                  </IconButtonAtom>
                </Box>
              </Box>
              <Icons
                icon={more}
                height={theme.spacing(6)}
                width={theme.spacing(6)}
              />
            </Box>

            <Divider sx={{ color: 'beta400.main' }} />

            {routes ? (
              <>
                <Typography
                  variant="body1"
                  color="betaHigh.main"
                  sx={{ paddingTop: '24px' }}
                >
                  {DESCRIPTION}
                </Typography>
                <Typography
                  variant="body2"
                  color="betaMedium.main"
                  sx={{ paddingTop: theme.spacing(2) }}
                >
                  {COMPANY_DESCRIPTIN}
                </Typography>
                <Typography
                  variant="body1"
                  color="betaHigh.main"
                  sx={{ paddingTop: theme.spacing(6) }}
                >
                  {ABOUT_THE_COMPANY}
                </Typography>
                <Typography
                  variant="body2"
                  color="betaMedium.main"
                  sx={{ paddingTop: theme.spacing(2) }}
                >
                  {ABOUT_THE_COMPANY_ONE}
                </Typography>
                <Typography variant="body2" color="betaMedium.main">
                  {ABOUT_THE_COMPANY_TWO}
                  <Typography
                    component="span"
                    variant="body1"
                    color="alpha300.main"
                  >
                    {SEE_MORE}
                  </Typography>
                </Typography>{' '}
              </>
            ) : (
              <>
                <Box
                  sx={{
                    paddingTop: theme.spacing(6.75)
                  }}
                >
                  <IconButtonAtom
                    sx={{
                      backgroundColor: 'gammaWhite.main',
                      cursor: 'pointer',
                      color: 'betaHigh.main',
                      '&:hover': {
                        backgroundColor: 'gammaWhite.main'
                      }
                    }}
                    textVariant="body1"
                    variant="text"
                    startIcon={
                      <Icons
                        icon={leftArrow}
                        height={theme.spacing(6)}
                        width={theme.spacing(6)}
                      />
                    }
                    handleClick={() => setRoutes(true)}
                  >
                    Common Routes
                  </IconButtonAtom>
                  <CommonRoutes
                    source={routeSource}
                    destination={routeDestination}
                  />
                </Box>
                <Box
                  sx={{
                    paddingTop: theme.spacing(6.75)
                  }}
                >
                  <RouteCab />
                </Box>
              </>
            )}
          </Box>
        </CardContent>
        {routes && (
          <CardActions sx={{ padding: theme.spacing(0) }}>
            <IconButtonAtom
              sx={{
                height: theme.spacing(16),
                width: theme.spacing(101),
                borderRadius: theme.spacing(0, 0, 3, 3),
                backgroundColor: 'gammaWhite.main',
                cursor: 'pointer',
                color: 'alpha400.main',
                boxShadow: theme.shadows[1]
              }}
              textVariant="subtitle1"
              variant="text"
              endIcon={
                <Icons
                  icon={arrowRight}
                  height={theme.spacing(6)}
                  width={theme.spacing(6)}
                />
              }
              handleClick={() => setRoutes(false)}
            >
              Green Commute Routes
            </IconButtonAtom>
          </CardActions>
        )}
      </Card>
    </>
  );
};

export default JobDescriptionCard;
