// components/Banner.tsx
import React from "react";

type BannerProps = {
  title: string;
};

const Banner: React.FC<BannerProps> = ({ title }) => {
  return (
    <div className="bg-custom-lintingGreenDark p-5">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-white font-bold text-2xl sm:text-3xl md:text-3xl lg:text-3xl text-center sm:text-left mt-4 mb-4 px-4">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default Banner;
