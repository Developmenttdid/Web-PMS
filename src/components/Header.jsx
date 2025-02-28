import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header
      className="p-3 border-bottom"
      style={{
        backgroundColor: "#0F0F56",
        //position: "fixed",
        top: 0,
        left: "0",
        zIndex: 1000,
        width: "100vw",
      }}
    >
      <div className="container-fluid">
        <div className="row d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <div className="col-lg-3 text-lg-start text-center">
            <img
              src={process.env.PUBLIC_URL + "/logo1.svg"}
              width={150}
              height={150}
              className="img-fluid me-5"
            />
            <a
              href="/"
              className="d-flex align-items-center mb-2 mb-lg-0 link-body-emphasis text-decoration-none"
            ></a>
          </div>

          <div className="col-lg-6">
            <nav class="navbar navbar-expand-lg ">
              <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                <li>
                  <Link
                    to="/Homepage"
                    className="nav-link px-3 link-info text-white"
                  >
                    Homepage
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Map"
                    className="nav-link px-3 link-info link-offset-2 link-underline-opacity-200 link-underline-opacity-100-hover text-white"
                  >
                    Map
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Project"
                    className="nav-link px-3 link-info text-white"
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Company"
                    className="nav-link px-3 link-info text-white"
                  >
                    Company
                  </Link>
                </li>
                <li>
                  <div className="container-fluid">
                    <div
                      
                      id="navbarNavDarkDropdown"
                    >
                      <ul className="navbar-nav">
                        <li className="nav-item dropdown">
                          <button
                            className="btn dropdown-toggle text-white"
                            style={{marginTop: '2px'}}
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            Flight Database
                          </button>
                          <ul className="dropdown-menu dropdown-menu-dark">
                            <li>
                              <Link to="/Checklistdb" className="dropdown-item">
                                Checklist Database
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/ProjectLogbook"
                                className="dropdown-item"
                              >
                                Project Logbook
                              </Link>
                            </li>
                            <li>
                              <Link to="/UAVLogbook" className="dropdown-item">
                                UAV Logbook
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/FlightRecord"
                                className="dropdown-item"
                              >
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
                  alt="mdo"
                  width="32"
                  height="32"
                  className="rounded-circle border border-2 border-white"
                />
              </a>
              <ul className="dropdown-menu text-small">
                {/* <li>
              <Link to="/Project/Addproject" className="dropdown-item">New Project</Link>
              </li> */}
                {/* <li>
                <a className="dropdown-item" href="#">
                  Settings
                </a>
              </li> */}
                <li>
                  <Link to="/Profile/AccountDetails" className="dropdown-item">
                    Profile
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
