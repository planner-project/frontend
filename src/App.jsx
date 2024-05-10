import ResetStyles from "./ResetStyles";
import { Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import DashBoard from "./pages/DashBoard";

function App() {
  return (
    <>
      <ResetStyles />
      <Routes>
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
