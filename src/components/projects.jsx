import React, {useState} from "react";
import { GitHub, Launch } from "@mui/icons-material";
import {Box, Button, Typography, Grid, Dialog, DialogTitle, DialogContent} from "@mui/material";
import ProjectDialog from "./project-data.jsx";

const projects = [
    {
        title: "Final Year Project",
        image: `${import.meta.env.BASE_URL}/uom.jpg`,
        githubFrontend: "https://github.com/Minindu20/Dengue-Severity-Predictor",
        description:
            "A robust machine learning model to predict dengue outbreaks using weather and vegetation index data.",
        techStack: "Python, Scikit-learn, Pandas, Matplotlib, Random Forest, LSTM, SVR, Kriging",
    },
    {
        title: "SpendWise",
        image: `${import.meta.env.BASE_URL}/spendwise.png`,
        githubFrontend: "https://github.com/kavindunilshan/spendwise-fo",
        githubBackend: "https://github.com/kavindunilshan/spendWise",
        description:
            "A personal expense tracker with features like paid financial advice and financial education.",
        techStack: "Vite, React.js, Spring Boot, Okta Auth0, Docker, Kubernetes, Stripe, WSO2 Choreo",
        link: "https://e6c3f30e-3e58-45c9-94c7-3d0825797eac.e1-us-east-azure.choreoapps.dev/",
        images: [
            `${import.meta.env.BASE_URL}/spendwise1.png`,
            `${import.meta.env.BASE_URL}/spendwise.png`,
            `${import.meta.env.BASE_URL}/spendwise2.png`,
            `${import.meta.env.BASE_URL}/spendwise3.png`,
            `${import.meta.env.BASE_URL}/spendwise4.png`,
        ]
    },
    {
        title: "WatchMovie",
        image: `${import.meta.env.BASE_URL}/watchmovie.png`,
        githubFrontend: "https://github.com/kavindunilshan/watch-movie-frontend",
        githubBackend: "https://github.com/kavindunilshan/watchMovie",
        description:
            "A theater booking system with a user-friendly interface and an admin portal for management.",
        techStack: "React.js, Spring Boot, MySQL, WSO2 Asgardio Authentication",
        images: [
            `${import.meta.env.BASE_URL}/watchmovie1.png`,
            `${import.meta.env.BASE_URL}/watchmovie.png`,
            `${import.meta.env.BASE_URL}/watchmovie2.png`,
            `${import.meta.env.BASE_URL}/watchmovie3.png`,
            `${import.meta.env.BASE_URL}/watchmovie4.png`,
            `${import.meta.env.BASE_URL}/watchmovie5.png`,
        ]
    },
    {
        title: "Invex Pro",
        image: `${import.meta.env.BASE_URL}/invex.png`,
        githubFrontend: "https://github.com/kavindunilshan/invex-pro-fo",
        githubBackend: "https://github.com/kavindunilshan/invexPro",
        description:
            "An inventory management system that simplifies stock and order tracking.",
        techStack: "Angular.js, Node.js, Okta Auth0",
        images: [
            `${import.meta.env.BASE_URL}/invex1.png`,
            `${import.meta.env.BASE_URL}/invex.png`,
            `${import.meta.env.BASE_URL}/invex2.png`,
            `${import.meta.env.BASE_URL}/invex3.png`,
            `${import.meta.env.BASE_URL}/invex4.png`,
        ]
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
    const [openDialog, setOpenDialog] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const handleOpenDialog = (project) => {
        setSelectedProject(project);
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setSelectedProject(null);
        setOpenDialog(false);
    };

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
                                height: 350,
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between",
                                alignItems: "center",
                                textAlign: "center",
                                backgroundColor: "#ffffff",
                            }}
                        >
                            <Box className="image-container" sx={{ height: 150 }}>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="project-img"
                                    style={{ maxHeight: "100%", maxWidth: "100%", borderRadius: "8px" }}
                                />
                            </Box>
                            <Typography variant="h5" className="project-title" sx={{ color: "#333", fontWeight: 600 }}>
                                {project.title}
                            </Typography>
                            <Typography
                                variant="body2"
                                className="project-description"
                                sx={{ color: "#555", marginBottom: "8px" }}
                            >
                                {project.description}
                            </Typography>
                            <Typography
                                variant="body2"
                                className="project-tech-stack"
                                sx={{ color: "#777", fontStyle: "italic" }}
                            >
                                <strong>Tech Stack:</strong> {project.techStack}
                            </Typography>
                            <Box
                                className="project-buttons"
                                mt={1}
                                display="flex"
                                gap={1}
                                flexDirection="row"
                                justifyContent="center"
                                width="100%"  // Ensure the buttons span the full width for alignment
                            >
                                {project.githubFrontend && project.githubBackend ? (
                                    <Box display="flex" gap={1} justifyContent="center">
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            sx={{
                                                fontSize: "12px",
                                                textTransform: "capitalize",
                                                backgroundColor: "#1976d2",
                                            }}
                                            startIcon={<GitHub />}
                                            onClick={() => window.open(project.githubFrontend, "_blank")}
                                        >
                                            Frontend
                                        </Button>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            sx={{
                                                fontSize: "12px",
                                                textTransform: "capitalize",
                                                backgroundColor: "#1976d2",
                                            }}
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
                                        sx={{
                                            fontSize: "12px",
                                            textTransform: "capitalize",
                                            backgroundColor: "#1976d2",
                                        }}
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
                                        sx={{
                                            fontSize: "12px",
                                            textTransform: "capitalize",
                                            backgroundColor: "#d32f2f",
                                        }}
                                        startIcon={<Launch />}
                                        onClick={() => window.open(project.link, "_blank")}
                                    >
                                        Live
                                    </Button>
                                )}
                            </Box>
                            <Typography
                                variant="body2"
                                sx={{
                                    color: "#1976d2",
                                    cursor: "pointer",
                                    textDecoration: "underline",
                                    marginTop: "12px",
                                }}
                                onClick={() => handleOpenDialog(project)}
                            >
                                More Info >>>
                            </Typography>
                        </Box>
                    </Grid>
                ))}
            </Grid>

            <ProjectDialog
                openDialog={openDialog}
                handleCloseDialog={handleCloseDialog}
                selectedProject={selectedProject}
            />
        </>
    );
};

export default Projects;