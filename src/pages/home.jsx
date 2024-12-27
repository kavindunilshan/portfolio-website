import React from "react";
import {CheckCircle, LinkedIn, GitHub, WorkspacePremium, ArrowLeft} from '@mui/icons-material';
import "../styles/home.css";
import Contact from "../components/contact.jsx";
import Projects from "../components/projects.jsx";
import Highlights from "../components/highlights.jsx";

const Home = () => {
    const toggleMenu = () => {
        const menuLinks = document.querySelector(".menu-links");
        menuLinks.classList.toggle("active");
    };

    return (
        <div className="home">
            <nav id="desktop-nav">
                <div className="logo">Kavindu Nilshan</div>
                <ul className="nav-links">
                    <li><a href="#about">About</a></li>
                    <li><a href="#highlights">Highlights</a></li>
                    <li><a href="#tech">TechProfiles</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
            <nav id="hamburger-nav">
                <div className="logo">Kavindu Nilshan</div>
                <div className="hamburger-menu">
                    <div className="hamburger-icon" onClick={toggleMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <ul className="menu-links">
                        <li><a href="#about" onClick={toggleMenu}>About</a></li>
                        <li><a href="#experience" onClick={toggleMenu}>Experience</a></li>
                        <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
                        <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
                    </ul>
                </div>
            </nav>

            <section id="profile">
                <div className="section__pic-container">
                    <img src="../../src/assets/profile-pic.jpeg" alt="John Doe profile picture"/>
                </div>
                <div className="section__text">
                    <p className="section__text__p1">Hello, I'm</p>
                    <h1 className="title">Kavindu Nilshan</h1>
                    <p className="section__text__p2">Full-Stack Developer</p>
                    <div className="btn-container">
                        <button className="btn btn-color-2" onClick={() => window.open("../assets/resume-example.pdf")}>
                            Download CV
                        </button>
                        <button className="btn btn-color-1" onClick={() => window.location.href = "#contact"}>
                            Contact Info
                        </button>
                    </div>
                    <div id="socials-container">
                        <LinkedIn
                            className="icon"
                            onClick={() => window.location.href = "https://linkedin.com/"}
                        />
                        <GitHub
                            className="icon"
                            onClick={() => window.location.href = "https://github.com/"}
                        />
                    </div>
                </div>
            </section>

            <section id="about">
                <p className="section__text__p1">Get To Know More</p>
                <h1 className="title">About Me</h1>
                <div className="section-container">
                    <div className="section__pic-container">
                        <img src="../../src/assets/profile-pic.jpeg" alt="Profile picture" className="about-pic"/>
                    </div>
                    <div className="about-details-container">
                        <div className="text-container">
                            <p>
                                I am a passionate full-stack developer and a final-year Computer Science and Engineering
                                student at the
                                University of Moratuwa. I enjoy learning new technologies and continuously improving my
                                skills.
                            </p>
                        </div>
                        <h2 className="subtopic-title">Education</h2>
                        <div className="about-containers">
                            <div className="details-container">
                                <img src="/public/uom.jpg" alt="University Logo" className="icon"/>
                                <h3>University of Moratuwa</h3>
                                <p>
                                    B.Sc. Engineering (Hons) in Computer Science Engineering <br/>
                                    CGPA: 3.82 (out of 4.0) <br/>
                                    Dean’s List: Semesters 1, 3, 4 <br/>
                                    4.0 SGPA in Semester 1
                                </p>
                            </div>
                            <div className="details-container">
                                <img src="/public/rcm.png" alt="School Logo" className="icon"/>
                                <h3>Rahula College Matara</h3>
                                <p>
                                    G.C.E. A/L 2019: 3 A Passes (Physical Science Stream) <br/>
                                    District Rank: 20 <br/>
                                    G.C.E. O/L 2016: 9 A Passes <br/>
                                    Rasika Ekanayaka Scholarship: Highest Marks in O/L Mathematics
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="highlights">
                <Highlights />
            </section>

            <section id="projects">
                <Projects />
            </section>

            <section id="contact">
                <Contact />
            </section>

            <footer>
                <nav>
                    <ul className="nav-links">
                        <li><a href="#about">About</a></li>
                        <li><a href="#experience">Experience</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
                <p>Copyright &#169; 2023 John Doe. All Rights Reserved.</p>
            </footer>
        </div>
    );
};

export default Home;
