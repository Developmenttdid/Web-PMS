import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import './index.css';
import App from './pages/App';
import Homepage from './pages/Homepage';
import Project from './pages/Project';
import Company from './pages/Company';
import Header from './components/Header';
import Flightdb from './pages/Flightdb';
import Map from './pages/Map';
import Profile from './pages/Profile';
import Addproject from './pages/Addproject';
import reportWebVitals from './reportWebVitals';
import ProfileNav from './components/profilenav';
import ChangePassword from './pages/ChangePassword';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route element={<HeaderLayout />}>
          <Route path="/Homepage" element={<Homepage />} />
          <Route path="/Project" element={<Project />} />
          <Route path="/Company" element={<Company />} />
          <Route path="/Flightdb" element={<Flightdb />} />
          <Route path="/Map" element={<Map />} />
          <Route path="/Project/Addproject" element={<Addproject />} />
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