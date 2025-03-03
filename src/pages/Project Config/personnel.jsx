import React from "react";
function Personnel() {
  return (
    <div className="personnel-container" style={{ marginLeft: "250px" }}>
        <h2> Personnel</h2>
        <h4>#Pilot Information</h4>
        <div className="form-group row d-flex align-items-center column-gap-1">
            <div className="col mb-3 ms-3">
            <label className="form-label">Name</label>
            <select className="form-select" aria-label="Project type">
                <option selected value="" disabled>Select a project type</option>
                <option value="1">Inspection</option>
                <option value="2">Survey</option>
                <option value="3">Training</option>
            </select>
            </div>
            <div className="col mb-3 ms-3">
            <label className="form-label">Project Type</label>
            <select className="form-select" aria-label="Project type">
                <option selected value="" disabled>Select a project type</option>
                <option value="1">Inspection</option>
                <option value="2">Survey</option>
                <option value="3">Training</option>
            </select>
            </div>
        </div>
        <h4>#Co-Pilot Information</h4>
        <h5>Co-Pilot 1</h5>
        <div className="form-group row d-flex align-items-center column-gap-1">
            <div className="col mb-3 ms-3">
            <label className="form-label">Name</label>
            <select className="form-select" aria-label="Project type">
                <option selected value="" disabled>Select a project type</option>
                <option value="1">Inspection</option>
                <option value="2">Survey</option>
                <option value="3">Training</option>
            </select>
            </div>
            <div className="col mb-3 ms-3">
            <label className="form-label">Project Type</label>
            <select className="form-select" aria-label="Project type">
                <option selected value="" disabled>Select a project type</option>
                <option value="1">Inspection</option>
                <option value="2">Survey</option>
                <option value="3">Training</option>
            </select>
            </div>
        </div>
        <h5>Co-Pilot 2</h5>
        <div className="form-group row d-flex align-items-center column-gap-1">
            <div className="col mb-3 ms-3">
            <label className="form-label">Name</label>
            <select className="form-select" aria-label="Project type">
                <option selected value="" disabled>Select a project type</option>
                <option value="1">Inspection</option>
                <option value="2">Survey</option>
                <option value="3">Training</option>
            </select>
            </div>
            <div className="col mb-3 ms-3">
            <label className="form-label">Project Type</label>
            <select className="form-select" aria-label="Project type">
                <option selected value="" disabled>Select a project type</option>
                <option value="1">Inspection</option>
                <option value="2">Survey</option>
                <option value="3">Training</option>
            </select>
            </div>
        </div>
        <h5>Co-Pilot 3</h5>
        <div className="form-group row d-flex align-items-center column-gap-1">
            <div className="col mb-3 ms-3">
            <label className="form-label">Name</label>
            <select className="form-select" aria-label="Project type">
                <option selected value="" disabled>Select a project type</option>
                <option value="1">Inspection</option>
                <option value="2">Survey</option>
                <option value="3">Training</option>
            </select>
            </div>
            <div className="col mb-3 ms-3">
            <label className="form-label">Project Type</label>
            <select className="form-select" aria-label="Project type">
                <option selected value="" disabled>Select a project type</option>
                <option value="1">Inspection</option>
                <option value="2">Survey</option>
                <option value="3">Training</option>
            </select>
            </div>
        </div>
    </div>
  );
}

export default Personnel;
