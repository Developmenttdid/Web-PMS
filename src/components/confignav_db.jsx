// confignav_db awal, yg update projectstatus ud bs, yg equipment on progress
import { useLocation, useNavigate } from "react-router-dom";

const ConfigNav_db = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleSubmitProject = async (event) => {
    event.preventDefault();

    // Get all data from localStorage
  const projectCode = localStorage.getItem("projectCode");
  const selectedOption = JSON.parse(localStorage.getItem("selectedOption"));
  const selectedCity = JSON.parse(localStorage.getItem("selectedCity"));
  const originalProjectCode = localStorage.getItem("originalProjectCode");
  const email = localStorage.getItem("email");
  const equipmentList = JSON.parse(localStorage.getItem("equipmentList")) || [];

  // Personnel data with project-specific key
    const personnelKey = `personnelList_${localStorage.getItem("projectCode")}`;
    const personnelList = JSON.parse(localStorage.getItem(personnelKey)) || [];
    const existingPersonnel = JSON.parse(localStorage.getItem("existingPersonnel")) || [];

  // Debug logs
  console.log("Project data:", {
    projectCode,
    selectedOption: selectedOption?.label,
    selectedCity: selectedCity?.label,
    originalProjectCode,
    email
  });
  console.log("Equipment list:", equipmentList);

  // Validate required data
  if (!projectCode || !originalProjectCode) {
    alert("No project data to save!");
    return;
  }

  try {
    // 1. First update project status
    const projectStatusResponse = await fetch(`http://103.163.184.111:3000/projectstatus`);
    if (!projectStatusResponse.ok) throw new Error("Failed to fetch projects");
    
    const allProjects = await projectStatusResponse.json();
    const projectToUpdate = allProjects.find(p => p.project_code === originalProjectCode);
    
    if (!projectToUpdate) throw new Error(`Project ${originalProjectCode} not found`);
    
    const updateProjectResponse = await fetch(
      `http://103.163.184.111:3000/projectstatus/${projectToUpdate.id}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          project_code: projectCode,
          project_type: selectedOption?.label || "",
          city: selectedCity?.label || "",
          email: email
        })
      }
    );

    if (!updateProjectResponse.ok) {
      const error = await updateProjectResponse.json();
      throw new Error(error.message || "Failed to update project status");
    }

    console.log("Project status updated successfully");

    // 2. Then update equipment
    const equipmentEndpoint = "http://103.163.184.111:3000/project_equipment";
    
    for (const item of equipmentList) {
      const payload = {
        project_code: projectCode,
        equipment_name: item.equipment?.label || "",
        equipment_type: item.type?.value || "",
        equipment_id: item.equipmentID?.value || "",
        email: email
      };

      if (item.realId) {
        // Update existing equipment
        const response = await fetch(`${equipmentEndpoint}/${item.realId}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload)
        });
        
        if (!response.ok) {
          const error = await response.json();
          console.error(`Failed to update equipment ${item.realId}:`, error);
        }
      } else {
        // Add new equipment
        const response = await fetch(equipmentEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ project_equipment: [payload] })
        });
        
        if (!response.ok) {
          const error = await response.json();
          console.error("Failed to add equipment:", error);
        }
      }
    }

    //3. update personnel
     // 3. Handle personnel updates
      const personnelUpdates = {
        toCreate: [],
        toUpdate: [],
        toDelete: []
      };

      // Identify personnel to delete (existing but not in current list)
      existingPersonnel.forEach(ep => {
        if (!personnelList.some(p => p.id === ep.id)) {
          personnelUpdates.toDelete.push(ep.id);
        }
      });

      // Prepare create/update data
      personnelList.forEach(person => {
        const personnelData = {
          personnel_name: person.name?.label || person.name || "",
          personnel_role: person.role?.label || person.role || "",
          email: email,
          project_code: projectCode,
        };

        // Update: id dari database
        if (person.id && existingPersonnel.some(ep => ep.id === person.id)) {
          personnelUpdates.toUpdate.push({
            ...personnelData,
            id: person.id
          });
        }
        // Create: tidak punya id atau id temp
        else if (
          (!person.id || (typeof person.id === "string" && person.id.startsWith("temp-"))) &&
          (person.name || person.name?.label) && 
          (person.role || person.role?.label)
        ) {
          personnelUpdates.toCreate.push(personnelData);
        }
      });

      // Delete personnel
      if (personnelUpdates.toDelete.length > 0) {
        await Promise.all(personnelUpdates.toDelete.map(id =>
          fetch(`http://103.163.184.111:3000/personnel/${id}`, {
            method: "DELETE"
          })
        ));
      }

      // Create new personnel
      if (personnelUpdates.toCreate.length > 0) {
        await fetch("http://103.163.184.111:3000/personnel", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ personnel: personnelUpdates.toCreate }),
        });
      }

      // Update existing personnel
      if (personnelUpdates.toUpdate.length > 0) {
        await Promise.all(personnelUpdates.toUpdate.map(person =>
          fetch(`http://103.163.184.111:3000/personnel/${person.id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(person),
          })
        ));
      }

    // const personnelEndpoint = "http://103.163.184.111:3000/personnel";

    //   for (const item of personnelList) {
    //     const payload = {
    //       project_code: projectCode,
    //       personnel_name: item.name?.label || item.name || "", // Handle both object and string
    //       personnel_role: item.role?.label || item.role || "", // Handle both object and string
    //       email: email
    //     };

    //     if  (item.realId) {
    //        // update existing personnel
    //       const updateId = item.id || item.realId; // Gunakan id atau realId jika ada
    //       if (!updateId) {
    //         console.error("No ID found for personnel update:", item);
    //         continue;
    //       }
          
    //       const response = await fetch(`${personnelEndpoint}/${updateId}`, {
    //         method: "PUT",
    //         headers: { "Content-Type": "application/json" },
    //         body: JSON.stringify(payload)
    //       });
          
    //       if (!response.ok) {
    //         const error = await response.json();
    //         console.error(`Failed to update personnel ${updateId}:`, error);
    //       }
    //     } else {
         
    //     // post new personnel
    //       const response = await fetch(personnelEndpoint, {
    //         method: "POST",
    //         headers: { "Content-Type": "application/json" },
    //         body: JSON.stringify({ personnel: [payload] })
    //       });
          
    //       if (!response.ok) {
    //         const error = await response.json();
    //         console.error("Failed to add personnel:", error);
    //       }
    //     }
    //   }

    console.log("All equipment processed successfully");

    // 3. Clean up and show success
    localStorage.removeItem("projectCode");
    localStorage.removeItem("selectedOption");
    localStorage.removeItem("selectedCity");
    localStorage.removeItem("originalProjectCode");
    localStorage.removeItem("equipmentList");
    localStorage.removeItem("sessionActive");
          localStorage.removeItem(personnelKey);
      localStorage.removeItem("existingPersonnel");

    alert("Project data saved successfully!");
    window.location.reload();

  } catch (error) {
    console.error("Error saving project:", error);
    alert(`Failed to save project: ${error.message}`);
  }


  };

  return (
    <div
      className="nav-container d-flex flex-column flex-shrink-0 p-3 text-white position-fixed"
      style={{
        width: "250px",
        minHeight: "100vh",
        backgroundColor: "#f8f9fa",
        boxShadow: "2px 0 5px rgba(0,0,0,0.1)",
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
            href="/Project/ProjectStatus_db"
            className={`nav-link ${
              location.pathname === "/Project/ProjectStatus_db" ? "active" : ""
            }`}
          >
            Project Status
          </a>
        </li>
        <li className="nav-item">
          <a
            href="/Project/ProjectTimeline_db"
            className={`nav-link ${
              location.pathname === "/Project/ProjectTimeline_db"
                ? "active"
                : ""
            }`}
          >
            Project Timeline
          </a>
        </li>
        <li className="nav-item">
          <a
            href="/Project/Personnel_db"
            className={`nav-link ${
              location.pathname === "/Project/Personnel_db" ? "active" : ""
            }`}
          >
            Personnel
          </a>
        </li>
        <li className="nav-item">
          <a
            href="/Project/Equipment_db"
            className={`nav-link ${
              location.pathname === "/Project/Equipment_db" ? "active" : ""
            }`}
          >
            Equipment
          </a>
        </li>
        <li className="nav-item">
          <a
            href="/Project/LegalDocument_db"
            className={` text-danger nav-link ${
              location.pathname === "/Project/LegalDocument_db" ? "active" : ""
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
            Save Changes
          </button>
        </li>
      </ul>
    </div>
  );
};

export default ConfigNav_db;
