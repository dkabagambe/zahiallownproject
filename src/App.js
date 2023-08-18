import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsApp from "./components/WhatsApp";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Services from "./pages/Services";
import Contact from "./pages/Contact ";
import AboutUs from "./pages/AboutUs";
import Gallery from "./pages/Gallery";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/clients" element={<Clients />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="*" element={<NotFoundPage />} /> */}
        </Routes>
        <WhatsApp />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
