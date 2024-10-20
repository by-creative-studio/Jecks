import React, { useState } from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Design  from './Design';
import Homepage  from './Homepage';
import DownloadResult  from './DownloadResult';

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
  <Router>     
    <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Design" element={<Design />} />
          <Route path="/download" element={<DownloadResult />} />

        </Routes>  
  </Router>
  );
}

export default App; 