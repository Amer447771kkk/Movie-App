import React, { useState } from "react";

function ContactSection() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    password: "",
    repassword: "",
  });
  const [errors, setErrors] = useState({});
  const [showPass, setShowPass] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setValues((prev) => ({ ...prev, [id]: value }));
  };

  const validate = () => {
    const newErrors = {};

    const nameRegex = /^[A-Za-z\s]{3,37}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{8,15}$/;
    const ageRegex = /^(1[6-9]|[2-5][0-9]|60)$/; 
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

    if (!nameRegex.test(values.name.trim()))
      newErrors.name = "Name must be letters only (min 3 chars).";

    if (!emailRegex.test(values.email.trim()))
      newErrors.email = "Invalid email.";

    if (!phoneRegex.test(values.phone.trim()))
      newErrors.phone = "Phone 8–15 digits.";

    if (!ageRegex.test(values.age.trim())) newErrors.age = "Age 16–60 only.";

    if (!passwordRegex.test(values.password.trim()))
      newErrors.password =
        "Password 6+ chars and must contain letters & numbers.";

    if (values.repassword.trim() !== values.password.trim())
      newErrors.repassword = "Passwords do not match.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    alert("Form submitted successfully!");

    setValues({
      name: "",
      email: "",
      phone: "",
      age: "",
      password: "",
      repassword: "",
    });
    setErrors({});
  };

  return (
    <section className="contact-section" id="contact-section">
      <h2>Contact US</h2>

      <form onSubmit={handleSubmit} noValidate>
        <div className="contact-grid">
          <div className="contact-field">
            <input
              type="text"
              id="name"
              placeholder="Enter Your Name"
              value={values.name}
              onChange={handleChange}
            />
            <div className="contact-error">{errors.name}</div>
          </div>

          <div className="contact-field">
            <input
              type="email"
              id="email"
              placeholder="Enter Your Email"
              value={values.email}
              onChange={handleChange}
            />
            <div className="contact-error">{errors.email}</div>
          </div>

          <div className="contact-field">
            <input
              type="tel"
              id="phone"
              placeholder="Enter Your Phone"
              value={values.phone}
              onChange={handleChange}
            />
            <div className="contact-error">{errors.phone}</div>
          </div>

          <div className="contact-field">
            <input
              type="number"
              id="age"
              placeholder="Enter Your Age"
              value={values.age}
              onChange={handleChange}
            />
            <div className="contact-error">{errors.age}</div>
          </div>

          <div className="contact-field" style={{ position: "relative" }}>
            <input
              type={showPass ? "text" : "password"}
              id="password"
              placeholder="Enter Your Password"
              value={values.password}
              onChange={handleChange}
            />
            <span
              className="showPassIcon"
              style={{ opacity: values.password ? 1 : 0 }}
              onClick={() => setShowPass((p) => !p)}
            >
              <i
                className={`fa-solid ${showPass ? "fa-eye" : "fa-eye-slash"}`}
              ></i>
            </span>
            <div className="contact-error">{errors.password}</div>
          </div>

          <div className="contact-field">
            <input
              type="password"
              id="repassword"
              placeholder="ReEnter Password"
              value={values.repassword}
              onChange={handleChange}
            />
            <div className="contact-error">{errors.repassword}</div>
          </div>
        </div>

        <div className="contact-submit">
          <button type="submit" className="animate__animated">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}

export default ContactSection;
