import React from "react";
import { Button } from 'react-bootstrap';

function ContactInfo() {
    return (
        <div>
            <Button>
                <a href="https://github.com/DannyBlaz">Github</a>
            </Button>
            <Button>
                <a href="https://www.linkedin.com/in/daniel-ezekiel/">LinkedIn</a>
            </Button>

            <Button >Button #1</Button>
        </div>
    );
}

export default ContactInfo;