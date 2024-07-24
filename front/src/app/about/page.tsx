import ImgContainer from "@/components/ImgContainer/ImgContainer";
import React from "react";

const About: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="filter brightness-50">
        <ImgContainer src="/img-about.png" alt="Description for image" />
      </div>
    </div>
  );
};

export default About;
