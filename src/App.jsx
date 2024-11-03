import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './page/home/Home';
import Login from './page/auth/Login';
import AdultRegistration from './page/auth/AdultRegistration';
import VolunteerRegistration from './page/auth/VolunteerRegistration';
import OrganizationRegistration from './page/auth/OrganizationRegistration';
import BeneficiaryRegistration from './page/auth/BeneficiaryRegistration';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register-adult" element={<AdultRegistration />} />
        <Route path="/register-volunteer" element={<VolunteerRegistration />} />
        <Route path="/register-organization" element={<OrganizationRegistration />} />
        <Route path="/register-beneficiary" element={<BeneficiaryRegistration />} />
      </Routes>
    </Router>
  );
}

export default App;