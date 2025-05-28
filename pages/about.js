import { useEffect, useState } from 'react';

const fullText = `Color vibes is a web application that allows users to generate color palettes and music vibes based on their mood. This project was built usong Next.js, React, and Tailwind CSS to . The fun little project is built with Next.js, React, and Tailwind CSS to demonstrate routing and interaction in a fun and creative way. The project is hosted on Vercel.`;

export default function About() {
  const [displayedText, setDisplayedText] = useState('');
  
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + fullText[index]);
      index++;
      if (index === fullText.length) clearInterval(interval);
    }, 50); // typing speed in ms

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-gray-50 p-10 text-center text-gray-800 animate-fade-in">
      <h1 className="text-4xl font-bold mb-6 animate-bounce">About Color Vibes</h1>
      <p
        className="max-w-3xl mx-auto mb-8 text-lg whitespace-pre-wrap border-r-4 border-indigo-500 pr-2"
        style={{ 
          borderColor: '#6366f1', /* Tailwind indigo-500 */
          // Optional caret blink effect:
          animation: 'blinkCaret 1s step-end infinite',
        }}
      >
        {displayedText}
      </p>
      <a href="/">
        <button className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-2 rounded-full hover:from-indigo-600 hover:to-purple-600 transition transform hover:scale-105 animate-pulse shadow-md">
          ← Back home
        </button>
      </a>

      <style jsx>{`
        @keyframes blinkCaret {
          0%, 100% { border-color: transparent; }
          50% { border-color: #6366f1; }
        }
      `}</style>
    </main>
  );
}
