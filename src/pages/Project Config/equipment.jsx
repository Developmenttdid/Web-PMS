import React from "react";
import Select from "react-select";
import { useState } from "react";

function Equipment() {
    document.body.style.overflow = "auto";
    const [selectedOption, setSelectedOption] = useState(null);
    const [selectedOption2, setSelectedOption2] = useState(null);
    const [selectedOption3, setSelectedOption3] = useState(null);
    const options = [
        { value: "1", label: "Inspection" },
        { value: "2", label: "Survey" },
        { value: "3", label: "Training" },
    ];

    const optionsID = [
        { value: "1", label: "Inspection" },
        { value: "2", label: "Survey" },
        { value: "3", label: "Training" },
    ];

    const optionsEquipment = [
        { value: "1", label: "UAV" },
        { value: "2", label: "GPS" },
        { value: "3", label: "Payload" },
        { value: "4", label: "Laptop" },
        { value: "5", label: "Other" },
    ];
    
  return (
    <div className="equipment-container" style={{ marginLeft: "250px" }}>
        <h2>Equipment</h2>
        <div className="col mb-3 ms-3">
          <label className="form-label">Add Equipment</label>
            <Select
                options={optionsEquipment}
                value={selectedOption3}
                onChange={setSelectedOption3}
                placeholder="Select equipment"
                isSearchable={true}
                className="w-100 mb-3"
            />
          <button type="button" className="button-add btn btn-primary mb-3 me-1">Add Equipment</button>
        </div>
        <div className="form-group row d-flex align-items-center column-gap-1">
            <table className="table text-center table-bordered ms-2">
                <thead>
                <tr>
                <th scope="col" style={{width: '5%', backgroundColor: '#143893', color: '#CCE6FF'}}>#</th>
                        <th scope="col" style={{width: '25%', backgroundColor: '#143893', color: '#CCE6FF'}}>Equipment</th>
                        <th scope="col" style={{width: '25%', backgroundColor: '#143893', color: '#CCE6FF'}}>Equipment Type</th>
                        <th scope="col" style={{width: '25%', backgroundColor: '#143893', color: '#CCE6FF'}}>Equipment ID</th>
                        <th scope="col" style={{width: '25%', backgroundColor: '#143893', color: '#CCE6FF'}}>Action</th>
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
                    <td><Select
                        options={optionsID}
                        value={selectedOption2}
                        onChange={setSelectedOption2}
                        placeholder="Select equipment ID"
                        isSearchable={true}
                        className="w-100"
                    /></td>
                    <td><button type="button" class="btn btn-warning"><i class="bi-pencil-square"></i></button></td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
  );
}

export default Equipment;
