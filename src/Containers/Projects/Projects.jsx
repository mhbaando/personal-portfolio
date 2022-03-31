import React, { useState } from "react";
import { ProjectsData } from "../../Data/index";
import {
  Project,
  Heading,
  SubHeading,
  ProjectDetail,
} from "../../Components/index";
import { ProjectsContext } from "../../Context/ProjectsContext";
import "./Projects.scss";
import { AnimatePresence, motion } from "framer-motion";

const Portfolio = () => {
  const [activeOne, setActiveOne] = useState({
    item: 0,
    tag: "All",
  });

  const [isOpen, setIsOpen] = useState({
    name: "",
    isvisible: false,
  });

  const choosenNameHandler = (name) => {
    setIsOpen({
      name,
      isvisible: true,
    });
  };

  filterTags();
  return (
    <div className="section-content">
      <div className="container-content">
        <div className="project-header">
          <div>
            <SubHeading text="My Recent Work" />
            <Heading title="Projects" />
          </div>
          <div className="filterfor">
            <ul>
              {filterTags().map((filter, index) => {
                return (
                  <li
                    className={index === activeOne.item ? "active" : ""}
                    key={index}
                    onClick={() => {
                      setActiveOne({
                        item: index,
                        tag: filter,
                      });
                      setIsOpen({
                        isvisible: false,
                      });
                    }}
                  >
                    {filter}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="mh__Projects">
          {ProjectsData.map((project, index) => {
            return (
              project.tags.includes(activeOne.tag) && (
                <Project
                  key={project + index}
                  ind={index}
                  thumbnail={project.thumbnail}
                  name={project.name}
                  desc={project.desc}
                  tags={project.tags}
                  action={choosenNameHandler}
                />
              )
            );
          })}

          {/* Project Details  "*/}
          <ProjectsContext.Provider value={{ isOpen, setIsOpen }}>
            {isOpen.isvisible && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                exit={{ opacity: 0 }}
              >
                <ProjectDetail name={isOpen.name} />
              </motion.div>
            )}
          </ProjectsContext.Provider>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

function filterTags() {
  let filters = [];
  ProjectsData.map((project) => {
    project.tags.map((tag) => {
      filters.push(tag);
    });
  });
  return (filters = [...new Set(filters.sort())]);
}
