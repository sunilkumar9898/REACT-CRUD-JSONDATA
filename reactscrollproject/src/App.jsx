// App.js
import React from "react";
import { Link, Element } from "react-scroll";
import "./App.css";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Service from "./pages/Service";
// npm install react-scroll


const App = () => {
    return (
        <div>
            <nav className="navbar">
                <Link to="home" smooth={true} duration={500}>
                    Home
                </Link>
                <Link to="about" smooth={true} duration={500}>
                    About
                </Link>
                <Link to="services" smooth={true} duration={500}>
                    Services
                </Link>
                <Link to="contact" smooth={true} duration={500}>
                    Contact
                </Link>
            </nav>

            <Element name="home" className="section">
                <Home />
            </Element>
            <Element name="about" className="section">
                <div>
                    <h1>About Section</h1>
                    <p>This is the About section.</p>
                </div>
            </Element>
            <Element name="services" className="section">
                <Service />
            </Element>
            <Element name="contact" className="section">
                <Contact />
            </Element>
        </div>
    );
};

export default App;
