"use client"
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { FaPython, FaJava, FaDatabase, FaExternalLinkAlt } from "react-icons/fa";
import { FaReact } from "react-icons/fa6";
import { SiMongodb, SiR, SiFlutter, SiDart, SiHtml5, SiCss3, SiJavascript, SiTailwindcss, SiAndroid, SiNodedotjs, SiSqlite } from "react-icons/si";
import PixelTransition from "@/blocks/Animations/PixelTransition/PixelTransition";
import { motion } from 'framer-motion';
import Link from 'next/link';

const techIcons = {
  Python: <FaPython className="text-blue-500 text-[10px]" />,
  Java: <FaJava className="text-red-500 text-[10px]" />,
  "React": <FaReact className="text-blue-400 text-[10px]" />,
  "MongoDB": <SiMongodb className="text-green-500 text-[10px]" />,
  "SQL": <FaDatabase className="text-gray-700 text-[10px]" />,
  "R": <SiR className="text-blue-700 text-[10px]" />,
  "Flutter": <SiFlutter className="text-blue-500 text-[10px]" />,
  "Dart": <SiDart className="text-blue-400 text-[10px]" />,
  "HTML/CSS": <SiHtml5 className="text-orange-600 text-[10px]" />,
  "CSS": <SiCss3 className="text-blue-600 text-[10px]" />,
  "JavaScript": <SiJavascript className="text-yellow-500 text-[10px]" />,
  "NextJS": <SiJavascript className="text-black-500 text-[10px]" />,
  "TailwindCss": <SiTailwindcss className="text-teal-500 text-[10px]" />,
  "Android": <SiAndroid className="text-green-500 text-[10px]" />,
  "Node.js": <SiNodedotjs className="text-green-600 text-[10px]" />,
  "Database": <SiSqlite className="text-blue-600 text-[10px]" />,
  "LOLCode": <FaPython className="text-purple-500 text-[10px]" />,
  "OOP": <FaJava className="text-red-500 text-[10px]" />
};

const SpotlightCard = ({ 
  title, 
  image, 
  description, 
  techStack, 
  link,
  year,
  className = "", 
  spotlightColor = "rgba(255, 255, 255, 0.25)" 
}) => {
  const divRef = useRef(null);
  const router = useRouter(); 
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current || isFocused) return;

    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(0.6);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(0.6);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  const handleCardClick = () => {
    router.push("/under-construction");
  };

  return (
    <motion.div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleCardClick}
      className={`relative rounded-3xl border border-neutral-800 bg-neutral-900 overflow-hidden h-[450px] cursor-pointer ${className}`}
      whileHover={{ scale: 1.02 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 ease-in-out"
        style={{
          opacity,
          background: `radial-gradient(circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 80%)`,
        }}
      />
      
      {/* Project Content */}
      <div className="relative z-10 flex flex-col h-full p-4">
        <div className="relative w-full h-40 mb-3 rounded-xl overflow-hidden">
          <PixelTransition
            firstContent={
              <div className="relative w-full h-full">
                <Image
                  src={image}
                  alt={title}
                  fill
                  className="object-cover"
                />
              </div>
            }
            secondContent={
              <div className="relative w-full h-full bg-neutral-800 flex items-center justify-center">
                <div className="text-center p-4">
                  <h4 className="text-lg font-serif font-semibold text-white mb-2">{title}</h4>
                  <p className="text-sm text-neutral-400">Click to see more details</p>
                </div>
              </div>
            }
            gridSize={10}
            pixelColor="#ade87a"
            animationStepDuration={0.2}
            aspectRatio="75%"
            className="w-full h-full"
          />
        </div>

        {/* Project Info */}
        <div className="flex flex-col flex-1">
          <div className="flex justify-between items-start mb-1">
            <h3 className="text-lg font-semibold text-white">{title}</h3>
            <span className="text-sm text-neutral-400">{year}</span>
          </div>
          
          <p className="text-neutral-400 text-sm mb-2 line-clamp-2 flex-1">
            {description}
          </p>

          {/* View Project Link */}
          {link && (
            <div className="mb-2 flex items-center ml-1 gap-2">
              <FaExternalLinkAlt className="text-[#ade87a] text-sm hover:text-[#ade87a]/80 transition-colors" />
              <Link 
                href={link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[#ade87a] text-sm underline hover:text-[#ade87a]/80"
                onClick={(e) => e.stopPropagation()} // stop card click
              >
                {link}
              </Link>
            </div>
          )}

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-1.5 mt-auto">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="flex items-center gap-0.5 px-1.5 py-0.5 rounded-full bg-neutral-800 text-xs text-neutral-300 hover:bg-neutral-700 transition-colors"
              >
                {techIcons[tech] && <span className="text-base">{techIcons[tech]}</span>}
                <span>{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SpotlightCard;
