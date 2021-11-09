import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from './components/Navbar';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" />
          {/* <Route path="/" element={<LandingPage />} /> */}
          {/* <Route path="/services" element={() => <div>Services</div>} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
