import React from "react";
function LegalDocument() {
    document.body.style.overflow = "auto";
  return (
    <div className="document-container" style={{ marginLeft: "250px" }}>
        <h2>Document</h2>
        <h4>#Certificate</h4>
        <div className="col mb-3 ms-3">
            <table className="table text-center table-bordered" style={{ borderColor: '#143893' }}>
                <thead>
                <tr>
                    <th scope="col" style={{width: '5%', backgroundColor: '#143893', color: '#CCE6FF'}}>#</th>
                    <th scope="col" style={{width: '25%', backgroundColor: '#143893', color: '#CCE6FF'}}>Personnel ID</th>
                    <th scope="col" style={{width: '25%', backgroundColor: '#143893', color: '#CCE6FF'}}>Certificate ID</th>
                    <th scope="col" style={{width: '25%', backgroundColor: '#143893', color: '#CCE6FF'}}>Expiration Date</th>
                    <th scope="col" style={{width: '15%', backgroundColor: '#143893', color: '#CCE6FF'}}>Action</th>
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
            <button type="button" className="button-add btn btn-primary mb-3 me-1"><i className="bi bi-plus"></i></button>
            <table className="table text-center table-bordered" style={{ borderColor: '#143893' }}>
                <thead>
                <tr>
                    <th scope="col" style={{width: '5%', backgroundColor: '#143893', color: '#CCE6FF'}}>#</th>
                    <th scope="col" style={{width: '25%', backgroundColor: '#143893', color: '#CCE6FF'}}>Upload Document</th>
                    <th scope="col" style={{width: '20%', backgroundColor: '#143893', color: '#CCE6FF'}}>Document Name</th>
                    <th scope="col" style={{width: '20%', backgroundColor: '#143893', color: '#CCE6FF'}}>Document ID</th>
                    <th scope="col" style={{width: '15%', backgroundColor: '#143893', color: '#CCE6FF'}}>Expiration Date</th>
                    <th scope="col" style={{width: '10%', backgroundColor: '#143893', color: '#CCE6FF'}}>Action</th>
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
            <button type="button" className="button-add btn btn-primary mb-3 me-1"><i class="bi bi-plus"></i></button>
            <table className="table text-center table-bordered" style={{ borderColor: '#143893' }}>
                <thead>
                <tr>
                    <th scope="col" style={{width: '5%', backgroundColor: '#143893', color: '#CCE6FF'}}>#</th>
                    <th scope="col" style={{width: '25%', backgroundColor: '#143893', color: '#CCE6FF'}}>Upload Document</th>
                    <th scope="col" style={{width: '20%', backgroundColor: '#143893', color: '#CCE6FF'}}>Document Name</th>
                    <th scope="col" style={{width: '20%', backgroundColor: '#143893', color: '#CCE6FF'}}>Document ID</th>
                    <th scope="col" style={{width: '15%', backgroundColor: '#143893', color: '#CCE6FF'}}>Expiration Date</th>
                    <th scope="col" style={{width: '10%', backgroundColor: '#143893', color: '#CCE6FF'}}>Action</th>
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
