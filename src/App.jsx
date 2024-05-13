import ResetStyles from "./ResetStyles";
import { Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import PlannerList from "./pages/PlannerList";

function App() {
  return (
    <>
      <ResetStyles />
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/p_list" element={<PlannerList />} />
      </Routes>
    </>
  );
}

export default App;
