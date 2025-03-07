import React from "react";
import Select from "react-select";
import { useState } from "react";

function Equipment() {
    document.body.style.overflowY = "auto";
    document.body.style.overflowX = "hidden";
    
    const [selectedOption, setSelectedOption] = useState(null);
    const [selectedOption2, setSelectedOption2] = useState(null);
    const [selectedOption3, setSelectedOption3] = useState(null);
    const [equipmentList, setEquipmentList] = useState([]);

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

    const handleAddRow = () => {
        if(selectedOption3) {
            setEquipmentList([
                ...equipmentList,
                {
                    id: Date.now(),
                    equipment: selectedOption3, 
                    type: null,
                    equipmentID: null,
                }
            ]);
            setSelectedOption3(null);
        }
    }

    // function to update dropdown inside each row
    const handleSelectChange = (id, field, selectedOption) => {
        setEquipmentList(
            equipmentList.map((item) =>
                item.id === id ? {...item, [field]: selectedOption} : item
            )
        );
    }

    // function to delete a row
    const handleDeleteRow = (id) => {
        setEquipmentList(equipmentList.filter(item => item.id !== id));
    }
    
  return (
    <div className="equipment-container" style={{ marginLeft: "250px" }}>
        <h2>Equipment</h2>
        <div className="col mb-3 ms-3">
            <label className="form-label">Add Equipment</label>
            <div className="d-flex align-items-center">
                <Select
                options={optionsEquipment}
                value={selectedOption3}
                onChange={setSelectedOption3}
                placeholder="Select equipment"
                isSearchable={true}
                className="w-100"
                />
                <button type="button" onClick={handleAddRow} className="btn btn-primary ms-2">
                <i className="bi bi-plus"></i>
                </button>
            </div>
        </div>
        <div className="form-group row d-flex align-items-center column-gap-1">
            <table className="table text-center table-bordered ms-2" style={{ borderColor: '#143893' }}>
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
                    {equipmentList.map((item, index)=> (
                        <tr key={item.id}>
                        <th scope="row">{index + 1}</th>
                        <td><input className="form-control mb-3" id="equipment" type="text" value={item.equipment?.label || ""} readOnly /></td>
                        <td>
                        <Select
                            options={options}
                            value={item.type}
                            onChange={(selectedOption) => handleSelectChange(item.id, "type", selectedOption)}
                            placeholder="Select equipment type"
                            isSearchable={true}
                            className="w-100"
                        />
                        </td>
                        <td><Select
                            options={optionsID}
                            value={item.equipmentID}
                            onChange={(selectedOption) => handleSelectChange(item.id, "equipmentID", selectedOption)}
                            placeholder="Select equipment ID"
                            isSearchable={true}
                            className="w-100"
                        /></td>
                        <td>
                            <button type="button" className="btn btn-warning"><i className="bi bi-pencil-square"></i></button>
                            <button type="button" className="btn btn-danger ms-2" onClick={() => handleDeleteRow(item.id)}><i className="bi bi-trash"></i></button>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
  );
}

export default Equipment;