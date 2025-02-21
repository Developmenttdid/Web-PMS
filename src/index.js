import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import './index.css';
import App from './pages/App';
import Homepage from './pages/Homepage';
import Project from './pages/Project';
import Header from './components/Header';
import Map from './pages/Map';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route element={<HeaderLayout />}>
          <Route path="/Homepage" element={<Homepage />} />
          <Route path="/Project" element={<Project />} />
          <Route path="/Map" element={<Map />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();

function HeaderLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}