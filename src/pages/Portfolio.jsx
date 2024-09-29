
import Project from '../components/Project';

const Portfolio = () => {
  const projects = [
    {
      title: 'Project 1',
      image: '/path-to-image.jpg',
      deployLink: 'https://deployed-app-link.com',
      repoLink: 'https://github.com/your-repo'
    },
    // Add more projects here
  ];

  return (
    <section>
      <h2>Portfolio</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
