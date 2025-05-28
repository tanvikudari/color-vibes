export default function About() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-100 to-blue-50 p-10 text-center text-gray-800 animate-fade-in">
      <h1 className="text-4xl font-bold mb-6 animate-bounce">About Color Vibes</h1>
      <p className="max-w-xl mx-auto mb-8 text-lg text-indigo-900 font-medium typing-animation border-r-4 border-indigo-500 overflow-hidden whitespace-nowrap">
        Color Vibes is a small design utility that helps you discover aesthetic color palettes and music recommendations based on different moods. It was built using Next.js and Tailwind CSS to demonstrate routing, styling, and interaction in a fun and creative way.
      </p>
      <a href="/">
        <button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-3 rounded-full hover:from-pink-600 hover:to-purple-600 transition-transform transform hover:scale-110 shadow-xl animate-pulse">
          ← Back Home
        </button>
      </a>

      <style jsx>{`
        .typing-animation {
          animation: typing 3.5s steps(60, end), blink-caret 0.75s step-end infinite;
          white-space: nowrap;
          overflow: hidden;
        }

        @keyframes typing {
          from { width: 0 }
          to { width: 100% }
        }

        @keyframes blink-caret {
          from, to { border-color: transparent }
          50% { border-color: #6366f1 }
        }
      `}</style>
    </main>
  );
}
