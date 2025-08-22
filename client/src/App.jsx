import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import ProgramsShowcase from "./pages/ProgramsShowcase/ProgramsShowcase";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/programs" element={<ProgramsShowcase />} />
      </Routes>
    </Router>
  );
}

export default App;
