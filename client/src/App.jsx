import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import "./reset.css";
import "dayjs/locale/es";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import CalendarPage from "./pages/CalendarPage/CalendarPage";
import Oficios from "./pages/Oficios/Oficios"

const App = () => {
  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="es">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/calendar" element={<CalendarPage />} />
            <Route exact path="/oficios" element={<Oficios />} />
          </Routes>
        </BrowserRouter>
      </LocalizationProvider>
    </div>
  );
};

export default App;
