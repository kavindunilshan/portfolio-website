import React from "react";
import { FiberManualRecord } from "@mui/icons-material";
import "../styles/highlights.css";

const Highlights = () => {
    return (
        <div className="highlight-started">
            <p className="section__text__p1">Key Milestones</p>
            <h1 className="title">Highlights</h1>

            {/* Internship Section */}
            <div className="highlight-section-container">
                <h2 className="highlight-subtopic-title">Internship</h2>
                <div className="highlight-row">
                    <div className="highlight-section__pic-container">
                        <img src="/gtn.png" alt="GTN Logo" className="highlight-company-logo" />
                    </div>
                    <div className="highlight-about-details-container">
                        <p>
                            Position: Intern Software Engineer
                            <br />
                            Organization: GTN Group
                            <br />
                            Period: Nov 2023 – May 2024
                            <br />
                            Technologies used: Spring Boot, Angular, AWS EC2, Docker, JBoss EAP, J2EE, Grafana, Loki
                        </p>
                    </div>
                </div>
            </div>

            {/* Open Source Contributions Section */}
            <div className="highlight-section-container">
                <h2 className="highlight-subtopic-title">Open Source Contributions</h2>
                <div className="highlight-row">
                    <div className="highlight-section__pic-container">
                        <img src="/grafana.png" alt="Grafana Logo" className="highlight-company-logo" />
                    </div>
                    <div className="highlight-about-details-container">
                        <p>Contributed to the Grafana. Below are some key PRs:</p>
                        <ul className="highlight-pr-links-list">
                            <li>
                                <FiberManualRecord fontSize="small" />
                                <a href="https://github.com/grafana/grafana/pull/12345" target="_blank" rel="noopener noreferrer">
                                    PR #12345: Improved dashboard loading speed
                                </a>
                                <p>A contribution to optimize data loading for better performance on large datasets.</p>
                            </li>
                            <li>
                                <FiberManualRecord fontSize="small" />
                                <a href="https://github.com/grafana/grafana/pull/67890" target="_blank" rel="noopener noreferrer">
                                    PR #67890: Bug fix for Grafana user authentication
                                </a>
                                <p>Fixed a bug related to user authentication when using multi-factor authentication (MFA).</p>
                            </li>
                            <li>
                                <FiberManualRecord fontSize="small" />
                                <a href="https://github.com/grafana/grafana/pull/11223" target="_blank" rel="noopener noreferrer">
                                    PR #11223: Added support for custom data source integrations
                                </a>
                                <p>Contributed to adding custom data source support for extended integrations.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Highlights;
