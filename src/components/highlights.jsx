import React, {useState} from "react";
import {FiberManualRecord, KeyboardDoubleArrowDown, KeyboardDoubleArrowUp} from "@mui/icons-material";
import "../styles/highlights.css";
import {Button} from "@mui/material";

const Highlights = () => {
    const [showMore, setShowMore] = useState(false);

    const handleShowMore = () => {
        setShowMore(!showMore);
    };

    return (
        <div className="highlight-started">
            <p className="section__text__p1">Professional Highlights</p>
            <h1 className="title">Experiences</h1>

            {/* Internship Section */}
            {/* Internship Section */}
            <div className="highlight-section-container">
                <h2 className="highlight-subtopic-title">Internship</h2>
                <div className="highlight-row">
                    <div className="highlight-section__pic-container">
                        <img src={`${import.meta.env.BASE_URL}/gtn.png`} alt="GTN Logo" className="highlight-company-logo" />
                    </div>
                    <div className="highlight-about-details-container">
                        <p className="intern-info">
                            Position: Intern Software Engineer
                            <br/>
                            Organization: GTN Group
                            <br/>
                            Period: Nov 2023 – May 2024
                            <br/>
                        </p>
                        <div>
                            <Button
                                variant="outlined"
                                color="primary"
                                onClick={handleShowMore}
                                endIcon={showMore ? <KeyboardDoubleArrowUp /> : <KeyboardDoubleArrowDown />}
                                sx={{
                                    marginBottom: '20px',
                                    color: '#333',
                                    border: '2px solid rgba(66,66,66,0.3)',
                                    '&:hover': {
                                        borderColor: 'rgba(66,66,66,0.7)',
                                        backgroundColor: '#f0f0f0',
                                    },
                                }}
                            >
                                {showMore ? 'Show Less' : 'Show More'}
                            </Button>

                            {showMore && (
                                <>
                                    <p className="intern-description">
                                        During my internship at GTN Group, I worked on several key projects that focused
                                        on
                                        enhancing backend performance, optimizing observability, and improving
                                        application
                                        monitoring. Some of my major contributions include:
                                    </p>
                                    <ul className="intern-projects">
                                        <li><strong>Enhanced Backend Modularity:</strong> Applied the Java 9 modularity
                                            concept to
                                            improve the structure of the backend system. This involved creating module
                                            descriptors
                                            and optimizing dependencies between backend modules using Java, JakartaEE,
                                            and Maven to
                                            enhance modularity and maintainability.
                                        </li>
                                        <li><strong>Cost-Effective Observability:</strong> Transitioned observability
                                            tools from
                                            Datadog to Grafana Loki to reduce costs for non-production environments
                                            while
                                            maintaining quality monitoring and logging systems by leveraging open-source
                                            solutions.
                                        </li>
                                        <li><strong>Status Monitor:</strong> Developed a status monitoring application
                                            using Apache
                                            ZooKeeper to track the status of multiple application instances. The system
                                            managed
                                            configurations, performed leader election, and triggered events based on
                                            changes using
                                            ZooKeeper’s watcher feature.
                                        </li>
                                    </ul>
                                </>
                            )}
                        </div>


                        <div className="highlight-tech-stack">
                            <h3>Involved Tech Stack:</h3>
                            <ul className="tech-stack-list">
                                <li>Angular</li>
                                <li>Spring Boot</li>
                                <li>J2EE</li>
                                <li>PostgreSQL</li>
                                <li>JBoss EAP</li>
                                <li>AWS EC2</li>
                                <li>Apache Zookeeper</li>
                                <li>Grafana</li>
                                <li>Docker</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Open Source Contributions Section */}
            <div className="highlight-section-container">
                <h2 className="highlight-subtopic-title">Open Source Contributions</h2>
                <div className="highlight-row">
                    <div className="highlight-section__pic-container">
                        <img src={`${import.meta.env.BASE_URL}/grafana.png`} alt="Grafana Logo"
                             className="highlight-company-logo"/>
                    </div>
                    <div className="highlight-about-details-container">
                        <p>Contributed to Grafana. Below are some key PRs:</p>
                        <ul className="highlight-pr-links-list">
                            <li>
                                <FiberManualRecord fontSize="small"/>
                                <a href="https://github.com/grafana/grafana/pull/90465" target="_blank"
                                   rel="noopener noreferrer">
                                    PR #90465: Fix Cursor Flicker in Data Links Section
                                </a>
                                <p>Resolved cursor flickering and console errors when adding links in the Data Links
                                    section. Fixed issue #90426. (Merged)</p>
                            </li>
                            <li>
                                <FiberManualRecord fontSize="small"/>
                                <a href="c" target="_blank"
                                   rel="noopener noreferrer">
                                    PR #87368: Logs - Collapse multi-line logs and expand with Log Details
                                </a>
                                <p>Improved log readability by allowing multi-line entries, such as stack traces, to be
                                    collapsible and expandable. Fixed issue #74261.</p>
                            </li>
                            <li>
                                <FiberManualRecord fontSize="small"/>
                                <a href="https://github.com/grafana/grafana/pull/89965" target="_blank"
                                   rel="noopener noreferrer">
                                    PR #89965: Separate Control for Refresh Picker Size in Explore
                                </a>
                                <p>Proposed enhancements for toolbar elements in Explore mode. Feedback incorporated
                                    into ongoing UX redesign (#87796).</p>
                            </li>
                            <li>
                                <FiberManualRecord fontSize="small"/>
                                <a href="https://github.com/grafana/grafana/pull/90054" target="_blank"
                                   rel="noopener noreferrer">
                                    PR #90054: Keep Split Button on the Toolbar
                                </a>
                                <p>Improved user experience for live stream data sources by ensuring better visibility
                                    of the split button. Part of UX redesign (#87796).</p>
                            </li>
                            <li>
                                <FiberManualRecord fontSize="small"/>
                                <a href="https://github.com/grafana/grafana/pull/91174" target="_blank"
                                   rel="noopener noreferrer">
                                    PR #91174: Refine Log Filtering in Explore Mode
                                </a>
                                <p>Improved log visibility when pausing after clearing logs in Loki’s Explore mode.
                                    Fixed issue #90531.</p>
                            </li>
                        </ul>

                        <div className="highlight-tech-stack">
                            <h3>Involved Tech Stack:</h3>
                            <ul className="tech-stack-list">
                                <li>React</li>
                                <li>Linux</li>
                                <li>Docker</li>
                                <li>Grafana</li>
                                <li>Loki</li>
                                <li>Promtail</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Highlights;
