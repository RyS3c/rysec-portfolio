import React, { useContext } from "react";
import "./Works.css";
import { themeContext } from "../../Context";
import { Link } from "react-scroll";
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            Software Engineer
          </span>
          <span>Fullstack Developer</span>
          <spane>
            Experience developing and creating different kinds of E-commerce
            website and web applications
          </spane>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Works;
