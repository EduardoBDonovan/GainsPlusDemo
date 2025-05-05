import { useState } from "react";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    userType: "user", // 'user' or 'influencer'
    goals: [],
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        goals: e.target.checked
          ? [...prev.goals, value]
          : prev.goals.filter((goal) => goal !== value),
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card shadow">
            <div className="card-body p-5">
              <h1 className="text-center mb-4">Join Gains Plus</h1>
              <p className="text-center mb-4">
                Choose your path and start your fitness journey today
              </p>

              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="form-label">I want to join as:</label>
                  <div className="d-flex gap-3">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="userType"
                        id="userTypeUser"
                        value="user"
                        checked={formData.userType === "user"}
                        onChange={handleChange}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="userTypeUser"
                      >
                        Fitness Enthusiast
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="userType"
                        id="userTypeInfluencer"
                        value="influencer"
                        checked={formData.userType === "influencer"}
                        onChange={handleChange}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="userTypeInfluencer"
                      >
                        Fitness Influencer
                      </label>
                    </div>
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
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
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>

                {formData.userType === "user" && (
                  <div className="mb-4">
                    <label className="form-label">Your Fitness Goals:</label>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="goalWeightLoss"
                            value="weightLoss"
                            checked={formData.goals.includes("weightLoss")}
                            onChange={handleChange}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="goalWeightLoss"
                          >
                            Weight Loss
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="goalMuscleGain"
                            value="muscleGain"
                            checked={formData.goals.includes("muscleGain")}
                            onChange={handleChange}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="goalMuscleGain"
                          >
                            Muscle Gain
                          </label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="goalEndurance"
                            value="endurance"
                            checked={formData.goals.includes("endurance")}
                            onChange={handleChange}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="goalEndurance"
                          >
                            Endurance
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="goalFlexibility"
                            value="flexibility"
                            checked={formData.goals.includes("flexibility")}
                            onChange={handleChange}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="goalFlexibility"
                          >
                            Flexibility
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {formData.userType === "influencer" && (
                  <div className="mb-4">
                    <label htmlFor="socialMedia" className="form-label">
                      Social Media Links
                    </label>
                    <input
                      type="text"
                      className="form-control mb-2"
                      id="instagram"
                      placeholder="Instagram Profile"
                    />
                    <input
                      type="text"
                      className="form-control mb-2"
                      id="youtube"
                      placeholder="YouTube Channel"
                    />
                    <input
                      type="text"
                      className="form-control"
                      id="tiktok"
                      placeholder="TikTok Profile"
                    />
                  </div>
                )}

                <div className="d-grid">
                  <button type="submit" className="btn btn-primary btn-lg">
                    Create Account
                  </button>
                </div>
              </form>

              <div className="text-center mt-4">
                <p className="mb-0">
                  Already have an account?{" "}
                  <a href="#" className="text-decoration-none">
                    Log in
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
