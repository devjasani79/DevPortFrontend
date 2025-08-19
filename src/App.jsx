import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import AboutUs from "./pages/AboutUs";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/AboutUs" element={<AboutUs />} /> 
        {/* later you can add: 
        <Route path="/login" element={<Login />} /> 
        <Route path="/dashboard" element={<Dashboard />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
