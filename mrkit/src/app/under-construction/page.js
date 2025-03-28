'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function UnderConstruction() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <motion.div 
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Under Construction
        </h1>
        <p className="text-xl text-gray-400 mb-8">
          This page is currently being built. Please check back later!
        </p>
        <Link 
          href="/software"
          className="inline-block px-6 py-3 bg-[#ade87a] text-black rounded-full hover:opacity-90 transition-opacity"
        >
          Back to Software
        </Link>
      </motion.div>
    </div>
  );
}