import React, { useState } from "react";
import "./LatestProjects.css";
import SectionHeading from "../SectionHeading/SectionHeading";
import ProjectCard from "../Cards/ProjectCard";

const LatestProjects = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [imageAvailable, setImageAvailable] = useState(null);

  const handleClick = (image) => {
    setModalOpen(true);
    setImageAvailable(image);
  };

  const latestProjectData = [
    {
      image: "https://boston-react.vercel.app/assets/img/project-1.jpg",
      title: "Agency Landing page",
      subtitle: "Web/WordPress",
    },
    {
      image: "https://boston-react.vercel.app/assets/img/project-2.jpg",
      title: "NSF Landing page",
      subtitle: "Web/WordPress",
    },
    {
      image: "https://boston-react.vercel.app/assets/img/project-1.jpg",
      title: "ABC Landing page",
      subtitle: "Web/WordPress",
    },
    {
      image: "https://boston-react.vercel.app/assets/img/project-2.jpg",
      title: "Agency Landing page",
      subtitle: "Web/WordPress",
    },
    {
      image: "https://boston-react.vercel.app/assets/img/project-1.jpg",
      title: "Agency Landing page",
      subtitle: "Web/WordPress",
    },
    {
      image: "https://boston-react.vercel.app/assets/img/project-1.jpg",
      title: "Agency Landing page",
      subtitle: "Web/WordPress",
    },
  ];

  return (
    <div className="latestproject">
      <SectionHeading
        sectionheading={"Latest Projects"}
        tag={"Portfolio"}
        headingcss="headingcss"
      />

      <div className="latestproject-cards">
        {latestProjectData.map((item, index) => (
          <ProjectCard
            key={index}
            latestProjectImage={item.image}
            title={item.title}
            subtitle={item.subtitle}
            handleClick={() => handleClick(item.image)}
          />
        ))}
      </div>

      {modalOpen && (
        <div className="modalopen">
          <img src={imageAvailable} />
        </div>
      )}
    </div>
  );
};

export default LatestProjects;
