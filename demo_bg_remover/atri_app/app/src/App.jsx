import { Routes, Route } from "react-router-dom";
import "./styles.css";
import Home from "./pages/Home.jsx";
import BackgroundChange from "./pages/Background-change.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
<Route path="/background-change" element={<BackgroundChange />} />
    </Routes>
  );
}
