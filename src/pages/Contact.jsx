import { useState } from 'react';
import '../styles/App.css';

const Contact = () => {
  // State to capture form input values
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Handle input change and update formData
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, log the form data
    console.log("Form Submitted!", formData);
    // In the future, this is where you would send the form data to an email service or backend

    setFormData({
      name: '',
      email: '',
      message: ''
    });
    
  };

  return (
    <div className="main-content contact-content">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="contact-input"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="contact-input"
            placeholder="Your Email"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            className="contact-input"
            rows="4"
            placeholder="Your Message"
            required
            value={formData.message}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="contact-button">Send Message</button>
      </form>

      <p>Alternatively, you can reach me via:</p>
      <ul>
        <li>Email: <a className="contact-link" href="mailto:travihay@gmail.com">travihay@gmail.com</a></li>
        <li>LinkedIn: <a className="contact-link" href="https://linkedin.com/in/travis-haynie-472b42319" target="_blank" rel="noopener noreferrer">View my LinkedIn</a></li>
      </ul>
    </div>
  );
};

export default Contact;
