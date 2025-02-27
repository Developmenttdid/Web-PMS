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
import DatabaseNav from './components/databasenav';
import ProjectLogbook from './pages/Flightdatabase/Projectlog';
import UAVLogbook from './pages/Flightdatabase/Uavlog';
import FlightRecord from './pages/Flightdatabase/Flightrec';
import ConfigNav from './components/confignav';
import ProjectTimeline from './pages/Project Config/projecttimeline';
import Personnel from './pages/Project Config/personnel';
import Equipment from './pages/Project Config/equipment';
import LegalDocument from './pages/Project Config/legaldoc';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route element={<HeaderLayout />}>
          <Route path="/Homepage" element={<Homepage />} />
          <Route path="/Project" element={<Project />} />
          <Route element = {<NavconfigLayout />}>
            <Route path="/Project/ProjectStatus" element={< ProjectStatus/>} />
            <Route path="/Project/ProjectTimeline" element={<ProjectTimeline />} />
            <Route path="/Project/Personnel" element={<Personnel />} />
            <Route path="/Project/Equipment" element={<Equipment />} />
            <Route path="/Project/LegalDocument" element={<LegalDocument />} />
          </Route>
          <Route path="/Company" element={<Company />} />
          <Route element = {<NavdatabaseLayout />}>
            <Route path="FlightDatabase" element={<Checklistdb />} />
            <Route path="FlightDatabase/ProjectLogbook" element={<ProjectLogbook />} />
            <Route path="FlightDatabase/UAVLogbook" element={<UAVLogbook />} />
            <Route path="FlightDatabase/FlightRecord" element={<FlightRecord />} />
          </Route>
          <Route path="/Map" element={<Map />} />
          <Route path="/Project/ProjectStatus" element={<ProjectStatus />} />
          <Route element={<NavprofileLayout />}>
            <Route path="/Profile/AccountDetails" element={<Profile />} />
            <Route path="/Profile/ChangePassword" element={<ChangePassword />} />
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

function NavconfigLayout() {
  return (
    <div style={{ display: "flex" }}>
      <ConfigNav />
      <div style={{ flex: 1, padding: "20px" }}>
        <Outlet />
      </div>
    </div>
  );
}