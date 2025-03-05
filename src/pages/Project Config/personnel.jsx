import React from "react";
function Personnel() {
  return (
    <div className="personnel-container" style={{ marginLeft: "250px" }}>
        <h2> Personnel</h2>
        <div className="col mb-1 mt-3">
          <button type="button" className="button-add btn btn-primary mb-3 me-1">Add Personnel</button>
        </div>
        <div className="form-group row d-flex align-items-center column-gap-1">
            <table className="table text-center table-bordered ms-2">
                <thead>
                    <tr>
                        <th scope="col" style={{width: '5%', backgroundColor: '#143893', color: '#CCE6FF'}}>#</th>
                        <th scope="col" style={{width: '35%', backgroundColor: '#143893', color: '#CCE6FF'}}>Personnel Name</th>
                        <th scope="col" style={{width: '35%', backgroundColor: '#143893', color: '#CCE6FF'}}>Personnel Role</th>
                        <th scope="col" style={{width: '25%', backgroundColor: '#143893', color: '#CCE6FF'}}>Action</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td><select className="form-select" aria-label="Project type">
                        <option selected value="" disabled>Select personnel name</option>
                        <option value="1">Inspection</option>
                        <option value="2">Survey</option>
                        <option value="3">Training</option>
                    </select></td>
                    <td><select className="form-select" aria-label="Project type">
                        <option selected value="" disabled>Select personnel role</option>
                        <option value="1">Inspection</option>
                        <option value="2">Survey</option>
                        <option value="3">Training</option>
                    </select></td>
                    <td><button type="button" class="btn btn-danger"><i class="bi bi-trash"></i></button></td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
  );
}

export default Personnel;
