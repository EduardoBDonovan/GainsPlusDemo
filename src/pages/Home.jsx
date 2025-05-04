const Home = () => {
  return (
    <div className="container-fluid">
      {/* Hero Section */}
      <div className="row justify-content-center mb-5">
        <div className="col-12 text-center mb-5">
          <h1 className="display-4">Welcome to Gains+</h1>
          <p className="lead">Your personal fitness tracking companion</p>
          <button className="btn btn-primary btn-lg">Get Started</button>
        </div>
      </div>

      {/* Features Section */}
      <div className="row mb-5">
        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Track Workouts</h5>
              <p className="card-text">
                Log your exercises, sets, and reps with our intuitive interface.
                Track your progress over time and see your improvements.
              </p>
              <ul className="list-unstyled">
                <li>✓ Custom workout plans</li>
                <li>✓ Exercise library</li>
                <li>✓ Progress tracking</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Set Goals</h5>
              <p className="card-text">
                Define and achieve your fitness objectives with our smart
                tracking tools. Set personal records and milestones.
              </p>
              <ul className="list-unstyled">
                <li>✓ Goal setting</li>
                <li>✓ Progress visualization</li>
                <li>✓ Achievement tracking</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Stay Motivated</h5>
              <p className="card-text">
                Get insights and stay on track with your fitness journey.
                Connect with a community of like-minded individuals.
              </p>
              <ul className="list-unstyled">
                <li>✓ Community support</li>
                <li>✓ Progress sharing</li>
                <li>✓ Achievement badges</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="row justify-content-center">
        <div className="col-12 text-center mb-4">
          <h2>What Our Users Say</h2>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-body">
              <p className="card-text">
                "Gains+ has transformed my fitness journey. The tracking
                features are amazing!"
              </p>
              <footer className="blockquote-footer">Sarah M.</footer>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-body">
              <p className="card-text">
                "Finally, a fitness app that makes sense. The progress tracking
                is exactly what I needed."
              </p>
              <footer className="blockquote-footer">John D.</footer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
