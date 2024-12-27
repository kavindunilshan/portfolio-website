import React from "react";
import { Email, LinkedIn, Phone, LocationOn } from "@mui/icons-material";

const Contact = () => {
    return (
        <section id="contact">
            <p className="section__text__p1">Get in Touch</p>
            <h1 className="title">Contact Me</h1>
            <div className="contact-info-upper-container">
                <div className="contact-info-container">
                    <Email className="icon contact-icon email-icon" />
                    <p>
                        <a href="mailto:kavindunilshanliyanage@gmail.com">
                            kavindunilshanliyanage@gmail.com
                        </a>
                    </p>
                </div>
                <div className="contact-info-container">
                    <Phone className="icon contact-icon phone-icon" />
                    <p>+94 70 258 6683</p>
                </div>
                <div className="contact-info-container">
                    <LinkedIn className="icon contact-icon linkedin-icon" />
                    <p>
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                            LinkedIn
                        </a>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Contact;
