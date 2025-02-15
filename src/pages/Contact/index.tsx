import React from "react";
import "./index.css";

const Contact = () => {
  return (
    <section className="contact">
      {/* Formaga aloqasi bo‘lmagan matn */}
      <div className="contact-content">
        <h2>Get in Touch</h2>
        <p>Feel free to contact with us</p>

        {/* Forma */}
        <form>
          <span>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              required
            />
          </span>
          <span>
            <input
              type="phone"
              id="phone"
              name="phone"
              placeholder="Phone number"
              required
            />
          </span>
          <span>
            <textarea id="message" name="message" placeholder="Opinions" />
          </span>

          <input type="submit" value="Submit" className=" btn btn-secondary" />
        </form>
      </div>
    </section>
  );
};

export default Contact;
