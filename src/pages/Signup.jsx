const Signup = () => {
  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8">
          <div className="row">
            {/* Signup Form */}
            <div className="col-md-6 mb-4">
              <div className="card">
                <div className="card-body">
                  <h1 className="card-title text-center mb-4">
                    Create Account
                  </h1>
                  <form>
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">
                        Full Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">
                        Email address
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="password" className="form-label">
                        Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Create a password"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="confirmPassword" className="form-label">
                        Confirm Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="confirmPassword"
                        placeholder="Confirm your password"
                      />
                    </div>
                    <div className="mb-3 form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="terms"
                      />
                      <label className="form-check-label" htmlFor="terms">
                        I agree to the Terms of Service and Privacy Policy
                      </label>
                    </div>
                    <div className="d-grid gap-2">
                      <button type="submit" className="btn btn-primary">
                        Create Account
                      </button>
                    </div>
                    <div className="text-center mt-3">
                      <p className="mb-0">
                        Already have an account? <a href="/login">Log in</a>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            {/* Benefits Section */}
            <div className="col-md-6 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h2 className="card-title mb-4">Why Join Gains+?</h2>
                  <ul className="list-unstyled">
                    <li className="mb-4">
                      <h5>✓ Personalized Workout Plans</h5>
                      <p>
                        Get customized workout routines based on your goals and
                        fitness level.
                      </p>
                    </li>
                    <li className="mb-4">
                      <h5>✓ Progress Tracking</h5>
                      <p>
                        Monitor your improvements with detailed analytics and
                        visualizations.
                      </p>
                    </li>
                    <li className="mb-4">
                      <h5>✓ Community Support</h5>
                      <p>
                        Connect with other fitness enthusiasts and share your
                        journey.
                      </p>
                    </li>
                    <li className="mb-4">
                      <h5>✓ Expert Guidance</h5>
                      <p>
                        Access professional tips and advice to optimize your
                        training.
                      </p>
                    </li>
                  </ul>
                  <div className="mt-4">
                    <h5>Ready to start your fitness journey?</h5>
                    <p>
                      Join thousands of users who are already achieving their
                      fitness goals with Gains+.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
