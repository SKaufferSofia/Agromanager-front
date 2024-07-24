import React from "react";
import Image from "next/image";

interface ImgContainerProps {
  src: string;
  alt: string;
  children?: React.ReactNode;
}

const ImgContainer: React.FC<ImgContainerProps> = ({ src, alt, children }) => {
  return (
    <div className="relative w-full h-[calc(70vh)]">
      <Image src={src} alt={alt} layout="fill" objectFit="cover" />
      <div className="absolute inset-0 flex items-center justify-center text-center p-4 bg-black bg-opacity-50">
        {children}
      </div>
    </div>
  );
};

export default ImgContainer;
