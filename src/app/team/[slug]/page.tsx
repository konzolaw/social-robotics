import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { people } from "@/constants/people";

type Props = {
  params: {
    slug: string;
  };
};

export default function PersonDetailPage({ params }: Props) {
  const person = people.find(p => p.slug === params.slug);

  if (!person) return notFound();

  const {
    first_name,
    last_name,
    title,
    profile_picture,
    specialty,
    focus_long,
    focus_short,
    focus_title,
    quote,
    bio,
    degree,
    pursuing,
    linked_in_link,
  } = person;

  const fullName = `${title ?? ""} ${first_name} ${last_name ?? ""}`.trim();

  return (
    <main className="container mx-auto px-4 py-10 font-lato text-gray-800">
      {/* Header */}
      <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
        <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden flex-shrink-0 shadow-lg">
          <Image
            src={profile_picture || "/img/core/default-image.png"}
            alt={fullName}
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col gap-3 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-raleway font-bold text-custom-lintingGreenDark">
            {fullName}
          </h1>
          {specialty && (
            <h3 className="text-xl md:text-2xl text-custom-red font-semibold">
              {specialty}
            </h3>
          )}
          {degree && <p className="text-gray-600">Degree: {degree}</p>}
          {pursuing && <p className="text-gray-600">Pursuing: {pursuing}</p>}
          {linked_in_link && (
            <p className="text-gray-600">
              🔗{" "}
              <a
                href={linked_in_link}
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                LinkedIn Profile
              </a>
            </p>
          )}
        </div>
      </div>

      {/* Divider */}
      <div className="border-t my-10"></div>

      {/* Bio */}
      {bio && (
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">About</h2>
          <p className="text-gray-700 text-justify leading-relaxed whitespace-pre-line">
            {bio}
          </p>
        </section>
      )}

      {/* Focus */}
      {(focus_title || focus_short || focus_long) && (
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Research & Focus
          </h2>
          {focus_title && <h3 className="text-xl font-semibold text-custom-red mb-2">{focus_title}</h3>}
          {focus_short && (
            <p className="text-gray-700 font-medium mb-2">{focus_short}</p>
          )}
          {focus_long && (
            <p
              className="text-gray-700 text-justify leading-relaxed"
              dangerouslySetInnerHTML={{ __html: focus_long }}
            />
          )}
        </section>
      )}

      {/* Quote */}
      {quote && (
        <section className="my-12 p-6 rounded-lg bg-gray-100 border-l-4 border-custom-lintingGreenDark">
          <blockquote className="text-xl italic text-gray-800 text-center">
            “{quote}”
          </blockquote>
        </section>
      )}
    </main>
  );
}
