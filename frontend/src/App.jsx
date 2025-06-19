import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Profiles from "./pages/Profiles";
import Projects from "./pages/Projects";
import StartUps from "./pages/StartUps";
import ConnectPage from "./pages/ConnectPage";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profiles" element={<Profiles />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/startups" element={<StartUps />} />
        <Route path="/connect" element={<ConnectPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
