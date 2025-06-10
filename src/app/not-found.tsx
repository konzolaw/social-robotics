'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#003B6D] flex flex-col justify-center items-center text-white text-center px-6 py-12">
      <div className="max-w-xl">
        <Image
          src="/robot-notfound.png" // Make sure this image exists or replace with your own
          alt="Lost Robot"
          width={300}
          height={300}
          className="mx-auto mb-6 animate-bounce-slow"
        />
        <h1 className="text-5xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="text-lg mb-6 text-gray-200">
          Oops! The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-3 rounded-xl bg-white text-[#003B6D] font-semibold hover:bg-gray-200 transition duration-300"
        >
          Go Back Home
        </Link>
      </div>

      <style jsx>{`
        .animate-bounce-slow {
          animation: slowBounce 2.5s ease-in-out infinite;
        }

        @keyframes slowBounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </div>
  );
}
