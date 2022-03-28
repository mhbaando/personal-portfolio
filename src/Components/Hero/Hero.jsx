import React, { useState, useEffect, useRef } from "react";
import "./Hero.scss";

import { SubHeading, Button } from "../index";
import images from "../../Constants/images";
import { animations, motion } from "framer-motion";
import lottie from "lottie-web";
import animationData from "../../Animations/hand.json";
const Hero = () => {
  // animationka gacanta
  const handAnimation = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      // where will be rendered in the dom
      container: handAnimation.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData,
    });
  }, []);

  return (
    <div className="section-content">
      <div className="container-content">
        <div className="mh__hero">
          <motion.div className="mh__hero-content">
            <SubHeading text="Introduction" />
            <motion.div
              whileInView={{ y: ["-10%", "0%"], opacity: [0, 0.5, 1] }}
              className="hello"
            >
              <h1>Hello</h1>
              <div className="hand-animation" ref={handAnimation}></div>
            </motion.div>

            <motion.h1 whileInView={{ x: ["10%", "0%"], opacity: [0, 0.5, 1] }}>
              I'm <span>Mohamud</span>
            </motion.h1>
            <motion.p
              className="desc"
              whileInView={{ y: ["30%", "0%"], opacity: [0, 0.5, 1] }}
            >
              Since begining my journey as a freelance deigner and Devloper
              nearby <span>2 years</span> i've done remote work for
              <span> Agencies </span>
              consulted for startup and collabrated with
              <span> Talented people </span>to create digital products
            </motion.p>
            <motion.div
              className="socials"
              whileInView={{ y: ["-50%", "0%"], opacity: [0, 0.5, 1] }}
            >
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
            </motion.div>
          </motion.div>
          <motion.div className="mh__hero-image">
            <motion.img
              whileInView={{
                scale: ["60%", "100%"],
                opacity: [0, 1],
                transition: { delay: 0.15 },
              }}
              src={images.mohamud}
              alt="Mohamud Ali Abshir"
            />
            <motion.div
              whileInView={{ scale: [0.5, 1], opacity: [0, 1] }}
              className="orange-circle"
            ></motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
