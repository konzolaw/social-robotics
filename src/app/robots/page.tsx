// app/robots/page.tsx
import React from "react";
import { robots } from "@/constants/robots";
import Banner from "@/components/Banner";
import Image from "next/image";
import Link from "next/link";

const RobotsPage = () => {
  return (
    <div>
      <Banner title="Robots" />
      {robots.map((robot, index) => (
        <div key={index} className="my-8 md:my-5 mx-5">
          <div className="bg-gray-200 rounded-lg p-8">
            <div
              className={`flex flex-col md:flex-row md:p-10 gap-6 md:gap-10 justify-center ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="w-80 h-80 md:w-96 md:h-96 flex-shrink-0 relative">
                <Image
                  src={robot.cover_image || "/img/core/default-image.png"}
                  alt={robot.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>

              <div className="flex flex-col gap-4 md:gap-5 w-full md:w-2/3">
                <div>
                  <h2 className="text-xl md:text-2xl font-bold text-gray-800">
                    {robot.title}
                  </h2>
                  {robot.specialty && (
                    <h4 className="text-custom-lintingGreenDark text-lg md:text-xl">
                      {robot.specialty}
                    </h4>
                  )}
                </div>
                <div>
                  <p className="md:pr-20 text-gray-600 text-justify text-lg leading-relaxed">
                    {robot.description}
                  </p>
                </div>
                <Link
                  href={robot.external_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1 w-fit bg-custom-lintingGreenDark text-white border-2 rounded-lg hover:bg-transparent hover:border-2 border-custom-lintingGreenDark hover:text-custom-lintingGreenDark transition duration-300"
                >
                  <span className="text-lg">Learn more</span>
                  <i className="ml-2 fa fa-external-link" aria-hidden="true"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RobotsPage;
