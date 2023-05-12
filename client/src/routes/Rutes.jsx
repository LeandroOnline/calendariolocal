import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Home from "../pages/home/Home";
import Calendar from "../pages/calendar/CalendarPage";
import NotFound from "../pages/404/NotFound";
import Dashboard from "../pages/dashboard/Dashboard";
import Login from "../pages/userPages/LoginPage";
import SignUp from "../pages/userPages/SignUpPage";
import ResetPassword from "../pages/userPages/ResetPaswordPage";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/dash" element={<Dashboard />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/reset" element={<ResetPassword />} />
          <Route exact path="/calendar" element={<Calendar />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
