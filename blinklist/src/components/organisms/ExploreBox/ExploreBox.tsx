import React from 'react';
import {
  Box,
  Container,
  Grid,
  makeStyles,
  Paper,
  styled,
  Typography,
} from "@material-ui/core";

import {Link} from 'react-router-dom';
import styled1 from "@emotion/styled";
import { fontSize } from "@mui/system";
import RocketIcon from '@mui/icons-material/Rocket';
import { AccountBalance, AddComment, Adjust, Apartment, AutoGraph, CorporateFare, FavoriteBorder, HourglassBottom, LocalAtm, Psychology, Public, School, Science, SignalCellularAlt, Spa, TempleBuddhist, TipsAndUpdates } from "@mui/icons-material";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const linkStyle = {
  margin: "1rem",
  textDecoration: "none",
  color: '#6D787E'
};

const useStyles = makeStyles((theme) => ({
  lnkstl: {
    weight: "bold",
    color: "#0365F2",
    
  },
  lnk: {
    paddingBottom: "2px",
    color:'#6D787E',
    "&:hover": {
      color: 'blue'
    },
  },
  hlnk: {
    "&:hover": {
      color: 'blue'
    },
  },
  iconn:{
    fontSize:'small'
  },
}));

const style1 = styled1.div`
   display: block;
   z-index: 1;
   position: absolute;
   top: 10%;
   background:#F1F6F4;
   width: 100%;
   padding: 0 10%;
 `;

const Highlight = () => {
  let heado = document.getElementById("head1") as HTMLElement;
  heado.style.color = "#6D787E";
};

const Highlightdown = () => {
  let heado1 = document.getElementById("head1") as HTMLElement;
  heado1.style.color = "blue";
};

export const ExploreBox=() =>{
  const classes = useStyles();
  return (
    <div  data-testid="explore-container">
      <Grid container>
        <Grid item sm={1} xs={2}></Grid>
        <Grid item sm={8} xs={8}>
          {/* content */}
          <Box
            px={{ xs: 3, sm: 10 }}
            py={{ xs: 5, sm: 10 }}
            // bgcolor="#f1f6f4"
            color="#6D787E"
          >
            <Container maxWidth="lg">
              <Grid container spacing={5}>
                {/* <Typography variant="h4" className={classes.lnkstl}>
                        Big ideas in small packages Start learnign now
                      </Typography> */}

                <Grid item xs={12} sm={4}>
                  <Box
                    borderBottom={1}
                    className={classes.hlnk}
                    id="head1"
                    sx={{ fontSize: "18px", fontWeight: "bold" }}
                    
                    onClick={Highlightdown}
                  >
                   Explore by category
                  </Box>
                  <br />
                  <Box>

                    <Link to={"/entrapreneur"} color="inherit" className={classes.lnk} >
                    <RocketIcon className={classes.iconn}/> Entrepreneurship
                    </Link>
                  </Box>{" "}
                  <br />
                  <Box>
                    <Link to={"/entrapreneur"}  className={classes.lnk} >
                    <Science className={classes.iconn}/>   Science{" "}
                    </Link>
                  </Box>{" "}
                  <br />
                  <Box>
                    <Link to={"/entrapreneur"}   className={classes.lnk} >
                   <Public className={classes.iconn}/> Economics
                    </Link>
                  </Box>{" "}
                  <br />
                  <Box>
                    <Link to={"/entrapreneur"}  className={classes.lnk} >
                    <CorporateFare className={classes.iconn}/>  Corporate Culture
                    </Link>
                  </Box>{" "}
                  <br />
                  <Box>
                    <Link to={"/entrapreneur"}  className={classes.lnk} >
                 <Psychology className={classes.iconn}/>   Psychology
                    </Link>
                  </Box>{" "}
                  <br />
                  <Box>
                    <Link to={"/entrapreneur"}   className={classes.lnk} >
                   <Spa className={classes.iconn}/> Nature & Environment
                    </Link>
                  </Box>{" "}
                  <br />
                </Grid>

                <Grid item xs={12} sm={4}>
                  <Box
                    borderBottom={1}
                    className={classes.hlnk}
                    id="head1"
                    sx={{ fontSize: "18px", fontWeight: "bold" }}
                    onMouseOver={Highlight}
                    onMouseDown={Highlightdown}
                  >
                    See recently added titles
                  </Box>
                  <br />
                  <Box>
                    <Link to={"/entrapreneur"}   className={classes.lnk} >
                   <AccountBalance className={classes.iconn} /> Politics
                    </Link>
                  </Box>{" "}
                  <br />
                  <Box>
                    <Link to={"/entrapreneur"}   className={classes.lnk} >
                   <Apartment/> Health & Nutrition{" "}
                    </Link>
                  </Box>{" "}
                  <br />
                  <Box>
                    <Link to={"/entrapreneur"}  className={classes.lnk} >
                   <TempleBuddhist className={classes.iconn}/> History
                    </Link>
                  </Box>{" "}
                  <br />
                  <Box>
                    <Link to={"/entrapreneur"}   className={classes.lnk} >
                   <TipsAndUpdates className={classes.iconn}/> Motivation & Inspiration
                    </Link>
                  </Box>{" "}
                  <br />
                  <Box>
                    <Link to={"/entrapreneur"}   className={classes.lnk} >
                    <HourglassBottom className={classes.iconn}/>Productivity
                    </Link>
                  </Box>{" "}
                  <br />
                  <Box>
                    <Link to={"/entrapreneur"}   className={classes.lnk} >
                   <Adjust className={classes.iconn}/> Career & Success
                    </Link>
                  </Box>{" "}
                  <br />
                </Grid>

                <Grid item xs={12} sm={4}>
                  <Box
                    borderBottom={1}
                    className={classes.hlnk}
                    id="head1"
                    sx={{ fontSize: "18px", fontWeight: "bold" }}
                    onMouseOver={Highlight}
                    onMouseDown={Highlightdown}
                  >
                   See popular titles
                  </Box>
                  <br />
                  <Box>
                    <Link to={"/entrapreneur"}   className={classes.lnk}  >
                   <AutoGraph/> Marketing & Sales
                    </Link>
                  </Box>{" "}
                  <br />
                  <Box>
                    <Link to={"/entrapreneur"}   className={classes.lnk} >
                 <SignalCellularAlt/>   Personal Development{" "}
                    </Link>
                  </Box>{" "}
                  <br />
                  <Box>
                    <Link to={"/entrapreneur"}   className={classes.lnk} >
                   <AddComment/> Communication Skills
                    </Link>
                  </Box>{" "}
                  <br />
                  <Box>
                    <Link to={"/entrapreneur"}   className={classes.lnk} >
                 <LocalAtm/>   Money & Investments
                    </Link>
                  </Box>{" "}
                  <br />
                  <Box>
                    <Link to={"/entrapreneur"}  className={classes.lnk} >
                 <FavoriteBorder/>   Sex & Relationship
                    </Link>
                  </Box>{" "}
                  <br />
                  <Box>
                    <Link to={"/entrapreneur"}  className={classes.lnk} >
                   <School fontSize="medium"/> Education
                    </Link>
                  </Box>{" "}
                  <br />
                </Grid>
              </Grid>
            </Container>
            {/* change inside  only */}
          </Box>
        </Grid>
        <Grid item sm={4} xs={2}></Grid>
      </Grid>
    </div>
  );
}

export default ExploreBox;
