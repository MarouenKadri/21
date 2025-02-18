import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/LoginForm";
import Register from "./components/SignupForm";
import Dashboard from "./header/Dashboard";
import CreateMission from "./header/CreateMission";
import Home from "./header/Home" ; 

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        
        <Route path="/creer-mission" element={<CreateMission />} />
      </Routes>
    </Router>
  );
};

export default App;
