import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/LoginForm";
import Register from "./components/SignupForm";
import Dashboard from "./header/Dashboard";
import CreateMission from "./header/CreateMission";
import Home from "./header/Home" ; 

import SearchPage from "./SearchPage";
import CoachList from "./components/CoachList.jsx";
import Carousel from "./components/Carousel.js";  
import MissionCard from "./components/MissionCard.js";  
import ReferralPage from "./header/ReferralPage.jsx";  

import MonCompte from "./header/MonCompte.jsx"; 
import Paiements from "./header/Paiements.jsx";   





 



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SearchPage />} />
        
        <Route path="/creer-mission" element={<CreateMission />} />
      </Routes>
    </Router>
  );
};

export default App;
