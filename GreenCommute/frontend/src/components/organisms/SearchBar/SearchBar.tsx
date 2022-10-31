import { Box, Input, List, ListItemText } from '@mui/material';
import React, { useState } from 'react';
import theme from '../../../theme';
import {
  locIcon,
  SearchBarDiv,
  WorkInSearch,
  circ,
  search
} from '../../../utils/constants';
import Icons from '../../atoms/Icons/Icons';
import IconButtonAtom from '../../atoms/IconButton/IconButtonAtom';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';

interface SearchBarProps {
  jobLocation: string;
  handleSearch: (searchLoc: string, searchSkill: string) => void;
}

const skillOptions = [
  'UI/UX Designer',
  'System Administrator',
  'Full Stack Developer'
];
const locationOptions = [
  'Mumbai',
  'Warangal',
  'Hyderabad',
  'New Delhi',
  'Jaipur'
];

let disp1 = false;
let disp2 = false;

const SearchBar = (props: SearchBarProps) => {
  const [value, setValue] = useState('');
  const [locValue, setLocValue] = useState('');

  const onChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    disp1 = true;
    setValue(event.target.value);
  };

  const onSearch = (searchTerm: React.SetStateAction<string>) => {
    setValue(searchTerm);
    disp1 = false;
  };

  const SearchNow = () => {
    disp1 = false;
    disp2 = false;
  };

  const onLocChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    disp2 = true;
    setLocValue(event.target.value);
  };

  const onLocSearch = (searchLocTerm: React.SetStateAction<string>) => {
    setLocValue(searchLocTerm);
    disp2 = false;
  };

  return (
    <Box
      sx={{
        position: 'relative',
        // width: theme.spacing(210.75),
        width: 'inherit',

        height: theme.spacing(14),
        boxSizing: 'border-box',
        backgroundColor: theme.palette.gammaWhite.main,
        borderCollapse: 'separate',
        perspective: theme.spacing(0.25),
        borderRadius: theme.spacing(8)
      }}
    >
      <Box
        role="jobIcon"
        sx={{
          position: 'absolute',
          top: theme.spacing(5),
          left: theme.spacing(7)
        }}
      >
        <Icons
          height={theme.spacing(4)}
          width={theme.spacing(4)}
          icon={WorkInSearch}
        />
      </Box>

      <Box
        sx={{
          position: 'absolute',
          top: theme.spacing(4.25),
          left: theme.spacing(14),
          width: theme.spacing(105.5)
        }}
      >
        <Input
          role="input01"
          disableUnderline
          sx={{
            display: 'inline-block',
            '& input': {
              width: theme.spacing(105.5),
              color: theme.palette.betaHigh.main,
              ...theme.typography.body2,
              padding: theme.spacing(0),
              margin: theme.spacing(0),
              '&::placeholder': {
                color: theme.palette.betaMedium.main,
                ...theme.typography.body2
              }
            }
          }}
          value={value}
          onChange={onChange}
          placeholder="Search Skills"
        />
      </Box>
      <Box
        sx={{
          position: 'absolute',
          top: theme.spacing(2.5),
          left: theme.spacing(102),
          color: theme.palette.beta400.main
        }}
      >
        <Icons
          height={theme.spacing(9)}
          width={theme.spacing(0.25)}
          icon={SearchBarDiv}
        />
      </Box>

      <Box
        sx={{
          position: 'absolute',
          top: theme.spacing(4.9375),
          // left: theme.spacing(109.3125),
          left: '50%',

          color: theme.palette.betaHigh.main
        }}
      >
        <Icons
          icon={locIcon}
          height={theme.spacing(4.125)}
          width={theme.spacing(3.375)}
        ></Icons>
      </Box>

      <Box
        sx={{
          position: 'absolute',
          top: theme.spacing(3.8125),
          // left: theme.spacing(110.4375),
          left: '50.4%',
          color: theme.palette.betaHigh.main
        }}
      >
        <Icons
          icon={circ}
          height={theme.spacing(1.125)}
          width={theme.spacing(1.125)}
        ></Icons>
      </Box>
      <Box
        sx={{
          position: 'absolute',
          top: theme.spacing(4.25),
          left: '52%',
          [theme.breakpoints.down('md')]: {
            left: '54%'
          },
          width: theme.spacing(60.5)
        }}
      >
        <Input
          role="input02"
          disableUnderline
          sx={{
            display: 'inline-block',
            '& input': {
              width: theme.spacing(85.5),
              color: theme.palette.betaHigh.main,
              ...theme.typography.body2,
              padding: theme.spacing(0),
              margin: theme.spacing(0)
            }
          }}
          value={locValue}
          onChange={onLocChange}
          placeholder="Location"
        />
      </Box>

      <Box
        role="searchIcon"
        onClick={SearchNow}
        sx={{
          position: 'absolute',
          top: theme.spacing(1.5),
          right: theme.spacing(1.5)
        }}
      >
        <IconButtonAtom
          sx={{
            height: theme.spacing(11),
            width: theme.spacing(11),
            minWidth: theme.spacing(11),
            borderRadius: '50%',
            backgroundColor: 'alpha400.main',
            cursor: 'pointer',
            '&:hover': {
              backgroundColor: 'alpha600.main',
              borderColor: 'alpha300.main'
            }
          }}
          variant="contained"
          handleClick={() => {
            props.handleSearch(locValue, value);
          }}
          startIcon={<Icons icon={search} />}
        ></IconButtonAtom>
      </Box>

      <List
        style={
          disp1 == false
            ? { display: 'none' }
            : {
                position: 'absolute',
                backgroundColor:
                  value == '' ? theme.palette.mainBackground.main : 'white',
                top: theme.spacing(14.5),
                left: theme.spacing(14),

                width: theme.spacing(85.5),
                display: 'flex',
                flexDirection: 'column',
                color: theme.palette.betaHigh.main,
                ...theme.typography.body2
              }
        }
      >
        {skillOptions
          .filter((item) => {
            const searchTerm = value.toLowerCase();
            const jobName = item.toLowerCase();

            return (
              searchTerm &&
              jobName.includes(searchTerm) &&
              jobName !== searchTerm
            );
          })
          .slice(0, 10)
          .map((item) => (
            <ListItem
              disablePadding
              onClick={() => onSearch(item)}
              style={{ cursor: 'pointer', textAlign: 'start' }}
              key={item}
            >
              <ListItemButton>
                <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>
          ))}
      </List>

      <List
        style={
          disp2 == false
            ? { display: 'none' }
            : {
                position: 'absolute',
                backgroundColor:
                  locValue == '' ? theme.palette.mainBackground.main : 'white',
                top: theme.spacing(14.5),
                // left: theme.spacing(116),
                left: '52%',
                width: theme.spacing(85.5),
                display: 'flex',
                flexDirection: 'column',
                color: theme.palette.betaHigh.main,
                ...theme.typography.body2
              }
        }
      >
        {locationOptions
          .filter((item) => {
            const searchLocTerm = locValue.toLowerCase();
            const loccName = item.toLowerCase();

            return (
              searchLocTerm &&
              loccName.includes(searchLocTerm) &&
              loccName !== searchLocTerm
            );
          })
          .slice(0, 10)
          .map((item) => (
            <ListItem
              role="input02"
              disablePadding
              onClick={() => onLocSearch(item)}
              style={{ cursor: 'pointer', textAlign: 'start' }}
              key={item}
            >
              <ListItemButton>
                <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>
          ))}
      </List>
    </Box>
  );
};

export default SearchBar;
