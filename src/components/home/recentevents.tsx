'use client';

import React from 'react';
import Image from 'next/image';
import { recentEvents, latestEvents } from '@/constants/events';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { ArrowLeft, ArrowRight } from 'lucide-react';

type Event = {
  title: string;
  description: string;
  coverImage?: string;
  location: string;
  externalLink: string;
  dateStarting: string;
  dateEnding?: string;
};

const EventCarousel: React.FC<{ title: string; events: Event[]; navId: string }> = ({
  title,
  events,
  navId,
}) => {
  return (
    <>
      <h2 className="text-xl md:text-3xl text-center mb-10 font-bold">{title}</h2>

      <div className="relative mb-20">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={{
            nextEl: `#nextBtn-${navId}`,
            prevEl: `#prevBtn-${navId}`,
          }}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: true,
          }}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {events.map((event, index) => (
            <SwiperSlide key={index}>
              <div className="bg-custom-lightGray p-4 sm:p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 max-w-full overflow-hidden">
                <h3 className="text-2xl font-semibold">{event.title}</h3>
                {event.coverImage && (
                  <div className="relative w-full h-64 my-4 overflow-hidden rounded-md">
                    <Image
                      src={event.coverImage}
                      alt={event.title}
                      fill
                      className="object-cover rounded-md"
                    />
                  </div>
                )}
                <div className="flex gap-x-2 text-gray-600 text-sm sm:text-lg flex-wrap">
                  <p>{event.dateStarting}</p>
                  {event.dateEnding && <p>- {event.dateEnding}</p>}
                </div>
                <p className="text-gray-600 text-sm sm:text-lg">{event.location}</p>
                <p className="text-gray-700 my-4 text-sm sm:text-lg">{event.description}</p>
                <a
                  href={event.externalLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-custom-lintingGreenDark text-white border-2 border-custom-lintingGreenDark rounded-lg hover:bg-transparent hover:text-custom-lintingGreenDark transition duration-300 text-sm sm:text-base"
                >
                  Learn more <i className="ml-2 fa fa-external-link" />
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        <div className="absolute inset-0 flex items-center justify-between px-2 z-10 pointer-events-none">
          <button
            id={`prevBtn-${navId}`}
            className="bg-custom-lintingGreenDark text-white w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full shadow-md hover:bg-gray-600 transition duration-300 pointer-events-auto"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <button
            id={`nextBtn-${navId}`}
            className="bg-custom-lintingGreenDark text-white w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full shadow-md hover:bg-gray-600 transition duration-300 pointer-events-auto"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </>
  );
};

const RecentEvents: React.FC = () => {
  const events: Event[] = [...recentEvents, ...latestEvents];
  const today = new Date();

  const upcomingEvents = events.filter((e) => new Date(e.dateStarting) >= today);
  const pastEvents = events.filter((e) => new Date(e.dateStarting) < today);

  return (
    <section className="py-20 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40 bg-white overflow-hidden">
      {upcomingEvents.length > 0 && (
        <EventCarousel title="UPCOMING EVENTS" events={upcomingEvents} navId="upcoming" />
      )}
      {pastEvents.length > 0 && (
        <EventCarousel title="RECENT EVENTS" events={pastEvents} navId="recent" />
      )}
    </section>
  );
};

export default RecentEvents;
