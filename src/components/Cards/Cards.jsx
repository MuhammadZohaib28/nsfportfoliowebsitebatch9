import React from "react";
import "./Cards.css";
import { CiStickyNote } from "react-icons/ci";

const Cards = ({ cardNo, title, description, icon }) => {
  return (
    <div>
      <h1>{cardNo}</h1>
      <span>{title}</span>
      <p>{description}</p>

      <span>{icon}</span>
    </div>
  );
};

export default Cards;
