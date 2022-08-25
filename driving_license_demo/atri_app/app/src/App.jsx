import { Routes, Route } from "react-router-dom";
import "./styles.css";
import Home from "./pages/Home.jsx";
import Viewtest from "./pages/Viewtest.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
<Route path="/viewtest" element={<Viewtest />} />
    </Routes>
  );
}
