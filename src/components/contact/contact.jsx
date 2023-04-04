import React, { useRef } from "react";
import { opacityFilterRemove, removeHorizontalNavbar } from "../../utils/functions";
import emailjs from "@emailjs/browser";
import "../contact/contact.css"

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    opacityFilterRemove();
    removeHorizontalNavbar();

      emailjs
        .sendForm(
          "service_722xc9m",
          "template_4kk2hi8",
          form.current,
          "vaLTp_jZUdg-Uncrq"
        )
        .then(
          (result) => {
            console.log(result.text);
            console.log("Message Sent");
            e.target.reset();
          },
          (error) => {
            console.log(error.text);
          }
        );
  };
return (
  <div className="contact-box">
    <div className="contact-content">
      <div className="form-title">Send me a message</div>
      <br />
      <form ref={form} onSubmit={sendEmail}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="user_name" name="user_name" required></input>
        <label htmlFor="email">Email:</label>
        <input type="email" id="user_email" name="user_email" required></input>
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" required></textarea>
        <input type="submit" value="Send" />
      </form>
    </div>
  </div>
);
};

export default Contact;