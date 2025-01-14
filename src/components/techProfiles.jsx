import React from "react";
import {GitHub, Launch, LinkedIn} from "@mui/icons-material";
import {Box, Button, Grid, Typography} from "@mui/material";

const mediumArticles = [
    {
        title: "Securing Your Full-Stack App: Okta Auth0 Frontend Setup and RBAC Preparation with Vite, React, and Spring Boot",
        image: `${import.meta.env.BASE_URL}/okta.png`,
        link: "https://kavindunilshanliyanage.medium.com/securing-your-full-stack-app-okta-auth0-frontend-setup-and-rbac-preparation-with-vite-react-and-69dc1ee05732",
        description: "Implement secure authentication in React apps using Auth0.",
    },
    {
        title: "Dockerizing and Deploying a Full-Stack Application with Vite + React and Spring Boot on Kubernetes",
        image: `${import.meta.env.BASE_URL}/docker.png`,
        link: "https://kavindunilshanliyanage.medium.com/dockerizing-and-deploying-a-full-stack-application-with-vite-react-and-spring-boot-on-kubernetes-96b810e90ff2",
        description: "A step-by-step guide to containerizing React and Spring Boot apps with Docker.",
    },
    {
        title: "A Comprehensive Guide to Upgrading from JBoss EAP 7.4 to 8.0: Key Changes, Challenges, and Best Practices",
        image: `${import.meta.env.BASE_URL}/jboss.png`,
        link: "https://kavindunilshanliyanage.medium.com/a-comprehensive-guide-to-upgrading-from-jboss-eap-7-4-cbe0b63129de",
        description: "Learn Kubernetes basics and deploy scalable containerized applications.",
    },

];

const TechProfiles = () => {
    return (
        <div>
            <p className="section__text__p1">Explore My Technical Profiles</p>
            <h1 className="title">Tech Profiles</h1>

            {/*/!* GitHub Profile *!/*/}
            {/*<div className="highlight-section-container">*/}
            {/*    <h2 className="highlight-subtopic-title">GitHub Profile</h2>*/}
            {/*    <div className="highlight-row">*/}
            {/*        <div className="highlight-about-details-container">*/}
            {/*            /!* Content placeholder for GitHub Profile *!/*/}
            {/*            <div style={{height: "250px", borderRadius: "5px"}}>*/}
            {/*                <div className="github-calendar-container">*/}
            {/*                    <div className="calendar">Loading the data just for you...</div>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}

            {/* Medium Blog */}
            <div className="highlight-section-container">
                <h2 className="highlight-subtopic-title">Medium Blog</h2>
                <Grid container spacing={4} className="medium-articles-container">
                    {mediumArticles.map((article, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Box
                                className="article-card"
                                boxShadow={3}
                                p={3}
                                borderRadius={2}
                                sx={{
                                    height: 300,
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    textAlign: "center",
                                }}
                            >
                                <Box className="image-container" sx={{ height: 150 }}>
                                    <img
                                        src={article.image}
                                        alt={article.title}
                                        className="article-img"
                                        style={{ maxHeight: "100%", maxWidth: "100%" }}
                                    />
                                </Box>
                                <Typography
                                    style={{ color: "#242323", fontSize: "16px", fontWeight: 600 }}
                                    className="article-title">
                                    {article.title}
                                </Typography>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    startIcon={<Launch />}
                                    onClick={() => window.open(article.link, "_blank")}
                                >
                                    Read
                                </Button>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </div>

            {/* My Tech Profiles */}
            <div className="highlight-section-container">
                <h2 className="highlight-subtopic-title">My Tech Profiles</h2>
                <div className="profile-row">
                    {/* StackOverflow Profile */}
                    <a href="https://stackoverflow.com/users/14016638/kavindu-nilshan" className="profile-link">
                        <img
                            src="https://stackoverflow.com/users/flair/14016638.png?theme=dark"
                            width="208"
                            height="58"
                            alt=""
                            title="Profile for Kavindu Nilshan at Stack Overflow"
                        />
                        <span>StackOverFlow</span>
                    </a>
                    <a href="https://github.com/kavindunilshan" target="_blank" rel="noopener noreferrer" className="profile-link">
                        <GitHub fontSize="large" style={{ color: "#000000", fontSize: '50px', marginTop: '10px' }} />
                        <span>GitHub</span>
                    </a>
                    <a href="https://www.linkedin.com/in/kavindun" target="_blank" rel="noopener noreferrer" className="profile-link">
                        <LinkedIn fontSize="large" style={{ color: "#000000", fontSize: '50px', marginTop: '10px' }} />
                        <span>LinkedIn</span>
                    </a>
                    <a href="https://www.hackerrank.com/profile/NilshanRJ10" target="_blank" rel="noopener noreferrer" className="profile-link">
                        <img
                            src={`${import.meta.env.BASE_URL}/hackerrank.png`}
                            alt="HackerRank"
                            style={{ width: "120px", height: "60px" }}
                        />
                        <span>HackerRank</span>
                    </a>
                    <a href="https://math.stackexchange.com/users/962658/kavindu-nilshan" target="_blank"
                       rel="noopener noreferrer" className="profile-link">
                        <img
                            src="https://math.stackexchange.com/users/flair/962658.png?theme=dark"
                            width="208"
                            height="58"
                            alt=""
                            title="Profile for Kavindu Nilshan at Mathematics Stack Exchange"
                        />
                        <span>MathsStackExchange</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default TechProfiles;