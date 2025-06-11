import { projects } from "@/constants/projects";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Metadata } from "next";

interface ProjectDetailPageProps {
  params: {
    slug: string;
  };
}

// ✅ Fixed: Added async to generateMetadata
export async function generateMetadata(
  { params }: ProjectDetailPageProps
): Promise<Metadata> {
  const slug = decodeURIComponent(params.slug || "").toLowerCase().trim();

  const project = projects.find(
    (p) => p.slug.toLowerCase().trim() === slug
  );

  if (!project) {
    return {
      title: "Project Not Found",
      description: "The project you're looking for does not exist.",
    };
  }

  return {
    title: project.title,
    description:
      project.description?.slice(0, 160).replace(/<[^>]+>/g, "") ||
      "Research project detail page",
  };
}

// ✅ Fixed: Added async to page component
export default async function ProjectDetailPage(
  { params }: ProjectDetailPageProps
) {
  const slug = decodeURIComponent(params.slug || "").toLowerCase().trim();

  const project = projects.find(
    (p) => p.slug.toLowerCase().trim() === slug
  );

  if (!project) return notFound();

  return (
    <div className="bg-[#FAFAFA] min-h-screen w-full px-4 sm:px-8 py-12">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-2xl overflow-hidden">
        {project.cover_image && (
          <div className="relative w-full h-[280px] sm:h-[420px]">
            <Image
              src={project.cover_image}
              alt={project.title || "Project cover image"}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}
        <div className="p-6 sm:p-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6 border-b pb-2">
            {project.title}
          </h1>
          {project.description ? (
            <div
              className="text-gray-700 text-lg leading-relaxed prose max-w-none"
              dangerouslySetInnerHTML={{ __html: project.description }}
            />
          ) : (
            <p className="text-gray-600 text-lg italic">
              No description available
            </p>
          )}
        </div>
      </div>
    </div>
  );
}