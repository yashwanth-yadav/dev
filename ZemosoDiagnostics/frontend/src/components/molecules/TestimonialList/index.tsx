/**
 * @author Sai Kiran Kavali <saikiran.kavali@zemosolabs.com>
 */
 import React from 'react';
 import { Box, Grid, Typography } from '@mui/material';
 import theme from '../../../theme';
 import { CUSTOMER_TESTIMONIALS } from '../../../utils/Messages';
 import { TestimonialListProps } from '../../../utils/Types';
 import TestimonialCard from '../TestimonialCard';
 
 const TestimonialList = ({ testimonialList }: TestimonialListProps) => {
   return (
     <Box
       data-testid="testimonial-list"
       sx={{
         width: '100%',
         minHeight: theme.spacing(96),
         backgroundColor: theme.palette.interactiveBlue800.main,
         height: '100%'
       }}
     >
       <Box
         sx={{
           paddingTop: theme.spacing(15),
           // paddingBottom: theme.spacing(23),
           paddingX: {
             xl: '200px',
             lg: '150px',
             md: '100px',
             sm: '50px'
           }
         }}
       >
         <Box>
           <Typography
             sx={{
               ...theme.typography.h1,
               color: theme.palette.gammaWhite.main
             }}
           >
             {CUSTOMER_TESTIMONIALS}
           </Typography>
         </Box>
 
         <Grid
           container
           sx={{
             width: '100%',
             marginTop: theme.spacing(6),
             justifyContent: 'flex-start',
             alignItems: 'flex-end'
           }}
         >
           {testimonialList.map((value, index) => {
             return (
               <Grid
                 item
                 lg={4}
                 md={6}
                 xl={4}
                 key={index}
                 sx={{
                   paddingRight: theme.spacing(5),
                   [theme.breakpoints.down('lg')]: {
                     paddingBottom: theme.spacing(5)
                   }
                 }}
               >
                 <TestimonialCard
                   username={value.username}
                   place={value.place}
                   feedback={value.feedback}
                   name={value.logo}
                 />
               </Grid>
             );
           })}
         </Grid>
       </Box>
       <Box
         sx={{
           display: 'flex',
           width: '100%',
           justifyContent: 'center',
           alignItems: 'center',
           marginTop: '24px'
         }}
       >
         <span
           style={{
             width: theme.spacing(2),
             height: theme.spacing(2),
             borderRadius: '50%',
             border: `${theme.spacing(0.25)} solid ${
               theme.palette.gammaWhite.main
             }`,
             backgroundColor: theme.palette.gammaWhite.main,
             margin: theme.spacing(1)
           }}
         ></span>
         <span
           style={{
             width: theme.spacing(2),
             height: theme.spacing(2),
             borderRadius: '50%',
             border: `${theme.spacing(0.25)} solid ${
               theme.palette.gammaWhite.main
             }`,
             margin: theme.spacing(1)
           }}
         ></span>{' '}
         <span
           style={{
             width: theme.spacing(2),
             height: theme.spacing(2),
             borderRadius: '50%',
             border: `${theme.spacing(0.25)} solid ${
               theme.palette.gammaWhite.main
             }`,
             margin: theme.spacing(1)
           }}
         ></span>
       </Box>
     </Box>
   );
 };
 
 export default TestimonialList;
 