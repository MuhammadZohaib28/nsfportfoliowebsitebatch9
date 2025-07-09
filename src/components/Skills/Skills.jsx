import React from "react";
import "./Skills.css";
import SectionHeading from "../SectionHeading/SectionHeading";
import { FiAperture } from "react-icons/fi";

const Skills = () => {
  const skillsData = [
    {
      icon: <FiAperture />,
      title: "HTML",
    },
    {
      icon: <FiAperture />,
      title: "CSS",
    },
    {
      icon: <FiAperture />,
      title: "ReactJS",
    },
    {
      icon: <FiAperture />,
      title: "Angular",
    },
    {
      icon: <FiAperture />,
      title: "iOs App",
    },
    {
      icon: <FiAperture />,
      title: "App Dev",
    },
  ];
  return (
    <div className="skills-section">
      <div>
        <div>
          <SectionHeading
            sectionheading={"Skills and Experience"}
            tag={"Experience"}
            headingcss="headingcss"
            shapeVisible={true}
          />

          <p>
            I design and develop services for customers of all sizes,
            specializing in creating stylish, modern websites, web services and
            online stores.
          </p>
        </div>

        <div>
          <h1>My Skills</h1>

          {skillsData.map((item, index) => (
            <>
              <span>{item.icon}</span>

              <h3>{item.title}</h3>
            </>
          ))}
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default Skills;
