import React from "react";
import "./Homepage.css";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Pie } from "react-chartjs-2";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, ArcElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, ArcElement, Title, Tooltip, Legend);

const lineData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Project",
      data: [30, 50, 40, 60, 70, 90],
      borderColor: "black",
      backgroundColor: "rgba(255, 255, 255, 0.2)",
      tension: 0.4,
    },
  ],
};

const logs = [
  { id: 1, user: "John Doe", action: "Logged In", time: "10:30 AM" },
  { id: 2, user: "Jane Smith", action: "Uploaded File", time: "11:00 AM" },
  { id: 3, user: "Alice Brown", action: "Edited Profile", time: "11:30 AM" },
  { id: 4, user: "Bob Martin", action: "Logged Out", time: "12:00 PM" },
];

const lineOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: true,
      position: "right",
    },
  },
  scales: {
    x: {
      ticks: { color: "black" },
    },
    y: {
      ticks: { color: "black" },
    },
  },
};

const pieData = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple"],
  datasets: [
    {
      label: "Distribution",
      data: [12, 19, 3, 5, 2],
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4CAF50", "#9C27B0"],
      hoverOffset: 4,
    },
  ],
};

const pieOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      labels: { color: "black" },
    },
  },
};

function Homepage() {
  return (
    <div className="Homepage">
      <div className="card-container-top">
        <div className="card-one card text-bg-light mb-3 ms-3 me-3">
          <div className="card-header">Map Graph</div>
          <div className="card-body">
            <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: "100%", width: "100%" }}>
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            </MapContainer>
          </div>
        </div>
        <div className="card-two card text-bg-light mb-3 ms-4 me-2">
          <div className="card-header">Total Coverage</div>
          <div className="card-body">
            <p className="card-text">2000 ha</p>
          </div>
        </div>
        <div className="card-three card text-bg-light mb-3 ms-4 me-2">
          <div className="card-header">Total Flight Time</div>
          <div className="card-body">
            <p className="card-text">20.000 hours</p>
          </div>
        </div>
        <div className="card-three card text-bg-light mb-3 ms-4">
          <div className="card-header">Total Flight Time</div>
          <div className="card-body">
            <p className="card-text">20.000 hours</p>
          </div>
        </div>
      </div>
      <div className="card-container-bottom">
        <div className="card-five card text-bg-light mb-5 ms-3">
          <div className="card-header">Graph Chart</div>
          <div className="card-body">
            <Line data={lineData} options={lineOptions} />
          </div>
        </div>
        <div className="card-six card text-bg-light mb-5 ms-3">
          <div className="card-header">Pie Chart</div>
          <div className="card-body" style={{ width: "400px", height: "400px" }}>
            <Pie data={pieData} options={pieOptions} />
          </div>
        </div>
        <div className="card-seven card text-bg-light mb-5 ms-3">
          <div className="card-header">Log Activity</div>
          <div className="card-body">
            <table className="table table-bordered table-hover text-center" style={{ width: "100%", height: "100%" }}>
                <thead className="table-dark">
                <tr>
                  <th style={{ width: "10%" }}>#</th>
                  <th style={{ width: "30%" }}>User</th>
                  <th style={{ width: "40%" }}>Action</th>
                  <th style={{ width: "20%" }}>Time</th>
              </tr>
                </thead>
                <tbody>
                  {logs.map((log) => (
                    <tr key={log.id}>
                      <td>{log.id}</td>
                      <td>{log.user}</td>
                      <td>{log.action}</td>
                      <td>{log.time}</td>
                    </tr>
                  ))}
                </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
