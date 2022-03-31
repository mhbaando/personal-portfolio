import React from "react";
import "./Project.scss";
import { Heading, Tags } from "../../Components/index";

import { motion, AnimatePresence } from "framer-motion";

const Project = (props) => {
  return (
    <>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ y: [props.ind * 2 + "%", "0%"], opacity: [0, 1] }}
          transition={{ type: "tween", duration: 0.8 }}
          className="mh__project"
          onClick={() => {
            // state lifting
            props.action(props.name);
          }}
        >
          <motion.div className="thumbnail">
            <img src={props.thumbnail} alt={props.name} />
          </motion.div>

          <motion.div className="project-content">
            <Heading title={props.name} />
            <motion.p>{props.desc}</motion.p>
          </motion.div>

          <Tags tags={props.tags} />
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default Project;
