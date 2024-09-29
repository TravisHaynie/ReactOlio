import '../styles/App.css'; // Ensure the correct path to your CSS file

const Header = () => {
  return (
    <header>
      <div className="header-content">
        <img className="photo" src="./src/assets/IMG_0904.JPG" alt="Travis Haynie" /> {/* Add your photo */}
        <h1>Travis Haynie</h1> {/* Centered title with CSS */}
      </div>
    </header>
  );
};

export default Header;
