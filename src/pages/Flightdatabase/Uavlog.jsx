import React from "react";

const UAVLogbookData = [
    {id: 1, date: "2025-01-02", uavtype: "DJI-M300", uavid: "DJI-M300-01"},
    {id: 2, date: "2025-01-03", uavtype: "DJI-M300", uavid: "DJI-M300-02"},
];


function UAVLogbook() {
  return (
    <div className="uav-logbook-page me-5">
      <h2 className="checklist-title ms-4 mt-3">UAV Logbook</h2>
      <table className="table-project table border text-center ms-4 me-5">
        <thead className="table-light">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Date</th>
            <th scope="col">UAV Type</th>
            <th scope="col">UAV ID</th>
            <th scope="col" colSpan="2">Action</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {UAVLogbookData.map((uavlogbook) => (
            <tr key={uavlogbook.id}>
              <th scope="row">{uavlogbook.id}</th>
              <td>{uavlogbook.date}</td>
              <td>{uavlogbook.uavtype}</td>
              <td>{uavlogbook.uavid}</td>
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

export default UAVLogbook;
