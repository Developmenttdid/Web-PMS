import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import Homepage from './Homepage';
import Header from './Header';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route element={<Header />}>
          <Route path="/Homepage" element={<Homepage />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();