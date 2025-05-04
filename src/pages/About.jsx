const About = () => {
  return (
    <div className="container-fluid">
      {/* Mission Section */}
      <div className="row justify-content-center mb-5">
        <div className="col-12 text-center mb-5">
          <h1 className="display-4">About Gains+</h1>
          <p className="lead">
            Empowering your fitness journey with smart technology
          </p>
        </div>
      </div>

      {/* Company Info Section */}
      <div className="row mb-5">
        <div className="col-md-6 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Our Mission</h5>
              <p className="card-text">
                Gains+ is dedicated to helping individuals achieve their fitness
                goals through comprehensive tracking and personalized insights.
                We believe that everyone deserves access to tools that make
                fitness tracking simple and effective.
              </p>
              <h5 className="mt-4">Our Vision</h5>
              <p className="card-text">
                To become the leading fitness tracking platform that helps
                millions of people worldwide achieve their health and fitness
                goals through data-driven insights and community support.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Features</h5>
              <ul className="list-unstyled">
                <li className="mb-3">
                  <h6>✓ Workout Tracking</h6>
                  <p>
                    Comprehensive exercise logging with detailed metrics and
                    progress visualization
                  </p>
                </li>
                <li className="mb-3">
                  <h6>✓ Progress Monitoring</h6>
                  <p>
                    Track your improvements with detailed analytics and
                    performance metrics
                  </p>
                </li>
                <li className="mb-3">
                  <h6>✓ Goal Setting</h6>
                  <p>
                    Set and achieve your fitness objectives with our smart goal
                    tracking system
                  </p>
                </li>
                <li className="mb-3">
                  <h6>✓ Performance Analytics</h6>
                  <p>
                    Get insights into your training patterns and optimize your
                    workouts
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="row justify-content-center">
        <div className="col-12 text-center mb-4">
          <h2>Our Team</h2>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Alex Johnson</h5>
              <p className="text-muted">Founder & CEO</p>
              <p className="card-text">
                Fitness enthusiast and tech entrepreneur with 10+ years of
                experience in health tech.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Sarah Chen</h5>
              <p className="text-muted">Head of Product</p>
              <p className="card-text">
                Expert in user experience and product development in the fitness
                industry.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Michael Rodriguez</h5>
              <p className="text-muted">Lead Developer</p>
              <p className="card-text">
                Full-stack developer passionate about creating innovative
                fitness solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
