import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./reset.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import CalendarPage from "./pages/CalendarPage/CalendarPage";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/calendar" element={<CalendarPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
