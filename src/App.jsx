import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Signup from "./pages/Signup";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Router>
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/GainsPlusDemo/" element={<Home />} />
            <Route path="/GainsPlusDemo/about" element={<About />} />
            <Route path="/GainsPlusDemo/signup" element={<Signup />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
