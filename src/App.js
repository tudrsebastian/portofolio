import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import Hero from "./Components/Hero";
import Footer from "./Components/Footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Hero />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
