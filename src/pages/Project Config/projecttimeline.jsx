import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import "./ProjectTimeline.css";

function ProjectTimeline() {
  document.body.style.overflow = "auto";
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

  const tableData = [
    {
      id: '1',
      taskList: 'Studi Literatur',
      startDate: '',
      endDate: '',
      action: ''
    },
    {
      id: '2',
      taskList: 'Pembuatan Rencana Kerja',
      startDate: '',
      endDate: '',
      action: ''
    },
    {
      id: '3',
      taskList: 'Kick off Meeting (KOM)',
      startDate: '',
      endDate: '',
      action: ''
    },
    {
      id: '4',
      taskList: 'Pre-mob',
      startDate: '',
      endDate: '',
      action: ''
    },
    {
      id: '5',
      taskList: 'Pengurusan Safety Assessment - LPPNPI/Airnav Pusat',
      startDate: '',
      endDate: '',
      action: ''
    },
    {
      id: '6',
      taskList: 'Pengurusan Safety Assessment - Airnav Lokal',
      startDate: '',
      endDate: '',
      action: ''
    },
    {
      id: '7',
      taskList: 'Pengurusan Izin Operasi - DNP',
      startDate: '',
      endDate: '',
      action: ''
    },
    {
      id: '8',
      taskList: 'Pengurusan Security Clearance - Direktorat Strategi Pertahanan',
      startDate: '',
      endDate: '',
      action: ''
    },
    {
      id: '9',
      taskList: 'Pengurusan Izin Terbang - Lanud Lokal',
      startDate: '',
      endDate: '',
      action: ''
    },
    {
      id: '10',
      taskList: 'Pengurusan NOTAM - Airnav Lokal',
      startDate: '',
      endDate: '',
      action: ''
    },
    {
      id: '11',
      taskList: 'Perizinan Setempat',
      startDate: '',
      endDate: '',
      action: ''
    },
    {
      id: '12',
      taskList: 'Survei Pendahuluan',
      startDate: '',
      endDate: '',
      action: ''
    },
    {
      id: '13',
      taskList: 'Pemasangan Primark',
      startDate: '',
      endDate: '',
      action: ''
    },
    {
      id: '14',
      taskList: 'Pengamatan GPS',
      startDate: '',
      endDate: '',
      action: ''
    },
    {
      id: '15',
      taskList: 'Manajemen Data Survei Darat',
      startDate: '',
      endDate: '',
      action: ''
    },
    {
      id: '16',
      taskList: 'Pengolahan Data Survei Darat',
      startDate: '',
      endDate: '',
      action: ''
    },
    {
      id: '17',
      taskList: 'Akuisisi Data Survei Udara',
      startDate: '',
      endDate: '',
      action: ''
    },
    {
      id: '18',
      taskList: 'Manajemen Data Survei Udara',
      startDate: '',
      endDate: '',
      action: ''
    },
    {
      id: '19',
      taskList: 'Pengolahan PPK',
      startDate: '',
      endDate: '',
      action: ''
    },
    {
      id: '20',
      taskList: 'Pengolahan Data Survei Udara',
      startDate: '',
      endDate: '',
      action: ''
    },
    {
      id: '21',
      taskList: 'Pembuatan Berita Acara Pekerjaan Lapangan (BAPL)',
      startDate: '',
      endDate: '',
      action: ''
    },
    {
      id: '22',
      taskList: 'Manajemen Data Hasil Pekerjaan',
      startDate: '',
      endDate: '',
      action: ''
    },
    {
      id: '23',
      taskList: 'Pemeriksaan Data (QC)',
      startDate: '',
      endDate: '',
      action: ''
    },
    {
      id: '24',
      taskList: 'Serah Terima Data',
      startDate: '',
      endDate: '',
      action: ''
    },
    {
      id: '25',
      taskList: 'Manajemen Data Survei Darat & Udara',
      startDate: '',
      endDate: '',
      action: ''
    },
    {
      id: '26',
      taskList: 'Pemeriksaan Data Hasil Pekerjaan Lapangan (QC)',
      startDate: '',
      endDate: '',
      action: ''
    },
    {
      id: '27',
      taskList: 'Pengolahan Data Survei Darat (hi res)',
      startDate: '',
      endDate: '',
      action: ''
    },
    {
      id: '28',
      taskList: 'Pengolahan Data Survei Udara (hi res)',
      startDate: '',
      endDate: '',
      action: ''
    },
    {
      id: '29',
      taskList: 'Uji Akurasi',
      startDate: '',
      endDate: '',
      action: ''
    },
    {
      id: '30',
      taskList: 'Revisi Pekerjaan',
      startDate: '',
      endDate: '',
      action: ''
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setChartKey((prevKey) => prevKey + 1);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="project-timeline" style={{ marginLeft: "250px"}}>
      <h2 className="mb-4 text-center" style={{fontFamily: "Roboto, sans-serif", color: "#0F0F56"}}>Project Timeline</h2>
      <h5>Project Chart</h5>
      
      <div className="gantt-chart-container">
        <Chart key={chartKey} chartType="Gantt" width="100%" height="100%" data={data} />
      </div>
      
      <h5 className="mt-4">Project Table</h5>
      <table class="table table-bordered table-hover text-center mt-2">
        <thead>
          <tr>
            <th scope="col" style={{width: '5%', backgroundColor: '#143893', color: '#CCE6FF'}}>No</th>
            <th scope="col" style={{width: '30%', backgroundColor: '#143893', color: '#CCE6FF'}}>Task List</th>
            <th scope="col" style={{width: '25%', backgroundColor: '#143893', color: '#CCE6FF'}}>Start Date</th>
            <th scope="col" style={{width: '25%', backgroundColor: '#143893', color: '#CCE6FF'}}>End Date</th>
            <th scope="col" style={{width: '15%', backgroundColor: '#143893', color: '#CCE6FF'}}>Action</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((data) => (
            <tr key={data.id}>
              <th scope="row">{data.id}</th>
              <td>{data.taskList}</td>
              <td>
              <input type="date" id="startDate" name="startDate" />
              </td>
              <td>
              <input type="date" id="endDate" name="endDate" />
              </td>
              <td>
              <div className="container-fluid">
                <div className="row">
                  <div className="col">
                    <button
                      type="button"
                      className="btn btn-danger btn-outline-light"
                    >
                    <i class="bi bi-trash3"></i>
                    </button>
                  </div>
                 
                </div>
              </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}

export default ProjectTimeline;
