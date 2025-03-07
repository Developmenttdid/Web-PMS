import React, { useState } from "react";

function LegalDocument() {
  document.body.style.overflowY = "auto";
  document.body.style.overflowX = "hidden";

  const [permissionList, setPermissionList] = useState([]);
  const [otherDocumentList, setOtherDocumentList] = useState([]);

  const handleAddPermission = () => {
    setPermissionList([...permissionList, { id: Date.now() }]);
  };

  const handleOtherDocument = () => {
    setOtherDocumentList([...otherDocumentList, { id: Date.now() }]);
  };

  const handleDeletePermission = (id) => {
    setPermissionList(permissionList.filter(item => item.id !== id));
  };

  const handleDeleteOtherDocument = (id) => {
    setOtherDocumentList(otherDocumentList.filter(item => item.id !== id));
  };

  return (
    <div className="document-container" style={{ marginLeft: "250px" }}>
      <h2>Document</h2>
      <h4>#Certificate</h4>
      <div className="col mb-3 ms-3">
        <table className="table text-center table-bordered" style={{ borderColor: "#143893" }}>
          <thead>
            <tr>
              <th scope="col" style={{ width: "5%", backgroundColor: "#143893", color: "#CCE6FF" }}>#</th>
              <th scope="col" style={{ width: "25%", backgroundColor: "#143893", color: "#CCE6FF" }}>Personnel ID</th>
              <th scope="col" style={{ width: "25%", backgroundColor: "#143893", color: "#CCE6FF" }}>Certificate ID</th>
              <th scope="col" style={{ width: "25%", backgroundColor: "#143893", color: "#CCE6FF" }}>Expiration Date</th>
              <th scope="col" style={{ width: "15%", backgroundColor: "#143893", color: "#CCE6FF" }}>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td><input className="form-control mb-3" id="equipment" type="text" readOnly /></td>
              <td><input className="form-control mb-3" id="equipment" type="text" readOnly /></td>
              <td><input className="form-control mb-3" id="equipment" type="text" readOnly /></td>
              <td>
                <button type="button" className="btn btn-primary"><i className="bi bi-download"></i></button>
                <button type="button" className="btn btn-warning ms-2"><i className="bi bi-eye"></i></button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="col mb-3 ms-3 mt-5">
        <div className="row">
          <div className="col-8">
            <h4>#Permission</h4>
          </div>
          <div className="col-4">
            <button type="button" onClick={handleAddPermission} className="button-add btn btn-primary mb-3 me-1"><i className="bi bi-plus"></i></button>
          </div>
        </div>
        <table className="table text-center table-bordered" style={{ borderColor: "#143893" }}>
          <thead>
            <tr>
              <th scope="col" style={{ width: "5%", backgroundColor: "#143893", color: "#CCE6FF" }}>#</th>
              <th scope="col" style={{ width: "25%", backgroundColor: "#143893", color: "#CCE6FF" }}>Upload Document</th>
              <th scope="col" style={{ width: "20%", backgroundColor: "#143893", color: "#CCE6FF" }}>Document Name</th>
              <th scope="col" style={{ width: "20%", backgroundColor: "#143893", color: "#CCE6FF" }}>Document ID</th>
              <th scope="col" style={{ width: "15%", backgroundColor: "#143893", color: "#CCE6FF" }}>Expiration Date</th>
              <th scope="col" style={{ width: "15%", backgroundColor: "#143893", color: "#CCE6FF" }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {permissionList.map((item, index) => (
              <tr key={item.id}>
                <th scope="row">{index + 1}</th>
                <td><input className="form-control mb-3" id="equipment" type="file" readOnly /></td>
                <td><input className="form-control mb-3" id="equipment" type="text" placeholder="Type document name" /></td>
                <td><input className="form-control mb-3" id="equipment" type="text" placeholder="Type document ID" /></td>
                <td><input className="form-control mb-3" id="equipment" type="date" /></td>
                <td>
                  <button type="button" className="btn btn-primary"><i className="bi bi-download"></i></button>
                  <button type="button" className="btn btn-warning ms-2"><i className="bi bi-eye"></i></button>
                  <button type="button" className="btn btn-danger ms-2" onClick={() => handleDeletePermission(item.id)}><i className="bi bi-trash"></i></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="col mb-3 ms-3 mt-5">
        <div className="row">
          <div className="col-8">
            <h4 className="">#Other Document</h4>
          </div>
          <div className="col-4">
            <button type="button" onClick={handleOtherDocument} className="button-add btn btn-primary mb-3 me-1"><i className="bi bi-plus"></i></button>
          </div>
        </div>

        <table className="table text-center table-bordered" style={{ borderColor: "#143893" }}>
          <thead>
            <tr>
              <th scope="col" style={{ width: "5%", backgroundColor: "#143893", color: "#CCE6FF" }}>#</th>
              <th scope="col" style={{ width: "25%", backgroundColor: "#143893", color: "#CCE6FF" }}>Upload Document</th>
              <th scope="col" style={{ width: "20%", backgroundColor: "#143893", color: "#CCE6FF" }}>Document Name</th>
              <th scope="col" style={{ width: "20%", backgroundColor: "#143893", color: "#CCE6FF" }}>Document ID</th>
              <th scope="col" style={{ width: "15%", backgroundColor: "#143893", color: "#CCE6FF" }}>Expiration Date</th>
              <th scope="col" style={{ width: "15%", backgroundColor: "#143893", color: "#CCE6FF" }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {otherDocumentList.map((item, index) => (
              <tr key={item.id}>
                <th scope="row">{index + 1}</th>
                <td><input className="form-control mb-3" id="equipment" type="file" readOnly /></td>
                <td><input className="form-control mb-3" id="equipment" type="text" placeholder="Type document name" /></td>
                <td><input className="form-control mb-3" id="equipment" type="text" placeholder="Type document ID" /></td>
                <td><input className="form-control mb-3" id="equipment" type="date" /></td>
                <td>
                  <button type="button" className="btn btn-primary"><i className="bi bi-download"></i></button>
                  <button type="button" className="btn btn-warning ms-2"><i className="bi bi-eye"></i></button>
                  <button type="button" className="btn btn-danger ms-2" onClick={() => handleDeleteOtherDocument(item.id)}><i className="bi bi-trash"></i></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

  );
}

export default LegalDocument;
