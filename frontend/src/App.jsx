import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Profiles from "./pages/Profiles";
import Projects from "./pages/Projects";
import StartUps from "./pages/StartUps";
import "./index.css";
import ConnectPage from "./pages/ConnectPage";

function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profiles" element={<Profiles />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/startups" element={<StartUps />} />
        <Route path="/connect" element={<ConnectPage />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
