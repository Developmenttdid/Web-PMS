import React from "react";
import { useLocation } from "react-router-dom";

const DatabaseNav = () => {
  const location = useLocation();

  return (
    <div
      className="nav-container d-flex flex-column flex-shrink-0 p-3 text-white"
      style={{
        width: "250px",
        height: "100vh",
        backgroundColor: "#f8f9fa",
        boxShadow: "2px 0 5px rgba(0,0,0,0.1)"
      }}
    >
      <hr className="w-100" />
      <ul className="nav nav-pills flex-column w-100">
        <li className="nav-item">
          <a
            href="/FlightDatabase"
            className={`nav-link ${
              location.pathname === "/FlightDatabase" ? "active" : ""
            }`}
          >
            Checklist Database
          </a>
        </li>
        <li className="nav-item">
          <a
            href="/FlightDatabase/ProjectLogbook"
            className={`nav-link ${
              location.pathname === "/FlightDatabase/ProjectLogbook" ? "active" : ""
            }`}
          >
            Project Logbook
          </a>
        </li>
        <li className="nav-item">
          <a
            href="/FlightDatabase/UAVLogbook"
            className={`nav-link ${
              location.pathname === "/FlightDatabase/UAVLogbook" ? "active" : ""
            }`}
          >
            UAV Logbook
          </a>
        </li>
        <li className="nav-item">
          <a
            href="/FlightDatabase/FlightRecord"
            className={`nav-link ${
              location.pathname === "/FlightDatabase/FlightRecord" ? "active" : ""
            }`}
          >
            Flight Record
          </a>
        </li>
      </ul>
    </div>
  );
};

export default DatabaseNav;
