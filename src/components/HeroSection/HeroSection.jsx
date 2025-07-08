import React from "react";
import SectionHeading from "../SectionHeading/SectionHeading";

const HeroSection = () => {
  return (
    <div>
      <SectionHeading sectionheading={"HERO SECTION"} tag={"Hello"} />
      
      <SectionHeading sectionheading={"SERVICES SECTION"} tag={"Service"} />
      <SectionHeading sectionheading={"CONTACT SECTION"} />
    </div>
  );
};

export default HeroSection;
