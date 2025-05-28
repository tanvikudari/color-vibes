// /pages/about.js
export default function About() {
  return (
    <main className="min-h-screen bg-gray-50 p-10 text-center text-gray-800 flex flex-col items-center justify-center animate-fade-in">
      <h1 className="text-4xl font-bold mb-8 animate-bounce">About Color Vibes</h1>
      <p className="max-w-xl mx-auto mb-12 text-lg animate-typing overflow-hidden whitespace-nowrap border-r-4 border-indigo-500 pr-1">
        Color Vibes is a creative design utility that helps you discover beautiful color palettes and personalized music recommendations based on your mood. This project was built with Next.js, React, and Tailwind CSS, it showcases the power of routing, styling, and smooth interactions wrapped in a fun, engaging experience.
      </p>
      <a href="/">
        <button className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-6 py-3 rounded-full hover:from-indigo-600 hover:to-purple-600 transition transform hover:scale-110 animate-pulse shadow-lg">
          ← Back home
        </button>
      </a>

      <style jsx>{`
        @keyframes typing {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }
        .animate-typing {
          animation: typing 4s steps(40, end) forwards;
        }
      `}</style>
    </main>
  );
}
