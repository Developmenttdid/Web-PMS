import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import '../App.css';

const Header = () => {
  return (
    <div>
      <header className="p-3 mb-3 border-bottom custom-header">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-8 col-md-6 col-sm-12 mb-lg-0 mb-3 mt-1 text-md-start text-center">
              <ul>
                <li>
                  <img className="img-fluid ms-3" src="logo1.svg" width="150" height="150" alt="Logo" />
                  <label className="mt-2">
                    <input className="custom-input" type="checkbox" />
                    <div className="toggle">
                      <span className="top_line common" style={{ backgroundColor: '#0f0f56' }}></span>
                      <span className="middle_line common" style={{ backgroundColor: '#0f0f56' }}></span>
                      <span className="bottom_line common bg" style={{ backgroundColor: '#0f0f56' }}></span>
                    </div>
                    <div className="slide" style={{ backgroundColor: '#0F0F56' }}>
                      <ul className="px-0">
                        <li className="custom-li text-light" style={{ marginTop: '4rem' }}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-house-door" viewBox="0 0 16 16">
                            <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4z" />
                          </svg>
                          <a href="/" className="text-decoration-none text-white">Home Page</a>
                        </li>
                        <li className="custom-li text-light">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list-task" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M2 2.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5zM3 3H2v1h1z" />
                            <path d="M5 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M5.5 7a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1zm0 4a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1z" />
                          </svg>
                          <a href="/project" className="text-decoration-none text-white">Project</a>
                        </li>
                      </ul>
                    </div>
                  </label>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-12 d-flex justify-content-center">
              <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
                <input type="search" className="form-control" placeholder="Search..." aria-label="Search" />
              </form>
            </div>
            <div className="col-lg-2 col-md-2 col-sm-12 d-flex justify-content-center dropdown text-end">
              <div className="notification-button me-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bell-fill text-white" viewBox="0 0 16 16">
                  <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5 5 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901" />
                </svg>
              </div>
              <a href="#" className="d-block link-body-emphasis text-decoration-none dropdown-toggle text-white" data-bs-toggle="dropdown" aria-expanded="false">
                <img src="images/profile1.png" alt="Profile" width="32" height="32" className="rounded-circle border border-2 border-white" />
              </a>
              <ul className="dropdown-menu text-small">
                <li><a className="dropdown-item" href="#">Settings</a></li>
                <li><a className="dropdown-item" href="#">Profile</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#" id="signOutButton">Sign out</a></li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
