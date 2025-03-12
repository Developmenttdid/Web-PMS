import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ConfigNav = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleSubmitProject = async (event) => {
    event.preventDefault(); // Prevent default button behavior

    // Parse the stored values to extract the label
    const selectedOption = JSON.parse(localStorage.getItem("selectedOption"));
    const selectedCity = JSON.parse(localStorage.getItem("selectedCity"));

    // Prepare data to be uploaded
    const projectData = {
      project_code: localStorage.getItem("projectCode"),
      project_type: selectedOption ? selectedOption.label : null,
      city: selectedCity ? selectedCity.label : null,
      email: localStorage.getItem("email")
    };

    // Retrieve personnel data
    const personnelNames = JSON.parse(localStorage.getItem("personnelNames")) || [];
    const personnelRoles = JSON.parse(localStorage.getItem("personnelRoles")) || [];

    const projectPersonnel = personnelNames.map((person, index) => ({
      personnel_name: person?.name?.label || "",
      personnel_role: personnelRoles[index]?.role?.label || "",
      email: localStorage.getItem("email"),
      project_code: localStorage.getItem("projectCode")
    }));

    // Retrieve equipment data
    const projectEquipment = (JSON.parse(localStorage.getItem("equipmentList")) || []).map((equipment) => ({
      equipment_name: equipment.equipment?.label || "",  
      equipment_type: equipment.type?.label || "",       
      equipment_id: equipment.equipmentID?.label || null,  // Allow null instead of empty string
      email: localStorage.getItem("email"),
      project_code: localStorage.getItem("projectCode"),
    })).filter(eq => eq.equipment_name && eq.equipment_type); // Only filter out missing names/types

    // Retrieve timeline data
    const projectTableData = JSON.parse(localStorage.getItem("projectTableData")) || [];
    const timelineDataStart = {
      email: localStorage.getItem("email"),
      project_code: localStorage.getItem("projectCode"),
      studi_literatur: projectTableData.find(task => task.taskList === 'Studi Literatur')?.startDate || null,
      pembuatan_rencana_kerja: projectTableData.find(task => task.taskList === 'Pembuatan Rencana Kerja')?.startDate || null,
      kick_off_meeting: projectTableData.find(task => task.taskList === 'Kick off Meeting (KOM)')?.startDate || null,
      pre_mob: projectTableData.find(task => task.taskList === 'Pre-mob')?.startDate || null,
      pengurusan_safety_assessment_airnav_pusat: projectTableData.find(task => task.taskList === 'Pengurusan Safety Assessment Airnav Pusat')?.startDate || null,
      pengurusan_safety_assessment_airnav_lokal: projectTableData.find(task => task.taskList === 'Pengurusan Safety Assessment Airnav Lokal')?.startDate || null,
      pengurusan_izin_operasi_dnp: projectTableData.find(task => task.taskList === 'Pengurusan Izin Operasi - DNP')?.startDate || null,
      pengurusan_security_clearance: projectTableData.find(task => task.taskList === 'Pengurusan Security Clearance')?.startDate || null,
      pengurusan_izin_terbang_lanud_lokal: projectTableData.find(task => task.taskList === 'Pengurusan Izin Terbang - Lanud Lokal')?.startDate || null,
      pengurusan_notam_airnav_lokal: projectTableData.find(task => task.taskList === 'Pengurusan NOTAM - Airnav Lokal')?.startDate || null,
      perizinan_setempat: projectTableData.find(task => task.taskList === 'Perizinan Setempat')?.startDate || null,
      survei_pendahuluan: projectTableData.find(task => task.taskList === 'Survei Pendahuluan')?.startDate || null,
      pemasangan_primark: projectTableData.find(task => task.taskList === 'Pemasangan Primark')?.startDate || null,
      pengamatan_gps: projectTableData.find(task => task.taskList === 'Pengamatan GPS')?.startDate || null,
      manajemen_data_survei_darat: projectTableData.find(task => task.taskList === 'Manajemen Data Survei Darat')?.startDate || null,
      pengolahan_data_survei_darat: projectTableData.find(task => task.taskList === 'Pengolahan Data Survei Darat')?.startDate || null,
      akuisisi_data_survei_udara: projectTableData.find(task => task.taskList === 'Akuisisi Data Survei Udara')?.startDate || null,
      manajemen_data_survei_udara: projectTableData.find(task => task.taskList === 'Manajemen Data Survei Udara')?.startDate || null,
      pengolahan_ppk: projectTableData.find(task => task.taskList === 'Pengolahan PPK')?.startDate || null,
      pengolahan_data_survei_udara: projectTableData.find(task => task.taskList === 'Pengolahan Data Survei Udara')?.startDate || null,
      pembuatan_bapl: projectTableData.find(task => task.taskList === 'Pembuatan BAPL')?.startDate || null,
      manajemen_data_hasil_pekerjaan: projectTableData.find(task => task.taskList === 'Manajemen Data Hasil Pekerjaan')?.startDate || null,
      quality_control_hasil: projectTableData.find(task => task.taskList === 'Quality Control')?.startDate || null,
      serah_terima_data: projectTableData.find(task => task.taskList === 'Serah Terima Data')?.startDate || null,
      manajemen_data_survei_darat_dan_udara: projectTableData.find(task => task.taskList === 'Manajemen Data Survei Darat & Udara')?.startDate || null,
      quality_control_survey: projectTableData.find(task => task.taskList === 'Quality Control')?.startDate || null,
      pengolahan_data_survei_darat_hi_res: projectTableData.find(task => task.taskList === 'Pengolahan Data Survei Darat (hi res)')?.startDate || null,
      pengolahan_data_survei_udara_hi_res: projectTableData.find(task => task.taskList === 'Pengolahan Data Survei Udara (hi res)')?.startDate || null,
      uji_akurasi: projectTableData.find(task => task.taskList === 'Uji Akurasi')?.startDate || null,
      revisi_pekerjaan: projectTableData.find(task => task.taskList === 'Revisi Pekerjaan')?.startDate || null,
      progress_percentage: projectTableData.reduce((acc, task) => acc + task.percentComplete, 0) / projectTableData.length || 0,
    };

    const timelineDataEnd = {
      email: localStorage.getItem("email"),
      project_code: localStorage.getItem("projectCode"),
      studi_literatur: projectTableData.find(task => task.taskList === 'Studi Literatur')?.endDate || null,
      pembuatan_rencana_kerja: projectTableData.find(task => task.taskList === 'Pembuatan Rencana Kerja')?.endDate || null,
      kick_off_meeting: projectTableData.find(task => task.taskList === 'Kick off Meeting (KOM)')?.endDate || null,
      pre_mob: projectTableData.find(task => task.taskList === 'Pre-mob')?.endDate || null,
      pengurusan_safety_assessment_airnav_pusat: projectTableData.find(task => task.taskList === 'Pengurusan Safety Assessment Airnav Pusat')?.endDate || null,
      pengurusan_safety_assessment_airnav_lokal: projectTableData.find(task => task.taskList === 'Pengurusan Safety Assessment Airnav Lokal')?.endDate || null,
      pengurusan_izin_operasi_dnp: projectTableData.find(task => task.taskList === 'Pengurusan Izin Operasi - DNP')?.endDate || null,
      pengurusan_security_clearance: projectTableData.find(task => task.taskList === 'Pengurusan Security Clearance')?.endDate || null,
      pengurusan_izin_terbang_lanud_lokal: projectTableData.find(task => task.taskList === 'Pengurusan Izin Terbang - Lanud Lokal')?.endDate || null,
      pengurusan_notam_airnav_lokal: projectTableData.find(task => task.taskList === 'Pengurusan NOTAM - Airnav Lokal')?.endDate || null,
      perizinan_setempat: projectTableData.find(task => task.taskList === 'Perizinan Setempat')?.endDate || null,
      survei_pendahuluan: projectTableData.find(task => task.taskList === 'Survei Pendahuluan')?.endDate || null,
      pemasangan_primark: projectTableData.find(task => task.taskList === 'Pemasangan Primark')?.endDate || null,
      pengamatan_gps: projectTableData.find(task => task.taskList === 'Pengamatan GPS')?.endDate || null,
      manajemen_data_survei_darat: projectTableData.find(task => task.taskList === 'Manajemen Data Survei Darat')?.endDate || null,
      pengolahan_data_survei_darat: projectTableData.find(task => task.taskList === 'Pengolahan Data Survei Darat')?.endDate || null,
      akuisisi_data_survei_udara: projectTableData.find(task => task.taskList === 'Akuisisi Data Survei Udara')?.endDate || null,
      manajemen_data_survei_udara: projectTableData.find(task => task.taskList === 'Manajemen Data Survei Udara')?.endDate || null,
      pengolahan_ppk: projectTableData.find(task => task.taskList === 'Pengolahan PPK')?.endDate || null,
      pengolahan_data_survei_udara: projectTableData.find(task => task.taskList === 'Pengolahan Data Survei Udara')?.endDate || null,
      pembuatan_bapl: projectTableData.find(task => task.taskList === 'Pembuatan BAPL')?.endDate || null,
      manajemen_data_hasil_pekerjaan: projectTableData.find(task => task.taskList === 'Manajemen Data Hasil Pekerjaan')?.endDate || null,
      quality_control_hasil: projectTableData.find(task => task.taskList === 'Quality Control')?.endDate || null,
      serah_terima_data: projectTableData.find(task => task.taskList === 'Serah Terima Data')?.endDate || null,
      manajemen_data_survei_darat_dan_udara: projectTableData.find(task => task.taskList === 'Manajemen Data Survei Darat & Udara')?.endDate || null,
      quality_control_survey: projectTableData.find(task => task.taskList === 'Quality Control')?.endDate || null,
      pengolahan_data_survei_darat_hi_res: projectTableData.find(task => task.taskList === 'Pengolahan Data Survei Darat (hi res)')?.endDate || null,
      pengolahan_data_survei_udara_hi_res: projectTableData.find(task => task.taskList === 'Pengolahan Data Survei Udara (hi res)')?.endDate || null,
      uji_akurasi: projectTableData.find(task => task.taskList === 'Uji Akurasi')?.endDate || null,
      revisi_pekerjaan: projectTableData.find(task => task.taskList === 'Revisi Pekerjaan')?.endDate || null,
      progress_percentage: projectTableData.reduce((acc, task) => acc + task.percentComplete, 0) / projectTableData.length || 0,
    };

    // Retrieve timeline percentage data
    // const timelineDataPercent = {
    //   email: localStorage.getItem("email"),
    //   project_code: localStorage.getItem("projectCode"),
    //   studi_literatur: projectTableData.find(task => task.taskList === 'Studi Literatur')?.percentComplete || null,
    //   pembuatan_rencana_kerja: projectTableData.find(task => task.taskList === 'Pembuatan Rencana Kerja')?.percentComplete || null,
    //   kick_off_meeting: projectTableData.find(task => task.taskList === 'Kick off Meeting (KOM)')?.percentComplete || null,
    //   pre_mob: projectTableData.find(task => task.taskList === 'Pre-mob')?.percentComplete || null,
    //   pengurusan_safety_assessment_airnav_pusat: projectTableData.find(task => task.taskList === 'Pengurusan Safety Assessment Airnav Pusat')?.percentComplete || null,
    //   pengurusan_safety_assessment_airnav_lokal: projectTableData.find(task => task.taskList === 'Pengurusan Safety Assessment Airnav Lokal')?.percentComplete || null,
    //   pengurusan_izin_operasi_dnp: projectTableData.find(task => task.taskList === 'Pengurusan Izin Operasi - DNP')?.percentComplete || null,
    //   pengurusan_security_clearance: projectTableData.find(task => task.taskList === 'Pengurusan Security Clearance')?.percentComplete || null,
    //   pengurusan_izin_terbang_lanud_lokal: projectTableData.find(task => task.taskList === 'Pengurusan Izin Terbang - Lanud Lokal')?.percentComplete || null,
    //   pengurusan_notam_airnav_lokal: projectTableData.find(task => task.taskList === 'Pengurusan NOTAM - Airnav Lokal')?.percentComplete || null,
    //   perizinan_setempat: projectTableData.find(task => task.taskList === 'Perizinan Setempat')?.percentComplete || null,
    //   survei_pendahuluan: projectTableData.find(task => task.taskList === 'Survei Pendahuluan')?.percentComplete || null,
    //   pemasangan_primark: projectTableData.find(task => task.taskList === 'Pemasangan Primark')?.percentComplete || null,
    //   pengamatan_gps: projectTableData.find(task => task.taskList === 'Pengamatan GPS')?.percentComplete || null,
    //   manajemen_data_survei_darat: projectTableData.find(task => task.taskList === 'Manajemen Data Survei Darat')?.percentComplete || null,
    //   pengolahan_data_survei_darat: projectTableData.find(task => task.taskList === 'Pengolahan Data Survei Darat')?.percentComplete || null,
    //   akuisisi_data_survei_udara: projectTableData.find(task => task.taskList === 'Akuisisi Data Survei Udara')?.percentComplete || null,
    //   manajemen_data_survei_udara: projectTableData.find(task => task.taskList === 'Manajemen Data Survei Udara')?.percentComplete || null,
    //   pengolahan_ppk: projectTableData.find(task => task.taskList === 'Pengolahan PPK')?.percentComplete || null,
    //   pengolahan_data_survei_udara: projectTableData.find(task => task.taskList === 'Pengolahan Data Survei Udara')?.percentComplete || null,
    //   pembuatan_bapl: projectTableData.find(task => task.taskList === 'Pembuatan BAPL')?.percentComplete || null,
    //   manajemen_data_hasil_pekerjaan: projectTableData.find(task => task.taskList === 'Manajemen Data Hasil Pekerjaan')?.percentComplete || null,
    //   quality_control_hasil: projectTableData.find(task => task.taskList === 'Quality Control')?.percentComplete || null,
    //   serah_terima_data: projectTableData.find(task => task.taskList === 'Serah Terima Data')?.percentComplete || null,
    //   manajemen_data_survei_darat_dan_udara: projectTableData.find(task => task.taskList === 'Manajemen Data Survei Darat & Udara')?.percentComplete || null,
    //   quality_control_survey: projectTableData.find(task => task.taskList === 'Quality Control')?.percentComplete || null,
    //   pengolahan_data_survei_darat_hi_res: projectTableData.find(task => task.taskList === 'Pengolahan Data Survei Darat (hi res)')?.percentComplete || null,
    //   pengolahan_data_survei_udara_hi_res: projectTableData.find(task => task.taskList === 'Pengolahan Data Survei Udara (hi res)')?.percentComplete || null,
    //   uji_akurasi: projectTableData.find(task => task.taskList === 'Uji Akurasi')?.percentComplete || null,
    //   revisi_pekerjaan: projectTableData.find(task => task.taskList === 'Revisi Pekerjaan')?.percentComplete || null,
    // };

    try {
      // Check if project_code already exists
      const checkResponse = await fetch(`http://103.163.184.111:3000/projectstatus/${projectData.project_code}`);
      if (checkResponse.ok) {
        // Project code already exists, handle accordingly
        throw new Error("Project code already exists. Please use a different project code.");
      }

      // Upload project data to the server
      const projectResponse = await fetch("http://103.163.184.111:3000/projectstatus", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(projectData),
      });

      if (!projectResponse.ok) {
        throw new Error("Failed to submit project data");
      }

      // Upload personnel data to the server
      const personnelResponse = await fetch("http://103.163.184.111:3000/personnel", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(projectPersonnel),
      });

      if (!personnelResponse.ok) {
        throw new Error("Failed to submit personnel data");
      }

      // Upload equipment data to the server
      const equipmentResponse = await fetch("http://103.163.184.111:3000/projectequipment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(projectEquipment),
      });

      if (!equipmentResponse.ok) {
        throw new Error("Failed to submit equipment data");
      }

      // Upload timeline percentage data to the server
      // const timelinePercentResponse = await fetch("http://103.163.184.111:3000/project_timeline_percent", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(timelineDataPercent),
      // });

      // if (!timelinePercentResponse.ok) {
      //   throw new Error("Failed to submit timeline percentage data");
      // }

      // Upload timeline start data to the server
      const timelineStartResponse = await fetch("http://103.163.184.111:3000/projecttimeline_start", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(timelineDataStart),
      });

      if (!timelineStartResponse.ok) {
        throw new Error("Failed to submit timeline start data");
      }

      // Upload timeline end data to the server
      const timelineEndResponse = await fetch("http://103.163.184.111:3000/projecttimeline_end", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(timelineDataEnd),
      });

      if (!timelineEndResponse.ok) {
        throw new Error("Failed to submit timeline end data");
      }

      // Clear data from localStorage
      localStorage.removeItem("permissionList");
      localStorage.removeItem("otherDocumentList");
      localStorage.removeItem("equipmentList");
      localStorage.removeItem("city");
      localStorage.removeItem("projectCode");
      localStorage.removeItem("projectObjective");
      localStorage.removeItem("selectedOption");
      localStorage.removeItem("selectedCity");
      localStorage.removeItem("projectTableData");
      localStorage.removeItem("personnelList");
      localStorage.removeItem("personnelNames");
      localStorage.removeItem("personnelRoles");
      localStorage.removeItem("equipmentName");
      localStorage.removeItem("equipmentType");
      localStorage.removeItem("equipmentID");

      alert("Project, personnel, equipment, and timeline data submitted and data cleared!");

      // Navigate to /Project after submission
      navigate("/Project");
    } catch (error) {
      console.error("Error submitting project data:", error);
      alert(error.message);
    }
  };

  return (
    <div
      className="nav-container d-flex flex-column flex-shrink-0 p-3 text-white position-fixed"
      style={{
        width: "250px",
        minHeight: "100vh",
        backgroundColor: "#f8f9fa",
        boxShadow: "2px 0 5px rgba(0,0,0,0.1)"
      }}
    >
      <h4
        className="mt-0"
        style={{ color: "#0F0F56", fontWeight: "bold", fontSize: "1.5rem" }}
      >
        Manage Project
      </h4>
      <hr className="w-100" />
      <ul className="nav nav-pills flex-column w-100">
        <li className="nav-item">
          <a
            href="/Project/ProjectStatus"
            className={`nav-link ${
              location.pathname === "/Project/ProjectStatus" ? "active" : ""
            }`}
          >
            Project Status
          </a>
        </li>
        <li className="nav-item">
          <a
            href="/Project/ProjectTimeline"
            className={`nav-link ${
              location.pathname === "/Project/ProjectTimeline" ? "active" : ""
            }`}
          >
            Project Timeline
          </a>
        </li>
        <li className="nav-item">
          <a
            href="/Project/Personnel"
            className={`nav-link ${
              location.pathname === "/Project/Personnel" ? "active" : ""
            }`}
          >
            Personnel
          </a>
        </li>
        <li className="nav-item">
          <a
            href="/Project/Equipment"
            className={`nav-link ${
              location.pathname === "/Project/Equipment" ? "active" : ""
            }`}
          >
            Equipment
          </a>
        </li>
        <li className="nav-item">
          <a
            href="/Project/LegalDocument"
            className={`nav-link ${
              location.pathname === "/Project/LegalDocument" ? "active" : ""
            }`}
          >
            Legal Document
          </a>
        </li>
        <li className="nav-item p-2 bg-success border border-success rounded-2 mt-5">
          <button
            className="text-white text-decoration-none fw-bold align-items-center d-flex justify-content-center w-100 bg-transparent border-0"
            onClick={handleSubmitProject}
          >
            Submit Project
          </button>
        </li>
      </ul>
    </div>
  );
};

export default ConfigNav;