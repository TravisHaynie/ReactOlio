import '../styles/App.css';

// Import all images
import popcornPicksImage from '../assets/porfolio project.png';
import artAttackImage from '../assets/Screenshot 2024-08-27 211242.png';
import forecastTodayImage from '../assets/Screenshot 2024-06-19 153116.png';
import bloggersApiImage from '../assets/Screenshot 2024-06-09 163256.png';

const Projects = () => {
  return (
    <section id="work-info" className="section">
      <h2>Work</h2>
      <div className="work-grid">
        <a className="git-hub" href="https://travishaynie.github.io/popcornpicks2/">
          <img className="work-img" src={popcornPicksImage} alt="Popcorn Picks Project" />
        </a>

        <a className="git-hub" href="https://art-attack-2.onrender.com">
          <img className="work-img" src={artAttackImage} alt="Art Attack Project" />
        </a>

        <a className="git-hub" href="https://travishaynie.github.io/ForcastToday-Api/">
          <img className="work-img" src={forecastTodayImage} alt="Forecast Today API" />
        </a>

        <a className="git-hub" href="https://travishaynie.github.io/Bloggers-API/">
          <img className="work-img" src={bloggersApiImage} alt="Bloggers API" />
        </a>
      </div>
    </section>
  );
};

export default Projects;
