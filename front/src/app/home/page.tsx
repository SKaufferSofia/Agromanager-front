import React from "react";
import HomeCarousel from "@/components/HomeCarousel/HomeCarousel";
import SuscribeCardHome from "@/components/SuscribeCards/SuscribeCardHome";

const Home: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col py-28">
      <HomeCarousel />
      <div className="flex min-h-screen flex-col py-16">
        <SuscribeCardHome />
      </div>
    </div>
  );
};

export default Home;
