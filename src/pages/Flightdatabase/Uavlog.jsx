import React from "react";

const UAVLogbookData = [
  { id: 1, date: "2025-01-02", uavtype: "DJI-M300", uavid: "DJI-M300-01" },
  { id: 2, date: "2025-01-03", uavtype: "DJI-M300", uavid: "DJI-M300-02" },
];

function UAVLogbook() {
  return (
    <div className="container-fluid">
      <h3 className="mb-4">UAV Logbook</h3>
      <table className="table text-center">
        <thead>
          <tr>
            <th scope="col" style={{width:'5%'}}>#</th>
            <th scope="col" styke={{width: '20%'}}>Date</th>
            <th scope="col" style={{width: '30%'}}>UAV Type</th>
            <th scope="col" style={{width: '30%'}}>UAV ID</th>
            <th scope="col" style={{width: '15%'}}>Action</th>
          </tr>
        </thead>
        <tbody>
          {UAVLogbookData.map((uavlogbook) => (
            <tr key={uavlogbook.id}>
              <th scope="row">{uavlogbook.id}</th>
              <td>{uavlogbook.date}</td>
              <td>{uavlogbook.uavtype}</td>
              <td>{uavlogbook.uavid}</td>
              <td>
                <div className="container-fluid">
                  <div className="row">
                    <div className="col">
                      <button
                        type="button"
                        className="btn btn-warning btn-outline-light"
                      >
                        <i class="bi bi-eye"></i>
                      </button>
                    </div>
                    <div className="col">
                      <button
                        type="button"
                        className="btn btn-success btn-outline-light"
                      >
                        <i class="bi bi-download"></i>
                      </button>
                    </div>
                  </div>
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

