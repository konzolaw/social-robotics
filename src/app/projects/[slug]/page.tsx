import { projects } from "@/constants/projects";
import { notFound } from "next/navigation";
import Image from "next/image";

// Use correct Next.js App Router typing
interface ProjectDetailPageProps {
  params: {
    slug: string;
  };
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  // Normalize slug for matching
  const slug = decodeURIComponent(params.slug.trim().toLowerCase());
  const project = projects.find(
    (p) => p.slug.trim().toLowerCase() === slug
  );

  if (!project) return notFound();

  return (
    <div className="bg-[#FAFAFA] min-h-screen w-full px-4 sm:px-8 py-12">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-2xl overflow-hidden">
        {/* Project Cover */}
        <div className="relative w-full h-[280px] sm:h-[420px]">
          <Image
            src={project.cover_image}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Project Content */}
        <div className="p-6 sm:p-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6 border-b pb-2">
            {project.title}
          </h1>

          <div
            className="text-gray-700 text-lg leading-relaxed prose max-w-none"
            dangerouslySetInnerHTML={{ __html: project.description }}
          />
        </div>
      </div>
    </div>
  );
}
