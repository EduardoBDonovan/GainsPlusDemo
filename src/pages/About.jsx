const About = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-8 mx-auto text-center">
          <h1 className="display-4 mb-4">Platform Features</h1>
          <p className="lead mb-5">
            Everything you need to build and grow your fitness business
          </p>
        </div>
      </div>

      {/* Subscription Monetization */}
      <div className="row mb-5">
        <div className="col-md-6 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h2 className="card-title h4">Subscription Monetization</h2>
              <p className="card-text">
                Create multiple subscription tiers with different benefits:
              </p>
              <ul className="list-unstyled">
                <li className="mb-2">✓ Monthly subscription options</li>
                <li className="mb-2">✓ Custom discount codes</li>
                <li className="mb-2">✓ Free trial periods</li>
                <li className="mb-2">✓ Exclusive content access</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <img
            src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
            alt="Subscription Dashboard"
            className="img-fluid rounded shadow"
          />
        </div>
      </div>

      {/* Content Gating */}
      <div className="row mb-5">
        <div className="col-md-6 mb-4 order-md-2">
          <div className="card h-100">
            <div className="card-body">
              <h2 className="card-title h4">Content Gating</h2>
              <p className="card-text">
                Control access to your premium content:
              </p>
              <ul className="list-unstyled">
                <li className="mb-2">✓ Video uploads with paywall</li>
                <li className="mb-2">✓ Image galleries</li>
                <li className="mb-2">✓ Downloadable resources</li>
                <li className="mb-2">✓ Content scheduling</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4 order-md-1">
          <img
            src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
            alt="Content Management"
            className="img-fluid rounded shadow"
          />
        </div>
      </div>

      {/* Direct Messaging */}
      <div className="row mb-5">
        <div className="col-md-6 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h2 className="card-title h4">Direct Messaging</h2>
              <p className="card-text">Connect with your community:</p>
              <ul className="list-unstyled">
                <li className="mb-2">✓ 1-on-1 private chats</li>
                <li className="mb-2">✓ Group discussions</li>
                <li className="mb-2">✓ File sharing</li>
                <li className="mb-2">✓ Message scheduling</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <img
            src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
            alt="Messaging Interface"
            className="img-fluid rounded shadow"
          />
        </div>
      </div>

      {/* Livestreams */}
      <div className="row mb-5">
        <div className="col-md-6 mb-4 order-md-2">
          <div className="card h-100">
            <div className="card-body">
              <h2 className="card-title h4">Livestreams</h2>
              <p className="card-text">Host interactive sessions:</p>
              <ul className="list-unstyled">
                <li className="mb-2">✓ Live fitness classes</li>
                <li className="mb-2">✓ Q&A sessions</li>
                <li className="mb-2">✓ Real-time chat</li>
                <li className="mb-2">✓ Session recording</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4 order-md-1">
          <img
            src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
            alt="Livestream Interface"
            className="img-fluid rounded shadow"
          />
        </div>
      </div>

      {/* Analytics */}
      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h2 className="card-title h4">Engagement Analytics</h2>
              <p className="card-text">Track your growth and performance:</p>
              <ul className="list-unstyled">
                <li className="mb-2">✓ Subscriber growth</li>
                <li className="mb-2">✓ Content performance</li>
                <li className="mb-2">✓ Revenue analytics</li>
                <li className="mb-2">✓ Audience insights</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <img
            src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
            alt="Analytics Dashboard"
            className="img-fluid rounded shadow"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
