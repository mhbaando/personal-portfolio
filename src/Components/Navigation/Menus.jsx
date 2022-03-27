import React, { useState, useEffect } from "react";

import images from "../../Constants/images";
import { menus } from "../../Data/index";
import { Button } from "../index";
import { BiMenuAltRight } from "react-icons/bi";
import { RiCloseFill } from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";
import "./Navigation.scss";

const Menus = () => {
  const [isOpen, setIsOpen] = useState(false);

  // bodga scrolka ka xir hadii mobile menuga lafuray
  useEffect(() => {
    const body = document.querySelector("body");
    isOpen
      ? body.classList.add("overflow-hidden")
      : body.classList.remove("overflow-hidden");
  }, [isOpen]);

  // overlay varients
  const overlay = {
    hidden: { opacity: 0, scaleX: 0 },
    show: { opacity: 1, scaleX: 1, visibility: "visible" },
  };

  // mobile menu varients
  const mobileVarients = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,

      visibility: "visible",
      transition: {
        duration: 0.3,
      },
    },
  };

  // list menu items
  const menuItems = menus.map((menu, index) => {
    return (
      <a
        key={menu.name + index}
        href={menu.link}
        className={`${menu.name === "Home" && "active"}`}
      >
        <li>{menu.name}</li>
      </a>
    );
  });

  return (
    <>
      <div className="section">
        <div className="container">
          <nav className="mh__nav">
            <div className="mh__brand">
              <img src={images.logo} alt="MhBaando Logo" />
            </div>

            <div className="mh__links">
              <ul>{menuItems}</ul>
            </div>

            <div className="mh__cta">
              <Button type="button" className="mh__cta-btn">
                Contact Me
              </Button>
              <motion.div
                variants={mobileVarients}
                initial="hidden"
                animate="show"
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <BiMenuAltRight onClick={() => setIsOpen(true)} />
              </motion.div>
            </div>
          </nav>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={overlay}
            initial="hidden"
            animate="show"
            exit="hidden"
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="overlay"
            onClick={() => setIsOpen(false)}
          ></motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={mobileVarients}
            initial="hidden"
            animate="show"
            close="hidden"
            exit="hidden"
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="mh__mobile"
          >
            <RiCloseFill onClick={() => setIsOpen(false)} />

            <ul onClick={() => setIsOpen(false)}>{menuItems}</ul>
            <Button type="button" className="mobile-nav">
              Contact Me
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Menus;
