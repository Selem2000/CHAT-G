import React, { useState } from "react";
import "./Landpage.css";
import { Button, Collapse, Grow, Slide, Zoom } from "@mui/material";
import { Link } from "react-router-dom";
const LandPage = () => {
  const [show, setShow] = useState(false);

  const btnBoxStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "20%",
    justifyContent: "space-around",
    display: "flex",
  };
  const btnStyle = {
    fontSize: "20px",
    background: "#000",
  };
  return (
    <div class="hero">
      <div className="info-btn" onClick={() => setShow(!show)}>
        {!show ? "i" : "X"}
      </div>
      <Slide direction="up" in={show}>
        <p className="info">
          This is a web site created by Salem to help people to share theire
          opinions and have fun
        </p>
      </Slide>
      <div className="heading">
        <Zoom in={true} style={{ transitionDelay: "400ms" }}>
          <div class="hero__title">Welcome To Chat Groupe</div>
        </Zoom>
        <div className="btn-nav">
          <Link to="/login">
            <Slide
              direction="right"
              in={true}
              style={{ transitionDelay: "600ms" }}
            >
              <Button variant="contained" style={btnStyle}>
                LogIn
              </Button>
            </Slide>
          </Link>

          <Link to="/register">
            <Slide
              direction="left"
              in={true}
              style={{ transitionDelay: "600ms" }}
            >
              <Button variant="contained" style={btnStyle}>
                Register
              </Button>
            </Slide>
          </Link>
        </div>
      </div>
      <div class="cube"></div>
      <div class="cube"></div>
      <div class="cube"></div>
      <div class="cube"></div>
      <div class="cube"></div>
      <div class="cube"></div>
      <div className="btn" style={btnBoxStyle}></div>
    </div>
  );
};

export default LandPage;
