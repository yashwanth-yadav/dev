import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import BlinkListLogo from '../../atoms/BlinkListLogo/BlinkListLogo';
import { makeStyles, Typography } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    lnkstl: {
      
     
      weight: "bold",
      color: "#0365F2",
    },
    lnk:{
        paddingBottom:"2px",
    },
    
  }));

export default function Footer() {
    const classes=useStyles();
  return (
    <footer data-testid="Footer-container">
      <Box
        px={{ xs: 3, sm: 10 }}
        py={{ xs: 5, sm: 10 }}
        bgcolor="#f1f6f4"
        color="#4d4d4d"
      >
        <Container maxWidth="lg">
          <Grid container spacing={5}>


          <Grid item xs={12} sm={5}>
              <Box borderBottom={1}>
                  <BlinkListLogo/>
              </Box>
              <Box>
                <Link href="/"  className={classes.lnkstl}>
                    <br></br>
                <Typography variant="h4" className={classes.lnkstl}>Big ideas in small packages
Start learnign now</Typography>
                  </Link>
              </Box>
            </Grid>


            <Grid item xs={12} sm={2}>
              <Box borderBottom={1} className={classes.lnk}>
                  Editorial
              </Box>
              <br/>
              <Box >
                <Link href="/" color="inherit" className={classes.lnk}>
                Book lists
                </Link>
              </Box> <br/>
              <Box >
                <Link href="/" color="inherit" className={classes.lnk}>
                What is Nonfiction?
                </Link>
              </Box> <br/>
              <Box >
                <Link href="/" color="inherit">
                What to read next?
                </Link>
              </Box> <br/>
              <Box >
                <Link href="/" color="inherit">
                Benefits of reading
                </Link>
              </Box> <br/>
            </Grid>

            <Grid item xs={12} sm={2}>
              <Box borderBottom={1}>Useful Links</Box> <br/>
              <Box>
                <Link href="/" color="inherit">
                  Pricing
                </Link>
              </Box> <br/>
              <Box>
                <Link href="/" color="inherit">
                Blinkist business
                </Link>
              </Box> <br/>
              <Box>
                <Link href="/" color="inherit">
                Gift cards
                </Link>
              </Box> <br/>
              <Box>
                <Link href="/" color="inherit">
                Blinkist magaine
                </Link>
              </Box> <br/>
              <Box>
                <Link href="/" color="inherit">
                Contact & help
                </Link>
              </Box> <br/>
            </Grid>

            <Grid item xs={12} sm={2}>
              <Box borderBottom={1}>Company</Box> <br/>
              <Box>
                <Link href="/" color="inherit">
                About
                </Link>
              </Box> <br/>
              <Box>
                <Link href="/" color="inherit">
                Careers
                </Link>
              </Box> <br/>
              <Box>
                <Link href="/" color="inherit">
                partners Code of Conduct
                </Link>
              </Box> <br/>
              <Box>
                <Link href="/" color="inherit">
                Code of Conduct
                </Link>
              </Box> <br/>
            </Grid>
          </Grid>
          <Box textAlign="center" pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 0 }}>
          © Blinkist 2021 Sitemap   |   Imprint   |   Terms of Service   |   Privacy Policies
          </Box>
        </Container>
      </Box>
    </footer>
  );
}