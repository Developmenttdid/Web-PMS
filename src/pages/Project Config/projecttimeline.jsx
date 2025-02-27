import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import "./ProjectTimeline.css";

function ProjectTimeline() {
  const [chartKey, setChartKey] = useState(0);

  const data = [
    [
      { type: "string", label: "Task ID" },
      { type: "string", label: "Task Name" },
      { type: "string", label: "Resource" },
      { type: "date", label: "Start Date" },
      { type: "date", label: "End Date" },
      { type: "number", label: "Duration" },
      { type: "number", label: "Percent Complete" },
      { type: "string", label: "Dependencies" },
    ],
    ["HS-LAMINDO-L2 & M3E", "HS-LAMINDO-L2 & M3E", "Hardware Selling", new Date(2025, 1, 6), new Date(2025, 1, 11), null, 100, null],
    ["PRJ-TDJP-UTM", "PRJ-TDJP-UTM", "Project", new Date(2025, 1, 20), new Date(2025, 1, 23), null, 100, null],
    ["PRJ - SMARTINDO-EXXON CO23", "PRJ - SMARTINDO-EXXON CO23", "Project", new Date(2025, 2, 3), new Date(2025, 2, 9), null, 100, null],
    ["HS - PKT-M30T", "HS - PKT-M30T", "Hardware Selling", new Date(2025, 2, 23), new Date(2025, 2, 26), null, 100, null],
    ["HS - PETROSEA-M3E", "HS - PETROSEA-M3E", "Hardware Selling", new Date(2025, 3, 4), new Date(2025, 4, 8), null, 0, null],
    ["HS - IWIP-FLYCART", "HS - IWIP-FLYCART", "Hardware Selling", new Date(2025, 3, 17), new Date(2025, 4, 22), null, 0, null],
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setChartKey((prevKey) => prevKey + 1);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="project-timeline">
      <h2>Project Timeline</h2>
      <h4>#Project Chart</h4>
      <div className="gantt-chart-container">
        <Chart key={chartKey} chartType="Gantt" width="100%" height="100%" data={data} />
      </div>
      <h4>#Add Project Information</h4>
      <div className="form-group row d-flex align-items-center column-gap-1">
        <div className="col mb-3 ms-3">
          <label className="form-label">Project Start Date</label>
          <input type="date" className="form-control" placeholder="Example input placeholder" />
        </div>
        <div className="col mb-3 ms-3">
          <label className="form-label">Project Complete Date</label>
          <input type="date" className="form-control" placeholder="Example input placeholder" />
        </div>
      </div>
    </div>
  );
}

export default ProjectTimeline;