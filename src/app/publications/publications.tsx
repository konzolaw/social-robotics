// app/publications/page.tsx
import React from "react";
import Banner from "@/components/Banner";
import { publications } from "@/constants/publications";
import Image from "next/image";
import Link from "next/link";

const PublicationsPage = () => {
  return (
    <div>
      <Banner title="Publications" />

      <div className="py-10 px-4 sm:px-6 lg:px-20 space-y-8">
        {publications.map((publication, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-4 sm:p-6 flex flex-col sm:flex-row"
          >
            {/* Image */}
            <div className="flex-shrink-0 w-full sm:w-1/3 lg:w-1/4 mb-4 sm:mb-0 sm:mr-6">
              <Image
                src={
                  publication.cover_image?.startsWith("http")
                    ? publication.cover_image
                    : publication.cover_image.replace("./../static", "/img")
                }
                alt={publication.title}
                width={400}
                height={200}
                className="object-cover rounded-lg w-full h-[200px]"
              />
            </div>

            {/* Content */}
            <div className="flex-grow w-full sm:w-2/3 lg:w-3/4 flex flex-col md:px-10">
              <h2 className="text-xl md:text-2xl font-raleway text-gray-800 font-bold">
                {publication.title}
              </h2>
              <p className="text-gray-600 text-justify text-lg leading-relaxed mt-2">
                {publication.description}
              </p>

              <div className="mt-4 w-fit">
                <Link
                  href={publication.external_link}
                  target="_blank"
                  className="flex items-center p-2 bg-custom-lintingGreenDark text-white border-2 border-custom-lintingGreenDark rounded-lg hover:bg-transparent hover:text-custom-lintingGreenDark transition duration-300"
                >
                  Read more
                  <i className="fa-solid fa-arrow-right-long ml-2"></i>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PublicationsPage;
