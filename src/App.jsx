import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Features from "./pages/Features";
import ExpressInterest from "./pages/ExpressInterest";
import Pricing from "./pages/Pricing";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Router>
        <ScrollToTop />
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/GainsPlusDemo/" element={<Home />} />
            <Route path="/GainsPlusDemo/features" element={<Features />} />
            <Route path="/GainsPlusDemo/pricing" element={<Pricing />} />
            <Route
              path="/GainsPlusDemo/express-interest"
              element={<ExpressInterest />}
            />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
