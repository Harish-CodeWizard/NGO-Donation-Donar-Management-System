import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
       
      </Routes>
    </Router>
  );
}

export default App;

// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Login from "./pages/LoginPage/Login";
// import Dashboard from "./pages/DashboardPage/Dashboard";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route path="/dashboard" element={<Dashboard/>} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
