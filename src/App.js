import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import BusinessSignup from "./pages/Onboarding/BusinessSignup";
import Firstboard from "./pages/Onboarding/Firstboard";
import Login from "./pages/Onboarding/Login";
import Signup from "./pages/Onboarding/Signup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Firstboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signup/business" element={<BusinessSignup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
