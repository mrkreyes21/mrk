'use client';
import {
  CardAnimation,
  TextLoop,
  AboutSlide,
  BinaryAnimation,
  Aurora,
  TiltedCard,
  Masonry,
  Folder,
  CircularGallery,
  ScrollVelocity,
  FlowingMenu,
  ImageTrail,
  Footer,
  Ballpit
} from '@/components/components';
import { 
  PROFILE_IMAGES, 
  GALLERY_IMAGES, 
  BACKGROUND_IMAGES, 
  ORG_IMAGES
} from '@/constants/images';
import { ALL_PROJECTS } from '@/constants/projects';
import { ALL_EXP } from '@/constants/experiences';
import { useState, useEffect } from 'react';

const BackgroundSVG = BACKGROUND_IMAGES.DOODLE;

export default function Home() {
  const [folderSize, setFolderSize] = useState(3);
  const [velocity, setVelocity] = useState(0);

  const folderItems = [
    PROFILE_IMAGES.HONGKONG,
    PROFILE_IMAGES.SIDE,
    PROFILE_IMAGES.FORMAL,
  ];
  


  useEffect(() => {
    const handleResize = () => {
      setFolderSize(window.innerWidth >= 768 ? 3 : 2);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let lastTime = Date.now();

    const updateVelocity = () => {
      const currentScrollY = window.scrollY;
      const currentTime = Date.now();
      const timeDiff = currentTime - lastTime;
      const scrollDiff = currentScrollY - lastScrollY;
      
      if (timeDiff > 0) {
        setVelocity(scrollDiff / timeDiff);
      }
      
      lastScrollY = currentScrollY;
      lastTime = currentTime;
    };

    window.addEventListener('scroll', updateVelocity);
    return () => window.removeEventListener('scroll', updateVelocity);
  }, []);

  const circularItems = ALL_EXP.map(project => ({
    text: project.title,
    image: project.image
  }));

  return (
    <div className="min-h-screen w-full flex flex-col relative">
      
      {/* Binary Animation Background */}
      <div className="fixed inset-0 z-0">
        <BinaryAnimation />
        <Aurora
          colorStops={["#292926", "#ade87a", "#fff"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>

      {/* Card Animation */}
      <div className="absolute inset-0 w-full h-full z-20 pointer-events-none">
        <CardAnimation />
      </div>

      {/* Content Container */}
      <div className="relative z-10">
        <div className="w-full h-screen flex flex-col justify-end py-4">
          <TextLoop />
        </div>

        {/* Details Container */}
        <div className="w-full bg-gradient-to-b from-gray-100 to-gray-50 dark:from-[#1e1e1b] dark:to-[#292926] py-20 md:py-10">
          <div className="max-w-6xl mx-auto px-6 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-6 items-center">
              {/* Left Column - Details */}
              <div className="md:col-span-7 order-2 md:order-1">
                {/* Social Media Buttons */}
                <div className="flex justify-center md:justify-start gap-6 mb-10">
                  <a href="https://www.linkedin.com/in/markandreireyes" 
                     target="_blank" 
                     className="hover:opacity-80 transition-opacity">
                    <button className="w-12 h-12 border border-primary dark:border-white rounded-full flex items-center justify-center hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black dark:text-white transition-all">
                      <i className="fa-brands fa-linkedin-in text-2xl"></i>
                    </button>
                  </a>

                  <a href="https://www.instagram.com/_mrkreyes/" 
                     target="_blank"
                     className="hover:opacity-80 transition-opacity">
                    <button className="w-12 h-12 border border-primary dark:border-white rounded-full flex items-center justify-center hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black dark:text-white transition-all">
                      <i className="fa-brands fa-instagram text-2xl"></i>
                    </button>
                  </a>

                  <a href="https://web.facebook.com/markandrei.reyes.5/" 
                     target="_blank"
                     className="hover:opacity-80 transition-opacity">
                    <button className="w-12 h-12 border border-primary dark:border-white rounded-full flex items-center justify-center hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black dark:text-white transition-all">
                      <i className="fa-brands fa-facebook-f text-2xl"></i>
                    </button>
                  </a>
                </div>

                {/* Description Text */}
                <p className="text-smallest text-gray-800 dark:text-gray-200 leading-relaxed max-w-2xl text-center md:text-left mb-12 font-sans">
                  A Computer Science undergraduate passionate about leveraging technical expertise to build innovative software solutions. 
                  Experienced Full Stack Developer with a background in mobile and web applications using Flutter, Firebase, and the MERN Stack. 
                  Dedicated to delivering scalable, user-centric solutions with a keen focus on optimizing UI/UX and resolving design inconsistencies. 
                  Strengthened these skills through leading academic projects, taking on leadership roles, and maintaining a deep interest in design 
                  principles and user experience.
                </p>

                {/* CV Button */}
                <div className="flex justify-center md:justify-start">
                  <button className="px-8 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full hover:opacity-80 transition-all text-lg font-medium">
                    View my CV
                  </button>
                </div>
              </div>

              {/* Folder Component on the Right */}
              <div className="md:col-span-5 order-1 md:order-2 flex items-center justify-center">
                <Folder 
                  size={folderSize} 
                  color="#ade87a" 
                  items={folderItems}
                  className="custom-folder" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <AboutSlide />
      <div className="relative z-20 pt-10 sm:pt-12 md:pt-16 lg:pt-20 pb-20 sm:pb-30 md:pb-40 lg:pb-60 bg-black overflow-hidden">
        {/* Ballpit Background */}
        <div className="absolute inset-0 z-0">
          <Ballpit />
        </div>
        
        <div className="container mx-auto flex items-center justify-center px-4 relative z-10">
          <div className="flex flex-col font-serif text-xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight md:leading-snug lg:leading-tight break-words text-white items-center justify-center text-center">
            <div className="flex items-center justify-center whitespace-pre-wrap">
              Where do Mark's IT Journey Takes Shape?
            </div>
          </div>
        </div>
        
        <div className="absolute -bottom-1 left-0 w-full overflow-hidden z-20">
          <svg
            viewBox="0 0 1440 100"
            className="w-full h-auto"
            preserveAspectRatio="none"
            fill="#292926"
          >
            <path
              d="M0,100 C480,0 960,0 1440,100"
            />
          </svg>
        </div>
      </div>

      <div className="relative z-20 pt-10 bg-[#292926]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center space-y-10">
            <p className="text-header font-serif text-center text-secondary"> Life Beyond Screen </p>
            <p className="text-caption text-center pl-20 pr-20 text-white"> Beyond academics, I'm passionate about traveling and seeking new adventures. I love experiencing new things and capturing those moments through photography, where I get to practice my creativity through both taking and editing photos. I'm also a huge music enthusiast — whether it's listening to my favorite songs or going to concerts, it's my way of having fun, jumping around, and momentarily forgetting about the demands of academics.</p>
          </div>
          <div className="pb-20 pt-10">
            <Masonry data={GALLERY_IMAGES} />
          </div>
         
        </div>
      </div>
      <div className="relative w-full z-20 pt-10 bg-black">
        <div style={{ height: '100vh', position: 'relative', overflow: 'hidden'}}>
          <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
            <h2 className="text-6xl sm:text-9xl md:text-[10rem] font-medium font-serif text-primary opacity-50">
              Projects?
            </h2>
          </div>
          <ImageTrail
            items={ALL_PROJECTS}
            variant={7}
          />
        </div>
      </div>
      <div className="bg-[#ade87a] text-background z-10">
        <div className="pt-20">
          <ScrollVelocity
            texts={['What Do I Use?', 'Let\'s Know More About Me']} 
            velocity={velocity} 
            className="custom-scroll-text"
          />
        </div>
        <div className="h-screen relative">
          <FlowingMenu />
        </div>
      </div>
      <div className="relative z-20 p-10 bg-[#292926] min-h-screen flex flex-col justify-center">
  <div className="container mx-auto px-4">
    <div className="flex flex-col items-center justify-center space-y-10">
      <p className="text-header font-serif text-center text-secondary"> Beyond & Belonging </p>
      <p className="text-caption text-center text-white">
        I am an active member of the Alliance of Computer Science UPLB, where I've gained valuable connections and hands-on experience through organizational work and academic opportunities like hackathons. I'm also part of the UPLB Career Assistance Program Corp., which focuses on preparing students for the professional world through company setups and collaborations. Working with different companies has provided me with insights into various organizational missions and visions, enriching my learning experience.
      </p>
    </div>
  </div>

  <div className="flex gap-10 flex-wrap justify-center items-center p-10">
    <TiltedCard
      imageSrc={ORG_IMAGES.ACSS}
      altText="ACSS - Alliance of Computer Science Student"
      captionText="ACSS - Alliance of Computer Science Student"
      containerHeight="300px"
      containerWidth="300px"
      imageHeight="300px"
      imageWidth="300px"
      rotateAmplitude={12}
      scaleOnHover={1.2}
      showMobileWarning={false}
      showTooltip={true}
      displayOverlayContent={true}
    />
    <TiltedCard
      imageSrc={ORG_IMAGES.CAP}
      altText="UPLB CAP - UPLB Career Assistance Program"
      captionText="UPLB CAP - UPLB Career Assistance Program"
      containerHeight="300px"
      containerWidth="300px"
      imageHeight="300px"
      imageWidth="300px"
      rotateAmplitude={12}
      scaleOnHover={1.2}
      showMobileWarning={false}
      showTooltip={true}
      displayOverlayContent={true}
    />
  </div>
</div>

      <div className="relative z-20 bg-[#292926]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center space-y-10">
            <p className="text-header font-serif text-center text-secondary"> Hands-On Learning </p>
             <p className="text-caption text-center text-white"> I'm a full-stack developer with hands-on experience in building innovative applications, optimizing systems, and managing workflows. I often take on the role of the leader in group projects, which has honed my ability to initiate and build projects from scratch. Beyond development, I've also taken leadership roles in business ventures and collaborated in hackathons to solve real-world problems.</p>
          </div>
          </div>
            <div style={{ height: '600px', position: 'relative' }}>
            <CircularGallery
              items={circularItems}
              bend={2.5}
              textColor="#ade87a"
              borderRadius={0.1}
              font="bold 24px DM Sans"
            />
            </div>
      </div>

      <Footer />
    </div>
  );
}
