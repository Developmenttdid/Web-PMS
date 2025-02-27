import React, { useState, useEffect } from "react";

const checklistData = [
  {id: 1, date: "2025-01-02", code: "PRJ-CONTOH-01", Flightid: "D1F1", uav:"DJI-M300", Payload:"P1"},
  {id: 2, date: "2025-01-03", code: "PRJ-CONTOH-02", Flightid: "D1F2", uav:"DJI-M300", Payload:"P2"},
];

function Checklistdb() {
  return (
    <div className="checklist-page me-5">
      <h2 className="checklist-title ms-4 mt-3">Checklist Database</h2>
      <table className="table-project table border text-center ms-4 me-5">
        <thead className="table-light">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Date</th>
            <th scope="col">Project Code</th>
            <th scope="col">Flight ID</th>
            <th scope="col">UAV</th>
            <th scope="col">Payload</th>
            <th scope="col" colSpan="2">Action</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {checklistData.map((checklist) => (
            <tr key={checklist.id}>
              <th scope="row">{checklist.id}</th>
              <td>{checklist.date}</td>
              <td>{checklist.code}</td>
              <td>{checklist.Flightid}</td>
              <td>{checklist.uav}</td>
              <td>{checklist.Payload}</td>
              <td>
                <button className="button-edit px-3 py-1 text-white rounded">Preview</button>
                <button className="button-delete px-3 py-1 text-white rounded ms-3">Download</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Checklistdb;
