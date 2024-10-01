import { NavLink } from 'react-router-dom';
import '../styles/App.css'; // Import your custom CSS

const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink 
                to="/"  
                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/about" 
                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
              >
                About Me
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/portfolio" 
                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
              >
                Portfolio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/contact" 
                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
              >
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/resume" 
                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
              >
                Resume
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
