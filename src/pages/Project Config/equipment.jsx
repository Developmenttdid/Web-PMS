import React, { useEffect, useState } from "react";
import Select from "react-select";
import axios from "axios";

function Equipment() {
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

  const [selectedOption3, setSelectedOption3] = useState(() => loadStoredData("EquipmentName", null));
  const [equipmentList, setEquipmentList] = useState(() => loadStoredData("equipmentList", []));
  const [options, setOptions] = useState([]);
  const [optionsID, setOptionsID] = useState([]);

  useEffect(() => {
    localStorage.setItem("EquipmentName", JSON.stringify(selectedOption3));
  }, [selectedOption3]);

  useEffect(() => {
    localStorage.setItem("equipmentList", JSON.stringify(equipmentList));
  }, [equipmentList]);

  useEffect(() => {
    equipmentList.forEach(item => {
      if (item.equipment.value === "1" || item.equipment.value === "3") {
        fetchOptions(item.equipment.value);
      }
    });
  }, []);

  useEffect(() => {
    if (selectedOption3) {
      fetchOptions(selectedOption3.value);
    }
  }, [selectedOption3]);

  const fetchOptions = async (equipmentType) => {
    try {
      let response;
      if (equipmentType === "1") { // UAV
        response = await axios.get("http://103.163.184.111:3000/equipment_database");
        console.log("API Response for UAV:", response.data);
        const droneTypes = response.data
          .filter(item => item.drone_type) // Filter out null data
          .map(item => ({ value: item.drone_type, label: item.drone_type }));
        setOptions(droneTypes);
      } else if (equipmentType === "3") { // Payload
        response = await axios.get("http://103.163.184.111:3000/equipment_database");
        console.log("API Response for Payload:", response.data);
        const payloadTypes = response.data
          .filter(item => item.payload_type) // Filter out null data
          .map(item => ({ value: item.payload_type, label: item.payload_type }));
        setOptions(payloadTypes);
      } else {
        setOptions([]);
      }
    } catch (error) {
      console.error("Error fetching data from API", error);
    }
  };

  const handleAddRow = () => {
    if (selectedOption3) {
        const newRow = {
            id: Date.now(),
            equipment: selectedOption3,
            type: loadStoredData("EquipmentType", null),
            equipmentID: loadStoredData("EquipmentID", null),
        };
        const updatedList = [...equipmentList, newRow];

        setEquipmentList(updatedList);
        localStorage.setItem("equipmentList", JSON.stringify(updatedList)); // Store the whole list
        setSelectedOption3(null);
    }
  };


  const handleSelectChange = (id, field, selectedOption) => {
    const updatedList = equipmentList.map((item) =>
        item.id === id ? { ...item, [field]: selectedOption } : item
    );

    setEquipmentList(updatedList);
    localStorage.setItem("equipmentList", JSON.stringify(updatedList)); 
  };


  const handleDeleteRow = (id) => {
    const updatedList = equipmentList.filter((item) => item.id !== id);
    setEquipmentList(updatedList);
  };

  return (
    <div className="equipment-container" style={{ marginLeft: "250px" }}>
      <div className="d-flex align-items-center">
        <h2>Equipment</h2>
      </div>
      <div className="col mb-3 ms-3">
        <label className="form-label">Add Equipment</label>
        <div className="d-flex align-items-center">
          <Select
            options={[
              { value: "1", label: "UAV" },
              { value: "2", label: "GPS" },
              { value: "3", label: "Payload" },
              { value: "4", label: "Laptop" },
              { value: "5", label: "Battery" },
              { value: "6", label: "Other" },
            ]}
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
              <th scope="col" style={{ width: '5%', backgroundColor: '#143893', color: '#CCE6FF' }}>#</th>
              <th scope="col" style={{ width: '25%', backgroundColor: '#143893', color: '#CCE6FF' }}>Equipment</th>
              <th scope="col" style={{ width: '25%', backgroundColor: '#143893', color: '#CCE6FF' }}>Equipment Type</th>
              <th scope="col" style={{ width: '25%', backgroundColor: '#143893', color: '#CCE6FF' }}>Equipment ID</th>
              <th scope="col" style={{ width: '25%', backgroundColor: '#143893', color: '#CCE6FF' }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {equipmentList.map((item, index) => (
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
                <td>
                  <Select
                    options={optionsID}
                    value={item.equipmentID}
                    onChange={(selectedOption2) => handleSelectChange(item.id, "equipmentID", selectedOption2)}
                    placeholder="Select equipment ID"
                    isSearchable={true}
                    className="w-100"
                  />
                </td>
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