import { Link } from "react-router-dom";
import { useState } from "react";

const Home = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const testimonials = [
    {
      quote:
        "Gains Plus has transformed how I monetize my fitness content. The platform is intuitive and my subscribers love the exclusive content.",
      author: "Sarah Johnson",
      role: "Fitness Influencer, 100K+ followers",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    },
    {
      quote:
        "The analytics tools help me understand what content resonates most with my audience. It's been a game-changer for my business.",
      author: "Mike Chen",
      role: "Personal Trainer & Content Creator",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    },
    {
      quote:
        "Finally, a platform that makes it easy to connect with my community and earn a stable income from my fitness expertise.",
      author: "Alex Rodriguez",
      role: "Yoga Instructor & Wellness Coach",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    },
  ];

  return (
    <div className="container py-5">
      {/* Hero Section */}
      <div className="row align-items-center mb-5">
        <div className="col-lg-6 fade-in">
          <h1 className="display-4 fw-bold mb-4 text-gradient">
            Monetize Your Fitness Brand
          </h1>
          <p className="lead mb-4 text-secondary">
            Turn your passion into profit. Create premium content, build your
            community, and grow your fitness business on Gains+.
          </p>
          <div className="d-grid gap-3 d-md-flex">
            <Link
              to="/GainsPlusDemo/signup"
              className="btn btn-primary btn-lg px-5"
            >
              Start Earning Today
            </Link>
            <Link
              to="/GainsPlusDemo/about"
              className="btn btn-outline-primary btn-lg px-5"
            >
              Learn More
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

      {/* Features Section */}
      <div className="row mt-5 pt-5 g-4">
        <div className="col-12 text-center mb-5">
          <h2 className="section-title">Why Choose Gains+</h2>
          <p className="section-subtitle">
            Everything you need to succeed as a fitness creator
          </p>
        </div>
        <div className="col-md-3 mb-4 fade-in">
          <div className="card h-100 feature-card">
            <div className="card-body d-flex flex-column">
              <div className="feature-icon mb-4">
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
              </div>
              <h3 className="card-title h5 mb-3">Monetization</h3>
              <p className="card-text text-secondary">
                Keep up to 95% of your subscription revenue with our low
                platform fees. Create subscription tiers and offer exclusive
                content to grow your income.
              </p>
            </div>
          </div>
        </div>
        <div
          className="col-md-3 mb-4 fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          <div className="card h-100 feature-card">
            <div className="card-body d-flex flex-column">
              <div className="feature-icon mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="bi bi-chat-dots text-primary"
                  viewBox="0 0 16 16"
                >
                  <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                  <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 0 1-.524 2.318l-.003.011a10.722 10.722 0 0 1-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 0 0 .693-.125zm.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a10.97 10.97 0 0 0 .398-2z" />
                </svg>
              </div>
              <h3 className="card-title h5 mb-3">Messaging</h3>
              <p className="card-text text-secondary">
                Connect with your community through 1-on-1 chats and group
                discussions.
              </p>
            </div>
          </div>
        </div>
        <div
          className="col-md-3 mb-4 fade-in"
          style={{ animationDelay: "0.4s" }}
        >
          <div className="card h-100 feature-card">
            <div className="card-body d-flex flex-column">
              <div className="feature-icon mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="bi bi-graph-up text-primary"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M0 0h1v15h15v1H0V0Zm14.817 3.113a.5.5 0 0 1 .07.704l-4.5 5.5a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61 4.15-5.073a.5.5 0 0 1 .704-.07Z"
                  />
                </svg>
              </div>
              <h3 className="card-title h5 mb-3">Analytics</h3>
              <p className="card-text text-secondary">
                Track subscriber growth, engagement metrics, and revenue
                insights.
              </p>
            </div>
          </div>
        </div>
        <div
          className="col-md-3 mb-4 fade-in"
          style={{ animationDelay: "0.6s" }}
        >
          <div className="card h-100 feature-card">
            <div className="card-body d-flex flex-column">
              <div className="feature-icon mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="bi bi-phone text-primary"
                  viewBox="0 0 16 16"
                >
                  <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" />
                  <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                </svg>
              </div>
              <h3 className="card-title h5 mb-3">Mobile App</h3>
              <p className="card-text text-secondary">
                Manage your content and engage with subscribers on the go.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="row mt-5 pt-5">
        <div className="col-12">
          <h2 className="section-title text-center">What Creators Say</h2>
          <div className="card border-0 shadow-lg mt-5">
            <div className="card-body p-0">
              <div
                id="testimonialCarousel"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  {testimonials.map((testimonial, index) => (
                    <div
                      key={index}
                      className={`carousel-item ${
                        index === activeTestimonial ? "active" : ""
                      }`}
                    >
                      <div className="text-center p-5">
                        <img
                          src={testimonial.image}
                          alt={testimonial.author}
                          className="rounded-circle mb-4"
                          style={{
                            width: "80px",
                            height: "80px",
                            objectFit: "cover",
                          }}
                        />
                        <p className="lead mb-4">"{testimonial.quote}"</p>
                        <h5 className="mb-1 fw-bold">{testimonial.author}</h5>
                        <p className="text-secondary">{testimonial.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  onClick={() =>
                    setActiveTestimonial(
                      (prev) =>
                        (prev - 1 + testimonials.length) % testimonials.length
                    )
                  }
                >
                  <span className="carousel-control-prev-icon"></span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  onClick={() =>
                    setActiveTestimonial(
                      (prev) => (prev + 1) % testimonials.length
                    )
                  }
                >
                  <span className="carousel-control-next-icon"></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
