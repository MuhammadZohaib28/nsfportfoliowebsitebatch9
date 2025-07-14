import React from "react";
import "./Cards.css";
import { FaArrowRight } from "react-icons/fa";

const ProjectCard = ({ latestProjectImage, title, subtitle, handleClick }) => {
  return (
    <div className="projectcard" onClick={handleClick}>
      <div className="projectcard-image">
        <img src={latestProjectImage} />
      </div>

      <div className="projectcard-bottom">
        <div>
          <h3>{title}</h3>
          <span>{subtitle}</span>
        </div>

        <FaArrowRight className="projectcard-icon" />
      </div>
    </div>
  );
};

export default ProjectCard;
