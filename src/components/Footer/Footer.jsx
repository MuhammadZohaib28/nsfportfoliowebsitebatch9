import React from "react";
import "./Footer.css";
import { IoLogoFacebook } from "react-icons/io5";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  const footerIcons = [
    {
      icon: <IoLogoFacebook />,
      link: "https://www.facebook.com/usernmae",
    },
    {
      icon: <FaTwitter />,
      link: "https://x.com/",
    },
    {
      icon: <FaLinkedin />,
      link: "https://www.linkedIn.com/username",
    },
    {
      icon: <FaGithub />,
      link: "https://www.github.com/MuhammadZohaib28",
    },
  ];

  const currentYear = new Date().getFullYear();

  console.log(currentYear, "YEAR");

  return (
    <footer>
      <div>
        {footerIcons.map((item, index) => (
          <a href={item.link} target="_blank" className="footer-icons">
            {item.icon}
          </a>
        ))}
      </div>

      <div>
        <p>© {currentYear} copyright all right reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
