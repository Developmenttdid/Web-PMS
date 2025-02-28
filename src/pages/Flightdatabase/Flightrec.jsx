import React from "react";
import "./Flightrec.css";

const FlightRecordData = [
  {
    id: 1,
    date: "2025-01-02",
    year: "2025",
    project: "Project Alpha",
    activity: "Survey",
    flightcode: "FL-001",
    pilot: "John Doe",
    copilot1: "Jane Smith",
    copilot2: "Alice Brown",
    uav: "DJI-M300",
    payload: "Camera",
    location: "Bandung",
    weather: "Clear",
    takeoff: "08:00 AM",
    landing: "09:00 AM",
    flighttime: "1 hour",
    distance: "10 km",
    batteryid: "BAT-001",
    batteryvolt: "24V",
    batterypercent: "80%",
    batteryvoltmp: "23.5V",
    batterypercentmp: "75%",
    incident: "None",
    note: "Smooth flight",
    loss: "None"
  },
  {
    id: 2,
    date: "2025-01-03",
    year: "2025",
    project: "Project Beta",
    activity: "Inspection",
    flightcode: "FL-002",
    pilot: "Bob Martin",
    copilot1: "Charlie Davis",
    copilot2: "Eve Johnson",
    uav: "DJI-M300",
    payload: "Lidar",
    location: "Jakarta",
    weather: "Cloudy",
    takeoff: "10:00 AM",
    landing: "11:30 AM",
    flighttime: "1.5 hours",
    distance: "15 km",
    batteryid: "BAT-002",
    batteryvolt: "24V",
    batterypercent: "70%",
    batteryvoltmp: "23V",
    batterypercentmp: "65%",
    incident: "Minor turbulence",
    note: "Successful inspection",
    loss: "None"
  }
];

function FlightRecord() {
  return (
    <div className="container-fluid">
      <h3 className="mb-4">Flight Record</h3>
      <div className="container mx-0" style={{overflowX: 'auto', width: '100%'}}>
      <table className="table" style={{ whiteSpace: 'nowrap' }}>
        <thead>
          <tr>
          <th scope="col">#</th>
              <th scope="col">Date</th>
              <th scope="col">Year</th>
              <th scope="col">Project</th>
              <th scope="col">Activities</th>
              <th scope="col">Flight Code</th>
              <th scope="col">Pilot</th>
              <th scope="col">Co-Pilot 1</th>
              <th scope="col">Co-Pilot 2</th>
              <th scope="col">UAV</th>
              <th scope="col">Payload</th>
              <th scope="col">Location</th>
              <th scope="col">Weather</th>
              <th scope="col">Take-off Time</th>
              <th scope="col">Landing Time</th>
              <th scope="col">Total Flight Time</th>
              <th scope="col">Total Distance</th>
              <th scope="col">Battery ID</th>
              <th scope="col">Battery Voltage (Checker)</th>
              <th scope="col">Battery Percentage (Checker)</th>
              <th scope="col">Battery Voltage (MP)</th>
              <th scope="col">Battery Percentage (MP)</th>
              <th scope="col">Incident</th>
              <th scope="col">Note</th>
              <th scope="col">Loss</th>
          </tr>
        </thead>
        <tbody>
        {FlightRecordData.map((record) => (
              <tr key={record.id}>
                <th scope="row">{record.id}</th>
                <td>{record.date}</td>
                <td>{record.year}</td>
                <td>{record.project}</td>
                <td>{record.activity}</td>
                <td>{record.flightcode}</td>
                <td>{record.pilot}</td>
                <td>{record.copilot1}</td>
                <td>{record.copilot2}</td>
                <td>{record.uav}</td>
                <td>{record.payload}</td>
                <td>{record.location}</td>
                <td>{record.weather}</td>
                <td>{record.takeoff}</td>
                <td>{record.landing}</td>
                <td>{record.flighttime}</td>
                <td>{record.distance}</td>
                <td>{record.batteryid}</td>
                <td>{record.batteryvolt}</td>
                <td>{record.batterypercent}</td>
                <td>{record.batteryvoltmp}</td>
                <td>{record.batterypercentmp}</td>
                <td>{record.incident}</td>
                <td>{record.note}</td>
                <td>{record.loss}</td>
              </tr>
            ))}
        </tbody>
      </table>
      </div>
    </div>
  );
}

export default FlightRecord;
