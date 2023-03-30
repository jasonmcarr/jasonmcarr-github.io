import React from "react";
import { opacityFilterRemove, removeHorizontalNavbar } from "../../utils/functions";

function Contact() {
  opacityFilterRemove();
  removeHorizontalNavbar();
  return (
    <div className="contact-box">
      <div className="contact-content">
        <h2>Contact Me</h2>
        <form
          // action="mailto:jacemcarr@gmail.com"
          method="post"
          enctype="text/plain"
        >
          <label for="name">Name:</label>
          <input type="text" id="name" name="name" required></input>
          <label for="email">Email:</label>
          <input type="email" id="email" name="email" required></input>
          <label for="message">Message:</label>
          <textarea id="message" name="message" required></textarea>
          <input type="submit" value="Send"></input>
        </form>
      </div>
    </div>
  );
}

export default Contact;
