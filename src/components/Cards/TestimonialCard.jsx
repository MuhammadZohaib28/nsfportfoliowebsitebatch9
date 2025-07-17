import React from "react";
import "./Cards.css";

const TestimonialCard = ({ image, detail, title, designation }) => {
  return (
    <div className="testimonialCard">
      <img src={image} />

      <p>{detail}</p>

      <div>
        <h3>{title}</h3>
        <span>{designation}</span>
      </div>
    </div>
  );
};

export default TestimonialCard;
