import React from "react";
import "./ChangePassword.css";

function ChangePassword() {
  return (
    <div className="change-password ms-0 p-2">
        <h2 className="profile-container mb-4">Change Password</h2>
        <div className="col mb-3 ms-3">
            <label className="form-label">Old Password</label>
            <input type="password" className="form-control" placeholder="Input old password" />
        </div>
        <div className="col mb-3 ms-3">
            <label className="form-label">New Password</label>
            <input type="password" className="form-control" placeholder="Input new password" />
        </div>
        <div className="col mb-3 ms-3">
            <label className="form-label">Confirm New Password</label>
            <input type="password" className="form-control" placeholder="Input new password" />
        </div>
        <div className="justify-content-center d-flex">
            <button type="button" className="button-add btn btn-primary mb-3 me-1 mt-3" style={{ width: "150px" }}>Save Change</button>
        </div>
    </div>
  );
}

export default ChangePassword;