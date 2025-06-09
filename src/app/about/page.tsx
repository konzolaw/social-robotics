// app/about/page.tsx

import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "About | JKUAT Social Robotics Lab",
  description:
    "Learn more about the JKUAT Social Robotics Lab team, methodology, and impact.",
  keywords:
    "JKUAT, Social Robotics, Responsible Computing, Artificial Intelligence, Human-Centered Design",
  openGraph: {
    title: "JKUAT Social Robotics Lab",
    description:
      "Advancing responsible computing and robotics for education, training, and social care.",
    url: "https://yourdomain.com/about",
    images: ["/img/about-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "JKUAT Social Robotics Lab",
    description:
      "Innovative research in robotics and human-centered AI for societal impact.",
    creator: "@jkuatsocialrobotics",
    images: ["/img/about-image.png"],
  },
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Team Section */}
      <section className="py-20">
        <div className="flex flex-col md:flex-row justify-center gap-10 py-10 px-4 md:px-8">
          {/* Image */}
          <div className="flex justify-center md:w-1/2">
            <Image
              src="/img/image 3.jpg"
              alt="JKUAT Social Robotics Lab Team"
              width={600}
              height={400}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="w-full h-auto object-cover shadow-xl rounded-lg transform transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-2xl"
              priority
            />
          </div>

          {/* Text */}
          <div className="w-full md:w-1/2 flex flex-col text-left gap-6 md:gap-8">
            <h2 className="text-xl md:text-3xl font-raleway text-gray-800 font-bold">
              OUR TEAM
            </h2>
            <p className="text-gray-600 text-justify text-lg leading-relaxed">
              We have a team of five MSc. Engineering students at the Department of Computing,
              JKUAT, supported under the Social Robotics Lab. The team is led by Dr. Eunice Njeri in collaboration with faculty
              members from the Department of Computing. The lab’s projects focus on designing intuitive social interactions
              by integrating human-centered design, responsible computing, artificial intelligence, machine learning, computer vision,
              natural language processing, and affective computing. Our goal is to address societal challenges in education, social training,
              and social care through innovative and impactful research.
            </p>
            <Link
              href="/people"
              className="w-fit flex items-center gap-2 px-5 py-3 bg-custom-lintingGreenDark text-white border-2 border-custom-lintingGreenDark rounded-lg hover:bg-transparent hover:text-custom-lintingGreenDark transition duration-300"
            >
              <span className="text-xl">Discover Our Team</span>
              <i className="fa-solid fa-arrow-right-long"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* Responsible Robotics Section */}
      <div className="mb-12 font-lato px-4 md:px-8 lg:px-16 xl:px-40">
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-12 items-center">
          <div className="w-full md:w-1/2 p-4 md:p-0 md:pr-6 lg:pr-10 order-2 md:order-1">
            <h2 className="text-xl md:text-3xl font-raleway text-gray-800 mb-4 font-bold">
              Responsible Robotics in Social Environments
            </h2>
            <p className="text-gray-600 text-lg text-justify leading-relaxed">
              At the Social Robotics Lab, we are dedicated to designing robots that enhance social interaction and 
              support human well-being through empathetic and inclusive design. Our research explores how robots can 
              understand and respond to human social cues, promote social inclusion, and navigate the ethical 
              challenges of robotic technology. We aim to advance the field of social robotics by developing innovative 
              approaches that integrate robots into everyday environments—education, social training, homes, and 
              healthcare settings—where they can assist with tasks, support learning, and provide companionship to 
              individuals with specific needs.
            </p>
          </div>
          <div className="w-full md:w-1/2 h-64 md:h-auto order-1 md:order-2">
            <Image
              src="/img/about/about-2.jpeg"
              alt="Social Robotics in Action"
              width={600}
              height={400}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="w-full h-full object-cover shadow-lg rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Methodology Section */}
      <div className="mb-16 flex flex-col gap-5 px-4 md:px-8 lg:px-16 xl:px-40 md:flex-row items-center justify-center bg-[#ECEDF2] py-8">
        <div className="md:pr-0 mb-8 md:mb-0 w-full md:w-1/2">
          <Image
            src="/img/about-image.png"
            alt="Teaching Methodology"
            width={500}
            height={400}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="rounded-lg w-full h-auto md:h-[400px] shadow-md"
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-xl md:text-3xl font-raleway text-gray-800 mb-2 font-bold">
            TEACHING RESPONSIBLE COMPUTING - METHODOLOGY
          </h2>
          <span className="text-gray-800 mb-4 font-semibold italic">
            Training Approach
          </span>

          <p className="text-gray-600 text-lg text-justify leading-relaxed">
            Our methodology emphasizes hands-on learning and real-world design scenarios to make Responsible Computing (RC) and ethics both practical and engaging.
          </p>

          <ul className="text-gray-600 text-lg list-disc list-inside pl-10 space-y-2">
            <li className="ml-8">
              <strong>Team-Based RC Projects</strong> – Students collaborate in teams to design projects that integrate RC principles, fostering critical thinking and ethical awareness.
            </li>
            <li className="ml-8">
              <strong>Ethical Training Workshops</strong> – We conduct structured workshops incorporating design scenarios, case studies, and expert guest lectures to provide a comprehensive understanding of RC.
            </li>
            <li className="ml-8">
              <strong>Industry and Academic Engagement</strong> – Guest lecturers from both industry and academia share insights on responsible technology development.
            </li>
            <li className="ml-8">
              <strong>Applied Learning</strong> – Students apply the RC knowledge gained to their projects, enabling them to internalize ethical principles and implement them in real-world scenarios.
            </li>
          </ul>
        </div>
      </div>

      {/* Impact Section */}
      <div className="bg-[#ECEDF2] p-4 md:p-6">
        <div className="bg-white p-4 md:p-6 rounded-lg my-8 md:m-16">
          <div className="flex items-start gap-4 mb-4">
            <Image
              src="/img/impact-icon.png"
              alt="Impact Icon"
              width={64}
              height={64}
              className="float-left"
            />
            <div>
              <h2 className="text-xl md:text-2xl text-gray-800 font-bold">
                IMPACT AND OUTREACH
              </h2>
              <span className="italic text-lg md:text-xl text-gray-800 block mb-2">
                Transformative Outcomes
              </span>
            </div>
          </div>
          <p className="clear-both text-gray-600 text-lg text-justify leading-relaxed mb-2">
            The JKUAT Social Robotics Lab initiative is already making significant strides. Currently, there are five ongoing MSc projects by Software Engineering students at the Department of Computing, JKUAT, supported under the Social Robotics Project. These projects explore various aspects of social robotics and machine learning, with a focus on education, social training, and social care. As part of our ongoing responsible computing project, we have trained ~150 students in Computer Science and Technology about robotics and responsible computing.
          </p>
          <p className="text-lg text-gray-700 font-bold mb-2">
            Explore some of the impact the lab has made:
          </p>
          <ul className="space-y-1 text-lg text-gray-600 pl-8 list-disc list-inside">
            <li>
              RCC programme{" "}
              <Link
                href="https://youtu.be/0Poy3Iavmeg"
                target="_blank"
                className="text-blue-600 hover:underline font-semibold block"
              >
                Click here to see the video
              </Link>
            </li>
            <li>
              RCC programme and student impact{" "}
              <Link
                href="https://foundation.mozilla.org/en/blog/robotics-and-ethics-intersect-for-rcc-awardee-jomo-kenyatta-university/"
                target="_blank"
                className="text-blue-600 hover:underline font-semibold block"
              >
                Click here to see the blog
              </Link>
            </li>
            <li>
              Responsible AI webinar{" "}
              <Link
                href="https://discover.jkuat.ac.ke/responsible-ai-key-to-harnessing-its-potential/"
                target="_blank"
                className="text-blue-600 hover:underline font-semibold block"
              >
                Click here to see the blog
              </Link>
            </li>
            <li>
              Ethical design workshop{" "}
              <Link
                href="https://discover.jkuat.ac.ke/integrating-african-perspectives-in-technology-and-design-processes/"
                target="_blank"
                className="text-blue-600 hover:underline font-semibold block"
              >
                Click here to see the resource
              </Link>
            </li>
            <li>
              Girls in robotics{" "}
              <Link
                href="https://www.jkuat.ac.ke/programme-to-attract-young-women-to-stem-unveiled/"
                target="_blank"
                className="text-blue-600 hover:underline font-semibold block"
              >
                Click here to see the resource
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
