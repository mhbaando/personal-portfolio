import React, { useState } from "react";
import { ProjectsData } from "../../Data/index";
import { Project, Heading, SubHeading } from "../../Components/index";
import "./Projects.scss";

const Portfolio = () => {
  const [activeOne, setActiveOne] = useState({
    item: 0,
    tag: "All",
  });

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
                    onClick={() =>
                      setActiveOne((prev) => {
                        return {
                          item: index,
                          tag: filter,
                        };
                      })
                    }
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
                />
              )
            );
          })}
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

{
  /* <Project
key={project + index}
thumbnail={project.thumbnail}
name={project.name}
desc={project.desc}
tags={project.tags}
/> */
}
