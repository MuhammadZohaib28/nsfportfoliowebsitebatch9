import React from "react";

const Header = () => {
  const headerData = [
    {
      item: "JAVERIA",
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
  ];

  return (
    <header>
      <ul>
        {headerData.map((i, name) => (
          <li>{i.item}</li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
