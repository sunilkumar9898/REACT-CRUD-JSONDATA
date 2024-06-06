import React from 'react'
import { Link } from 'react-router-dom'
// import image from "./s.jpg";

const Navbar = () => {
  return (
      <div className="navbar">
          {/* <img className='logo_img' src={image} /> */}
          <Link to={"/"}>Home</Link>
          <Link to={"product"}>product</Link>
          <Link to={"men"}>men</Link>
      </div>
  );
}

export default Navbar
