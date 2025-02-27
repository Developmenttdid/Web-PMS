import React, { useEffect, useRef, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./projectstatus.css";

function ProjectStatus() {
  const mapRef = useRef(null);
  const markerRef = useRef(null);
  const [location, setLocation] = useState("-7.529574225950673, 111.19537353515626");
  const [city, setCity] = useState("");

  useEffect(() => {
    document.body.style.overflow = "auto";
    if (!mapRef.current) {
      mapRef.current = L.map("map").setView([-7.529574225950673, 111.19537353515626], 13);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(mapRef.current);

      markerRef.current = L.marker([-7.529574225950673, 111.19537353515626], {
        draggable: true,
        icon: L.icon({
          iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
          shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
          iconSize: [25, 41],
          iconAnchor: [12, 41]
        })
      }).addTo(mapRef.current);
      
      const fetchCity = async (lat, lng) => {
        try {
          const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`);
          const data = await response.json();
          setCity(data.address.city || data.address.town || data.address.village || "Unknown");
        } catch (error) {
          console.error("Error fetching city name:", error);
          setCity("Unknown");
        }
      };

      markerRef.current.on("dragend", function (event) {
        const { lat, lng } = event.target.getLatLng();
        setLocation(`${lat}, ${lng}`);
        fetchCity(lat, lng);
      });

      mapRef.current.on("click", function (event) {
        const { lat, lng } = event.latlng;
        setLocation(`${lat}, ${lng}`);
        markerRef.current.setLatLng([lat, lng]);
        fetchCity(lat, lng);
      });
    }
  }, []);

  useEffect(() => {
    const [lat, lng] = location.split(",").map(coord => parseFloat(coord.trim()));
    if (!isNaN(lat) && !isNaN(lng)) {
      markerRef.current.setLatLng([lat, lng]);
      mapRef.current.setView([lat, lng], 13);
      fetchCity(lat, lng);
    }
  }, [location]);

  const fetchCity = async (lat, lng) => {
    try {
      const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`);
      const data = await response.json();
      setCity(data.address.city || data.address.town || data.address.village || "Unknown");
    } catch (error) {
      console.error("Error fetching city name:", error);
      setCity("Unknown");
    }
  };

  return (
    <div className="add-project">
      <h2 className="project-title">Project Status</h2>
      <div className="form-group row d-flex align-items-center column-gap-1">
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
      </div>
      <div className="form-group row d-flex align-items-center column-gap-1">
        <div className="col mb-3 ms-3">
          <label className="form-label">Insert Location Coordinates</label>
          <input className="form-control mb-3" id="geoloc" type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
          <label className="form-label">City Information</label>
          <input className="form-control mb-3" id="cityinfo" type="text" value={city} readOnly />
          <div id="map" style={{ height: "300px", width: "100%" }}></div>
        </div>
      </div>
      <div className="form-group row d-flex align-items-center column-gap-1">
        <div className="col mb-3 ms-3">
          <label className="form-label">Objective</label>
          <div className="form-floating">
            <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2"></textarea>
            <label htmlFor="floatingTextarea2">Project description</label>
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
          <table className="table text-center table-bordered">
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
      </div>
    </div>
  );
}

export default ProjectStatus;