import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mt-5 py-5 border-top">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-4 col-md-6 mb-3">
            <h5 className="fw-bold mb-3">Gains Plus</h5>
            <p className="text-secondary">
              Empowering fitness creators to build sustainable businesses
              through innovative monetization tools and community engagement
              features.
            </p>
          </div>
          <div className="col-lg-2 col-md-6 mb-3">
            <h5 className="fw-bold mb-3">Platform</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link
                  to="/GainsPlusDemo/features"
                  className="text-decoration-none text-secondary"
                >
                  Features
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/GainsPlusDemo/pricing"
                  className="text-decoration-none text-secondary"
                >
                  Pricing
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/GainsPlusDemo/signup"
                  className="text-decoration-none text-secondary"
                >
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-6 mb-3">
            <h5 className="fw-bold mb-3">Legal</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link
                  to="/GainsPlusDemo/terms"
                  className="text-decoration-none text-secondary"
                >
                  Terms
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/GainsPlusDemo/privacy"
                  className="text-decoration-none text-secondary"
                >
                  Privacy
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-6">
            <h5 className="fw-bold mb-3">Stay Updated</h5>
            <p className="text-secondary mb-4">
              Get the latest updates about new features and platform news.
            </p>
            <div className="input-group">
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
                aria-label="Email for newsletter"
              />
              <button className="btn btn-primary" type="button">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
