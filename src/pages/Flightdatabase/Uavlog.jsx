import React from "react";

const logbookData = [
  { id: 1, date: "2025-01-02", code: "PRJ-CONTOH-01", location: "Bandung" },
  { id: 2, date: "2025-01-03", code: "PRJ-CONTOH-02", location: "Bandung" },
];

function UAVLogbook() {
  return (
    <div className="container-fluid">
      <h3 className="mt-3 ms-2">UAV Logbook</h3>
      <table className="table text-center">
        <thead>
          <tr>
            <th scope="col" style={{ width: "5%" }}>
              #
            </th>
            <th scope="col" style={{ width: "25%" }}>
              Date
            </th>
            <th scope="col" style={{ width: "30%" }}>
              Project Code
            </th>
            <th scope="col" style={{ width: "25%" }}>
              Location
            </th>
            <th scope="col" style={{ width: "15%" }}>
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {logbookData.map((logbook) => (
            <tr key={logbook.id}>
              <th scope="row">{logbook.id}</th>
              <td>{logbook.date}</td>
              <td>{logbook.code}</td>
              <td>{logbook.location}</td>
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

export default UAVLogbook;

