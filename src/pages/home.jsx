import React from "react";
import {CheckCircle, LinkedIn, GitHub, WorkspacePremium, ArrowLeft} from '@mui/icons-material';
import "../styles/home.css";

const Home = () => {
    const toggleMenu = () => {
        const menuLinks = document.querySelector(".menu-links");
        menuLinks.classList.toggle("active");
    };

    return (
        <div className="home">
            <nav id="desktop-nav">
                <div className="logo">John Doe</div>
                <ul className="nav-links">
                    <li><a href="#about">About</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
            <nav id="hamburger-nav">
                <div className="logo">John Doe</div>
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
                        <div className="about-containers">
                            <div className="details-container">
                                <WorkspacePremium className="icon"/>
                                <h3>Experience</h3>
                                <p>2+ years <br/>Frontend Development</p>
                            </div>
                            <div className="details-container">
                                <WorkspacePremium className="icon"/>
                                <h3>Education</h3>
                                <p>B.Sc. Bachelors Degree<br/>M.Sc. Masters Degree</p>
                            </div>
                        </div>
                        <div className="text-container">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis reprehenderit et
                                laborum, rem,
                                dolore eum quod voluptate exercitationem nobis, nihil esse debitis maxime facere minus
                                sint delectus velit.
                            </p>
                        </div>
                    </div>
                </div>
                <ArrowLeft className="icon arrow" onClick={toggleMenu}/>
            </section>

            <section id="experience">
                <p className="section__text__p1">Explore My</p>
                <h1 className="title">Experience</h1>
                <div className="experience-details-container">
                    <div className="about-containers">
                        <div className="details-container">
                            <h2 className="experience-sub-title">Frontend Development</h2>
                            <div className="article-container">
                                <article>
                                    <CheckCircle className="icon"/>
                                    <div>
                                        <h3>HTML</h3>
                                        <p>Experienced</p>
                                    </div>
                                </article>
                                <article>
                                    <CheckCircle className="icon"/>
                                    <div>
                                        <h3>CSS</h3>
                                        <p>Experienced</p>
                                    </div>
                                </article>
                                <article>
                                    <CheckCircle className="icon"/>
                                    <div>
                                        <h3>SASS</h3>
                                        <p>Intermediate</p>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
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
