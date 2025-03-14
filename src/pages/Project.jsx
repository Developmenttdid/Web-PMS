import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Project.css";

function Project() {
  const [projectData, setProjectData] = useState([]);
  const [position, setPosition] = useState(null); // ⬅️ State untuk posisi user
  const email = localStorage.getItem("email");

  document.body.style.overflowY = "auto";
  document.body.style.overflowX = "hidden";

  // 🟢 Fetch posisi user berdasarkan email yang login
  useEffect(() => {
    const fetchUserPosition = async () => {
      try {
        const response = await fetch("http://103.163.184.111:3000/users");
        const users = await response.json();

        const loggedInUser = users.find((user) => user.email === email);
        if (loggedInUser) {
          setPosition(loggedInUser.position);
          console.log("User position:", loggedInUser.position); // 🟢 Debug 1
        } else {
          console.warn("User tidak ditemukan di database.");
        }
      } catch (error) {
        console.error("Error fetching user position:", error);
      }
    };

    fetchUserPosition();
  }, [email]);

  // 🟢 Fetch data project berdasarkan email yang login
  useEffect(() => {
    const fetchProjectData = async () => {
      try {
        const response = await fetch("http://103.163.184.111:3000/projectstatus");
        const data = await response.json();
        const filteredData = data
          .filter((project) => project.email === email)
          .map((project) => ({
            id: project.id,
            code: project.project_code,
            location: project.city,
            date: new Date(project.created_at).toISOString().split("T")[0], // Format date to YYYY-MM-DD
            progress: 50, // Always set to 50 for now
          }));

        setProjectData(filteredData);
      } catch (error) {
        console.error("Error fetching project data:", error);
      }
    };

    fetchProjectData();
  }, [email]);

  return (
    <div>
      <div className="container-fluid">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col ms-3">
            <h2>Project List</h2>
          </div>
          <div className="col">
            <Link to="/Project/ProjectStatus">
              <button
                type="button"
                className="button-add btn btn-success mb-3 me-3 mt-3"
                disabled={position !== "Project Manager" && position !== "Admin"}
                style={{
                  opacity: position !== "Project Manager" && position !== "Admin" ? 0.5 : 1,
                  cursor: position !== "Project Manager" && position !== "Admin" ? "not-allowed" : "pointer",
                }}
                onClick={() => {
                  if (position !== "Project Manager" && position !== "Admin") {
                    alert("Anda tidak memiliki akses untuk menambah proyek.");
                  }
                }}
              >
                <i className="bi bi-plus"></i> Add Project
              </button>
            </Link>
          </div>
        </div>

        <div className="container-fluid">
          <table className="table text-center table-bordered" style={{ borderColor: "#143893" }}>
            <thead className="px-sm-2">
              <tr>
                <th scope="col" style={{ width: "5%", backgroundColor: "#143893", color: "#CCE6FF" }}>#</th>
                <th scope="col" style={{ width: "15%", backgroundColor: "#143893", color: "#CCE6FF" }}>Project Code</th>
                <th scope="col" style={{ width: "15%", backgroundColor: "#143893", color: "#CCE6FF" }}>Location</th>
                <th scope="col" style={{ width: "10%", backgroundColor: "#143893", color: "#CCE6FF" }}>Date Created</th>
                <th scope="col" style={{ width: "15%", backgroundColor: "#143893", color: "red" }}>Last Update</th>
                <th scope="col" style={{ width: "35%", backgroundColor: "#143893", color: "#CCE6FF" }}>Progress</th>
                <th scope="col" style={{ width: "5%", backgroundColor: "#143893", color: "#CCE6FF" }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {projectData.map((project, index) => (
                <tr key={project.id}>
                  <th scope="row">{index + 1}</th>
                  <td>{project.code}</td>
                  <td>{project.location}</td>
                  <td>{project.date}</td>
                  <td>{project.date}</td>
                  <td className="progress-container">
                    <div className="progress-content">
                      <div className="progress">
                        <div
                          className="progress-bar"
                          style={{ width: `${project.progress}%` }}
                        ></div>
                      </div>
                      <span className="text-sm">{project.progress}%</span>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex justify-content-center">
                      <button
                        type="button"
                        className="btn btn-danger btn-outline-light"
                        disabled={position !== "Project Manager" && position !== "Admin"}
                        style={{
                          opacity: position !== "Project Manager" && position !== "Admin" ? 0.5 : 1,
                          cursor: position !== "Project Manager" && position !== "Admin" ? "not-allowed" : "pointer",
                        }}
                        onClick={() => {
                          if (position !== "Project Manager" && position !== "Admin") {
                            alert("Anda tidak memiliki akses untuk menghapus proyek.");
                          }
                        }}
                      >
                        <i className="bi bi-trash3"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Project;
