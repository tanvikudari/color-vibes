// /pages/index.js
import Link from 'next/link';

export default function Home() {
  const moods = ['energetic', 'calm', 'romantic', 'mystical'];

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-100 to-white p-10 text-center">
      <h1 className="text-4xl font-bold mb-6">🎨 Color Vibes</h1>
      <p className="mb-8">Select a mood to generate a color palette</p>
      <div className="flex flex-wrap justify-center gap-6">
        {moods.map((mood) => (
          <Link key={mood} href={`/mood/${mood}`}>
            <div className="bg-white shadow-md rounded-xl p-6 w-40 hover:scale-105 transition cursor-pointer">
              <span className="capitalize font-medium text-lg">{mood}</span>
            </div>
          </Link>
        ))}
      </div>
      <div className="mt-12 text-sm">
        <Link href="/about" className="underline text-blue-500">About this project</Link>
      </div>
    </main>
  );
}
