import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles({
  tab: {
    width: "auto",
    textTransform: "none",
    textAlign: "left",
    fontSize: "20px",
    fontWeight: "normal",
    paddingRight: "150px",
    paddingBottom: "16px",
    color: "#03314B",
    fontFamily: "Cera Pro",
  },
  tabContent: {
    color: "#03314B",
    fontFamily: "Cera Pro",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "18px",
  },
});

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function BookTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yPropsBook(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BookTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className="App" data-testid="booktabs-page">
    <Box
      sx={{
        width: "680px",
        marginTop: "50px",

        marginBottom: "50px",
      }}
    >
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          width: "900px",
        }}
      >
        <Tabs
          value={value}
          textColor="primary"
          indicatorColor="primary"
          onChange={handleChange}
          aria-label="basic tabs example"
          TabIndicatorProps={{
            style: { backgroundColor: "#22C870" },
          }}
        >
          <Tab
            label="Synopsis "
            {...a11yPropsBook(0)}
            className={classes.tab}
          />

          <Tab
            label="Who is it for ?"
            {...a11yPropsBook(1)}
            className={classes.tab}
          />
          <Tab
            label="About the author"
            {...a11yPropsBook(2)}
            className={classes.tab}
          />
        </Tabs>
      </Box>
      <BookTabPanel value={value} index={0}>
        <Typography className={classes.tabContent}>
          Beyond Entrepreneurship 2.0 (2020) updates Jim Collins and Bill
          Lazier’s essential 1992 business handbook, Beyond Entrepreneurship for
          the entrepreneurs, visionaries, and innovators of today. This new
          edition combines the timeless business advice and strategy of the
          original text, supplemented with cutting-edge insights and case
          studies pertinent to today’s business world.
        </Typography>
      </BookTabPanel>
      <BookTabPanel value={value} index={1}>
        <Typography className={classes.tabContent}>
          Beyond Entrepreneurship 2.0 (2020) updates Jim Collins and Bill
          Lazier’s essential 1992 business handbook, Beyond Entrepreneurship for
          the entrepreneurs.
        </Typography>
      </BookTabPanel>
      <BookTabPanel value={value} index={2}>
        <Typography className={classes.tabContent}>
          Beyond Entrepreneurship 2.0 (2020) updates Jim Collins and Bill
          Lazier’s essential 1992 business handbook, Beyond Entrepreneurship for
          the entrepreneurs, visionaries, and innovators of today.
        </Typography>
      </BookTabPanel>
    </Box>
    </div>
  );
}