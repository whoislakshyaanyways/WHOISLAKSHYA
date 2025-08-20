import React from "react";
import "./SendMail.css"; 

export default function SendMail() {
  const onSubmit = async (event) => {
    event.preventDefault();
    console.log("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", "0e12722e-6946-474b-88ef-ceeaae024014"); // your real key

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      console.log("Form Submitted Successfully ✅");
      event.target.reset();
    } else {
      console.error("Error:", data);
    }
  };

  return (
    <div className="FormContainer">
      <div className="header">
        <h2 className="title">Let's Talk</h2>
        <p className="subtitle">
          Whether you're looking to build a new website, improve your existing
          platform, or bring a unique project to life, I'm here to help
        </p>
      </div>

      <div className="form-container">
        <form className="contact-form" onSubmit={onSubmit}>
          <label htmlFor="name" className="form-label">Full Name</label>
          <input type="text" name="name" id="name" placeholder="Your Name" className="form-input" required />

          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" name="email" id="email" placeholder="XYZ@gmail.com" className="form-input" required />

          <label htmlFor="message" className="form-label">Message</label>
          <textarea name="message" id="message" placeholder="Share your thoughts..." className="form-textarea" required></textarea>

          <button type="submit" className="form-button">
            Send
            <div class="arrow-wrapper">
              <div class="arrow"></div>
            </div>
          </button>
        </form>
      </div>
    </div>
  );
}
