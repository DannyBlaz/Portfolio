import React from "react";
import { Button } from 'react-bootstrap';

function ContactInfo() {
    return (
        <div>
            <h1>Contact Info</h1>
            <Button>
                <a style={{color:"#000"}} href="https://github.com/DannyBlaz">Github</a>
            </Button>
            <Button>
                <a style={{ color: "#000" }} href="https://www.linkedin.com/in/daniel-ezekiel/">LinkedIn</a>
            </Button>
        </div>
    );
}

export default ContactInfo;