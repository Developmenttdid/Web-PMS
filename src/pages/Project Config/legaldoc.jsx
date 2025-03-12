import React, { useEffect, useState } from "react";

function LegalDocument() {
  document.body.style.overflowY = "auto";
  document.body.style.overflowX = "hidden";

  const loadStoredData = (key, defaultData) => {
    try {
      const storedData = localStorage.getItem(key);
      return storedData ? JSON.parse(storedData) : defaultData;
    } catch (error) {
      console.error("Error loading data from localStorage", error);
      return defaultData;
    }
  };

  const [permissionList, setPermissionList] = useState(() => loadStoredData("permissionList", []));
  const [otherDocumentList, setOtherDocumentList] = useState(() => loadStoredData("otherDocumentList", []));

  useEffect(() => {
    localStorage.setItem("permissionList", JSON.stringify(permissionList));
  }, [permissionList]);

  useEffect(() => {
    localStorage.setItem("otherDocumentList", JSON.stringify(otherDocumentList));
  }, [otherDocumentList]);

  const handleAddPermission = () => {
    const newPermission = { id: Date.now(), documentName: "", documentID: "", expirationDate: "", file: null };
    const updatedPermissionList = [...permissionList, newPermission];
    setPermissionList(updatedPermissionList);
    localStorage.setItem("permissionList", JSON.stringify(updatedPermissionList));
  };

  const handleOtherDocument = () => {
    const newOtherDocument = { id: Date.now(), documentName: "", documentID: "", expirationDate: "", file: null };
    const updatedOtherDocumentList = [...otherDocumentList, newOtherDocument];
    setOtherDocumentList(updatedOtherDocumentList);
    localStorage.setItem("otherDocumentList", JSON.stringify(updatedOtherDocumentList));
  };

  const handleDeletePermission = (id) => {
    const updatedPermissionList = permissionList.filter(item => item.id !== id);
    setPermissionList(updatedPermissionList);
    localStorage.setItem("permissionList", JSON.stringify(updatedPermissionList));
  };

  const handleDeleteOtherDocument = (id) => {
    const updatedOtherDocumentList = otherDocumentList.filter(item => item.id !== id);
    setOtherDocumentList(updatedOtherDocumentList);
    localStorage.setItem("otherDocumentList", JSON.stringify(updatedOtherDocumentList));
  };

  const handleInputChange = (list, setList, id, field, value) => {
    const updatedList = list.map(item => item.id === id ? { ...item, [field]: value } : item);
    setList(updatedList);
    localStorage.setItem(list === permissionList ? "permissionList" : "otherDocumentList", JSON.stringify(updatedList));
  };

  const handleFileChange = (list, setList, id, file) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64File = reader.result;
      const updatedList = list.map(item => item.id === id ? { ...item, file: base64File } : item);
      setList(updatedList);
      localStorage.setItem(list === permissionList ? "permissionList" : "otherDocumentList", JSON.stringify(updatedList));
    };
    reader.readAsDataURL(file);
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
                <td>
                  <input
                    className="form-control mb-3"
                    id="equipment"
                    type="file"
                    onChange={(e) => handleFileChange(permissionList, setPermissionList, item.id, e.target.files[0])}
                  />
                </td>
                <td>
                  <input
                    className="form-control mb-3"
                    id="equipment"
                    type="text"
                    placeholder="Type document name"
                    value={item.documentName}
                    onChange={(e) => handleInputChange(permissionList, setPermissionList, item.id, 'documentName', e.target.value)}
                  />
                </td>
                <td>
                  <input
                    className="form-control mb-3"
                    id="equipment"
                    type="text"
                    placeholder="Type document ID"
                    value={item.documentID}
                    onChange={(e) => handleInputChange(permissionList, setPermissionList, item.id, 'documentID', e.target.value)}
                  />
                </td>
                <td>
                  <input
                    className="form-control mb-3"
                    id="equipment"
                    type="date"
                    value={item.expirationDate}
                    onChange={(e) => handleInputChange(permissionList, setPermissionList, item.id, 'expirationDate', e.target.value)}
                  />
                </td>
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
                <td>
                  <input
                    className="form-control mb-3"
                    id="equipment"
                    type="file"
                    onChange={(e) => handleFileChange(otherDocumentList, setOtherDocumentList, item.id, e.target.files[0])}
                  />
                </td>
                <td>
                  <input
                    className="form-control mb-3"
                    id="equipment"
                    type="text"
                    placeholder="Type document name"
                    value={item.documentName}
                    onChange={(e) => handleInputChange(otherDocumentList, setOtherDocumentList, item.id, 'documentName', e.target.value)}
                  />
                </td>
                <td>
                  <input
                    className="form-control mb-3"
                    id="equipment"
                    type="text"
                    placeholder="Type document ID"
                    value={item.documentID}
                    onChange={(e) => handleInputChange(otherDocumentList, setOtherDocumentList, item.id, 'documentID', e.target.value)}
                  />
                </td>
                <td>
                  <input
                    className="form-control mb-3"
                    id="equipment"
                    type="date"
                    value={item.expirationDate}
                    onChange={(e) => handleInputChange(otherDocumentList, setOtherDocumentList, item.id, 'expirationDate', e.target.value)}
                  />
                </td>
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