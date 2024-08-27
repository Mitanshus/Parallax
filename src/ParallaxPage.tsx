import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { Typography } from "@mui/material";
import secondBackground from "./assets/BG.svg";

const ParallaxPage: React.FC = () => {
  return (
    <div className="parallax-container">
      <div className="static-background">
        <div className="left-half-bg"  style={{ backgroundImage: `url(${secondBackground})`  }} />
        <div className="right-half-bg" style={{ backgroundImage: `url(${secondBackground})` }} />
      </div>
      <Parallax pages={2}>
        <ParallaxLayer offset={0} speed={0.5}>
          <div className="content-wrapper">
            <div className="content">
              <h1 className="title">Thank you for your time</h1>
              <div className="link-container">
                <Typography fontWeight="bold">Contact Us</Typography>
                <Typography component="a" href="https://www.paradisefoodcourt.in/" target="_blank">
                  paradisefoodcourt.in
                </Typography>
                <Typography fontWeight="bold">EMAIL ADDRESS:</Typography>
                <Typography component="a" href="mailto:feedback@paradisefoodcourt.in">
                  feedback@paradisefoodcourt.in
                </Typography>
                <Typography fontWeight="bold">CONTACT NO:</Typography>
                <Typography component="a" href="tel:+91 040-67408400">
                  040-67408400
                </Typography>
              </div>
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.5}>
          <div className="content-wrapper">
            <div className="content">
              <h1 className="title">Thank you for your time</h1>
              <Typography fontWeight="bold">Hope You enjoyed our services</Typography>
            </div>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default ParallaxPage;