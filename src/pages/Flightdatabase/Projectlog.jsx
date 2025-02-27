import React from "react";

const logbookData = [
    {id: 1, date: "2025-01-02", code: "PRJ-CONTOH-01", location: "Bandung"},
    {id: 2, date: "2025-01-03", code: "PRJ-CONTOH-02", location: "Bandung"},
];


function ProjectLogbook() {
  return (
    <div className="logbook-page me-5">
      <h2 className="checklist-title ms-4 mt-3">Project Logbook</h2>
      <table className="table-project table border text-center ms-4 me-5">
        <thead className="table-light">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Date</th>
            <th scope="col">Project Code</th>
            <th scope="col">Location</th>
            <th scope="col" colSpan="2">Action</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {logbookData.map((logbook) => (
            <tr key={logbook.id}>
              <th scope="row">{logbook.id}</th>
              <td>{logbook.date}</td>
              <td>{logbook.code}</td>
              <td>{logbook.location}</td>
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

export default ProjectLogbook;
