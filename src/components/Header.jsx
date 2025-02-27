import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { NavLink } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="p-3 border-bottom" style={{ backgroundColor: '#0F0F56', position: 'sticky', top: 0, zIndex: 1000 }}>
      <div className="container-fluid">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <img src={process.env.PUBLIC_URL + '/logo1.svg'} width={150} height={150} className="img-fluid me-5" />
          <a
            href="/"
            className="d-flex align-items-center mb-2 mb-lg-0 link-body-emphasis text-decoration-none"
          >
          </a>

          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li>
              <NavLink to="/Homepage" className="nav-link px-3 link-info text-white" activeClassName="active">Homepage</NavLink>
            </li>
            <li>
              <NavLink to="/Map" className="nav-link px-3 link-info link-offset-2 link-underline-opacity-200 link-underline-opacity-100-hover text-white" activeClassName="active">Map</NavLink>
            </li>
            <li>
              <NavLink to="/Project" className="nav-link px-3 link-info text-white" activeClassName="active">Projects</NavLink>
            </li>
            <li>
              <NavLink to="/Company" className="nav-link px-3 link-info text-white" activeClassName="active">Company</NavLink>
            </li>
            <li>
              <NavLink to="/FlightDatabase" className="nav-link px-3 link-info text-white" activeClassName="active">Flight Database</NavLink>
            </li>
          </ul>

          <div className="dropdown text-end text-white">
            <a
              href="#"
              className="d-block link-body-emphasis text-decoration-none dropdown-toggle text-white"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src={process.env.PUBLIC_URL + '/profile1.png'}
                alt="mdo"
                width="32"
                height="32"
                className="rounded-circle border border-2 border-white"
              />
            </a>
            <ul className="dropdown-menu text-small">
              <li>
                <NavLink to="/Profile/AccountDetails" className="dropdown-item">Profile</NavLink>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <NavLink to="/" className="dropdown-item">Logout</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;