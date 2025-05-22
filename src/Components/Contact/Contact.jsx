import React, { useState } from "react";
import "./Contact.css";

// Import images
import themePattern from "../../assets/theme_pattern.svg";
import mailIcon from "../../assets/mail_icon.svg";
import locationIcon from "../../assets/location_icon.svg";

const Contact = () => {
  const [messageSent, setMessageSent] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();

    try {
      const formData = new FormData(event.target);
      formData.append("access_key", "cd1aa3e9-a4c6-4c47-9499-ad5379b2a826");

      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      }).then((res) => res.json());

      if (res.success) {
        console.log("Success", res);
        setMessageSent(true);
        event.target.reset();
      }
    } catch (error) {
      console.error("Form submission error:", error);
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={themePattern} alt="Theme Pattern" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's Connect</h1>
          <p>
            Feel free to reach out for collaborations, freelance opportunities, or just to say hello. I'm always open to discussing new ideas, creative projects, or anything tech-related.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mailIcon} alt="Mail Icon" />
              <p>anshitagarwal1087@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={locationIcon} alt="Location Icon" />
              <p>New Delhi, India</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label>Your Name</label>
          <input type="text" name="name" placeholder="Enter Your Name" required />
          <label>Your Email</label>
          <input type="email" name="email" placeholder="Enter Your Email" required />
          <label>Write Your Message Here</label>
          <input type="text" name="message" placeholder="Enter Your Message" required />
          <button type="submit" className="contact-submit">Send Message</button>
          {messageSent && <p className="success-message">Message sent successfully!</p>}
        </form>
      </div>
    </div>
  );
};

export default Contact;
