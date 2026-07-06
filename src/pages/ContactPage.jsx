import { useState } from "react"

function ContactPage() {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    message: "",
  });

  const changeHandler = (e) => {
    setContact({
      ...contact,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (!contact.name || !contact.email || !contact.message) {
      alert("Please fill all fields");
      return;
    }

    alert("Message Sent Successfully!");

    setContact({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>

      <p>
        We'd love to hear from you. Fill out the form below and we'll get back
        to you soon.
      </p>

      <form onSubmit={submitHandler} className="contact-form">
        <input
          type="text"
          name="name"
          placeholder="Enter Your Name"
          value={contact.name}
          onChange={changeHandler}
        />

        <input
          type="email"
          name="email"
          placeholder="Enter Your Email"
          value={contact.email}
          onChange={changeHandler}
        />

        <textarea
          name="message"
          placeholder="Enter Your Message"
          rows="5"
          value={contact.message}
          onChange={changeHandler}
        ></textarea>

        <button type="submit">
          Send Message
        </button>
      </form>

      <div className="contact-info">
        <h3>ShopEase</h3>

        <p>📍 Karachi, Pakistan</p>

        <p>📞 +92 300 1234567</p>

        <p>📧 shopease@gmail.com</p>
      </div>
    </div>
  );
}

export default ContactPage;