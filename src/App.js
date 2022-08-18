import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage/Homepage";
import BusinessSignup from "./pages/Onboarding/BusinessSignup";
import EmailVerification from "./pages/Onboarding/EmailVerification";
import Firstboard from "./pages/Onboarding/Firstboard";
import Login from "./pages/Onboarding/Login";
import RecoveryPassword from "./pages/Onboarding/RecoveryPassword";
import Signup from "./pages/Onboarding/Signup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Firstboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signup/business" element={<BusinessSignup />} />
        <Route path="/verify-email" element={<EmailVerification />} />
        <Route path="/recovery-password" element={<RecoveryPassword/>} />
        <Route path="/home" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
