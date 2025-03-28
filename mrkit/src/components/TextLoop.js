'use client';
import { useState, useEffect } from 'react';

const greetings = [
  { text: "Hello, World! I'm Mark Reyes.", lang: "English" },
  { text: "Kumusta, World! I'm Mark Reyes.", lang: "Filipino" },
  { text: "안녕, World! I'm Mark Reyes.", lang: "Korean" },
  { text: "こんにちは, World! I'm Mark Reyes.", lang: "Japanese" },
  { text: "Hola, World! I'm Mark Reyes.", lang: "Spanish" },
  { text: "你好, World! I'm Mark Reyes.", lang: "Chinese" },
  { text: "Bonjour, World! I'm Mark Reyes.", lang: "French" },
  { text: "Hallo, World! I'm Mark Reyes.", lang: "German" },
];

export default function TextLoop() {
  return (
    <div className="relative w-full overflow-hidden h-40 sm:h-40 md:h-66">
      <div className="absolute whitespace-nowrap animate-marquee flex">
        {greetings.map((greeting, index) => (
          <div key={`first-${index}`} className="flex flex-col items-start mx-5">
            <h1 className="text-9xl sm:text-10xl md:text-[15rem] font-medium font-serif text-primary whitespace-nowrap">
              {greeting.text}
            </h1>
          </div>
        ))}
        {greetings.map((greeting, index) => (
          <div key={`second-${index}`} className="flex flex-col items-start mx-5">
            <h1 className="text-9xl sm:text-10xl md:text-[15rem] font-medium font-serif text-primary whitespace-nowrap">
              {greeting.text}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
} 