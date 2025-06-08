"use client";

import Hero from '@/components/home/hero';
import AboutSection from '@/components/home/about';
import RecentEvents from '@/components/home/recentevents';
import PartnersSection from '@/components/home/partners';
import NewsSection from '@/components/home/news';

// Dummy data for demonstration
// const upcomingEvents = [
//   {
//     title: "Robotics Workshop 2025",
//     cover_image: { url: "/img/events/robotics-workshop.jpg" },
//     date_starting: "June 15, 2025",
//     location: "JKUAT Main Campus",
//     description: "Join us for an interactive robotics workshop focusing on social interaction robots.",
//     external_link: "https://jkuat.ac.ke/events/robotics-workshop-2025"
//   },
//   {
//     title: "AI in Assistive Technologies",
//     cover_image: { url: "/img/events/ai-assistive.jpg" },
//     date_starting: "July 10, 2025",
//     location: "JKUAT Auditorium",
//     description: "A seminar exploring AI applications in assistive robotics and accessibility.",
//     external_link: "https://jkuat.ac.ke/events/ai-assistive-tech"
//   },
// ];

// const pastEvents = [
//   {
//     title: "Social Robots Symposium 2024",
//     cover_image: { url: "/img/events/social-robots-2024.jpg" },
//     date_starting: "December 12, 2024",
//     location: "Virtual Conference",
//     description: "An international symposium on social robotics research and applications.",
//     external_link: "https://jkuat.ac.ke/events/social-robots-symposium-2024"
//   }
// ];

// const newsList = [
//   {
//     title: "JKUAT Launches New Robotics Lab",
//     date_published: "May 01, 2025",
//     cover_image: { url: "/img/news/new-lab-launch.jpg" },
//     description: "The new Social Robotics Lab at JKUAT is set to revolutionize how robots interact with humans.",
//     external_link: "https://jkuat.ac.ke/news/new-robotics-lab"
//   },
//   {
//     title: "Student Team Wins Robotics Award",
//     date_published: "April 20, 2025",
//     cover_image: { url: "/img/news/robotics-award.jpg" },
//     description: "Our student team clinched first place in the national robotics challenge 2025.",
//     external_link: "https://jkuat.ac.ke/news/robotics-award-winners"
//   }
// ];

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <RecentEvents />
      <NewsSection />
      <PartnersSection />

      {/* Uncomment the following section if you want to display events */}

      

