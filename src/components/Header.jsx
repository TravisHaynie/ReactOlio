import '../styles/App.css'; // Ensure the correct path to your CSS file
import profileImage from '../assets/IMG_0904.JPG'; // Correct way to import the image

const Header = () => {
  return (
    <header>
      <div className="header-content">
        <img className="photo" src={profileImage} alt="Travis Haynie" /> {/* Use imported image */}
        <h1>Travis Haynie</h1> {/* Centered title with CSS */}
      </div>
    </header>
  );
};

export default Header;
