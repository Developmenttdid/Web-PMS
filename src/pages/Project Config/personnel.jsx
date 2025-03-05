import React from "react";
import Select from "react-select";
import { useState } from "react";

function Personnel() {
    const [selectedOption, setSelectedOption] = useState(null);
    const [selectedOption2, setSelectedOption2] = useState(null);
    const options = [
        { value: "1", label: "Pilot" },
        { value: "2", label: "Co-Pilot" },
        { value: "3", label: "Observer" },
    ];
    const optionsName = [
        { value: "1", label: "Alex" },
        { value: "2", label: "Jane Doe" },
        { value: "3", label: "Bob" },
    ];
  return (
    <div className="personnel-container" style={{ marginLeft: "250px" }}>
        <h2> Personnel</h2>
        <div className="col mb-1 mt-3">
          <button type="button" className="button-add btn btn-primary mb-3 me-1"><i className="bi bi-plus"></i></button>
        </div>
        <div className="form-group row d-flex align-items-center column-gap-1">
            <table className="table text-center table-bordered ms-2" style={{ borderColor: '#143893' }}>
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
                    <td><Select
                        options={optionsName}
                        value={selectedOption2}
                        onChange={setSelectedOption2}
                        placeholder="Select personnel name"
                        isSearchable={true}
                        className="w-100"
                    /></td>
                    <td><Select
                        options={options}
                        value={selectedOption}
                        onChange={setSelectedOption}
                        placeholder="Select personnel role"
                        isSearchable={true}
                        className="w-100"
                    /></td>
                    <td><button type="button" class="btn btn-danger"><i class="bi bi-trash"></i></button></td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
  );
}

export default Personnel;
