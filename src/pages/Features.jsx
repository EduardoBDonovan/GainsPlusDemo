import { Link } from "react-router-dom";
import { useState } from "react";

const Features = () => {
  const [activeTab, setActiveTab] = useState("monetization");

  const features = {
    monetization: {
      title: "Monetization",
      description:
        "Earn from your fitness content with our simple 5% transaction fee",
      icon: "bi-wallet2",
      items: [
        "Subscription management",
        "Automated billing",
        "Revenue analytics",
        "Automated payouts",
        "Multiple payment methods",
      ],
    },
    content: {
      title: "Content Management",
      description:
        "Create, organize, and deliver your fitness content with ease",
      icon: "bi-camera-reels",
      items: [
        "Video content hosting",
        "Live streaming capabilities",
        "Content scheduling",
        "Bulk upload support",
        "Content analytics",
      ],
    },
    community: {
      title: "Community Engagement",
      description: "Build and nurture your fitness community",
      icon: "bi-people-fill",
      items: [
        "Member profiles",
        "Community challenges",
        "Direct messaging",
        "Engagement analytics",
        "Social features",
      ],
    },
  };

  return (
    <div className="container py-5">
      {/* Hero Section */}
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold mb-4 text-gradient">
          Powerful Features
        </h1>
        <p className="lead text-secondary">
          Everything you need to build and grow your fitness business
        </p>
      </div>

      {/* Main Features */}
      <div className="row g-4 mb-5">
        {Object.entries(features).map(([key, feature]) => (
          <div key={key} className="col-md-4">
            <div
              className={`card h-100 border-0 shadow-sm ${
                activeTab === key ? "border-primary" : ""
              }`}
              onClick={() => setActiveTab(key)}
              style={{ cursor: "pointer" }}
            >
              <div className="card-body p-4">
                <div className="text-center mb-4">
                  <i
                    className={`bi ${feature.icon} display-4 text-primary`}
                  ></i>
                </div>
                <h3 className="card-title h4 text-center mb-3">
                  {feature.title}
                </h3>
                <p className="text-center text-secondary mb-4">
                  {feature.description}
                </p>
                <ul className="list-unstyled">
                  {feature.items.map((item, index) => (
                    <li key={index} className="mb-2">
                      <i className="bi bi-check-circle-fill text-success me-2"></i>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Additional Features */}
      <div className="row g-4 mb-5">
        <div className="col-md-4">
          <div className="card h-100 border-0 shadow-sm">
            <div className="card-body p-4">
              <div className="text-center mb-4">
                <i className="bi bi-broadcast display-4 text-primary"></i>
              </div>
              <h3 className="card-title h4 text-center mb-3">Live Streaming</h3>
              <p className="text-center text-secondary mb-4">
                Connect with your audience in real-time
              </p>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  HD quality streaming
                </li>
                <li className="mb-2">
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  Interactive chat
                </li>
                <li className="mb-2">
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  Recording capabilities
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100 border-0 shadow-sm">
            <div className="card-body p-4">
              <div className="text-center mb-4">
                <i className="bi bi-graph-up-arrow display-4 text-primary"></i>
              </div>
              <h3 className="card-title h4 text-center mb-3">
                Analytics & Insights
              </h3>
              <p className="text-center text-secondary mb-4">
                Make data-driven decisions
              </p>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  Revenue tracking
                </li>
                <li className="mb-2">
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  Engagement metrics
                </li>
                <li className="mb-2">
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  Growth analytics
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100 border-0 shadow-sm">
            <div className="card-body p-4">
              <div className="text-center mb-4">
                <i className="bi bi-phone-vibrate display-4 text-primary"></i>
              </div>
              <h3 className="card-title h4 text-center mb-3">
                Mobile Experience
              </h3>
              <p className="text-center text-secondary mb-4">
                Access your business on the go
              </p>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  Mobile app access
                </li>
                <li className="mb-2">
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  Push notifications
                </li>
                <li className="mb-2">
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  Offline content
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center">
        <h2 className="display-5 fw-bold mb-3">Ready to Get Started?</h2>
        <p className="lead text-secondary mb-4">
          Join the waitlist and be among the first to launch your fitness
          business with Gains+.
        </p>
        <Link
          to="/GainsPlusDemo/express-interest"
          className="btn btn-primary btn-lg px-5"
        >
          Express Interest
        </Link>
      </div>
    </div>
  );
};

export default Features;
