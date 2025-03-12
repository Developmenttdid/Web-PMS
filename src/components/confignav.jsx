import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ConfigNav = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleSubmitProject = async (event) => {
    event.preventDefault();

    // Retrieve project data
    const selectedOption = JSON.parse(localStorage.getItem("selectedOption"));
    const selectedCity = JSON.parse(localStorage.getItem("selectedCity"));

    const projectData = {
        project_code: localStorage.getItem("projectCode"),
        project_type: selectedOption ? selectedOption.label : null,
        city: selectedCity ? selectedCity.label : null,
        email: localStorage.getItem("email")
    };

    // Retrieve personnel data
    const personnelNames = JSON.parse(localStorage.getItem("personnelNames")) || [];
    const personnelRoles = JSON.parse(localStorage.getItem("personnelRoles")) || [];

    const projectPersonnel = personnelNames.map((person, index) => ({
        personnel_name: person?.name?.label || "",
        personnel_role: personnelRoles[index]?.role?.label || "",
        email: localStorage.getItem("email"),
        project_code: localStorage.getItem("projectCode")
    }));

    const projectEquipment = (JSON.parse(localStorage.getItem("equipmentList")) || []).map((equipment) => ({
      equipment_name: equipment.equipment?.label || "",  
      equipment_type: equipment.type?.label || "",       
      equipment_id: equipment.equipmentID?.label || null,  // Allow null instead of empty string
      email: localStorage.getItem("email"),
      project_code: localStorage.getItem("projectCode"),
    })).filter(eq => eq.equipment_name && eq.equipment_type); // Only filter out missing names/types

  
    console.log("📦 Processed projectEquipment:", projectEquipment);
  

    // Prevent sending an empty array
    if (projectEquipment.length === 0) {
        console.warn("⚠️ No equipment data found. Skipping equipment submission.");
        alert("No equipment data found!");
        return;
    }

    try {
        // Check if project code exists
        const checkResponse = await fetch(`http://103.163.184.111:3000/projectstatus/${projectData.project_code}`);
        if (checkResponse.ok) {
            throw new Error("Project code already exists. Please use a different project code.");
        }

        // Upload project data
        const projectResponse = await fetch("http://103.163.184.111:3000/projectstatus", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(projectData),
        });

        if (!projectResponse.ok) throw new Error("Failed to submit project data");

        // Upload personnel data
        const personnelResponse = await fetch("http://103.163.184.111:3000/personnel", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(projectPersonnel),
        });

        if (!personnelResponse.ok) throw new Error("Failed to submit personnel data");

        // Upload equipment data
        const equipmentResponse = await fetch("http://103.163.184.111:3000/projectequipment", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(projectEquipment),
        });

        if (!equipmentResponse.ok) throw new Error("Failed to submit equipment data");

        console.log("✅ Equipment data successfully submitted!");

        // Clear localStorage after submission
        [
            "permissionList", "otherDocumentList", "equipmentList", "city",
            "projectCode", "projectObjective", "selectedOption", "selectedCity",
            "projectTableData", "personnelList", "personnelNames", "personnelRoles",
            "equipmentName", "equipmentType", "equipmentID"
        ].forEach(item => localStorage.removeItem(item));

        alert("Project, personnel, and equipment data submitted successfully!");

        // Navigate after submission
        navigate("/Project");
    } catch (error) {
        console.error("❌ Error submitting project data:", error);
        alert(error.message);
    }
  };

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
      <h4
        className="mt-0"
        style={{ color: "#0F0F56", fontWeight: "bold", fontSize: "1.5rem" }}
      >
        Manage Project
      </h4>
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
          <button
            className="text-white text-decoration-none fw-bold align-items-center d-flex justify-content-center w-100 bg-transparent border-0"
            onClick={handleSubmitProject}
          >
            Submit Project
          </button>
        </li>
      </ul>
    </div>
  );
};

export default ConfigNav;