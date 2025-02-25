import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "./Addproject.css";

function Addproject() {
  return (
    <div className="add-project me-5">
      <h2 className="project-title ms-4 mt-3">Project Configuration</h2>
      <div className="form-group row d-flex align-items-center column-gap-1 ms-3">
        <div className="col mb-3 ms-3">
          <label className="form-label">Project Code</label>
          <input type="text" className="form-control" placeholder="Example input placeholder" />
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
        <div className="col mb-3 ms-3">
          <label className="form-label">Project Location</label>
          <select className="form-select" aria-label="Project location">
            <option selected value="" disabled>Select project Location</option>
            <option value="1">Inspection</option>
            <option value="2">Survey</option>
            <option value="3">Training</option>
          </select>
        </div>
      </div>
      <div className="form-group row d-flex align-items-center column-gap-1 ms-3">
        <div className="col mb-3 ms-3">
          <label className="form-label">Objective</label>
          <div class="form-floating">
            <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2"></textarea>
            <label for="floatingTextarea2">Project description</label>
          </div>
        </div>
        <div className="col mb-3 ms-3">
          <label className="form-label">Deliverables</label>
          <select className="form-select mb-3" aria-label="Project type">
            <option selected value="" disabled>Select a deliverable</option>
            <option value="1">Inspection</option>
            <option value="2">Survey</option>
            <option value="3">Training</option>
          </select>
          <button type="button" className="button-add btn btn-primary mb-3 me-1">Add Deliverable</button>
            <table class="table text-center table-bordered">
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
        <div className="col mb-3 ms-3">
          <label className="form-label">Personnel</label>
          <select className="form-select mb-3" aria-label="Personnel">
            <option selected value="" disabled>Select personnel name</option>
            <option value="1">Inspection</option>
            <option value="2">Survey</option>
            <option value="3">Training</option>
          </select>
          <button type="button" className="button-add btn btn-primary mb-3 me-1">Add Personnel</button>
            <table class="table text-center table-bordered">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Personnel list</th>
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
      <div className="form-group row d-flex align-items-center column-gap-1 ms-3">
        <div className="col mb-3 ms-3 mt-3">
          <label className="form-label">UAV</label>
          <select className="form-select mb-3" aria-label="UAV">
            <option selected value="" disabled>Select UAV type</option>
            <option value="1">Inspection</option>
            <option value="2">Survey</option>
            <option value="3">Training</option>
          </select>
        </div>
        <div className="col mb-3 ms-3">
          <label className="form-label">Payload</label>
          <select className="form-select" aria-label="Payload type">
            <option selected value="" disabled>Select payload type</option>
            <option value="1">Inspection</option>
            <option value="2">Survey</option>
            <option value="3">Training</option>
          </select>
        </div>
        <div className="col mb-3 ms-3">
          <label className="form-label">GPS</label>
          <select className="form-select" aria-label="GPS type">
            <option selected value="" disabled>Select GPS type</option>
            <option value="1">Inspection</option>
            <option value="2">Survey</option>
            <option value="3">Training</option>
          </select>
        </div>
      </div>
      <div className="form-group row d-flex align-items-center column-gap-1 ms-3">
        <div className="col mb-3 ms-3">
            <button type="button" className="button-add btn btn-primary mb-3 me-1">Add UAV</button>
            <table class="table text-center table-bordered">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Objective list</th>
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
        <div className="col mb-3 ms-3">
            <button type="button" className="button-add btn btn-primary mb-3 me-1">Add Payload</button>
            <table class="table text-center table-bordered">
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
        <div className="col mb-3 ms-3">
            <button type="button" className="button-add btn btn-primary mb-3 me-1">Add GPS</button>
            <table class="table text-center table-bordered">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Personnel list</th>
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
      <div className="d-flex justify-content-center">
        <Link to="../Project">
            <button type="button" className="button-save btn btn-success mb-3 me-1">
            Save Project
            </button>
        </Link>
      </div>
    </div>
  );
}

export default Addproject;
