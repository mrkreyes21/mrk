import { motion } from 'framer-motion';
import { FaPython, FaJava, FaDatabase } from "react-icons/fa";
import { FaReact } from "react-icons/fa6";
import { SiMongodb, SiR, SiFlutter, SiDart, SiHtml5, SiCss3, SiJavascript, SiTailwindcss, SiAndroid, SiNodedotjs, SiSqlite } from "react-icons/si";

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
  "TailwindCss": <SiTailwindcss className="text-teal-500 text-[10px]" />,
  "Android": <SiAndroid className="text-green-500 text-[10px]" />,
  "Node.js": <SiNodedotjs className="text-green-600 text-[10px]" />,
  "Database": <SiSqlite className="text-blue-600 text-[10px]" />,
  "LOLCode": <FaPython className="text-purple-500 text-[10px]" />,
  "OOP": <FaJava className="text-red-500 text-[10px]" />
};

export default function SimpleSpotlightCard({ title, image, techStack, year }) {
  return (
    <motion.div
      className="group relative rounded-xl border border-neutral-800 bg-neutral-900 p-4 hover:border-[#ade87a] transition-colors duration-300"
      whileHover={{ scale: 1.02 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Image Container */}
      <div className="relative aspect-video overflow-hidden rounded-lg mb-4">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="space-y-3">
        {/* Title and Year */}
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          <span className="text-sm text-neutral-400">{year}</span>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1 min-h-[1.75rem]">
          {techStack.map((tech, index) => {
            const Icon = techIcons[tech];
            return Icon ? (
              <div
                key={index}
                className="flex items-center gap-0.5 px-1 py-0.5 rounded-full bg-neutral-800 text-neutral-300 hover:bg-[#ade87a] hover:text-black transition-colors duration-200 whitespace-nowrap"
              >
                {Icon}
                <span className="text-[10px]">{tech}</span>
              </div>
            ) : null;
          })}
        </div>
      </div>
    </motion.div>
  );
} 