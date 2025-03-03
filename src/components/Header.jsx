import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

function Header() {
  const location = useLocation();

  const getLinkClass = (path) =>
    location.pathname === path ? "fw-bold text-primary" : "text-white";

  const isFlightDatabaseActive = location.pathname.startsWith("/FlightDatabase");

  return (
    <header
      className="p-3 border-bottom"
      style={{
        backgroundColor: "#0F0F56",
        top: 0,
        left: "0",
        zIndex: 1000,
        width: "100vw",
      }}
    >
      <div className="container-fluid">
        <div className="row d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <div className="col-lg-3 text-lg-start text-center">
            <Link to="/Homepage">
              <img
                src={process.env.PUBLIC_URL + "/HSkyOps-white.png"}
                width={120}
                height={120}
                className="img-fluid me-5"
                alt="Logo"
              />
            </Link>
          </div>

          <div className="col-lg-6">
            <nav className="navbar navbar-expand-lg">
              <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                <li>
                  <Link to="/Homepage" className={`nav-link px-3 ${getLinkClass("/Homepage")}`}>
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link to="/Map" className={`nav-link px-3 ${getLinkClass("/Map")}`}>
                    Map
                  </Link>
                </li>
                <li>
                  <Link to="/Project" className={`nav-link px-3 ${getLinkClass("/Project")}`}>
                    Projects
                  </Link>
                </li>
                <li>
                  <Link to="/Company" className={`nav-link px-3 ${getLinkClass("/Company")}`}>
                    Company
                  </Link>
                </li>
                <li>
                  <div className="container-fluid">
                    <div id="navbarNavDarkDropdown">
                      <ul className="navbar-nav">
                        <li className="nav-item dropdown">
                          <button
                            className={`btn dropdown-toggle ${isFlightDatabaseActive ? "fw-bold text-primary" : "text-white"}`}
                            style={{ marginTop: "2px" }}
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            Flight Database
                          </button>
                          <ul className="dropdown-menu dropdown-menu-dark">
                            <li>
                              <Link to="/FlightDatabase" className={`dropdown-item ${getLinkClass("/FlightDatabase")}`}>
                                Checklist Database
                              </Link>
                            </li>
                            <li>
                              <Link to="/FlightDatabase/ProjectLogbook" className={`dropdown-item ${getLinkClass("/FlightDatabase/ProjectLogbook")}`}>
                                Project Logbook
                              </Link>
                            </li>
                            <li>
                              <Link to="/FlightDatabase/UAVLogbook" className={`dropdown-item ${getLinkClass("/FlightDatabase/UAVLogbook")}`}>
                                UAV Logbook
                              </Link>
                            </li>
                            <li>
                              <Link to="/FlightDatabase/FlightRecord" className={`dropdown-item ${getLinkClass("/FlightDatabase/FlightRecord")}`}>
                                Flight Record
                              </Link>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
              </ul>
            </nav>
          </div>

          <div className="col-lg-3 d-flex justify-content-lg-end justify-content-center">
            <div className="dropdown text-end text-white">
              <a
                href="#"
                className="d-block link-body-emphasis text-decoration-none dropdown-toggle text-white"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src={process.env.PUBLIC_URL + "/profile1.png"}
                  alt="Profile"
                  width="32"
                  height="32"
                  className="rounded-circle border border-2 border-white"
                />
              </a>
              <ul className="dropdown-menu text-small">
                <li>
                  <Link to="/Profile/AccountDetails" className="dropdown-item">
                    Profile
                  </Link>
                </li>
                <li>
                  <Link to="/Profile/Notification" className="dropdown-item">
                    Notification
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link to="/" className="dropdown-item">
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
