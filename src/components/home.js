import React from "react";
import me from '../assets/me.png'


function Home() {
    return (
        <div>
            <img className="my-pic" src={me}></img>
            <p> He's Highness</p>
        </div>
    );
}

export default Home;