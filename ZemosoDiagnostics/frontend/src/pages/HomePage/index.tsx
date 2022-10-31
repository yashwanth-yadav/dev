import { Box, Stack } from '@mui/material';
import React from 'react';
import Banner from '../../components/molecules/Banner';
import { FaqList } from '../../components/molecules/FaqList';
import SearchBar from '../../components/molecules/SearchBar';
import ServicesList from '../../components/molecules/ServicesList';
import TestDetailsList from '../../components/molecules/TestDetailsList';
import TestimonialList from '../../components/molecules/TestimonialList';
import { Footer } from '../../components/organisms/Footer';
import { TestsList } from '../../components/organisms/TestsList';
import HomeTemplate from '../../components/templates/HomeTemplate';
import { TESTIMONIAL_LIST, TEST_DETAILS_LIST } from '../../utils/Messages';

const HomePage = () => {
  return (
    <>
      <HomeTemplate
        mainComponent={
          <>
            <Stack
              direction="column"
              sx={{
                px: {
                  xl: '200px',
                  lg: '150px',
                  md: '100px',
                  sm: '50px'
                },
                mb: '92px',
                mt: '100px',
                gap: '40px'
              }}
            >
              <SearchBar />
              <Banner />
              <TestsList />
            </Stack>
            <ServicesList />
            <TestDetailsList testDetailsList={TEST_DETAILS_LIST} />
            <TestimonialList testimonialList={TESTIMONIAL_LIST} />
            <Box
              sx={{
                px: { xl: '200px', lg: '150px', md: '100px', sm: '50px' },
                my: '80px'
              }}
            >
              <FaqList />
            </Box>
            <Footer />
          </>
        }
      />
    </>
  );
};

export default HomePage;
