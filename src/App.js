import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/home.js";
import About from './components/about.js';
import Projects from './components/projects.js';
import ContactInfo from './components/contactInfo.js';
import Navbar from './components/navbar.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <main>
        <Home />
        <About />
        <Projects />
        <ContactInfo />
      </main>
    </div>
  );
}

export default App;
