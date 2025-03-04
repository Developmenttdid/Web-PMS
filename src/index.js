import React from "react";
import ReactDOM from "react-dom/client";
import {
  Outlet,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import DatabaseNav from "./components/databasenav";
import Header from "./components/Header";
import ProfileNav from "./components/profilenav";
import "./index.css";
import Addproject from "./pages/Addproject";
import App from "./pages/App";
import ChangePassword from "./pages/ChangePassword";
import Company from "./pages/Company";
import Documents from "./pages/Documents";
import Equipment from "./pages/Equipment";
import Checklistdb from "./pages/Flightdb";
import FlightRecord from "./pages/Flightrec";
import Homepage from "./pages/Homepage";
import Map from "./pages/Map";
import OperationManual from "./pages/OperationManual";
import Personnel from "./pages/Personnel";
import Profile from "./pages/Profile";
import Project from "./pages/Project";
import ProjectLogbook from "./pages/Projectlog";
import ProjectStatus from "./pages/ProjectStatus";
import SOP from "./pages/SOP";
import UAVLogbook from "./pages/Uavlog";
import reportWebVitals from "./reportWebVitals";

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
          <Route path="/Checklistdb" element={<Checklistdb />} />
          <Route path="/ProjectLogbook" element={<ProjectLogbook />} />
          <Route path="/UAVLogbook" element={<UAVLogbook />} />
          <Route path="/FlightRecord" element={<FlightRecord />} />
          <Route path="/Documents" element={<Documents />} />
          <Route path="/Equipment" element={<Equipment />} />
          <Route path="/Personnel" element={<Personnel />} />
          <Route path="/ProjectStatus" element={<ProjectStatus />} />
          <Route path="/OperationManual" element={<OperationManual />} />
          <Route path="/SOP" element={<SOP />} />

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
