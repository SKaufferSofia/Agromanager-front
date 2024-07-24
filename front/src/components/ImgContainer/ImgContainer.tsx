import React from "react";
import Image from "next/image";

interface ImgContainerProps {
  src: string;
  alt: string;
}

const ImgContainer: React.FC<ImgContainerProps> = ({ src, alt }) => {
  return (
    <div className="relative w-full h-[calc(100vh)]">
      <Image src={src} alt={alt} layout="fill" objectFit="cover" />
    </div>
  );
};

export default ImgContainer;
