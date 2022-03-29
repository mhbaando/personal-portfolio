import React from "react";
import "./Client.scss";
import { motion } from "framer-motion";

const Client = (props) => {
  return (
    <div className="mh__client">
      {props.clients.map((client, index) => {
        return (
          <motion.div
            whileInView={{ y: [index * 10 + "%", "0%"], opacity: ["0", "1"] }}
            transition={{
              duration: 1,
              ease: "easeInOut",
              delayChildren: index * 0.5,
            }}
            key={client.name + index}
            className="client"
          >
            <a href={client.website} target="_blank">
              <img src={client.logo} alt={client.name} />
            </a>
          </motion.div>
        );
      })}
    </div>
  );
};

export default Client;
