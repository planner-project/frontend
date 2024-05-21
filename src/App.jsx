import ResetStyles from "./ResetStyles";
import { Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import PlannerList from "./pages/PlannerList";
import DashBoard from "./pages/DashBoard";
import UserProfile from "./pages/UserProfile";

function App() {
  return (
    <>
      <ResetStyles />
      <Routes>
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/p_list" element={<PlannerList />} />
        <Route path="/user_profile" element={<UserProfile />} />
      </Routes>
    </>
  );
}

export default App;
