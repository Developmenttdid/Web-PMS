import React from "react";
import { useLocation } from "react-router-dom";

const DatabaseNav = () => {
  const location = useLocation();

  return (
    <div
      className="nav-container d-flex flex-column flex-shrink-0 p-3 text-white"
      style={{
        width: "300px",
        height: "100vh",
        backgroundColor: "#f8f9fa",
        boxShadow: "2px 0 5px rgba(0,0,0,0.1)"
      }}
    >
      <hr className="w-100" />
      <ul className="nav nav-pills flex-column w-100">
        <li className="nav-item">
          <a
            href="/Checklistdb"
            className={`nav-link ${
              location.pathname === "/Checklistdb" ? "active" : ""
            }`}
          >
            Checklist Database
          </a>
        </li>
        <li className="nav-item">
          <a
            href="/ProjectLogbook"
            className={`nav-link ${
              location.pathname === "/ProjectLogbook" ? "active" : ""
            }`}
          >
            Project Logbook
          </a>
        </li>
        <li className="nav-item">
          <a
            href="/UAVLogbook"
            className={`nav-link ${
              location.pathname === "/UAVLogbook" ? "active" : ""
            }`}
          >
            UAV Logbook
          </a>
        </li>
        <li className="nav-item">
          <a
            href="/FlightRecord"
            className={`nav-link ${
              location.pathname === "/FlightRecord" ? "active" : ""
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
