import React from 'react'
import { Carousel } from "antd";

const Home = () => {
    const contentStyle = {
        height: "880px",
        color: "#fff",
        lineHeight: "160px",
        textAlign: "center",
        background: "#364d79",
    };
  return (
      <div className="container">
          <Carousel autoplay arrows className='hero_section'>
              <div>
                  <h3 style={contentStyle}>
                      <img  src="29.jpg" alt="" />
                  </h3>
              </div>
              <div>
                  <h3 style={contentStyle}>
                      <img src="02.jpg" alt="" />
                  </h3>
              </div>
              <div>
                  <h3 style={contentStyle}>
                      <img src="03.jpg" alt="" />
                  </h3>
              </div>
              <div>
                  <h3 style={contentStyle}>
                      <img src="04.jpg" alt="" />
                  </h3>
              </div>
          </Carousel>
      </div>
  );
}

export default Home
