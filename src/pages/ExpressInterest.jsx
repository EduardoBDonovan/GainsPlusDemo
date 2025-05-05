import { useState } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";

const ExpressInterest = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    businessType: "",
    currentSubscribers: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          business_type: formData.businessType,
          current_subscribers: formData.currentSubscribers,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      if (response.status === 200) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          businessType: "",
          currentSubscribers: "",
          message: "",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card shadow">
            <div className="card-body p-5">
              <h1 className="text-center mb-4">Express Interest</h1>
              <p className="text-center mb-4 text-secondary">
                Join the waitlist for Gains+ and be among the first to know when
                we launch. We'll keep you updated on our progress and notify you
                when you can start building your fitness business with us.
              </p>

              {submitStatus === "success" ? (
                <div className="alert alert-success text-center">
                  <h4 className="alert-heading">
                    Thank you for your interest!
                  </h4>
                  <p>
                    We've received your information and will be in touch soon.
                    In the meantime, feel free to explore our{" "}
                    <Link to="/GainsPlusDemo/features">features</Link> and{" "}
                    <Link to="/GainsPlusDemo/pricing">pricing</Link>.
                  </p>
                </div>
              ) : submitStatus === "error" ? (
                <div className="alert alert-danger text-center">
                  <h4 className="alert-heading">Something went wrong</h4>
                  <p>
                    We couldn't process your request. Please try again or
                    contact us directly at support@gainsplus.com
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="needs-validation"
                  noValidate
                >
                  <div className="mb-4">
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

                  <div className="mb-4">
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

                  <div className="mb-4">
                    <label htmlFor="businessType" className="form-label">
                      Type of Fitness Business
                    </label>
                    <select
                      className="form-select"
                      id="businessType"
                      name="businessType"
                      value={formData.businessType}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select your business type</option>
                      <option value="personal_trainer">Personal Trainer</option>
                      <option value="fitness_influencer">
                        Fitness Influencer
                      </option>
                      <option value="gym_owner">Gym Owner</option>
                      <option value="nutrition_coach">Nutrition Coach</option>
                      <option value="yoga_instructor">Yoga Instructor</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="mb-4">
                    <label htmlFor="currentSubscribers" className="form-label">
                      Current Number of Subscribers/Followers
                    </label>
                    <select
                      className="form-select"
                      id="currentSubscribers"
                      name="currentSubscribers"
                      value={formData.currentSubscribers}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select your current reach</option>
                      <option value="0-1000">0-1,000</option>
                      <option value="1000-5000">1,000-5,000</option>
                      <option value="5000-10000">5,000-10,000</option>
                      <option value="10000-50000">10,000-50,000</option>
                      <option value="50000+">50,000+</option>
                    </select>
                  </div>

                  <div className="mb-4">
                    <label htmlFor="message" className="form-label">
                      Additional Information
                    </label>
                    <textarea
                      className="form-control"
                      id="message"
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us more about your fitness business and what you're looking for in a platform"
                    ></textarea>
                  </div>

                  <div className="d-grid">
                    <button
                      type="submit"
                      className="btn btn-primary btn-lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Submitting..." : "Submit Interest"}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpressInterest;
