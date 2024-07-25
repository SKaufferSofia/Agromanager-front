import React from "react";
import AboutComponent from "@/components/About/About";
import TeamComponent from "@/components/About/Team";
import ImgContainer from "@/components/ImgContainer/ImgContainer";

const About: React.FC = () => {
  return (
    <div className="flex flex-col">
      <div className="filter brightness-50">
        <ImgContainer src="/img-about.png" alt="Description for image" />
      </div>
      <AboutComponent />
      <TeamComponent />
    </div>
  );
};

export default About;
