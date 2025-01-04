import React from "react";
import { GitHub, Launch } from "@mui/icons-material";
import { Box, Button, Typography, Grid } from "@mui/material";

const projects = [
    {
        title: "Final Year Project",
        image: `${import.meta.env.BASE_URL}/uom.jpg`,
        githubFrontend: "https://github.com/Minindu20/Dengue-Severity-Predictor",
        description:
            "A robust machine learning model to predict dengue outbreaks using weather and vegetation index data.",
        techStack: "Python, Scikit-learn, Pandas, Matplotlib",
    },
    {
        title: "SpendWise",
        image: `${import.meta.env.BASE_URL}/spendwise.png`,
        githubFrontend: "https://github.com/kavindunilshan/spendwise-fo",
        githubBackend: "https://github.com/kavindunilshan/spendWise",
        description:
            "A personal expense tracker with features like financial advice and education. Built for scalability and security.",
        techStack: "Vite, React.js, Spring Boot, Okta Auth0, Docker, Kubernetes, Stripe, WSO2 Choreo",
        link: "https://e6c3f30e-3e58-45c9-94c7-3d0825797eac.e1-us-east-azure.choreoapps.dev/",
    },
    {
        title: "WatchMovie",
        image: `${import.meta.env.BASE_URL}/watchmovie.png`,
        githubFrontend: "https://github.com/kavindunilshan/watch-movie-frontend",
        githubBackend: "https://github.com/kavindunilshan/watchMovie",
        description:
            "A theater booking system with a user-friendly interface and an admin portal for management.",
        techStack: "React.js, Spring Boot, MySQL, WSO2 Asgardio Authentication",
    },
    {
        title: "Invex Pro",
        image: `${import.meta.env.BASE_URL}/invex.png`,
        githubFrontend: "https://github.com/kavindunilshan/invex-pro-fo",
        githubBackend: "https://github.com/kavindunilshan/invexPro",
        description:
            "An inventory management system that simplifies stock and order tracking.",
        techStack: "Angular.js, Node.js, Okta Auth0",
    },
    {
        title: "CosmicWays",
        image: `${import.meta.env.BASE_URL}/cosmic.png`,
        githubFrontend: "https://github.com/CoderNavinda/CSEwasps_CosmicWays",
        description:
            "A futuristic mobile app for interplanetary travel reservations, built for a university competition.",
        techStack: "React Native, Firebase",
    },
    {
        title: "Tour Planning Platform",
        image: `${import.meta.env.BASE_URL}/tour.png`,
        githubFrontend: "https://github.com/muthumala19/tour-planner-frontend-web",
        githubBackend: "https://github.com/kavindunilshan/Tour_Planner_Recommendation_MS",
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
                            <Box className="project-buttons" mt={2} display="flex" gap={1} flexDirection="column">
                                {project.githubFrontend && project.githubBackend ? (
                                    <Box display="flex" gap={1}>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            startIcon={<GitHub />}
                                            onClick={() => window.open(project.githubFrontend, "_blank")}
                                        >
                                            Frontend
                                        </Button>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            startIcon={<GitHub />}
                                            onClick={() => window.open(project.githubBackend, "_blank")}
                                        >
                                            Backend
                                        </Button>
                                    </Box>
                                ) : project.githubFrontend || project.githubBackend ? (
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        startIcon={<GitHub />}
                                        onClick={() => window.open(project.githubFrontend || project.githubBackend, "_blank")}
                                    >
                                        GitHub
                                    </Button>
                                ) : null}
                                {project.link && (
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        startIcon={<Launch />}
                                        onClick={() => window.open(project.link, "_blank")}
                                    >
                                        Live
                                    </Button>
                                )}
                            </Box>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </>
    );
};

export default Projects;