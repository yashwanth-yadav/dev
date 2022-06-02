import * as React from 'react';
import { makeStyles, Theme } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";

import BooksList from "../../templates/BooksList/BooksList";


import { styled } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import FinishedBooks from "../../templates/FinishedBooks/FinishedBooks";
import MyLibraryHeading from "../../atoms/MyLibraryHeading/MyLibraryHeading";




const bookt=[{
  "image": "../Assets/book0.png",
  "name": "Being Boss",
  "author": "Kathleen Shannon and Emily...",
  "time": "13-minute read",
  "finished":false,
  "prog":13,
  "added":true,
}
];

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
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
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    boxSizing:'border-box',
  },
  bar:{
    background: "none" ,
     color: "#036200",
     
  },
  libhead: {
    position: "absolute",
    width: "178px",
    height: "45px",
    left: "264px",
    top: "100px",
    weight: "bold",
    size: "36px",
   
  },
  tabs:{
    color:'#6D787E',
    "&:hover": {
      color: '#22C870'
    },
    fontWeight:'bold',
    fontSize: "14px",




  }
}));

const AntTabs = styled(Tabs)({
  borderBottom: '1px solid #e8e8e8',
  '& .MuiTabs-indicator': {
    backgroundColor: '#1890ff',
  },
  paddingLeft:'80px',
  alignContent:'left',
});

interface StyledTabProps {
  label: string;
}
const AntTab = styled((props: StyledTabProps) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: 'none',
    minWidth: '334px',
    [theme.breakpoints.up('sm')]: {
      minWidth: '334px',
    },
    fontSize:'18px',
    // alignContent:,
    
    fontWeight: theme.typography.fontWeightBold,
    marginRight: theme.spacing(1),
    color: '#6D787E',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      color: '#22C870',
      // opacity: 1,
    },
    '&.Mui-selected': {
      color: '#22C870',
      fontWeight: theme.typography.fontWeightBold,
    },
    '&.Mui-focusVisible': {
      backgroundColor: '#d1eaff',
    },
  }),
);

type BookListProps = {
  details: {
    id:number;
    image: string;
    name: string;
    author: string;
    time: string;
    finished:boolean;
    prog:number;
    added:boolean;
  }[];
  setBooks:Function;
};

export default function SimpleTabs(props: BookListProps) {
  const booksdata=props.details;
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  // const [booksdata, setBooksdata] = useState(null);

  // useEffect(() => {
  //   fetch('http://localhost:8000/books')
  //   .then(res=>{
  //     return res.json();
  //   })
  //   .then(data=>{
  //     setBooksdata(data);
  //     console.log(booksdata);
  //   });
  // },[]);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };
 
  // const [books, setBooks] = useState(props.details);
  const books=props.details;
  const setBooks=props.setBooks;
  return (
    <div className={classes.root} data-testid="simple-tabs" >



<div className={classes.libhead}>
        <MyLibraryHeading />
      </div>

     
        
        <AntTabs
          value={value}
          onChange={handleChange}
          box-shadow='none'
          TabIndicatorProps={{style: {background:'#22C870', float: "left"}}}
         
        >
          <AntTab label="Currently Reading" {...a11yProps(0)} />
          <AntTab label="Finished" {...a11yProps(1)} />
        </AntTabs>

      <TabPanel value={value} index={0}>
       {books&& <BooksList details={books} setBooks={setBooks} />}
      </TabPanel>
      <TabPanel value={value} index={1}>
      { books&& <FinishedBooks details={books} setBooks={setBooks}/>}
      </TabPanel>
    </div>
  );
}
