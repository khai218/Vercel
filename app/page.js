'use client';

import Head from "next/head";
import { motion } from "framer-motion";
import Profile from "./components/profile";
import About from "./components/about";
import Experience from "./components/experience";
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
  return (
    <>
      <Head>
        <title>Profile Page</title>
        <meta name="description" content="Profile page of Muhammad Khairulazhar" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <main className="relative min-h-screen">
        {/* Background with blur overlay */}
        <div className="fixed inset-0 -z-10">
          <Image
            src="/wallpaper.jpg" 
            alt="Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 backdrop-blur-md" />
        </div>

        {/* Content */}
        <div className="py-10 px-5">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl mx-auto"
          >
            {/* Left Side */}
            <motion.div variants={item} className="space-y-6">
              <Profile />
              <Experience />
            </motion.div>

            {/* Right Side */}
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