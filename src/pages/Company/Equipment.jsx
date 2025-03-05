import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React, { useState } from "react";

function EquipmentCompany() {
  const [selectedTable, setSelectedTable] = useState("UAV");

  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-4">
            <label className="my-2">Select Table:</label>
            <select
              className="form-select"
              value={selectedTable}
              onChange={(e) => {
                setSelectedTable(e.target.value);
              }}
            >
              <option value="UAV">UAV</option>
              <option value="Payload">Payload</option>
              <option value="Geodetic GPS">GPS</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>
      </div>

      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-12">
            {/* Menampilkan tabel berdasarkan pilihan */}
            {selectedTable === "UAV" && <UAVTable />}
            {selectedTable === "Payload" && <PayloadTable />}
            {selectedTable === "Geodetic GPS" && <GeodeticGPSTable />}
          </div>
        </div>
      </div>
    </div>
  );
}

function UAVTable() {
    const UAVData = [
      {
        id: 1,
        UAVtype: '',
        UAVid: '',
        status: 'available',
      },
      {
        id: 2,
        UAVtype: '',
        UAVid: '',
        status: 'not available',
      },
      {
        id: 3,
        UAVtype: '',
        UAVid: '',
        status: 'available',
      },
      {
        id: 4,
        UAVtype: '',
        UAVid: '',
        status: 'not availabke',
      },
     
    ];
    return (
      <table className="table table-hover text-center table-bordered" style={{ borderColor: '#143893' }}>
        <thead style={{ width: "100%"}} >
          <tr>
            <th scope="col" style={{ width: "5%", backgroundColor: '#143893', color: '#CCE6FF' }}>
              #
            </th>
            <th scope="col" style={{ width: "40%", backgroundColor: '#143893', color: '#CCE6FF' }}>
              UAV Type
            </th>
            <th scope="col" style={{ width: "40%", backgroundColor: '#143893', color: '#CCE6FF' }}>
              UAV id
            </th>
            <th scope="col" style={{ width: "15%", backgroundColor: '#143893', color: '#CCE6FF'}}>
              status
            </th>
          </tr>
        </thead>
        <tbody>
          {UAVData.map((data) => (
            <tr>
              <th scope="row">{data.id}</th>
              <td>{data.UAVtype}</td>
              <td>{data.UAVid}</td>
              <td>
              {data.status === 'available' ? 
                    <button type="button" class="btn btn-success"><i class="bi bi-check2"></i></button>
                    : <button type="button" class="btn btn-danger"><i class="bi bi-x"></i></button>
                  }
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
  
  function PayloadTable() {
      const PayloadData = [
          {
            id: 1,
            payloadType: '',
            payloadID: '',
            status: 'available',
          },
          {
            id: 2,
            payloadType: '',
            payloadID: '',
            status: 'not available',
          },
          {
            id: 3,
            payloadType: '',
            payloadID: '',
            status: '',
          },
        ];
        return (
          <table className="table table-hover text-center">
            <thead style={{ width: "100%"}} >
              <tr>
                <th scope="col" style={{ width: "5%", backgroundColor: '#143893', color: '#CCE6FF'}}>
                  #
                </th>
                <th scope="col" style={{ width: "40%", backgroundColor: '#143893', color: '#CCE6FF' }}>
                  Payload Type
                </th>
                <th scope="col" style={{ width: "40%", backgroundColor: '#143893', color: '#CCE6FF' }}>
                  Payload ID
                </th>
                <th scope="col" style={{ width: "15%", backgroundColor: '#143893', color: '#CCE6FF'}}>
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {PayloadData.map((data) => (
                <tr>
                  <th scope="row">{data.id}</th>
                  <td>{data.payloadType}</td>
                  <td>{data.ID}</td>
                  <td>
                  {data.status === 'available' ? 
                    <button type="button" class="btn btn-success"><i class="bi bi-check2"></i></button>
                    : <button type="button" class="btn btn-danger"><i class="bi bi-x"></i></button>
                  }
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        );
  }
  
  function GeodeticGPSTable() {
      const GeodeticGPSData = [
          {
            id: 1,
            GPStype: '',
            GPSid: '',
            status: 'available'
          },
          {
            id: 2,
            GPStype: '',
            GPSid: '',
            status: 'not available'
          },
          {
            id: 3,
            GPStype: '',
            GPSid: '',
            status: 'not available'
          },
          {
            id: 4,
            GPStype: '',
            GPSid: '',
            status: 'available'
          },
          
          
        ];
        return (
          <table className="table table-hover text-center">
            <thead style={{ width: "100%"}} >
              <tr>
                <th scope="col" style={{ width: "5%", backgroundColor: '#143893', color: '#CCE6FF'}}>
                  #
                </th>
                <th scope="col" style={{ width: "40%", backgroundColor: '#143893', color: '#CCE6FF' }}>
                  GPS Type
                </th>
                <th scope="col" style={{ width: "40%", backgroundColor: '#143893', color: '#CCE6FF' }}>
                  GPS ID
                </th>
                <th scope="col" style={{ width: "15%", backgroundColor: '#143893', color: '#CCE6FF'}}>
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {GeodeticGPSData.map((data) => (
                <tr>
                  <th scope="row">{data.id}</th>
                  <td>{data.GPStype}</td>
                  <td>{data.GPSid}</td>
                  <td>
                  {data.status === 'available' ? 
                    <button type="button" class="btn btn-success"><i class="bi bi-check2"></i></button>
                    : <button type="button" class="btn btn-danger"><i class="bi bi-x"></i></button>
                  }
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        );
  }

export default EquipmentCompany;