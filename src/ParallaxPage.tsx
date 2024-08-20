import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { Typography } from "@mui/material";
import secondBackground from "./assets/BG.svg";

const ParallaxPage: React.FC = () => {
  return (
    <div className="parallax-container">
      <Parallax pages={1.5}>
        {/* Background Layer */}
        <ParallaxLayer offset={0} speed={0.1} factor={1}>
          {/* <div className="full-bg" style={{ backgroundImage: `url(${bigBackground})` }} /> */}
        </ParallaxLayer>

        {/* Floating Elements */}
        <ParallaxLayer offset={0} speed={0.3} style={{ pointerEvents: 'none' }}>
          <div className="floating-element top-left" />
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.5} style={{ pointerEvents: 'none' }}>
          <div className="floating-element bottom-right" />
        </ParallaxLayer>

        {/* Left Half Background */}
        <ParallaxLayer offset={0} speed={0.2} style={{ pointerEvents: 'none' }}>
          <div className="left-half-bg" style={{ backgroundImage: `url(${secondBackground})` }} />
        </ParallaxLayer>

        {/* Right Half Background */}
        <ParallaxLayer offset={0} speed={0.2} style={{ pointerEvents: 'none' }}>
          <div className="right-half-bg" style={{ backgroundImage: `url(${secondBackground})` }} />
        </ParallaxLayer>

        {/* Main Content */}
        <ParallaxLayer offset={0} speed={0.7}>
          <div className="content-wrapper">
            <div className="content">
              <h1 className="title">Thank you for your time</h1>
              <div className="link-container">
                <Typography fontWeight="bold">Contact Us</Typography>
                <Typography
                  component="a"
                  href="https://www.paradisefoodcourt.in/"
                  target="_blank"
                >
                  paradisefoodcourt.in
                </Typography>
                <Typography fontWeight="bold">EMAIL ADDRESS:</Typography>
                <Typography
                  component="a"
                  href="mailto:feedback@paradisefoodcourt.in"
                >
                  feedback@paradisefoodcourt.in
                </Typography>
                <Typography fontWeight="bold">CONTACT NO:</Typography>
                <Typography
                  component="a"
                  href="tel:+91 040-67408400"
                >
                  040-67408400
                </Typography>
              </div>
            </div>
          </div>
        </ParallaxLayer>

        {/* Scroll Indicator */}
        <ParallaxLayer offset={0.95} speed={1.5}>
          <div className="scroll-indicator">
            <div className="content">
<h1 className="title">Thank you for your time</h1>
                <Typography fontWeight="bold">Hope You enjoyed our servies</Typography>
            </div>
               
              
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default ParallaxPage;