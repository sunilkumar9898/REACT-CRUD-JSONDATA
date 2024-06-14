import React from 'react'
import {Link,Element} from 'react-scroll'
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Galllery from '../pages/Galllery';
import Service from '../pages/Service';

const Navbar = () => {
  return (
      <div>
          <nav>
              <Link to={"/"} smooth={true} duration={500}>
                  Home
              </Link>
              <Link to={"about"} smooth={true} duration={500}>
                  About
              </Link>
              <Link to={"contact"} smooth={true} duration={500}>
                  Contact
              </Link>
              <Link to={"gallery"} smooth={true} duration={500}>
                  Gallery
              </Link>
              <Link to={"service"} smooth={true} duration={500}>
                  Service
              </Link>
          </nav>
          <section >
              <Element name="/">
                  <Home />
              </Element>
              <Element name="about">
                  <About />
              </Element>
              <Element name="contact">
                  <Contact />
              </Element>
              <Element name="gallery">
                  <Galllery />
              </Element>
              <Element name="service">
                  <Service />
              </Element>
          </section>
      </div>
  );
}

export default Navbar
