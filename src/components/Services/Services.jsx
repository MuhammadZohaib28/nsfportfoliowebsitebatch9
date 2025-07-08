import React from "react";
import "./Services.css";
import SectionHeading from "../SectionHeading/SectionHeading";
import Cards from "../Cards/Cards";
import { FaMobileRetro } from "react-icons/fa6";

const Services = () => {
  const cardsData = [
    {
      sno: "01",
      cardTile: "Web Design",
      cardDescription:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      cardIcon: <FaMobileRetro />,
    },
    {
      sno: "02",
      cardTile: "Development",
      cardDescription:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      cardIcon: <FaMobileRetro />,
    },
    {
      sno: "03",
      cardTile: "SEO Marketing",
      cardDescription:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      cardIcon: <FaMobileRetro />,
    },
    {
      sno: "04",
      cardTile: "Backend Development",
      cardDescription:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      cardIcon: <FaMobileRetro />,
    },
  ];
  return (
    <div>
      <SectionHeading
        tag={"Services"}
        sectionheading={"Services I Offer"}
        headingcss={"headingcss"}
        shapeVisible={true}
      />

      {cardsData.map((item, index) => (
        <Cards
          cardNo={item.sno}
          title={item.cardTile}
          description={item.cardDescription}
          icon={item.cardIcon}
        />
      ))}
    </div>
  );
};

export default Services;
