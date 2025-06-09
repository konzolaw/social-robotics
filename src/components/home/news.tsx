"use client";

import React from "react";
import Image from "next/image";
import { news, NewsItem } from "@/constants/news"; // Adjust the path as needed
import { ExternalLink } from "lucide-react";

const NewsSection: React.FC = () => {
  return (
    <section className="py-10 md:py-20 px-5 md:px-40 bg-custom-lightGray mb-10">
      <div>
        <h2 className="text-xl md:text-3xl font-raleway text-center mb-5 md:mb-10 font-bold">
          LATEST NEWS
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {news.length > 0 ? (
            news.map((item: NewsItem, index: number) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105 flex flex-col"
              >
                <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4">
                  Published on {item.datePublished}
                </p>
                <div className="w-full mb-4 relative aspect-[3/2]">
                  <Image
                    src={item.coverImage.replace("/static", "/img")}
                    alt="News Image"
                    fill
                    className="object-contain rounded-md"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <p className="text-gray-600 mb-6 text-lg">{item.description}</p>
                {item.externalLink && item.externalLink.trim() !== "" && (
                  <a
                    href={item.externalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto self-start inline-flex items-center px-4 py-2 bg-custom-lintingGreenDark text-white border-2 border-custom-lintingGreenDark rounded-lg hover:bg-transparent hover:text-custom-lintingGreenDark transition duration-300"
                  >
                    Read more
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </a>
                )}
              </div>
            ))
          ) : (
            <div>No news</div>
          )}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
