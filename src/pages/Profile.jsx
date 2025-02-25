import React from "react";

function Profile() {
  return (
    <div className="profile-details d-flex flex-column ms-0 p-2" style={{ width: "100%" }}>
        <h2 className="profile-container mb-4">Account Details</h2>
        <div className="col mb-3 ms-3">
            <label className="form-label">Name</label>
            <input type="text" className="form-control" value="John Doe" readOnly />
        </div>
        <div className="col mb-3 ms-3">
            <label className="form-label">Email Address</label>
            <input type="text" className="form-control" value="johndoe@example.com" readOnly />
        </div>
        <div className="col mb-3 ms-3">
            <label className="form-label">Department</label>
            <input type="text" className="form-control" value="Engineering" readOnly />
        </div>
        <div className="col mb-3 ms-3">
            <label className="form-label">Position</label>
            <input type="text" className="form-control" value="Software Engineer" readOnly />
        </div>
        <div className="col mb-3 ms-3">
            <label className="form-label">User Type</label>
            <input type="text" className="form-control" value="Admin" readOnly />
        </div>
    </div>
  );
}

export default Profile;
