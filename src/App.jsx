import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Service from "./Service";
import Strategic from "./StrategicAllies";
import Execution from "./Execution";
import SEO from "./SEO"; // Component for SEO Solutions
import DigitalAds from "./DigitalAds"; // Component for Digital Ads Solutions
import WebsiteTech from "./WebsiteTech"; // Component for Website & Tech Solutions
import SocialMediaMarketing from "./SocialMediaMarketing"; // Component for Social Media Marketing
import LeadGeneration from "./LeadGeneration"; // Component for Lead Generation
import MarketingConsulting from "./MarketingConsulting"; // Component for Marketing Consulting
import Branding from "./Branding"; // Component for Branding Solutions

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/service" element={<Service />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/strategic" element={<Strategic />} />
        <Route exact path="/execution" element={<Execution />} />
        <Route exact path="/seo" element={<SEO />} />
        <Route exact path="/digital-ads" element={<DigitalAds />} />
        <Route exact path="/website-tech" element={<WebsiteTech />} />
        <Route exact path="/social-media-marketing" element={<SocialMediaMarketing />} />
        <Route exact path="/lead-generation" element={<LeadGeneration />} />
        <Route exact path="/marketing-consulting" element={<MarketingConsulting />} />
        <Route exact path="/branding-solutions" element={<Branding />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};

export default App;
