import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import "./reset.css";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const App = () => {
  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </LocalizationProvider>
    </div>
  );
};

export default App;
