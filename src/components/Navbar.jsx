import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        <Link className="navbar-brand" to="/GainsPlusDemo/">
          Gains+
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
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/GainsPlusDemo/" ? "fw-bold" : ""
                }`}
                to="/GainsPlusDemo/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/GainsPlusDemo/features"
                    ? "fw-bold"
                    : ""
                }`}
                to="/GainsPlusDemo/features"
              >
                Features
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/GainsPlusDemo/pricing"
                    ? "fw-bold"
                    : ""
                }`}
                to="/GainsPlusDemo/pricing"
              >
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/GainsPlusDemo/signup" ? "fw-bold" : ""
                }`}
                to="/GainsPlusDemo/signup"
              >
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
