import React, { useContext } from "react";
import "./ProjectDetail.scss";

import { ProjectsData } from "../../Data/";
import images from "../../Constants/images";
import { ProjectsContext } from "../../Context/ProjectsContext";
import { Heading, Qrcode, Tags } from "../index";

const ProjectDetail = (props) => {
  const { isOpen, setIsOpen } = useContext(ProjectsContext);
  const { name, desc, tags, thumbnail, fullSite, url } = extracrData(
    props.name
  );

  return (
    <>
      <div
        className="project-overlay"
        onClick={() => {
          setIsOpen({
            isvisible: !isOpen.isvisible,
          });
        }}
      ></div>
      <div className="mh__projectDetail">
        <div className="project-thumbnail">
          <img src={thumbnail} alt={name} />
        </div>
        <div className="project-info">
          <div className="project-info-content">
            <Heading title="Client Info" />
            <p className="desc">{desc}</p>
            <Heading title="Live Website" />
            <a href={url}>
              <p>{url}</p>
            </a>
            <Heading title="Tech Stack" />
            <Tags tags={tags} />
          </div>
          <div className="project-qrcode">
            <Qrcode text={url} />
          </div>
        </div>
        <div className="project-main">
          <img src={fullSite} alt={name} />
        </div>
      </div>
    </>
  );
};

export default ProjectDetail;

// data ayuu noo soo saaryaa
function extracrData(name) {
  return ProjectsData.map((data) => data).filter(
    (data) => data.name === name
  )[0];
}
