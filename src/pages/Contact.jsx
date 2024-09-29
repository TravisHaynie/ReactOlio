
import '../styles/App.css';

const Contact = () => {
  return (
    <div className="main-content contact-content">
      <h2>Contact Info</h2>
      <ul>
        <li><strong>Email:</strong> <a className="contact-link" href="mailto:travihay@gmail.com">travihay@gmail.com</a></li>
        <li><strong>Phone:</strong> 760-216-0087</li>
        <li><strong>LinkedIn:</strong> <a className="contact-link" href="https://www.linkedin.com/in/travis-haynie-472b42319/" target="_blank" rel="noopener noreferrer">View LinkedIn</a></li>
      </ul>
    </div>
  );
};

export default Contact;
