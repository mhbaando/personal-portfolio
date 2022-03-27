import React from "react";
import "./Hero.scss";

import { SubHeading, Button } from "../index";
import images from "../../Constants/images";

const Hero = () => {
  return (
    <div className="section-content">
      <div className="container-content">
        <div className="mh__hero">
          <div className="mh__hero-content">
            <SubHeading text="Introduction" />
            <h1>Hello</h1>
            <h1>
              I'm <span>Mohamud</span>
            </h1>
            <p className="desc">
              Since begining my journey as a freelance deigner and Devloper
              nearby <span>2 years</span> i've done remote work for
              <span> Agencies </span>
              consulted for startup and collabrated with
              <span> Talented people </span>to create digital products
            </p>
            <div className="socials">
              <Button type="button" className="linkedIn">
                <a href="https://www.linkedin.com/in/mhbaando" target="_blank">
                  <img src={images.linkedIn} alt="LinkedIn Logo" /> Linked In
                </a>
              </Button>
              <Button type="button" className="github">
                <a href="https://github.com/mhbaando" target="_blank">
                  <img src={images.gitHub} alt="GitHub Logo" /> GitHub
                </a>
              </Button>
            </div>
          </div>
          <div className="mh__hero-image">
            <img src={images.mohamud} alt="Mohamud Ali Abshir" />
            <div className="orange-circle"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
