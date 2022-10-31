import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MyAppointmentsPage from './pages/MyAppointmentsPage';
import ReportsPage from './pages/ReportPage';
import { OrderPlacedPage } from './pages/OrderPlacedPage';
import PatientDetailsPage from './pages/PatientDetailPage';
import { TrackOrderPage } from './pages/TrackOrder';
import { SignUpPage } from './pages/SignUpPage';
import { MobileOtpVerification } from './pages/MobileOtpVerfication';
import { Auth0Provider } from '@auth0/auth0-react';

const App = () => {
  return (
    <Auth0Provider
      domain="dev-dd7ug720.us.auth0.com"
      clientId="3tjxparSuESRqTLhvBFT2QvO1PJt735B"
      redirectUri={'https://3.144.239.72/mobile-otp-verification'}
    >
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route
            path="/mobile-otp-verification"
            element={<MobileOtpVerification />}
          />
          <Route path="/appointments" element={<MyAppointmentsPage />} />
          <Route path="/test-booking" element={<PatientDetailsPage />} />
          <Route path="/reports" element={<ReportsPage />} />
          <Route path="/orderPlaced" element={<OrderPlacedPage />} />
          <Route path="/track-order" element={<TrackOrderPage />} />
        </Routes>
      </Router>
    </Auth0Provider>
  );
};

export default App;
