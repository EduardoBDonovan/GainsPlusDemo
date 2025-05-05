import { Link } from "react-router-dom";

const Features = () => {
  const mainFeatures = [
    {
      title: "Content Monetization",
      description:
        "Transform your fitness expertise into a sustainable business with our comprehensive monetization tools.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          className="bi bi-currency-dollar text-primary"
          viewBox="0 0 16 16"
        >
          <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z" />
        </svg>
      ),
      items: [
        "Multiple subscription tiers with custom pricing",
        "Pay-per-view content options",
        "Bundled content packages",
        "Automated billing and invoicing",
        "Revenue analytics dashboard",
      ],
    },
    {
      title: "Content Management",
      description:
        "Create, organize, and deliver your fitness content with ease using our powerful content management system.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          className="bi bi-collection-play text-primary"
          viewBox="0 0 16 16"
        >
          <path d="M2 3a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 0-1h-11A.5.5 0 0 0 2 3zm2-2a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7A.5.5 0 0 0 4 1zm2.765 5.576A.5.5 0 0 0 6 7v5a.5.5 0 0 0 .765.424l4-2.5a.5.5 0 0 0 0-.848l-4-2.5z" />
          <path d="M1.5 14.5A1.5 1.5 0 0 1 0 13V6a1.5 1.5 0 0 1 1.5-1.5h13A1.5 1.5 0 0 1 16 6v7a1.5 1.5 0 0 1-1.5 1.5h-13zm13-1a.5.5 0 0 0 .5-.5V6a.5.5 0 0 0-.5-.5h-13A.5.5 0 0 0 1 6v7a.5.5 0 0 0 .5.5h13z" />
        </svg>
      ),
      items: [
        "Video and image content hosting",
        "Content scheduling and drip release",
        "Content categorization and tagging",
        "Bulk content upload and management",
        "Content preview and editing tools",
      ],
    },
    {
      title: "Community Engagement",
      description:
        "Build and nurture your fitness community with our suite of engagement tools.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          className="bi bi-people text-primary"
          viewBox="0 0 16 16"
        >
          <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
        </svg>
      ),
      items: [
        "Private messaging system",
        "Group chat and forums",
        "Live Q&A sessions",
        "Community challenges and events",
        "Member directory and networking",
      ],
    },
  ];

  const additionalFeatures = [
    {
      title: "Live Streaming",
      description:
        "Host live training sessions and interactive workshops with your community.",
      icon: "🎥",
      items: [
        "HD video streaming",
        "Screen sharing",
        "Interactive chat",
        "Recording and playback",
        "Subscriber-only streams",
      ],
    },
    {
      title: "Analytics & Insights",
      description:
        "Track your growth and optimize your content strategy with detailed analytics.",
      icon: "📊",
      items: [
        "Subscriber growth tracking",
        "Content performance metrics",
        "Revenue analytics",
        "Engagement statistics",
        "Custom report generation",
      ],
    },
    {
      title: "Mobile Experience",
      description:
        "Stay connected with your community on the go with our mobile app.",
      icon: "📱",
      items: [
        "iOS and Android apps",
        "Push notifications",
        "Offline content access",
        "Mobile content creation",
        "In-app messaging",
      ],
    },
  ];

  return (
    <div className="container py-5">
      {/* Hero Section */}
      <div className="row align-items-center mb-5">
        <div className="col-lg-6 fade-in">
          <h1 className="display-4 fw-bold mb-4 text-gradient">
            Powerful Features for Fitness Creators
          </h1>
          <p className="lead mb-4 text-secondary">
            Everything you need to build, grow, and monetize your fitness
            business. From content creation to community engagement, we've got
            you covered.
          </p>
          <div className="d-grid gap-3 d-md-flex">
            <Link
              to="/GainsPlusDemo/signup"
              className="btn btn-primary btn-lg px-5"
            >
              Get Started
            </Link>
            <Link
              to="/GainsPlusDemo/pricing"
              className="btn btn-outline-primary btn-lg px-5"
            >
              View Pricing
            </Link>
          </div>
        </div>
        <div className="col-lg-6 mt-5 mt-lg-0 fade-in">
          <div className="position-relative">
            <div className="bg-primary opacity-10 position-absolute top-0 end-0 bottom-0 start-0 rounded-4 transform-diagonal"></div>
            <img
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="Fitness Training"
              className="img-fluid rounded-4 shadow-lg transform-up"
            />
          </div>
        </div>
      </div>

      {/* Main Features */}
      <div className="row mt-5 pt-5 g-4">
        {mainFeatures.map((feature, index) => (
          <div
            key={index}
            className="col-md-6 col-lg-4 mb-4 fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="card h-100 feature-card">
              <div className="card-body p-4">
                <div className="feature-icon mb-4">{feature.icon}</div>
                <h3 className="card-title h4 mb-3">{feature.title}</h3>
                <p className="card-text text-secondary mb-4">
                  {feature.description}
                </p>
                <ul className="list-unstyled mb-0">
                  {feature.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
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
      <div className="row mt-5 pt-5">
        <div className="col-12 text-center mb-5">
          <h2 className="display-5 fw-bold mb-3">Additional Features</h2>
          <p className="lead text-secondary">More tools to help you succeed</p>
        </div>
        {additionalFeatures.map((feature, index) => (
          <div
            key={index}
            className="col-md-4 mb-4 fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="card h-100 feature-card">
              <div className="card-body p-4">
                <div className="feature-icon mb-4 display-4">
                  {feature.icon}
                </div>
                <h3 className="card-title h4 mb-3">{feature.title}</h3>
                <p className="card-text text-secondary mb-4">
                  {feature.description}
                </p>
                <ul className="list-unstyled mb-0">
                  {feature.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
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
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="row mt-5 pt-5">
        <div className="col-12 text-center">
          <h2 className="display-5 fw-bold mb-3">
            Ready to Start Your Journey?
          </h2>
          <p className="lead text-secondary mb-4">
            Join thousands of fitness creators who are already growing their
            business with Gains+.
          </p>
          <Link
            to="/GainsPlusDemo/signup"
            className="btn btn-primary btn-lg px-5"
          >
            Create Your Account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Features;
