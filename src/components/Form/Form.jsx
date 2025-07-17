import React from "react";
import "./Form.css";
import SectionHeading from "../SectionHeading/SectionHeading";
import { IoMailOutline } from "react-icons/io5";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Form = () => {
  const formData = [
    {
      icon: <IoMailOutline />,
      label: "Phone",
      description: "+01 123 654 8096",
    },
    {
      icon: <FaPhoneAlt />,
      label: "Mail",
      description: "info@domainname.com",
    },
    {
      icon: <FaMapMarkerAlt />,
      label: "Visit My Studio",
      description: "Warnwe Park Streetperrine, FL 33157 New York City",
    },
  ];

  return (
    <div className="form">
      <SectionHeading
        sectionheading={"Let's Discuss Project"}
        tag={"Contact"}
        headingcss={"headingcss"}
      />

      <div className="form-bottom">
        <div className="form-bottom-left">
          <div>
            <h1>Get in touch</h1>
            <p>Our friendly team would love to hear from you.</p>
          </div>

          <form>
            <div className="form-firstname-email">
              <div className="form-firstname">
                <label>First Name</label>
                <input type="text" placeholder="Name*" />
              </div>

              <div className="form-firstname">
                <label>Your Email</label>
                <input type="email" placeholder="Email*" />
              </div>
            </div>

            <div className="form-subject-message-button">
              <label>Subject</label>
              <input type="text" placeholder="Subject*" />

              <label>Your Message</label>
              <textarea placeholder="Your message*"></textarea>

              <button className="header-button">Send Message</button>
            </div>
          </form>
        </div>

        <div className="form-bottom-right">
          <div className="formData-container">
            {formData.map((item, index) => (
              <div key={index} className="formData">
                <span className="formData-icon">{item.icon}</span>

                <div className="bottom-border">
                  <span>{item.label}</span>
                  <h2>{item.description}</h2>
                </div>
              </div>
            ))}
          </div>

          <div className="form-image-container">
            <img src="https://muhammadzuhaib-git-master-muhammadzohaib28.vercel.app/assets/aboutmee-7a57c3bb.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
