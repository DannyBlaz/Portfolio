import React from "react";
import fineArt from "../assets/fineart.png"
import messageBoard from "../assets/messageboard.png"
import food from "../assets/food.png"

function Projects() {
    return (
        <div>
            <h1>Projects</h1>
            <div id="project-card" class="row row-cols-1 row-cols-md-2 g-3">
                <div className="card" style={{ width: "18rem" }}>
                    <img src={fineArt} className="card-img-top" alt="App image" />
                    <div className="card-body">
                        <h5 className="card-title">FineArt</h5>
                        <p className="card-text">App that helps Art School students share their work with colleagues.</p>
                        <a href="https://secure-forest-02892.herokuapp.com" className="btn btn-primary">Demo</a>
                    </div>
                </div>
                <div className="card" style={{ width: "18rem" }}>
                    <img src={messageBoard} className="card-img-top" alt="App image" />
                    <div className="card-body">
                        <h5 className="card-title">Message Board</h5>
                        <p className="card-text">Web app that models old messaging forums where users can create accounts and chat with random strangers.</p>
                        <a href="https://pure-temple-59698.herokuapp.com" className="btn btn-primary">Demo</a>
                    </div>
                </div>
                <div className="card" style={{ width: "18rem" }}>
                    <img src={food} className="card-img-top" alt="App image" />
                    <div className="card-body">
                        <h5 className="card-title">Food</h5>
                        <p className="card-text">Web app that models old messaging forums where users can create accounts and chat with random strangers.</p>
                        <a href="https://dannyblaz.github.io/food-project/" className="btn btn-primary">Demo</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;