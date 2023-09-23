import React, { useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";
import axios from "axios";

const Contact: React.FC = () => {
  const [emailInput, setEmail] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    error_list: [],
  });

  const handleInput = (e: {
    persist: () => void;
    target: { name: any; value: any };
  }) => {
    e.persist();
    setEmail({ ...emailInput, [e.target.name]: e.target.value });
  };

  const sendEmail = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const data = {
      name: emailInput.name,
      email: emailInput.email,
      subject: emailInput.subject,
      message: emailInput.message,
    };

    const form = document.querySelector("form");
    const sendButton = document.getElementById(
      "send-button"
    ) as HTMLButtonElement;
    const statusMessage = document.getElementById("status-message");

    if (sendButton && statusMessage && form) {
      // Disable the button while processing
      sendButton.disabled = true;

      // Create a loader container
      const loaderContainer = document.createElement("div");
      loaderContainer.className = "loader-container";

      // Create the loader
      const loader = document.createElement("div");
      loader.className = "loader";

      // Append the loader to the container
      loaderContainer.appendChild(loader);

      // Replace the button content with the loader
      sendButton.innerHTML = "";
      sendButton.appendChild(loaderContainer);

      // console.log(response);+
      axios.post(`/api/sendmail`, data).then((res) => {
        if (res.data.status === 200) {
          sendButton.textContent = "Sent";
          statusMessage.textContent = "Email sent successfully!";
          statusMessage.style.color = "green";
          statusMessage.style.display = "block";
          form.reset();
        } else {
          setEmail({
            ...emailInput,
            error_list: res.data.validation_errors,
          });

          sendButton.textContent = "Send";
          statusMessage.textContent = "Error sending email. Please try again.";
          statusMessage.style.color = "red";
          statusMessage.style.display = "block";
        }
      });
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact me</title>
        <meta
          name="description"
          content="Get in touch with me for my services' concerning."
        />
      </Helmet>
      <NavBar />
      <div className="contact-dv">
        <h3 className="contact-h mb-5">Contact Me</h3>
        <form onSubmit={sendEmail} action="/contact" method="POST">
          <div className="input-group flex-nowrap mb-3">
            <span className="input-group-text" id="addon-wrapping">
              Name
            </span>
            <input
              type="text"
              name="name"
              className="form-control"
              aria-label="Username"
              aria-describedby="addon-wrapping"
              onChange={handleInput}
              value={emailInput.name}
              required
            />
          </div>

          <div className="input-group flex-nowrap mb-3">
            <span className="input-group-text" id="addon-wrapping">
              @
            </span>
            <input
              type="text"
              name="email"
              className="form-control"
              aria-label="Username"
              aria-describedby="addon-wrapping"
              onChange={handleInput}
              value={emailInput.email}
              required
            />
          </div>

          <div className="input-group flex-nowrap mb-3">
            <span className="input-group-text" id="addon-wrapping">
              Subject
            </span>
            <input
              type="text"
              name="subject"
              className="form-control"
              aria-label="Username"
              aria-describedby="addon-wrapping"
              onChange={handleInput}
              value={emailInput.subject}
              required
            />
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text">Message</span>
            <textarea
              className="form-control"
              name="message"
              aria-label="With textarea"
              rows={4}
              onChange={handleInput}
              value={emailInput.message}
              required
            ></textarea>
          </div>

          <div className="col-auto">
            <button
              id="send-button"
              type="submit"
              className="btn btn-dark mb-3 w-100"
            >
              Send
            </button>
          </div>

          <div id="status-message" style={{ display: "none" }}></div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
