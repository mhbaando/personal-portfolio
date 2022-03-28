import React from "react";
import "./Heading.scss";
import { motion } from "framer-motion";
const Heading = ({ title }) => {
  let whiteHeading = "";
  let yellowHeading = " ";

  if (title.includes(" ")) {
    whiteHeading = title.split(" ")[0];
    yellowHeading += title.split(" ")[1];
  } else {
    whiteHeading = title.substring(0, 3);
    yellowHeading = title.substring(3);
  }

  return (
    <motion.h1
      initial={{ opacity: 0 }}
      whileInView={{ x: ["10%", "0%"], opacity: [0, 1] }}
      transition={{ type: "tween", duration: 0.8 }}
    >
      {whiteHeading}
      <span>{yellowHeading}</span>
    </motion.h1>
  );
};

export default Heading;
