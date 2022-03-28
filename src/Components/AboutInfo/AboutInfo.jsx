import React, { useRef, useEffect } from "react";
import "./AboutInfo.scss";
import Lottie from "lottie-web";

import { SubHeading, Heading, Services } from "../../Components/index";
import images from "../../Constants/images";
import { motion } from "framer-motion";

const AboutInfo = () => {
  const titleVarient = {
    inView: { y: ["50%", "0%"], opacity: [0, 0.5, 1] },
  };

  const aboutBg = useRef(null);
  animateLottie(aboutBg);

  return (
    <div className="section-content">
      <div className="container-content">
        <div className="mh__aboutInfo">
          <div className="animationSVG">
            <div ref={aboutBg}></div>
          </div>

          <div className="content">
            <motion.div
              varients={titleVarient}
              whileInView={titleVarient.inView}
              className="info"
            >
              <SubHeading text="Who am i" />
              <Heading title="About me" />
              <motion.p className="desc">
                I am proffesional front-end devloper with almost two years of
                experience in developing websites using various technologies
                including html, css, scss, javaScript, Reactjs, Angular, Webflow
                & wordpress , also i am UI/UX Designer, wih background of 2D
                Animations and Vediography.
              </motion.p>
            </motion.div>

            <div className="techStach">
              <motion.div
                whileInView={{ y: ["-50%", "0%"], opacity: ["0", "1"] }}
                transition={{ ease: "easeInOut" }}
                className="upper"
              >
                <img src={images.HTML} alt="HTML Logo" />
                <img src={images.CSS} alt="CSS Logo" />
                <img src={images.Sass} alt="SASS Logo" />
                <img src={images.BootStrap} alt="BootStrap Logo" />
                <img src={images.JavaScript} alt="JavaScript Logo" />
                <img src={images.React} alt="React Logo" />
                <img src={images.Angular} alt="Angular Logo" />
              </motion.div>
              <motion.div
                className="lower"
                whileInView={{ y: ["-50%", "0%"], opacity: ["0", "1"] }}
                transition={{ ease: "easeInOut" }}
              >
                <img src={images.XD} alt="XD Logo" />
                <img src={images.Ae} alt="After Efferct Logo" />
                <img src={images.Ai} alt="Adobe Illustrator Logo" />
                <img src={images.Ps} alt="Adobe Photoshop Logo" />
              </motion.div>
            </div>
            <Services />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutInfo;

/// animate lottie on scroll
function animateLottie(aboutBg) {
  useEffect(() => {
    let animationDuration = 10000;
    const anim = Lottie.loadAnimation({
      container: aboutBg.current,
      renderer: "svg",
      loop: false,
      autoplay: false,
      path: "https://assets1.lottiefiles.com/packages/lf20_wMezg6.json",
    });
    function animatebodymovin(duration) {
      const scrollPosition = window.scrollY;
      const maxFrame = anim.totalFrames;

      const frame = maxFrame * ((scrollPosition * 4.2) / duration);
      anim.goToAndStop(frame, true);
    }

    const onScroll = () => {
      animatebodymovin(animationDuration);
    };
    document.addEventListener("scroll", onScroll);

    return () => {
      anim.destroy();
      document.removeEventListener("scroll", onScroll);
    };
  }, []);
}
