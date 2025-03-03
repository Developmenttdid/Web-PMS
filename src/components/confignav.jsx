import React from "react";
import { useLocation } from "react-router-dom";

const ConfigNav = () => {
  const location = useLocation();

  return (
    <div
      className="nav-container d-flex flex-column flex-shrink-0 p-3 text-white position-fixed"
      style={{
        width: "250px",
        minHeight: "100vh",
        backgroundColor: "#f8f9fa",
        boxShadow: "2px 0 5px rgba(0,0,0,0.1)"
      }}
    >
      <hr className="w-100" />
      <ul className="nav nav-pills flex-column w-100">
        <li className="nav-item">
          <a
            href="/Project/ProjectStatus"
            className={`nav-link ${
              location.pathname === "/Project/ProjectStatus" ? "active" : ""
            }`}
          >
            Project Status
          </a>
        </li>
        <li className="nav-item">
          <a
            href="/Project/ProjectTimeline"
            className={`nav-link ${
              location.pathname === "/Project/ProjectTimeline" ? "active" : ""
            }`}
          >
            Project Timeline
          </a>
        </li>
        <li className="nav-item">
          <a
            href="/Project/Personnel"
            className={`nav-link ${
              location.pathname === "/Project/Personnel" ? "active" : ""
            }`}
          >
            Personnel
          </a>
        </li>
        <li className="nav-item">
          <a
            href="/Project/Equipment"
            className={`nav-link ${
              location.pathname === "/Project/Equipment" ? "active" : ""
            }`}
          >
            Equipment
          </a>
        </li>
        <li className="nav-item">
          <a
            href="/Project/LegalDocument"
            className={`nav-link ${
              location.pathname === "/Project/LegalDocument" ? "active" : ""
            }`}
          >
            Legal Document
          </a>
        </li>
        <li className="nav-item p-2 bg-success border border-success rounded-2 mt-5">
          <a
            href="/Project"
            className="text-white text-decoration-none fw-bold align-items-center d-flex justify-content-center"
          >
            Submit Project
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ConfigNav;
