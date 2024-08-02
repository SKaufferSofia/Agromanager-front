import React from "react";

interface VideoContainerProps {
  src: string;
  alt: string;
  children?: React.ReactNode;
}

const VideoContainer: React.FC<VideoContainerProps> = ({
  src,
  alt,
  children,
}) => {
  return (
    <div className="relative w-full h-[calc(80vh)]">
      <video
        src={src}
        autoPlay
        loop
        muted
        className="w-full h-full object-cover"
        aria-label={alt}
      />
      <div className="absolute inset-0 flex items-center justify-center text-center p-4 bg-black bg-opacity-50">
        {children}
      </div>
    </div>
  );
};

export default VideoContainer;
