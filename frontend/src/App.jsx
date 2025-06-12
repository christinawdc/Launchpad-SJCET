import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Profiles from "./pages/Profiles";
import Projects from "./pages/Projects";
import StartUps from "./pages/StartUps";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profiles" element={<Profiles />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/startups" element={<StartUps />} />
      </Routes>
    </div>
  );
}

export default App;
