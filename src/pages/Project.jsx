import React from "react";
import { Link } from "react-router-dom";
import "./Project.css";

function Project() {
  return (
    <div className="project-page me-5">
      <Link to="Addproject">
        <button type="button" className="button-add btn btn-primary mb-3 me-1 mt-3">Add Project</button>
      </Link>
      <h2 className="project-title ms-4 mt-3">Project List</h2>
      <table className="table-project table border text-center ms-4">
        <thead className="table-light">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Project Code</th>
            <th scope="col">Date</th>
            <th scope="col">Progress</th>
            <th scope="col" colSpan="2">Action</th>
          </tr>
        </thead>
        <tbody class="table-group-divider">
          <tr>
            <th scope="row">1</th>
            <td>PRJ-CONTOH-01</td>
            <td>20/02/2025</td>
            <td className="progress-container">
              <div className="progress-content">
                <div className="progress">
                  <div
                    className="progress-bar"
                    style={{ width: "70%" }}
                  ></div>
                </div>
                <span className="text-sm">70%</span>
              </div>
            </td>
            <td className="button-container">
              <button className="button-edit px-3 py-1 text-white rounded">Edit</button>
              <button className="button-delete px-3 py-1 text-white rounded ms-3">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Project;