import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/LoginForm";
import Register from "./components/SignupForm";
import Dashboard from "./header/Dashboard";
import CreateMission from "./header/CreateMission";
import Home from "./header/Home" ; 
import MissionList from "./MissionList.js";   
import FreelancerProfile from "./components/FreelancerProfile";

import SearchPage from "./SearchPage";
import CoachList from "./CoachList";
 
import Carousel from "./Carousel.js";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MissionList />} />
        
        <Route path="/creer-mission" element={<CreateMission />} />
      </Routes>
    </Router>
  );
};

export default App;
