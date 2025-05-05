import { Link } from "react-router-dom";
import { useState } from "react";

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Free",
      price: "0",
      annualPrice: "0",
      period: "month",
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
      price: "29.99",
      annualPrice: "287.90", // 29.99 * 12 * 0.8 (20% discount)
      period: "month",
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
            Choose the perfect plan for your fitness business. All plans include
            our core features and are designed to scale with your growth.
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
                    ${isAnnual ? plan.annualPrice : plan.price}
                  </span>
                  <span className="text-secondary ms-2">
                    /{isAnnual ? "year" : plan.period}
                  </span>
                </div>
                {isAnnual && plan.price !== "0" && (
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
                    Save 20% with annual billing
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
                  {plan.price === "0" ? "Get Started" : "Start Free Trial"}
                </Link>
              </div>
            </div>
          </div>
        ))}
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
                  What's included in the Free plan?
                </button>
              </h2>
              <div
                id="faq1"
                className="accordion-collapse collapse show"
                data-bs-parent="#pricingFAQ"
              >
                <div className="accordion-body">
                  The Free plan includes all essential features to get started,
                  including basic content management, community chat, analytics,
                  and mobile app access. You can upgrade to the Paid plan
                  anytime to unlock advanced features and remove subscriber
                  limits.
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
                  We accept all major credit cards, PayPal, and bank transfers.
                  Enterprise customers can also request custom payment terms.
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
                  Is there a free trial for the Paid plan?
                </button>
              </h2>
              <div
                id="faq3"
                className="accordion-collapse collapse"
                data-bs-parent="#pricingFAQ"
              >
                <div className="accordion-body">
                  Yes, we offer a 14-day free trial for the Paid plan. No credit
                  card required to start. You can cancel anytime during the
                  trial period.
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
                  Can I switch between Free and Paid plans?
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
          <h2 className="display-5 fw-bold mb-3">Still have questions?</h2>
          <p className="lead text-secondary mb-4">
            Our team is here to help you choose the right plan for your
            business.
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
