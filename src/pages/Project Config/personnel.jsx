import React, { useState } from "react";
import Select from "react-select";

function Personnel() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedOption2, setSelectedOption2] = useState(null);
  const [personnelList, setPersonnelList] = useState([]);

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

  // add new row
  const handleAddRow = () => {
    setPersonnelList([
      ...personnelList,
      { id: Date.now(), name: null, role: null },
    ]);
  };

  // delete row
  const handleDeleteRow = (id) => {
    setPersonnelList(personnelList.filter((person) => person.id !== id));
  };

  // update state when dropdown change
  const handleSelectChange = (id, type, selectedOption) => {
    setPersonnelList(
      personnelList.map((person) =>
        person.id === id ? { ...person, [type]: selectedOption } : person
      )
    );
  };

  return (
    <div className="personnel-container" style={{ marginLeft: "250px" }}>
      <h2> Personnel</h2>
      <div className="col mb-1 mt-3">
        <button
          type="button"
          onClick={handleAddRow}
          className="button-add btn btn-primary mb-3 me-1"
        >
          <i className="bi bi-plus"></i>
        </button>
      </div>
      <div className="form-group row d-flex align-items-center column-gap-1">
        <table
          className="table text-center table-bordered ms-2"
          style={{ borderColor: "#143893" }}
        >
          <thead>
            <tr>
              <th
                scope="col"
                style={{
                  width: "5%",
                  backgroundColor: "#143893",
                  color: "#CCE6FF",
                }}
              >
                #
              </th>
              <th
                scope="col"
                style={{
                  width: "35%",
                  backgroundColor: "#143893",
                  color: "#CCE6FF",
                }}
              >
                Personnel Name
              </th>
              <th
                scope="col"
                style={{
                  width: "35%",
                  backgroundColor: "#143893",
                  color: "#CCE6FF",
                }}
              >
                Personnel Role
              </th>
              <th
                scope="col"
                style={{
                  width: "25%",
                  backgroundColor: "#143893",
                  color: "#CCE6FF",
                }}
              >
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {personnelList.map((person, index) => (
              <tr key={person.id}>
                <th scope="row">{index + 1}</th>
                <td>
                  <Select
                    options={optionsName}
                    value={person.name}
                    onChange={(selectedOption) =>
                      handleSelectChange(person.id, "name", selectedOption)
                    }
                    placeholder="Select personnel name"
                    isSearchable={true}
                    className="w-100"
                  />
                </td>
                <td>
                  <Select
                    options={options}
                    value={person.role}
                    onChange={(selectedOption) =>
                      handleSelectChange(person.id, "role", selectedOption)
                    }
                    placeholder="Select personnel role"
                    isSearchable={true}
                    className="w-100"
                  />
                </td>
                <td>
                  <button
                    type="button"
                    onClick={() => handleDeleteRow(person.id)}
                    class="btn btn-danger"
                  >
                    <i class="bi bi-trash"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Personnel;

