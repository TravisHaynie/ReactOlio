import '../styles/App.css';

const Contact = () => {
  return (
    <div className="main-content contact-content">
      <h2>Contact Me</h2>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" className="contact-input" placeholder="Your Name" required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" className="contact-input" placeholder="Your Email" required />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" className="contact-input" rows="4" placeholder="Your Message" required></textarea>
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
