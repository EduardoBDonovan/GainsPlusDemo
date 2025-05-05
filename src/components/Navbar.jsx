import { Link, useLocation } from "react-router-dom";
import { useRef } from "react";
import logo from "../assets/gainsplusLogo.png";

const Navbar = () => {
  const location = useLocation();
  const navbarCollapse = useRef(null);

  const handleLinkClick = () => {
    // Close the navbar when a link is clicked
    const bsCollapse = new bootstrap.Collapse(navbarCollapse.current);
    bsCollapse.hide();
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div className="container">
        <Link
          className="navbar-brand d-flex align-items-center"
          to="/GainsPlusDemo/"
        >
          <img src={logo} alt="Gains+ Logo" height="50" className="me-2" />
          <span className="fs-4 fw-bold text-gradient">Gains+</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse"
          id="navbarNav"
          ref={navbarCollapse}
        >
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/GainsPlusDemo/"
                    ? "fw-bold text-primary"
                    : "text-dark"
                }`}
                to="/GainsPlusDemo/"
                onClick={handleLinkClick}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/GainsPlusDemo/features"
                    ? "fw-bold text-primary"
                    : "text-dark"
                }`}
                to="/GainsPlusDemo/features"
                onClick={handleLinkClick}
              >
                Features
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/GainsPlusDemo/pricing"
                    ? "fw-bold text-primary"
                    : "text-dark"
                }`}
                to="/GainsPlusDemo/pricing"
                onClick={handleLinkClick}
              >
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/GainsPlusDemo/express-interest"
                    ? "fw-bold text-primary"
                    : "text-dark"
                }`}
                to="/GainsPlusDemo/express-interest"
                onClick={handleLinkClick}
              >
                Express Interest
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
