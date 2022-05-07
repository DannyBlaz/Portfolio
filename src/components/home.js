import React from "react";
import me from '../assets/me.png'


function Home() {
    return (
        <div>
            <img className="my-pic" src={me}></img>
            <p> 
                Find My Resume in The Links Tab 
                Wrote Authentication for the User model, User controller, and Sessions controller.
                Used Rails Active_model_serializer to reduce the number of fetches made.
                Wrote reusable code in Ruby for the Model and Controller.
                Completed the MVC frame with JavaScript React components for Views.

            </p>
        </div>
    );
}

export default Home;