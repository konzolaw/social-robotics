// app/layout.tsx

import './globals.css';
import '@/styles/globals.css';
import 'animate.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Social Robotics Lab – JKUAT',
  description: 'Explore the Social Robotics Lab at JKUAT – pioneering research, innovation, and responsible computing in Kenya.',
  keywords: ['JKUAT', 'Social Robotics', 'AI', 'Robots', 'Kenya', 'Computing', 'Research Lab'],
  authors: [{ name: 'Dr. Eunice Njeri', url: 'https://www.jkuat.ac.ke' }],
  creator: 'JKUAT Social Robotics Lab',
  openGraph: {
    title: 'Social Robotics Lab – JKUAT',
    description: 'Discover robotics innovation at JKUAT. Research, Activities, Projects, and more.',
    url: 'https://yourdomain.com',
    siteName: 'JKUAT Social Robotics Lab',
    images: [
      {
        url: 'https://yourdomain.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Social Robotics Lab',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Social Robotics Lab – JKUAT',
    description: 'Explore cutting-edge robotics research at JKUAT.',
    images: ['https://yourdomain.com/og-image.png'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className + ' bg-white text-gray-900'}>
        <Header />
         <main className="min-h-screen w-full px-0 pt-0">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
