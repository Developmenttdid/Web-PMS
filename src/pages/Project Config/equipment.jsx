import React from "react";
function Equipment() {
    document.body.style.overflow = "auto";
  return (
    <div className="equipment-container" style={{ marginLeft: "250px" }}>
        <h2>Equipment</h2>
        <h4>#UAV Type</h4>
        <div className="form-group row d-flex align-items-center column-gap-1">
            <div className="col mb-3 ms-3">
            <label className="form-label">UAV Type</label>
            <select className="form-select" aria-label="Project type">
                <option selected value="" disabled>Select a UAV type</option>
                <option value="1">Inspection</option>
                <option value="2">Survey</option>
                <option value="3">Training</option>
            </select>
            <button type="button" className="button-add btn btn-primary mb-3 me-3 mt-3">Add UAV</button>
            <table className="table text-center table-bordered">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Deliverable list</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                </tr>
                </tbody>
            </table>
        </div>
        </div>
        <h4>#Payload Type</h4>
            <div className="form-group row d-flex align-items-center column-gap-1">
            <div className="col mb-3 ms-3">
                <label className="form-label">Name</label>
                <select className="form-select" aria-label="Project type">
                    <option selected value="" disabled>Choose a payload type</option>
                    <option value="1">Inspection</option>
                    <option value="2">Survey</option>
                    <option value="3">Training</option>
                </select>
                <button type="button" className="button-add btn btn-primary mb-3 me-3 mt-3">Add Payload</button>
                <table className="table text-center table-bordered">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Deliverable list</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <h4>#GPS Type</h4>
        <div className="form-group row d-flex align-items-center column-gap-1">
            <div className="col mb-3 ms-3">
                <label className="form-label">Name</label>
                <select className="form-select" aria-label="Project type">
                    <option selected value="" disabled>Select a GPS type</option>
                    <option value="1">Inspection</option>
                    <option value="2">Survey</option>
                    <option value="3">Training</option>
                </select>
                <button type="button" className="button-add btn btn-primary mb-3 me-3 mt-3">Add GPS</button>
                <table className="table text-center table-bordered">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Deliverable list</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <h4>#Other</h4>
        <div className="form-group row d-flex align-items-center column-gap-1">
            <div className="col mb-3 ms-3">
                <label className="form-label">Project Type</label>
                <select className="form-select" aria-label="Project type">
                    <option selected value="" disabled>Select other equipment</option>
                    <option value="1">Inspection</option>
                    <option value="2">Survey</option>
                    <option value="3">Training</option>
                </select>
                <button type="button" className="button-add btn btn-primary mb-3 me-3 mt-3">Add Equipment</button>
                <table className="table text-center table-bordered">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Deliverable list</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  );
}

export default Equipment;