{/*      
      <section className="events-section py-20 md:px-40 px-5 bg-white relative">
        <div className="relative">
          <h2 className="text-xl md:text-3xl text-center mb-5 md:mb-10 font-bold">
            {upcomingEvents.length ? 'UPCOMING EVENTS' : 'RECENT EVENTS'}
          </h2>

          
          <div className="swiper-container">
            <div className="swiper-wrapper">
              {(upcomingEvents.length ? upcomingEvents : pastEvents).map((event, idx) => (
                <div key={idx} className="swiper-slide">
                  <div className="bg-custom-lightGray p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105 w-full md:max-w-lg flex flex-col">
                    <h3 className="text-2xl font-semibold">{event.title}</h3>
                    {event.cover_image && (
                      <div className="relative w-full h-64 mb-4 rounded-md overflow-hidden">
                        <Image
                          src={event.cover_image.url}
                          alt={`Image for ${event.title}`}
                          fill
                          style={{ objectFit: 'contain' }}
                          priority
                        />
                      </div>
                    )}
                    <p className="text-gray-600 text-lg">{event.date_starting}</p>
                    <p className="text-gray-600 mb-6 text-lg">{event.location}</p>
                    <p className="text-gray-700 mb-4 text-lg">{event.description}</p>
                    <a
                      href={event.external_link}
                      className="mt-auto self-end w-fit px-4 py-2 bg-custom-lintingGreenDark text-white border-2 border-custom-lintingGreenDark rounded-lg hover:bg-transparent hover:text-custom-lintingGreenDark transition duration-300 inline-flex items-center"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Learn more
                      <i className="ml-2 fa fa-external-link" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
              ))}
              {!upcomingEvents.length && !pastEvents.length && (
                <p className="text-center text-gray-500">No events available</p>
              )}
            </div>

            
            <div className="nav-buttons">
              <button
                id="prevBtn"
                className="absolute left-0 -ml-14 md:-ml-16 bg-custom-lintingGreenDark text-white w-24 h-24 flex items-center justify-center rounded-full shadow-lg hover:bg-custom-lintingGreenDark transition duration-300 z-50"
              >
                <i className="fa fa-chevron-left text-xl"></i>
              </button>
              <button
                id="nextBtn"
                className="absolute right-0 -mr-14 md:-mr-16 bg-custom-lintingGreenDark text-white w-12 h-12 flex items-center justify-center rounded-full shadow-lg hover:bg-gray-600 transition duration-300 z-50"
              >
                <i className="fa fa-chevron-right text-xl"></i>
              </button>
            </div>
          </div>
        </div>
      </section> */}

      {/* Latest News Section */}
      {/* <section className="py-10 md:py-20 px-5 md:px-40 bg-custom-lightGray mb-10">
        <div>
          <h2 className="text-xl md:text-3xl font-raleway text-center mb-5 md:mb-10 font-bold">LATEST NEWS</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
            {newsList.length ? (
              newsList.map((news, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105 flex flex-col"
                >
                  <h3 className="text-2xl font-semibold mb-2">{news.title}</h3>
                  <p className="text-gray-600 mb-4">Published on {news.date_published}</p>
                  {news.cover_image && (
                    <div className="relative w-full h-64 mb-4 rounded-md overflow-hidden">
                      <Image
                        src={news.cover_image.url}
                        alt={`Image for ${news.title}`}
                        fill
                        style={{ objectFit: 'contain' }}
                        priority
                      />
                    </div>
                  )}
                  <p className="text-gray-600 mb-6 text-lg">{news.description}</p>
                  {news.external_link && (
                    <a
                      href={news.external_link}
                      className="mt-auto self-end w-fit px-4 py-2 bg-custom-lintingGreenDark text-white border-2 border-custom-lintingGreenDark rounded-lg hover:bg-transparent hover:text-custom-lintingGreenDark transition duration-300 inline-flex items-center"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read more
                      <i className="ml-2 fa fa-external-link" aria-hidden="true"></i>
                    </a>
                  )}
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500">No news available</p>
            )}
          </div>
        </div>
      </section> */}

      {/* Partners Section */}
      {/* <section className="py-20 px-5 bg-custom-lightGray">
        <div className="container mx-auto">
          <h2 className="text-xl md:text-3xl font-raleway text-center mb-10 font-bold">
            OUR PARTNERS / FUNDERS
          </h2>

          <div className="partners-swiper-container swiper-container">
            <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-10">
              
              {[
                { src: '/img/home/unesco-logo.png', alt: 'UNESCO' },
                { src: '/img/home/mozilla-logo.png', alt: 'Mozilla' },
                { src: '/img/home/german-logo.png', alt: 'Partner' },
                { src: '/img/home/jkuat-logo.png', alt: 'JKUAT' },
                { src: '/img/home/usaid-logo.png', alt: 'USAID' },
                { src: '/img/home/unicef-logo.png', alt: 'UNICEF' },
                { src: '/img/home/ieee-logo.png', alt: 'IEEE' },
                { src: '/img/home/unhcr-logo.png', alt: 'UNHCR' },
                { src: '/img/home/billgates-logo.png', alt: 'Bill Gates Foundation' },
                { src: '/img/home/turing-logo.png', alt: 'Turing Foundation' },
                { src: '/img/home/acm-logo.png', alt: 'ACM' },
                { src: '/img/home/gsma-logo.png', alt: 'GSMA' },
                { src: '/img/home/google-logo.png', alt: 'Google' },
                { src: '/img/home/kemenya-logo.png', alt: 'Kemenya' },
              ].map((partner, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-white rounded-lg shadow-lg border-2 border-gray-300 hover:border-custom-lintingGreenDark cursor-pointer transition duration-300"
                >
                  <Image
                    src={partner.src}
                    alt={partner.alt}
                    width={200}
                    height={100}
                    style={{ objectFit: 'contain' }}
                    priority
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

    </>
  );
}
