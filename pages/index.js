import Link from 'next/link';

export default function Home() {
  const moods = ['energetic', 'calm', 'romantic', 'mystical'];

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-100 to-blue-50 p-10 text-center text-gray-800 animate-fade-in">
      <h1 className="text-4xl font-bold mb-6 animate-bounce">🎨 Color Vibes</h1>
      <p className="mb-8 text-lg">Select a mood to generate a color palette and music vibe</p>
      <div className="flex flex-wrap justify-center gap-6">
        {moods.map((mood) => (
          <Link key={mood} href={`/mood/${mood}`}>
            <div className="bg-white shadow-md rounded-xl p-6 w-40 hover:scale-105 transition cursor-pointer hover:bg-indigo-200 animate-fade-in">
              <span className="capitalize font-semibold text-lg text-indigo-700 hover:text-indigo-900 transition-colors">{mood}</span>
            </div>
          </Link>
        ))}
      </div>
      <div className="mt-12 text-sm">
        <Link href="/about">
          <button className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-2 rounded-full hover:from-indigo-600 hover:to-purple-600 transition transform hover:scale-105 animate-pulse shadow-md">About this project</button>
        </Link>
      </div>
    </main>
  );
}