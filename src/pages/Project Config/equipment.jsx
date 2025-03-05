import React from "react";
import Select from "react-select";
import { useState } from "react";

function Equipment() {
    document.body.style.overflow = "auto";
    const [selectedOption, setSelectedOption] = useState(null);
    const options = [
        { value: "1", label: "Inspection" },
        { value: "2", label: "Survey" },
        { value: "3", label: "Training" },
    ];
    
  return (
    <div className="equipment-container" style={{ marginLeft: "250px" }}>
        <h2>Equipment</h2>
        <div className="col mb-3 ms-3">
          <label className="form-label">Add Equipment</label>
          <select className="form-select mb-3" aria-label="Project type">
            <option selected value="" disabled>Select equipment</option>
            <option value="1">UAV</option>
            <option value="2">GPS</option>
            <option value="3">Payload</option>
            <option value="4">Laptop</option>
            <option value="5">Battery</option>
          </select>
          <button type="button" className="button-add btn btn-primary mb-3 me-1">Add Equipment</button>
        </div>
        <div className="form-group row d-flex align-items-center column-gap-1">
            <table className="table text-center table-bordered">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Equipment</th>
                    <th scope="col">Equipment Type</th>
                    <th scope="col">Equipment ID</th>
                    <th scope="col">Action</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td><input className="form-control mb-3" id="equipment" type="text" readOnly /></td>
                    <td>
                    <Select
                        options={options}
                        value={selectedOption}
                        onChange={setSelectedOption}
                        placeholder="Select equipment type"
                        isSearchable={true}
                        className="w-100"
                    />
                    </td>
                    <td><select className="form-select" aria-label="Project type">
                        <option selected value="" disabled>Select equipment ID</option>
                        <option value="1">Inspection</option>
                        <option value="2">Survey</option>
                        <option value="3">Training</option>
                    </select></td>
                    <td><button type="button" class="btn btn-warning"><i class="bi-pencil-square"></i></button></td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
  );
}

export default Equipment;
