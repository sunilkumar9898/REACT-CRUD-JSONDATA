// App.js
import React, { useEffect } from "react";
import { Link, Element } from "react-scroll";
import "./App.css";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Service from "./pages/Service";
import AOS from "aos";
import "aos/dist/aos.css";
// npm install react-scroll


const App = () => {
  useEffect(() => {
      AOS.init({
          disable: "phone",
          duration: 700,
          easing: "ease-out-cubic",
      });
  }, []);

    return (
        <div>
            <nav className="navbar">
                <Link to="/" smooth={true} duration={500}>
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

            <Element name="/" className="section">
                <Home />
            </Element>
            <Element
                data-aos="zoom-in"
                data-aos-delay="100"
                name="about"
                className="section">
                <div>
                    <h1>About Section</h1>
                    <p>This is the About section.</p>
                </div>
            </Element>
            <Element data-aos="zoom-in" data-aos-delay="50" name="services">
                <Service />
            </Element>
            <Element
                data-aos="zoom-in"
                data-aos-offset="200"
                data-aos-easing="ease-in-sine"
                data-aos-duration="600"
                name="contact"
                className="section">
                <Contact />
            </Element>
        </div>
    );
};

export default App;
