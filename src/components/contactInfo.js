import React from "react";
import { Button } from 'react-bootstrap';
import linkedin from "../assets/linkedin.jpg"
import git from "../assets/Git.png"

function ContactInfo() {
    return (
        <div>
            <h1>Contact Info</h1>
            <div id="contact-info" className="row row-cols-1 row-cols-md-2 g-3">
                <div id="contact-img" className="d-flex position-relative">
                    <img src={linkedin} className="flex-shrink-0 me-3" alt="..."/>
                    <div>
                        <h5 className="mt-0">LinkedIn</h5>
                        <p>This.</p>
                        <a href="https://www.linkedin.com/in/daniel-ezekiel/" className="stretched-link">LinkedIn</a>
                    </div>
                </div>
                <div id="contact-img" className="d-flex position-relative">
                    <img src={git} className="flex-shrink-0 me-3" alt="..."/>
                    <div>
                        <h5 className="mt-0">Github</h5>
                        <p>This.</p>
                        <a href="https://github.com/DannyBlaz" className="stretched-link">Github</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactInfo;