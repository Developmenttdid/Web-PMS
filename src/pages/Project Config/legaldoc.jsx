import React from "react";
function LegalDocument() {
  return (
    <div className="document-container">
        <h2>Document</h2>
        <h4>#Certificate</h4>
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
        <h4>#Location Permission</h4>
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
        <h4>#Other Document</h4>
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

export default LegalDocument;
