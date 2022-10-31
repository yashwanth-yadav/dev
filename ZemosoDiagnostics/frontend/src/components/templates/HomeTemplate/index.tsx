import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Header from '../../organisms/Header';

interface HomeTemplateProps {
  mainComponent: JSX.Element;
}

const HomeTemplate = ({ mainComponent }: HomeTemplateProps) => {
  const { isAuthenticated } = useAuth0();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!isAuthenticated) navigate('/signup');
  }, [isAuthenticated, navigate]);
  return (
    <Box data-testid="home-template">
      <Header />
      <Box>{mainComponent}</Box>
    </Box>
  );
};

export default HomeTemplate;
