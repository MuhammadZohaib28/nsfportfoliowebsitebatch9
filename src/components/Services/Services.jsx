import React from "react";
import "./Services.css";
import SectionHeading from "../SectionHeading/SectionHeading";
import Cards from "../Cards/Cards";
import { FaMobileRetro } from "react-icons/fa6";
import { FaLaptop } from "react-icons/fa";
import { BsTriangle } from "react-icons/bs";
import { RiLayout5Line } from "react-icons/ri";

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
      cardIcon: <FaLaptop />,
    },
    {
      sno: "03",
      cardTile: "SEO Marketing",
      cardDescription:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      cardIcon: <BsTriangle />,
    },
    {
      sno: "04",
      cardTile: "Backend Development",
      cardDescription:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      cardIcon: <RiLayout5Line />,
    },
    {
      sno: "04",
      cardTile: "Backend Development",
      cardDescription:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      cardIcon: <RiLayout5Line />,
    },
    {
      sno: "04",
      cardTile: "Backend Development",
      cardDescription:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      cardIcon: <RiLayout5Line />,
    },
  ];

  return (
    <div className="services" id="services">
      <SectionHeading
        tag={"Services"}
        sectionheading={"Services I Offer"}
        headingcss={"headingcss"}
        shapeVisible={true}
      />

      <div className="services-cards">
        {cardsData.map((item, index) => (
          <Cards
            key={index}
            cardNo={item.sno}
            title={item.cardTile}
            description={item.cardDescription}
            icon={item.cardIcon}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
