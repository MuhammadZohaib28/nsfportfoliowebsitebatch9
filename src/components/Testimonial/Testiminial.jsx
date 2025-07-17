import React from "react";
import SectionHeading from "../SectionHeading/SectionHeading";
import "./Testiminial.css";
import TestimonialCard from "../Cards/TestimonialCard";

const Testimonial = () => {
  const testimonialData = [
    {
      image: "https://boston-react.vercel.app/assets/img/avatar-1.jpg",
      detail:
        "lorem ipsom lorem ipsomlorem ipsomlorem ipsomlorem ipsomlorem ipsomlorem ipsomlorem ipsomlorem ipsomlorem ipsomlorem ipsomlorem ipsomlorem ipsomlorem ipsomlorem ipsomlorem ipsomlorem ipsom",
      title: "Nayee Subah Foundation",
      designation: "Frontend ReactJS Developer",
    },
    {
      image: "https://boston-react.vercel.app/assets/img/avatar-1.jpg",
      detail:
        "lorem ipsom lorem ipsomlorem ipsomlorem ipsomlorem ipsomlorem ipsomlorem ipsomlorem ipsomlorem ipsomlorem ipsomlorem ipsomlorem ipsomlorem ipsomlorem ipsomlorem ipsomlorem ipsomlorem ipsom",
      title: "Nayee Subah Foundation",
      designation: "Frontend ReactJS Developer",
    },
    {
      image: "https://boston-react.vercel.app/assets/img/avatar-1.jpg",
      detail:
        "lorem ipsom lorem ipsomlorem ipsomlorem ipsomlorem ipsomlorem ipsomlorem ipsomlorem ipsomlorem ipsomlorem ipsomlorem ipsomlorem ipsomlorem ipsomlorem ipsomlorem ipsomlorem ipsomlorem ipsom",
      title: "Nayee Subah Foundation",
      designation: "Frontend ReactJS Developer",
    },
    {
      image: "https://boston-react.vercel.app/assets/img/avatar-1.jpg",
      detail:
        "lorem ipsom lorem ipsomlorem ipsomlorem ipsomlorem ipsomlorem ipsomlorem ipsomlorem ipsomlorem ipsomlorem ipsomlorem ipsomlorem ipsomlorem ipsomlorem ipsomlorem ipsomlorem ipsomlorem ipsom",
      title: "Nayee Subah Foundation",
      designation: "Frontend ReactJS Developer",
    },
    {
      image: "https://boston-react.vercel.app/assets/img/avatar-1.jpg",
      detail:
        "lorem ipsom lorem ipsomlorem ipsomlorem ipsomlorem ipsomlorem ipsomlorem ipsomlorem ipsomlorem ipsomlorem ipsomlorem ipsomlorem ipsomlorem ipsomlorem ipsomlorem ipsomlorem ipsomlorem ipsom",
      title: "Nayee Subah Foundation",
      designation: "Frontend ReactJS Developer",
    },
    {
      image: "https://boston-react.vercel.app/assets/img/avatar-1.jpg",
      detail:
        "lorem ipsom lorem ipsomlorem ipsomlorem ipsomlorem ipsomlorem ipsomlorem ipsomlorem ipsomlorem ipsomlorem ipsomlorem ipsomlorem ipsomlorem ipsomlorem ipsomlorem ipsomlorem ipsomlorem ipsom",
      title: "Nayee Subah Foundation",
      designation: "Frontend ReactJS Developer",
    },
  ];

  return (
    <div className="testimonial">
      <SectionHeading
        sectionheading={"Client's Kind Word"}
        tag={"Testimonial"}
        headingcss="headingcss"
      />

      <div className="testimonial-cards">
        {testimonialData.map((item, index) => (
          <TestimonialCard
            key={index}
            image={item.image}
            detail={item.detail}
            title={item.title}
            designation={item.designation}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
