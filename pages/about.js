import { useEffect, useState } from 'react';

export default function About() {
  const fullText = "Color Vibes is a small design utility that helps you discover aesthetic color palettes and music recommendations based on different moods. This fun little project was built using Next.js, React, and Tailwind CSS to demonstrate routing, styling, and interaction in a fun and creative way.";

  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + fullText[index]);
        setIndex(index + 1);
      }, 40); // typing speed in ms

      return () => clearTimeout(timeout);
    }
  }, [index, fullText]);

  return (
    <main className="min-h-screen bg-gray-50 p-10 text-center text-gray-800 flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-6 animate-bounce">About Color Vibes</h1>
      <p className="max-w-xl mb-8 text-lg border-r-4 border-indigo-500 pr-2 whitespace-pre-wrap" style={{ fontFamily: "'Courier New', Courier, monospace" }}>
        {displayedText}
        <span className="inline-block w-1 h-6 bg-indigo-500 animate-pulse ml-1 align-bottom"></span>
      </p>

      <a href="/">
        <button className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-2 rounded-full hover:from-indigo-600 hover:to-purple-600 transition transform hover:scale-105 animate-pulse shadow-md">
          ← Back home
        </button>
      </a>
    </main>
  );
}
