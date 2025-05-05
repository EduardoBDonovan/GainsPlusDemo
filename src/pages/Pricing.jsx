import { Link } from "react-router-dom";

const Pricing = () => {
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold mb-4 text-gradient">Simple Pricing</h1>
        <p className="lead text-secondary">
          We only succeed when you succeed. Our pricing is based on a small
          percentage of your subscription revenue.
        </p>
      </div>

      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card border-0 shadow-lg">
            <div className="card-body p-5">
              <div className="text-center mb-4">
                <h2 className="display-5 fw-bold mb-3">Transaction Fee</h2>
                <div className="display-1 fw-bold text-primary mb-3">5%</div>
                <p className="lead text-secondary">
                  of your subscription revenue
                </p>
              </div>

              <div className="row g-4 mb-4">
                <div className="col-md-6">
                  <div className="card h-100 border-0 shadow-sm">
                    <div className="card-body p-4">
                      <h3 className="card-title h4 mb-3">What's Included</h3>
                      <ul className="list-unstyled">
                        <li className="mb-2">
                          <i className="bi bi-check-circle-fill text-success me-2"></i>
                          Unlimited subscribers
                        </li>
                        <li className="mb-2">
                          <i className="bi bi-check-circle-fill text-success me-2"></i>
                          Video content hosting
                        </li>
                        <li className="mb-2">
                          <i className="bi bi-check-circle-fill text-success me-2"></i>
                          Live streaming
                        </li>
                        <li className="mb-2">
                          <i className="bi bi-check-circle-fill text-success me-2"></i>
                          Community features
                        </li>
                        <li className="mb-2">
                          <i className="bi bi-check-circle-fill text-success me-2"></i>
                          Analytics dashboard
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="card h-100 border-0 shadow-sm">
                    <div className="card-body p-4">
                      <h3 className="card-title h4 mb-3">Payment Processing</h3>
                      <p className="text-secondary mb-3">
                        Stripe processing fees are passed through at cost:
                      </p>
                      <ul className="list-unstyled">
                        <li className="mb-2">
                          <i className="bi bi-credit-card text-primary me-2"></i>
                          Credit/Debit Cards: 2.9% + $0.30
                        </li>
                        <li className="mb-2">
                          <i className="bi bi-bank text-primary me-2"></i>
                          ACH Transfer: 0.8% (max $5)
                        </li>
                        <li className="mb-2">
                          <i className="bi bi-globe text-primary me-2"></i>
                          International Cards: 3.9% + $0.30
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <Link
                  to="/GainsPlusDemo/express-interest"
                  className="btn btn-primary btn-lg px-5"
                >
                  Express Interest
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
