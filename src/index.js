import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import './index.css';
import App from './pages/App';
import Homepage from './pages/Homepage';
import Project from './pages/Project';
import Company from './pages/Company';
import Header from './components/Header';
import Checklistdb from './pages/Flightdatabase/Flightdb';
import Map from './pages/Map';
import Profile from './pages/Profile';
import ProjectStatus from './pages/Project Config/projectstatus';
import reportWebVitals from './reportWebVitals';
import ProfileNav from './components/profilenav';
import ChangePassword from './pages/ChangePassword';
import ProjectLogbook from './pages/Flightdatabase/Projectlog';
import UAVLogbook from './pages/Flightdatabase/Uavlog';
import FlightRecord from './pages/Flightdatabase/Flightrec';
import ConfigNav from './components/confignav';
import ProjectTimeline from './pages/Project Config/projecttimeline';
import Personnel from './pages/Project Config/personnel';
import Equipment from './pages/Project Config/equipment';
import LegalDocument from './pages/Project Config/legaldoc';
import ForgotPassword from './pages/forgotpassword';
import EquipmentCompany from './pages/Company/Equipment';
import PersonnelCompany from './pages/Company/Personnel';
import ProjectStatusCompany from './pages/Company/ProjectStatus';
import OperationManualCompany from './pages/Company/OperationManual';
import SOP from './pages/Company/SOP';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route element={<HeaderLayout />}>
          <Route path="/Homepage" element={<Homepage />} />
          <Route path="/Project" element={<Project />} />
          <Route path="/Company" element={<Company />} />
          <Route path="FlightDatabase" element={<Checklistdb />} />
          <Route path="/ForgotPassword" element={<ForgotPassword />} />
          <Route path="/Company/Equipment" element={<EquipmentCompany />} />
          <Route path="/Company/Personnel" element={<PersonnelCompany />} />
          <Route path="/Company/ProjectStatus" element={<ProjectStatusCompany />} />
          <Route path="/Company/OperationManual" element={<OperationManualCompany />} />
          <Route path="/Company/SOP" element={<SOP />} />
          <Route path="FlightDatabase/ProjectLogbook" element={<ProjectLogbook />} />
          <Route path="FlightDatabase/UAVLogbook" element={<UAVLogbook />} />
          <Route path="FlightDatabase/FlightRecord" element={<FlightRecord />} />
          <Route path="/Map" element={<Map />} />
          <Route path="/Project/Addproject" element={<Addproject />} />
          <Route element={<NavprofileLayout />}>
            <Route path="/Profile/AccountDetails" element={<Profile />} />
            <Route
              path="/Profile-/ChangePassword"
              element={<ChangePassword />}
            />
          </Route>
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();

function HeaderLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

function NavprofileLayout() {
  return (
    <div style={{ display: "flex" }}>
      <ProfileNav />
      <div style={{ flex: 1, padding: "20px" }}>
        <Outlet />
      </div>
    </div>
  );
}

function NavdatabaseLayout() {
  return (
    <div style={{ display: "flex" }}>
      <DatabaseNav />
      <div style={{ flex: 1, padding: "20px" }}>
        <Outlet />
      </div>
    </div>
  );
}
