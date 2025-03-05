import React from "react";
function LegalDocument() {
    document.body.style.overflow = "auto";
  return (
    <div className="document-container" style={{ marginLeft: "250px" }}>
        <h2>Document</h2>
        <h4>#Certificate</h4>
        <div className="col mb-3 ms-3">
            <table className="table text-center table-bordered">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Personnel ID</th>
                    <th scope="col">Certificate ID</th>
                    <th scope="col">Expiration Date</th>
                    <th scope="col">Action</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td><input className="form-control mb-3" id="equipment" type="text" readOnly /></td>
                    <td><input className="form-control mb-3" id="equipment" type="text" readOnly /></td>
                    <td><input className="form-control mb-3" id="equipment" type="text" readOnly /></td>
                    <td><button type="button" class="btn btn-primary"><i class="bi bi-download"></i></button>
                    <button type="button" class="btn btn-warning ms-2"><i class="bi bi-eye"></i></button></td>
                </tr>
                </tbody>
            </table>
        </div>
        <h4>#Permission</h4>
        <div className="col mb-3 ms-3">
            <button type="button" className="button-add btn btn-primary mb-3 me-1">Add Document</button>
            <table className="table text-center table-bordered">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Upload Document</th>
                    <th scope="col">Document Name</th>
                    <th scope="col">Document ID</th>
                    <th scope="col">Expiration Date</th>
                    <th scope="col">Action</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td><input className="form-control mb-3" id="equipment" type="file" readOnly /></td>
                    <td><input className="form-control mb-3" id="equipment" type="text" placeholder="Type document name"/></td>
                    <td><input className="form-control mb-3" id="equipment" type="text" placeholder="Type document ID"/></td>
                    <td><input className="form-control mb-3" id="equipment" type="date" /></td>
                    <td><button type="button" class="btn btn-primary"><i class="bi bi-download"></i></button>
                    <button type="button" class="btn btn-warning ms-2"><i class="bi bi-eye"></i></button></td>
                </tr>
                </tbody>
            </table>
        </div>
        <h4>#Other Document</h4>
        <div className="col mb-3 ms-3">
            <button type="button" className="button-add btn btn-primary mb-3 me-1">Add Document</button>
            <table className="table text-center table-bordered">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Upload Document</th>
                    <th scope="col">Document Name</th>
                    <th scope="col">Document ID</th>
                    <th scope="col">Expiration Date</th>
                    <th scope="col">Action</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td><input className="form-control mb-3" id="equipment" type="file" readOnly /></td>
                    <td><input className="form-control mb-3" id="equipment" type="text" placeholder="Type document name"/></td>
                    <td><input className="form-control mb-3" id="equipment" type="text" placeholder="Type document ID"/></td>
                    <td><input className="form-control mb-3" id="equipment" type="date" /></td>
                    <td><button type="button" class="btn btn-primary"><i class="bi bi-download"></i></button>
                    <button type="button" class="btn btn-warning ms-2"><i class="bi bi-eye"></i></button></td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
  );
}

export default LegalDocument;
