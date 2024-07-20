import React from "react";
import ReactDOM from "react-dom/client";
import "./Assets/Styles/Styles.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Defaults/Layout";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import EPartner from "./Components/EPartner/EPartner";
import Claim from "./Components/Claim/Claim";
import Career from "./Components/Careers/Career";
import Login from "./Components/Login/Login";
import Error from "./Defaults/Error/Error";
import LifeInsurance from "./Components/Insurances/Life-Insurance/Life-Insurance";
import CarInsurance from "./Components/Insurances/Car-Insurance/Car-Insurance";
import Contact from "./Components/Contact/Contact";
// ?? Insurance

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="career" element={<Career />} />
          <Route path="login" element={<Login />} />
          <Route path="contact" element={<Contact />} />
          <Route path="claim" element={<Claim />} />
          <Route path="epartner" element={<EPartner />} />
          {/* Add more routes as needed */}

          {/* *** Insurances *** */}
          <Route path="life-insurance" element={<LifeInsurance />} />
          <Route path="car-insurance" element={<CarInsurance />} />

          {/* Default Pages */}
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(<App />);
