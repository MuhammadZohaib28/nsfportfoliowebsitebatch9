import React from "react";
import "./Skills.css";
import SectionHeading from "../SectionHeading/SectionHeading";
import { FiAperture } from "react-icons/fi";
import SkillsCard from "../Cards/SkillsCard";
import mypicture from "../../assets/images/zohaibpicture.png";

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

  const experienceData = [
    {
      date: "Jan 2021 - Present",
      position: "Creative Director",
      location: "pxdraft Ltd, UK",
    },
    {
      date: "May 2023 - Present",
      position: "Director",
      location: "pxdraft Ltd,US",
    },
    {
      date: "Jan 2024 - Present",
      position: "Finance Director",
      location: "pxdraft Ltd, UAE",
    },
    {
      date: "Dec 2024 - Present",
      position: "Creative Designer",
      location: "pxdraft Ltd, UK",
    },
  ];
  return (
    <div className="skills-section">
      <div className="skills-section-left">
        <div className="skills-section-top">
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

        <div className="skills-section-bottom">
          <h1>My Skills</h1>

          <div className="skills-section-bottom-cards">
            {skillsData.map((item, index) => (
              <>
                <SkillsCard
                  skillsIcon={item.icon}
                  skillsTitle={item.title}
                  key={index}
                />
              </>
            ))}
          </div>
        </div>
      </div>

      <div className="skills-section-right">
        <div className="experience">
          <h1>Experience</h1>
          <div className="expeirnce-parent">
            {experienceData.map((item, index) => (
              <div className="experience-data">
                <span>{item.date}</span>

                <div className="position-location">
                  <h3>{item.position}</h3>
                  <span>{item.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="skills-section-picture">
          <img src={mypicture} className="skills-img" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
