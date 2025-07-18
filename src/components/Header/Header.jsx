import React from "react";
import "./Header.css";
import { Link as ScrollLink } from "react-scroll";

const Header = () => {
  const headerData = [
    {
      item: "NSF",
    },
    {
      item: "Home",
      address: "home",
    },
    {
      item: "Services",
      address: "services",
    },
    {
      item: "Skills",
      address: "skills",
    },
    {
      item: "Portfolio",
      address: "portfolio",
    },
    {
      item: "Contact",
      address: "contact",
    },
  ];

  return (
    <header className="header">
      <ul className="header-items">
        {headerData.map((i, index) => (
          <li key={index}>
            <ScrollLink
              to={i.address}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              activeClass="bg-red-500 p-1 text-white"
            >
              {i.item}
            </ScrollLink>
          </li>
        ))}
      </ul>

      <button className="header-button">Contact Now</button>
    </header>
  );
};

export default Header;
