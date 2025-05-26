import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import SmartDoctor from "./pages/SmartDoctor";
import Trends from "./pages/Trends";
import VisionMap from "./pages/VisionMap";
import Settings from "./pages/Settings";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/smart-doctor" element={<SmartDoctor />} />
        <Route path="/trends" element={<Trends />} />
        <Route path="/vision-map" element={<VisionMap />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
}

export default App;