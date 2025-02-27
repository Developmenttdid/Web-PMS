import React from "react";
import { Link } from "react-router-dom";
import "./Project.css";

const projectData = [
  { id: 1, code: "PRJ-CONTOH-01", location: "Bandung", date: "20/02/2025", progress: 70 },
  { id: 2, code: "PRJ-CONTOH-02", location: "Jakarta", date: "21/02/2025", progress: 50 },
  { id: 3, code: "PRJ-CONTOH-03", location: "Surabaya", date: "22/02/2025", progress: 90 },
];

function Project() {
  return (
    <div className="project-page me-5">
      <Link to="ProjectStatus">
        <button type="button" className="button-add btn btn-primary mb-3 me-1 mt-3">Add Project</button>
      </Link>
      <h2 className="project-title ms-4 mt-3">Project List</h2>
      <table className="table-project table border text-center ms-4 me-5">
        <thead className="table-light">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Project Code</th>
            <th scope="col">Location</th>
            <th scope="col">Date</th>
            <th scope="col">Progress</th>
            <th scope="col" colSpan="2">Action</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {projectData.map((project) => (
            <tr key={project.id}>
              <th scope="row">{project.id}</th>
              <td>{project.code}</td>
              <td>{project.location}</td>
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
                <button className="button-edit px-3 py-1 text-white rounded">Edit</button>
                <button className="button-delete px-3 py-1 text-white rounded ms-3">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Project;