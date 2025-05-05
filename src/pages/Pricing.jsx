import { Link } from "react-router-dom";
import { useState } from "react";

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Free",
      fee: "10%",
      annualFee: "8%",
      description: "Perfect for fitness creators just starting their journey",
      features: [
        "Up to 50 subscribers",
        "Basic content management",
        "Community chat",
        "Basic analytics",
        "Email support",
        "Mobile app access",
      ],
      popular: false,
    },
    {
      name: "Paid",
      fee: "5%",
      annualFee: "4%",
      description: "Ideal for growing fitness businesses",
      features: [
        "Unlimited subscribers",
        "Advanced content management",
        "Live streaming",
        "Advanced analytics",
        "Priority support",
        "Custom branding",
        "API access",
        "Bulk content upload",
        "White-label solution",
        "Custom integrations",
        "Dedicated account manager",
        "24/7 support",
      ],
      popular: true,
    },
  ];

  const handleBillingChange = () => {
    setIsAnnual(!isAnnual);
  };

  return (
    <div className="container py-5">
      {/* Hero Section */}
      <div className="row justify-content-center mb-5">
        <div className="col-lg-8 text-center">
          <h1 className="display-4 fw-bold mb-4 text-gradient">
            Simple, Transparent Pricing
          </h1>
          <p className="lead text-secondary mb-4">
            We only succeed when you succeed. Our pricing is based on a small
            percentage of your subscription revenue, so you keep the majority of
            your earnings.
          </p>
          <div className="d-flex justify-content-center align-items-center mb-4">
            <span className="me-2">Monthly</span>
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                id="billingSwitch"
                checked={isAnnual}
                onChange={handleBillingChange}
              />
              <label className="form-check-label" htmlFor="billingSwitch">
                Annual (Save 20%)
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="row g-4 justify-content-center">
        {plans.map((plan, index) => (
          <div key={index} className="col-md-6 col-lg-5">
            <div
              className={`card h-100 pricing-card ${
                plan.popular ? "popular" : ""
              }`}
            >
              {plan.popular && (
                <div className="popular-badge">Most Popular</div>
              )}
              <div className="card-body p-4">
                <h3 className="card-title h4 mb-3">{plan.name}</h3>
                <div className="d-flex align-items-baseline mb-4">
                  <span className="display-4 fw-bold">
                    {isAnnual ? plan.annualFee : plan.fee}
                  </span>
                  <span className="text-secondary ms-2">platform fee</span>
                </div>
                {isAnnual && plan.fee !== "10%" && (
                  <p className="text-success mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-check-circle-fill me-2"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                    </svg>
                    Save 20% on platform fees with annual billing
                  </p>
                )}
                <p className="text-secondary mb-4">{plan.description}</p>
                <ul className="list-unstyled mb-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="mb-2 d-flex align-items-center"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-check-circle-fill text-success me-2"
                        viewBox="0 0 16 16"
                      >
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/GainsPlusDemo/signup"
                  className={`btn w-100 ${
                    plan.popular ? "btn-primary" : "btn-outline-primary"
                  }`}
                >
                  {plan.fee === "10%" ? "Get Started" : "Start Free Trial"}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Transaction Fees */}
      <div className="row mt-5 pt-5">
        <div className="col-lg-8 mx-auto">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title h4 text-center mb-4">
                Transaction Fees
              </h2>
              <p className="text-center mb-4">
                Stripe processing fees are passed through at cost:
              </p>
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Payment Method</th>
                      <th>Fee</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Credit/Debit Cards</td>
                      <td>2.9% + $0.30</td>
                    </tr>
                    <tr>
                      <td>ACH Transfer</td>
                      <td>0.8% (max $5)</td>
                    </tr>
                    <tr>
                      <td>International Cards</td>
                      <td>3.9% + $0.30</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="row mt-5 pt-5">
        <div className="col-12 text-center mb-5">
          <h2 className="display-5 fw-bold mb-3">Frequently Asked Questions</h2>
          <p className="lead text-secondary">
            Everything you need to know about our pricing
          </p>
        </div>
        <div className="col-lg-8 mx-auto">
          <div className="accordion" id="pricingFAQ">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq1"
                >
                  How do platform fees work?
                </button>
              </h2>
              <div
                id="faq1"
                className="accordion-collapse collapse show"
                data-bs-parent="#pricingFAQ"
              >
                <div className="accordion-body">
                  Our platform fee is a percentage of your subscription revenue.
                  For example, if you charge $10/month for a subscription, with
                  our 5% platform fee, you'll keep $9.50 (minus Stripe
                  processing fees). The fee is automatically calculated and
                  deducted from your earnings.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq2"
                >
                  What payment methods do you accept?
                </button>
              </h2>
              <div
                id="faq2"
                className="accordion-collapse collapse"
                data-bs-parent="#pricingFAQ"
              >
                <div className="accordion-body">
                  We accept all major credit cards, PayPal, and bank transfers
                  through Stripe. The processing fees vary by payment method and
                  are passed through at cost.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq3"
                >
                  How do payouts work?
                </button>
              </h2>
              <div
                id="faq3"
                className="accordion-collapse collapse"
                data-bs-parent="#pricingFAQ"
              >
                <div className="accordion-body">
                  Payouts are processed automatically on a rolling basis. Once
                  your balance reaches $50, we'll initiate a transfer to your
                  connected bank account within 2-3 business days. You'll
                  receive a 1099-K form if you process more than $20,000 in
                  payments or have more than 200 transactions in a calendar
                  year.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq4"
                >
                  Can I change my plan later?
                </button>
              </h2>
              <div
                id="faq4"
                className="accordion-collapse collapse"
                data-bs-parent="#pricingFAQ"
              >
                <div className="accordion-body">
                  Yes, you can switch between plans at any time. If you
                  downgrade from Paid to Free, you'll retain access to your
                  content but some features will be limited based on the Free
                  plan restrictions.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="row mt-5 pt-5">
        <div className="col-12 text-center">
          <h2 className="display-5 fw-bold mb-3">Ready to Start Earning?</h2>
          <p className="lead text-secondary mb-4">
            Join thousands of fitness creators who are already growing their
            business with Gains+.
          </p>
          <Link
            to="/GainsPlusDemo/signup"
            className="btn btn-primary btn-lg px-5 me-3"
          >
            Start Free Trial
          </Link>
          <Link
            to="/GainsPlusDemo/features"
            className="btn btn-outline-primary btn-lg px-5"
          >
            View Features
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
