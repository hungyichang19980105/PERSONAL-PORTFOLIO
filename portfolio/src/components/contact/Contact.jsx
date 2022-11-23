import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import "./contact.css";

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__option">
          <MdOutlineEmail className="contact__option-icon" />
          <h4>Email</h4>
          <h5>michaelchang23544@gmail.com</h5>
        </div>
        <div className="contact__option">
          <MdOutlineEmail className="contact__option-icon" />
          <h4>Tel</h4>
          <h5>347-705-8092</h5>
        </div>
      </div>
    </section>
  );
};

export default Contact;
