import React from "react";
import "./Services.scss";
import { ServiceData } from "../../Data/index";
import { motion } from "framer-motion";

const Services = () => {
  // waxan ku dulwagyna datada noga timid service data
  return (
    <div className="mh__services">
      {ServiceData.map((service, index) => {
        return (
          <motion.div
            whileInView={{
              opacity: [0, 1],
              y: [index % 2 === 0 ? "5%" : "-5%", "0%"],
            }}
            className="service"
            key={index + service.name}
          >
            <div className="service-img">
              <img src={service.icon} alt={service.name} />
            </div>
            <div className="service-content">
              {splitService(service.name)}
              <p>{service.desc}</p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default Services;

// split service name based on "space"
function splitService(service) {
  let whitePart = "";
  let orangePart = "";
  if (service.includes(" ")) {
    orangePart = service.split(" ")[0];
    whitePart = service.split(" ")[1];
  } else {
    orangePart = service.substring(0, 3);
    whitePart = service.substring(3);
  }
  return (
    <h2>
      <span>{orangePart} </span>
      {whitePart}
    </h2>
  );
}
