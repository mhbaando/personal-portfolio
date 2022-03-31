import React from "react";
import "./Tags.scss";
import { motion } from "framer-motion";

const Tags = (props) => {
  return (
    <motion.div className="tags">
      {props.tags.map((tag, index) => {
        return (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{
              y: [props.ind * 2 + "%", "0%"],
              opacity: [0, 1],
            }}
            transition={{ type: "tween", duration: 1 }}
            key={index + tag}
            className="tag"
          >
            <p>{tag}</p>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default Tags;
