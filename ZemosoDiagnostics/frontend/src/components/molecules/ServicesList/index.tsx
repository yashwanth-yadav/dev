import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import { SERVICES_LIST } from '../../../utils/Constants'
import { WHY_CHOOSE_US } from '../../../utils/Messages'
import { LogoPropsType } from '../../../utils/Types'
import { ServiceCard } from '../ServiceCard'

interface ServiceCardProps {
  logo: LogoPropsType['name'];
  description: string;
}

const ServicesList = () => {
    return (
      <Box
        sx={{
          px: { xl: '200px', lg: '150px', md: '100px', sm: '50px' },
          py: '60px',
          bgcolor: 'interactiveBlue800.main',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <Typography
          variant="h1"
          color="gammaWhite.main"
          sx={{ mb: '32px', alignSelf: 'flex-start' }}
        >
          {WHY_CHOOSE_US}
        </Typography>
        <Grid
          container
          sx={{
            display: 'grid',
            // minHeight: '236px',
            gridTemplateColumns: 'repeat(auto-fill, minmax(23.7rem, 1fr))',
            gap: '20px'
          }}
          justifyContent={'space-around'}
        >
          {SERVICES_LIST.map((service: ServiceCardProps, index: number) => {
            return (
              <Grid
                key={index}
                justifyContent={'center'}
                sx={{ height: 'fit-content' }}
              >
                <ServiceCard
                  logo={service.logo}
                  description={service.description}
                />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    );
}

export default ServicesList