import { Link } from "react-router-dom";
import logo from "../assets/gainsplusLogo.png";

const Footer = () => {
  return (
    <footer className="mt-5 py-5 border-top bg-white shadow-sm">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-4 col-md-6 mb-3">
            <div className="d-flex align-items-center mb-3">
              <img src={logo} alt="Gains+ Logo" height="50" className="me-2" />
              <h5 className="fw-bold mb-0 fs-4 text-gradient">Gains+</h5>
            </div>
            <p className="text-secondary">
              Empowering fitness creators to build sustainable businesses
              through innovative monetization tools and community engagement
              features.
            </p>
          </div>
          <div className="col-lg-2 col-md-6 mb-3">
            <h5 className="fw-bold mb-3 text-dark">Platform</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link
                  to="/GainsPlusDemo/features"
                  className="text-decoration-none text-secondary hover-primary"
                >
                  Features
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/GainsPlusDemo/pricing"
                  className="text-decoration-none text-secondary hover-primary"
                >
                  Pricing
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/GainsPlusDemo/express-interest"
                  className="text-decoration-none text-secondary hover-primary"
                >
                  Express Interest
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-6 mb-3">
            <h5 className="fw-bold mb-3 text-dark">Legal</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link
                  to="/GainsPlusDemo/terms"
                  className="text-decoration-none text-secondary hover-primary"
                >
                  Terms
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/GainsPlusDemo/privacy"
                  className="text-decoration-none text-secondary hover-primary"
                >
                  Privacy
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-6">
            <h5 className="fw-bold mb-3 text-dark">Join the Waitlist</h5>
            <p className="text-secondary mb-4">
              Be among the first to experience Gains+ when we launch.
            </p>
            <Link
              to="/GainsPlusDemo/express-interest"
              className="btn btn-primary shadow-sm"
            >
              Express Interest
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
