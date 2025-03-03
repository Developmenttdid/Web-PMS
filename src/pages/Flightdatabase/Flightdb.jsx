import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React from "react";

const checklistData = [
  {
    id: 1,
    date: "2025-01-02",
    code: "PRJ-CONTOH-01",
    Flightid: "D1F1",
    uav: "DJI-M300",
    Payload: "P1",
  },
  {
    id: 2,
    date: "2025-01-03",
    code: "PRJ-CONTOH-02",
    Flightid: "D1F2",
    uav: "DJI-M300",
    Payload: "P2",
  },
];

function Checklistdb() {
  return (
    <div className="container-fluid">
      <h3 className="mt-3 ms-2">Checklist Database</h3>
      <table class="table text-center">
        <thead>
          <tr>
            <th scope="col" style={{ width: "5%" }}>
              #
            </th>
            <th scope="col" style={{ width: "15%" }}>
              Date
            </th>
            <th scope="col" style={{ width: "20%" }}>
              Project Code
            </th>
            <th scope="col" style={{ width: "15%" }}>
              Flight ID
            </th>
            <th scope="col" style={{ width: "15%" }}>
              UAV
            </th>
            <th scope="col" style={{ width: "15%" }}>
              Payload
            </th>
            <th scope="col" style={{ width: "15%" }}>
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {checklistData.map((checklist) => (
            <tr key={checklist.id}>
              <th scope="row">{checklist.id}</th>
              <td>{checklist.date}</td>
              <td>{checklist.code}</td>
              <td>{checklist.Flightid}</td>
              <td>{checklist.uav}</td>
              <td>{checklist.Payload}</td>
              <td>
                <div className="d-flex justify-content-center">
                  <button
                    type="button"
                    className="btn btn-warning btn-outline-light me-3"
                  >
                    <i className="bi bi-eye"></i>
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger btn-outline-light"
                  >
                    <i className="bi bi-download"></i>
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Checklistdb;
