import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import AdminDashboard from "./Pages/AdminDashboard";
import AdminSignup from "./Pages/AdminSignup";
import AdminLogin from "./Pages/AdminLogin";


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={ <AdminLogin />} />
        <Route path="/signup" element={<AdminSignup />} />
        <Route exact path="/admindasboard" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
