export default function About() {
  return (
    <main className="min-h-screen bg-gray-50 p-10 text-center text-gray-800">
      <h1 className="text-4xl font-bold mb-6">About Color Vibes</h1>
      <p className="max-w-xl mx-auto mb-8 text-lg">
        Color Vibes is a small design utility that helps you discover colors and music recommendations based on different moods. This project was built using Next.js and Tailwind CSS to demonstrate routing, styling, and interaction in a fun and creative way.
      </p>
      <a href="/">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition transform hover:scale-105">← Back home</button>
      </a>
    </main>
  );
}
