/*
	Installed from https://reactbits.dev/tailwind/
*/

import React from 'react';
import { gsap } from 'gsap';
import { FaPython, FaJs, FaJava, FaCuttlefish, FaRProject, FaReact, FaHtml5, FaCss3, FaNodeJs, FaFigma, FaGitAlt, FaDatabase } from 'react-icons/fa';
import { SiDart, SiAssemblyscript, SiTailwindcss, SiFirebase, SiMongodb, SiMysql, SiCanva, SiAdobeillustrator, SiAdobephotoshop, SiWordpress, SiAdobe } from 'react-icons/si';

// Add custom scrollbar styles
const styles = `
  .no-scrollbar::-webkit-scrollbar {
    display: none;
  }
  .no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`;

const techStacks = [
  {
    category: "Languages",
    items: [
      { icon: <FaPython />, label: "Python" },
      { icon: <FaJs />, label: "JavaScript" },
      { icon: <SiDart />, label: "Dart" },
      { icon: <FaJava />, label: "Java" },
      { icon: <FaCuttlefish />, label: "C" },
      { icon: <FaRProject />, label: "R" },
      { icon: <SiAssemblyscript />, label: "Assembly" }
    ]
  },
  {
    category: "Frontend",
    items: [
      { icon: <FaReact />, label: "ReactJS" },
      { icon: <SiTailwindcss />, label: "TailwindCSS" },
      { icon: <FaHtml5 />, label: "HTML" },
      { icon: <FaCss3 />, label: "CSS" },
      { icon: <FaJs />, label: "NextJS" }
    ]
  },
  {
    category: "Backend",
    items: [
      { icon: <SiFirebase />, label: "Firebase" },
      { icon: <SiMongodb />, label: "MongoDB" },
      { icon: <SiMysql />, label: "SQL" },
      { icon: <FaNodeJs />, label: "Node.js" }
    ]
  },
  {
    category: "Tools",
    items: [
      { icon: <FaFigma />, label: "Figma" },
      { icon: <SiCanva />, label: "Canva" },
      { icon: <SiAdobeillustrator />, label: "Illustrator" },
      { icon: <SiAdobephotoshop />, label: "Photoshop" },
      { icon: <SiWordpress />, label: "WordPress" }
    ]
  },
  {
    category: "Proficiencies",
    items: [
      { icon: <FaGitAlt />, label: "Git/GitHub" },
      { icon: <FaDatabase />, label: "Database Design" },
      { icon: <SiAdobe />, label: "Media Editing" },
      { icon: <FaReact />, label: "Full Stack Dev" }
    ]
  }
];

function FlowingMenu() {
  return (
    <div className="w-full h-full overflow-hidden">
      <style>{styles}</style>
      <nav className="flex flex-col h-full m-0 p-0">
        {techStacks.map((category, idx) => (
          <MenuItem key={idx} category={category.category} items={category.items} />
        ))}
      </nav>
    </div>
  );
}

function MenuItem({ category, items }) {
  const itemRef = React.useRef(null);
  const marqueeRef = React.useRef(null);
  const marqueeInnerRef = React.useRef(null);

  const animationDefaults = { duration: 0.6, ease: 'expo' };

  const findClosestEdge = (mouseX, mouseY, width, height) => {
    const topEdgeDist = (mouseX - width / 2) ** 2 + mouseY ** 2;
    const bottomEdgeDist = (mouseX - width / 2) ** 2 + (mouseY - height) ** 2;
    return topEdgeDist < bottomEdgeDist ? 'top' : 'bottom';
  };

  const handleMouseEnter = (ev) => {
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current) return;
    const rect = itemRef.current.getBoundingClientRect();
    const edge = findClosestEdge(
      ev.clientX - rect.left,
      ev.clientY - rect.top,
      rect.width,
      rect.height
    );

    gsap.timeline({ defaults: animationDefaults })
      .set(marqueeRef.current, { y: edge === 'top' ? '-101%' : '101%' })
      .set(marqueeInnerRef.current, { y: edge === 'top' ? '101%' : '-101%' })
      .to([marqueeRef.current, marqueeInnerRef.current], { y: '0%' });
  };

  const handleMouseLeave = (ev) => {
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current) return;
    const rect = itemRef.current.getBoundingClientRect();
    const edge = findClosestEdge(
      ev.clientX - rect.left,
      ev.clientY - rect.top,
      rect.width,
      rect.height
    );

    gsap.timeline({ defaults: animationDefaults })
      .to(marqueeRef.current, { y: edge === 'top' ? '-101%' : '101%' })
      .to(marqueeInnerRef.current, { y: edge === 'top' ? '101%' : '-101%' });
  };

  const repeatedMarqueeContent = Array.from({ length: 4 }).map((_, idx) => (
    <React.Fragment key={idx}>
      <span className="text-primary font-serif text-[4vh] leading-[1.2] p-[1vh_1vw_0]">
        {category}
      </span>
      <div className="flex flex-wrap items-center justify-center gap-4 my-[2em] mx-[2vw] p-[1em_0]">
        {items.map((item, itemIdx) => (
          <div 
            key={itemIdx} 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f5f5f5] hover:bg-[#ade87a]/10 transition-colors duration-200 whitespace-nowrap"
          >
            <div className="text-xl text-[#ade87a]">{item.icon}</div>
            <span className="text-sm font-medium text-[#060606]">{item.label}</span>
          </div>
        ))}
      </div>
    </React.Fragment>
  ));

  return (
      <div 
        className="flex-1 relative overflow-hidden text-center shadow-[0_-1px_0_0_#fff] dark:shadow-[0_-1px_0_0_#292926]" 
        ref={itemRef}
      >
      <div
        className="flex items-center justify-center h-full relative cursor-pointer  no-underline font-serif font-bold text-background text-[4vh] hover:text-[#060606] focus:text-white focus-visible:text-[#060606]"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {category}
      </div>
      <div
        className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none bg-background translate-y-[101%]"
        ref={marqueeRef}
      >
        <div className="h-full w-[200%] flex" ref={marqueeInnerRef}>
          <div className="flex items-center relative h-full w-[200%] will-change-transform animate-marquee">
            {repeatedMarqueeContent}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlowingMenu;

