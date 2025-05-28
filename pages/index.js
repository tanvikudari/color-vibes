import { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const moods = ['energetic', 'calm', 'romantic', 'mystical'];

  // State to track tilt angles for each mood card
  const [tilt, setTilt] = useState({});

  // Handle mouse move to create tilt effect
  const handleMouseMove = (e, mood) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left; // x position within the element
    const y = e.clientY - rect.top;  // y position within the element
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Calculate rotation angles (-15deg to 15deg)
    const rotateX = ((y - centerY) / centerY) * 15;
    const rotateY = ((x - centerX) / centerX) * 15;

    setTilt((prev) => ({ ...prev, [mood]: { rotateX, rotateY } }));
  };

  // Reset tilt on mouse leave
  const handleMouseLeave = (mood) => {
    setTilt((prev) => ({ ...prev, [mood]: { rotateX: 0, rotateY: 0 } }));
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-100 to-blue-50 p-10 text-center text-gray-800">
      <h1 className="text-5xl font-extrabold mb-6 animate-color-wave">
        🎨 Color Vibes
      </h1>
      <p className="mb-8 text-lg">Select a mood to generate a color palette and music vibe</p>
      <div className="flex flex-wrap justify-center gap-8">
        {moods.map((mood) => {
          const style = tilt[mood]
            ? {
                transform: `perspective(500px) rotateX(${tilt[mood].rotateX}deg) rotateY(${tilt[mood].rotateY}deg) scale(1.05)`,
                transition: 'transform 0.1s ease-out',
              }
            : { transition: 'transform 0.3s ease' };

          return (
            <Link key={mood} href={`/mood/${mood}`}>
              <a
                onMouseMove={(e) => handleMouseMove(e, mood)}
                onMouseLeave={() => handleMouseLeave(mood)}
                className="bg-white shadow-lg rounded-xl p-8 w-44 cursor-pointer hover:shadow-xl"
                style={style}
              >
                <span className="capitalize font-semibold text-xl text-indigo-700">
                  {mood}
                </span>
              </a>
            </Link>
          );
        })}
      </div>
      <div className="mt-14 text-sm">
        <Link href="/about">
          <a className="inline-block bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-6 py-3 rounded-full hover:from-indigo-600 hover:to-purple-600 transition transform hover:scale-110 shadow-lg animate-pulse">
            About this project
          </a>
        </Link>
      </div>

      <style jsx>{`
        @keyframes colorWave {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-color-wave {
          background: linear-gradient(
            270deg,
            #6b46c1,
            #d53f8c,
            #ed64a6,
            #6b46c1
          );
          background-size: 600% 600%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: colorWave 6s ease infinite;
        }
      `}</style>
    </main>
  );
}
