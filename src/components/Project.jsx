
import '../styles/App.css';

const Projects = () => {
  return (
    <section id="work-info" className="section">
      <h2>Work</h2>
      <div className="work-grid">
        <a className="git-hub" href="https://travishaynie.github.io/popcornpicks2/">
          <img className="work-img" src="./assets/imgs/portfolio_project1.png" alt="Popcorn Picks Project" />
        </a>

        <a className="git-hub" href="https://art-attack-2.onrender.com">
          <img className="work-img" src="./assets/imgs/project2.png" alt="Art Attack Project" />
        </a>

        <a className="git-hub" href="https://travishaynie.github.io/ForcastToday-Api/">
          <img className="work-img" src="./assets/imgs/project3.png" alt="Forecast Today API" />
        </a>

        <a className="git-hub" href="https://travishaynie.github.io/Bloggers-API/">
          <img className="work-img" src="./assets/imgs/project4.png" alt="Bloggers API" />
        </a>
      </div>
    </section>
  );
};

export default Projects;
