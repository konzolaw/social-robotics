// app/projects/page.tsx

import { projects } from "@/constants/projects";
import Image from "next/image";
import Link from "next/link";
import Banner from "@/components/Banner";

export default function ProjectsPage() {
  return (
    <div className="projects-bg bg-[#FAFAFA] min-h-screen w-full">
        <Banner title="Projects" />
      <div className="relative container mx-auto py-10 max-w-8xl">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg shadow-lg p-6 flex flex-col sm:flex-row items-start sm:items-start space-y-8 sm:space-y-0 sm:space-x-6 mx-4 lg:mx-16 mb-8 hover:shadow-xl transition-all duration-300 ease-in-out"
          >
            {/* Project Description */}
            <div className="flex-grow w-full sm:w-1/2 lg:w-2/3 text-left">
              <h2 className="text-xl md:text-3xl font-raleway text-gray-800 font-bold">
                {project.title}
              </h2>

              <div
                className="text-gray-600 text-lg text-justify leading-relaxed mt-2"
                dangerouslySetInnerHTML={{ __html: project.description }}
              />

              <div className="mt-4">
                <Link
                    href={`/projects/${project.slug}`}
                  className="text-blue-600 font-semibold hover:text-blue-800 transition-all duration-300"
                >
                  Learn More »
                </Link>
              </div>
            </div>

            {/* Project Image */}
            <div className="w-full sm:w-1/2 lg:w-1/3">
              <Image
                src={`/${project.cover_image.replace(/^(\.?\/)+/, "")}`}
                alt={project.title}
                width={600}
                height={600}
                className="w-full  sm:h-[250px] object-cover rounded-lg transform hover:scale-105 transition-all duration-300 ease-in-out"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
