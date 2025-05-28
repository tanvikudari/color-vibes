export default function About() {
  return (
    <main className="min-h-screen bg-gray-50 p-10 text-center text-gray-800 animate-fade-in">
      <h1 className="text-4xl font-bold mb-6 animate-bounce">About Color Vibes</h1>
      <p className="max-w-xl mx-auto mb-8 text-lg animate-typing overflow-hidden whitespace-nowrap border-r-4 border-indigo-500">
        Color Vibes is a small design utility that helps you discover aesthetic color palettes and music recommendations based on different moods. This fun project was built using Next.js and Tailwind CSS to demonstrate routing, styling, and interaction in a fun and creative way.
      </p>
      <a href="/">
        <button className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-2 rounded-full hover:from-indigo-600 hover:to-purple-600 transition transform hover:scale-105 animate-pulse shadow-md">← Back home</button>
      </a>
    </main>
  );
}
