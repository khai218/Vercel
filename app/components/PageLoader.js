// components/PageLoader.js
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function PageLoader() {
  return (
    <div className="fixed inset-0 z-50">
      {/* Background (same as page.js) */}
      <div className="fixed inset-0 -z-10">
        <Image
          src="/wallpaper.jpg" 
          alt="Background" 
          fill={true}
          quality={100}
          priority={true}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50 backdrop-blur-md" />
      </div>

      {/* Loading animation overlay */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm"
      >
        <Image
          src="/frieren.gif"
          alt="Loading..."
          width={200}
          height={200}
          unoptimized
          className="object-contain drop-shadow-lg"
        />
      </motion.div>
    </div>
  );
}