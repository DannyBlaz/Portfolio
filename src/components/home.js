import React from "react";
import me from '../assets/me.png'


function Home() {
    return (
        <div>
            <img className="my-pic" src={me}></img>
            <p> Find My Resume in The Links Tab </p>
        </div>
    );
}

export default Home;