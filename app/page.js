'use client';

import { useState, useEffect } from 'react';
import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";

// Components
import PageLoader from "./components/PageLoader";
import Profile from "./components/profile";
import About from "./components/about";
import Experience from "./components/experience";
import Education from "./components/education";
import Contact from "./components/contact";

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Head>
        <title>Muhammad Khairulazhar – Portfolio</title>
        <meta
          name="description"
          content="Portfolio and profile of Muhammad Khairulazhar, IT student from Politeknik Kuching Sarawak."
        />
        <meta
          name="keywords"
          content="Muhammad Khairulazhar, portfolio, web developer, IT intern, Politeknik Kuching"
        />
        <meta name="author" content="Muhammad Khairulazhar" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <PageLoader />
        </motion.div>
      )}

      <main className="relative min-h-screen scroll-smooth">
        {/* Background with blur overlay */}
        <div className="fixed inset-0 -z-10">
          <Image
            src="/wallpaper.jpg"
            alt="Background"
            fill
            quality={100}
            priority
            placeholder="blur"
            blurDataURL="/wallpaper.jpg"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50 backdrop-blur-md" />
        </div>

        {/* Main Content */}
        <div className="py-10 px-5 sm:px-8 md:px-12">
          <motion.div
            variants={container}
            initial="hidden"
            animate={isLoading ? "hidden" : "show"}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl mx-auto"
          >
            {/* Left Column */}
            <motion.div variants={item} className="space-y-6">
              <Profile />
              <Experience />
              <Education />
            </motion.div>

            {/* Right Column */}
            <motion.div variants={item} className="space-y-6">
              <About />
              <Contact />
            </motion.div>
          </motion.div>
        </div>
      </main>
    </>
  );
}
