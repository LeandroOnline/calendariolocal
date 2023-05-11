import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Home from "../pages/Home/Home";
import CalendarPage from "../pages/CalendarPage/CalendarPage";
import NotFound from "../pages/404/NotFound";
import Dashboard from "../pages/dashboard/Dashboard";
import Login from "../pages/LoginPage/LoginPage";
// import LoginPage from "../pages/LoginPage/LoginPage";
import SignUpPage from "../pages/LoginPage/SignUpPage";
import ResetPasswordPage from "../pages/LoginPage/ResetPaswordPage";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/dash" element={<Dashboard />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<SignUpPage />} />
          <Route exact path="/reset" element={<ResetPasswordPage />} />
          <Route exact path="/calendar" element={<CalendarPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
