"use client"
import Ballpit from '@/blocks/Backgrounds/Ballpit/Ballpit';
import SpotlightCard from '@/blocks/Components/SpotlightCard/SpotlightCard';
import RotatingText from '@/blocks/TextAnimations/RotatingText/RotatingText';
import BinaryAnimation from '@/components/BinaryAnimation';
import Aurora from '@/blocks/Backgrounds/Aurora/Aurora';
import { useState, useMemo } from 'react';
import { ALL_PROJECTS } from '@/constants/projects';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Get unique years and tech stack options
const years = [...new Set(ALL_PROJECTS.map(project => project.year))].sort((a, b) => b - a);
const allTechStack = [...new Set(ALL_PROJECTS.flatMap(project => project.techStack))].sort();

export default function Software() {
  const [selectedYear, setSelectedYear] = useState('all');
  const [selectedTech, setSelectedTech] = useState('all');
  const [sortBy, setSortBy] = useState('year'); // 'year' or 'title'
  const [sortOrder, setSortOrder] = useState('desc'); // 'asc' or 'desc'

  // Filter and sort projects
  const filteredProjects = useMemo(() => {
    let filtered = [...ALL_PROJECTS];

    // Apply year filter
    if (selectedYear !== 'all') {
      filtered = filtered.filter(project => project.year === selectedYear);
    }

    // Apply tech stack filter
    if (selectedTech !== 'all') {
      filtered = filtered.filter(project => project.techStack.includes(selectedTech));
    }

    // Apply sorting
    filtered.sort((a, b) => {
      if (sortBy === 'year') {
        return sortOrder === 'desc' ? b.year - a.year : a.year - b.year;
      } else {
        return sortOrder === 'desc' 
          ? b.title.localeCompare(a.title)
          : a.title.localeCompare(b.title);
      }
    });

    return filtered;
  }, [selectedYear, selectedTech, sortBy, sortOrder]);

  return (
    <div className="min-h-screen relative">
        {/* Binary Animation Background */}
        <BinaryAnimation />
        <Aurora
            colorStops={["#292926", "#ade87a", "#fff"]}
            blend={0.5}
            amplitude={1.0}
            speed={0.5}
        />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 ">
        <div className="flex items-center justify-center gap-4 mb-8">
          <span className="text-primary text-title font-serif font-bold">Discover my</span>
          <RotatingText
            texts={['projects', 'works', 'hardworks!']}
            mainClassName="px-2 sm:px-2 md:px-3 bg-[#ade87a] font-serif text-black text-title font-medium overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
            staggerFrom={"last"}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2000}
          />
        </div>
        {/* Filters and Sort Section */}
        <div className="mb-5 rounded-2xl p-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            {/* Filters */}
            <div className="flex flex-wrap gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-sm text-primary">Year</label>
                <Select value={selectedYear} onValueChange={setSelectedYear}>
                  <SelectTrigger className="w-[180px] bg-neutral-800 text-white border-neutral-700 focus:ring-[#ade87a] focus:ring-offset-0">
                    <SelectValue placeholder="Select year" />
                  </SelectTrigger>
                  <SelectContent className="bg-neutral-800 text-white border-neutral-700">
                    <SelectItem value="all">All Years</SelectItem>
                    {years.map(year => (
                      <SelectItem key={year} value={year}>{year}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm text-primary">Technology</label>
                <Select value={selectedTech} onValueChange={setSelectedTech}>
                  <SelectTrigger className="w-[180px] bg-neutral-800 text-white border-neutral-700 focus:ring-[#ade87a] focus:ring-offset-0">
                    <SelectValue placeholder="Select technology" />
                  </SelectTrigger>
                  <SelectContent className="bg-neutral-800 text-white border-neutral-700">
                    <SelectItem value="all">All Technologies</SelectItem>
                    {allTechStack.map(tech => (
                      <SelectItem key={tech} value={tech}>{tech}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Sort Options */}
            <div className="flex flex-col gap-2">
              <label className="text-sm text-primary">Sort by</label>
              <div className="flex flex-wrap gap-2">
                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      setSortBy('year');
                      setSortOrder(prev => prev === 'desc' ? 'asc' : 'desc');
                    }}
                    className={`px-4 py-2 rounded-lg border transition-all duration-200 flex items-center gap-2 ${
                      sortBy === 'year'
                        ? 'bg-[#ade87a] text-black border-[#ade87a] shadow-lg shadow-[#ade87a]/20'
                        : 'bg-neutral-800 text-white border-neutral-700 hover:border-[#ade87a] hover:bg-neutral-700'
                    }`}
                  >
                    Year
                    {sortBy === 'year' && (
                      <span className="text-sm">
                        {sortOrder === 'desc' ? '↓' : '↑'}
                      </span>
                    )}
                  </button>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      setSortBy('title');
                      setSortOrder(prev => prev === 'desc' ? 'asc' : 'desc');
                    }}
                    className={`px-4 py-2 rounded-lg border transition-all duration-200 flex items-center gap-2 ${
                      sortBy === 'title'
                        ? 'bg-[#ade87a] text-black border-[#ade87a] shadow-lg shadow-[#ade87a]/20'
                        : 'bg-neutral-800 text-white border-neutral-700 hover:border-[#ade87a] hover:bg-neutral-700'
                    }`}
                  >
                    Title
                    {sortBy === 'title' && (
                      <span className="text-sm">
                        {sortOrder === 'desc' ? '↓' : '↑'}
                      </span>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-20">
          {filteredProjects.map((project, index) => (
            <SpotlightCard
              key={index}
              title={project.title}
              image={project.image}
              description={project.description}
              techStack={project.techStack}
              year={project.year}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
