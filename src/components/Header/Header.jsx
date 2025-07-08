import React from "react";
import "./Header.css";

const Header = () => {
  const headerData = [
    {
      item: "NSF",
      address: "/home",
    },
    {
      item: "Home",
      address: "/home",
    },
    {
      item: "Services",
      address: "/services",
    },
    {
      item: "Skills",
      address: "/skills",
    },
    {
      item: "Portfolio",
      address: "/portfolio",
    },
    {
      item: "Contact",
      address: "/contact",
    },
  ];

  return (
    <header className="header">
      <ul className="header-items">
        {headerData.map((i, index) => (
          <li key={index}>{i.item}</li>
        ))}
      </ul>

      <button className="header-button">Contact Now</button>
    </header>
  );
};

export default Header;
