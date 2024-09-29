import { useEffect, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import '../styles/App.css';

const ProjectModal = ({ title, description }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Read More
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{description}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

const Home = () => {
    const message = "Welcome to My Portfolio! Here you can explore my projects, skills, and experience.";
    const [typedText, setTypedText] = useState("");

    useEffect(() => {
        let index = 0; // Track the current character index
        const typingInterval = setInterval(() => {
            setTypedText(message.slice(0, index + 1)); // Add one letter at a time
            index++;

            // Stop typing once the full message is typed
            if (index === message.length) {
                clearInterval(typingInterval);
            }
        }, 100); // Typing speed in milliseconds

        // Cleanup interval on component unmount
        return () => clearInterval(typingInterval);
    }, [message]);

    return (
        <div className="main-content home-content">
            <h1>{typedText}</h1> {/* Use dynamic typedText here */}
            <p>Explore my featured projects below:</p>
            <div className="featured-projects">
                <div className="project">
                    <h2>Project 1</h2>

                    <a className="git-hub" href="https://art-attack-2.onrender.com">
                        <img className="work-img" src="./src/assets/Screenshot 2024-08-27 211242.png" alt="Art Attack Project" />
                    </a>

                    <ProjectModal
                        title="Project 1"
                        description="Art Attack is a competitive drawing game where users can challenge each other to draw based on a given subject. Once the drawings are complete, they can be saved and voted on by the participants."
                    />
                </div>
                <div className="project">
                    <h2>Project 2</h2>
                    <a className="git-hub" href="https://travishaynie.github.io/popcornpicks2/">
                        <img className="work-img" src="./src/assets/porfolio project.png" alt="Popcorn Picks Project" />
                    </a>
                    <ProjectModal
                        title="Project 2"
                        description="PopcornPicks was developed to provide a user-friendly interface for movie enthusiasts to keep track of the movies they want to watch and easily manage their top favorites. Users can search for movies using the TMDB API and get detailed information about each movie, including ratings from the OMDB API."
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;
