import '../styles/App.css';
import resumeFile from '../assets/resume.pdf'; // Import the resume

const Resume = () => {
  return (
    <div className="main-content resume-content">
      <h2>Resume</h2>
      <p>
        You can view my full resume here: 
        <a className="resume-link" href="https://travishaynie.github.io/Resume/" target="_blank" rel="noopener noreferrer">
          View My Resume
        </a>
      </p>
      <p>
        Download my resume:
        <a className="resume-link" href={resumeFile} download="Travis_Haynie_Resume.pdf">
          Download Resume
        </a>
      </p>
    </div>
  );
};

export default Resume;
