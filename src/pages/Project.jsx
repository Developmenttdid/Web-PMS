import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React from "react";
import { Link } from "react-router-dom";
import "./Project.css";

const projectData = [
  {
    id: 1,
    code: "PRJ-CONTOH-01",
    location: "Bandung",
    date: "20/02/2025",
    progress: 70,
  },
  {
    id: 2,
    code: "PRJ-CONTOH-02",
    location: "Jakarta",
    date: "21/02/2025",
    progress: 50,
  },
  {
    id: 3,
    code: "PRJ-CONTOH-03",
    location: "Surabaya",
    date: "22/02/2025",
    progress: 90,
  },
];

function Project() {
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
              >
                <i className="bi bi-plus"></i> Add Project
              </button>
            </Link>
          </div>
        </div>

        <div className="container-fluid">
          <table class="table text-center table-bordered" style={{ borderColor: '#143893' }}>
            <thead className="px-sm-2">
              <tr>
                <th scope="col" style={{width: '5%', backgroundColor: '#143893', color: '#CCE6FF'}} >#</th>
                <th scope="col" style={{width: '15%', backgroundColor: '#143893', color: '#CCE6FF'}} >Project Code</th>
                <th scope="col" style={{width: '15%', backgroundColor: '#143893', color: '#CCE6FF'}} >Location</th>
                <th scope="col" style={{width: '15%', backgroundColor: '#143893', color: '#CCE6FF'}} >Date</th>
                <th scope="col" style={{width: '35%', backgroundColor: '#143893', color: '#CCE6FF'}} >Progress</th>
                <th scope="col" style={{width: '15%', backgroundColor: '#143893', color: '#CCE6FF'}} >Action</th>
              </tr>
            </thead>
            <tbody>
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
                    <div className="d-flex justify-content-center">
                      <button
                        type="button"
                        className="btn btn-warning btn-outline-light me-3"
                      >
                        <i className="bi bi-pencil-square"></i>
                      </button>
                      <button
                        type="button"
                        className="btn btn-danger btn-outline-light"
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
