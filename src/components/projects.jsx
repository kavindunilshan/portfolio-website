import React from "react";
import { GitHub, Launch } from "@mui/icons-material";
import { Box, Button, Typography, Grid } from "@mui/material";

const projects = [
    {
        title: "Final Year Project",
        image: "/uom.jpg",
        githubLink: "https://github.com/final-year-project-backend",
        liveDemo: "https://github.com/final-year-project-frontend",
        description:
            "A robust machine learning model to predict dengue outbreaks using weather and vegetation index data.",
        techStack: "Python, Scikit-learn, Pandas, Matplotlib",
    },
    {
        title: "SpendWise",
        image: "/spendwise.png",
        githubLink: "https://github.com/spendwise-frontend",
        liveDemo: "https://github.com/spendwise-backend",
        description:
            "A personal expense tracker with features like financial advice and education. Built for scalability and security.",
        techStack: "Vite, React.js, Spring Boot, Okta Auth0, Docker, Kubernetes, Stripe, WSO2 Choreo",
    },
    {
        title: "WatchMovie",
        image: "/watchmovie.png",
        githubLink: "https://github.com/watchmovie-frontend",
        liveDemo: "https://github.com/watchmovie-backend",
        description:
            "A theater booking system with a user-friendly interface and an admin portal for management.",
        techStack: "React.js, Spring Boot, MySQL, WSO2 Asgardio Authentication",
    },
    {
        title: "Invex Pro",
        image: "/invex.png",
        githubLink: "https://github.com/invex-pro-frontend",
        liveDemo: "https://github.com/invex-pro-backend",
        description:
            "An inventory management system that simplifies stock and order tracking.",
        techStack: "Angular.js, Node.js, Okta Auth0",
    },
    {
        title: "CosmicWays",
        image: "/cosmic.png",
        githubLink: "https://github.com/cosmicways",
        liveDemo: "https://github.com/cosmicways",
        description:
            "A futuristic mobile app for interplanetary travel reservations, built for a university competition.",
        techStack: "React Native, Firebase",
    },
    {
        title: "Tour Planning Platform",
        image: "/tour.png",
        githubLink: "https://github.com/tour-planning-frontend",
        liveDemo: "https://github.com/tour-planning-backend",
        description:
            "A web and mobile application for trip planning with personalized recommendations and bookings.",
        techStack:
            "React.js, Node.js, Express.js, Flutter, MongoDB, APIs (Booking.com, Google Maps), Microservice Architecture",
    },
];

const Projects = () => {
    return (
        <>
            <p className="section__text__p1">Browse My Recent</p>
            <h1 className="title">Projects</h1>
            <Grid container spacing={4} className="projects-container">
                {projects.map((project, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Box
                            className="project-card"
                            boxShadow={3}
                            p={3}
                            borderRadius={2}
                            sx={{
                                height: 400, // Set a fixed height for uniformity
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between",
                                alignItems: "center",
                                textAlign: "center",
                            }}
                        >
                            <Box className="image-container" sx={{ height: 150 }}>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="project-img"
                                    style={{ maxHeight: "100%", maxWidth: "100%" }}
                                />
                            </Box>
                            <Typography variant="h5" className="project-title">
                                {project.title}
                            </Typography>
                            <Typography variant="body2" className="project-description">
                                {project.description}
                            </Typography>
                            <Typography variant="body2" className="project-tech-stack">
                                <strong>Tech Stack:</strong> {project.techStack}
                            </Typography>
                            <Box className="project-buttons" mt={2} display="flex" gap={1}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    startIcon={<GitHub />}
                                    onClick={() => window.open(project.githubLink, "_blank")}
                                >
                                    GitHub
                                </Button>
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    startIcon={<Launch />}
                                    onClick={() => window.open(project.liveDemo, "_blank")}
                                >
                                    Live Demo
                                </Button>
                            </Box>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </>
    );
};

export default Projects;
