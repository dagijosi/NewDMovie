import "./App.css";
import Home from "./pages/Home";
import LeftNav from "./pages/LeftNav";
import RightNav from "./pages/RightNav";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="flex h-screen">
      <div className="hidden md:block">
        <LeftNav />
      </div>
      <Routes>
        {/* Define your routes here */}
        <Route path="/" element={<Home />} />
      </Routes>
      <div className="hidden md:block">
        <RightNav />
      </div>
    </div>
  );
}

export default App;
