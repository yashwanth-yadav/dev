import { ThemeProvider } from '@mui/material';
import React , {useState} from 'react';
import LandingPage from './components/pages/LandingPage/LandingPage';
import theme from './theme';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FindJobsPage from './components/pages/FindJobsPage';

const App = () => {
  const [currentLoc, setcurrentLoc] = useState("")
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage currentLoc={currentLoc} setcurrentLoc={setcurrentLoc} />} />
          <Route path="/home" element={<FindJobsPage currentLoc={currentLoc} />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
