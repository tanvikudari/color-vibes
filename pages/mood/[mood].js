import { useRouter } from 'next/router';

const palettes = {
  energetic: ['#FF6B6B', '#FFD93D', '#6BCB77', '#4D96FF'],
  calm: ['#A3CEF1', '#E7F6F2', '#C0D6DF', '#B8B5FF'],
  romantic: ['#FFC1CC', '#FFB6B9', '#FAE1DD', '#FFE5E5'],
  mystical: ['#8E44AD', '#6C5B7B', '#355C7D', '#34495E']
};

const songs = {
  energetic: [
    { title: "Can’t Hold Us – Macklemore", url: "https://open.spotify.com/track/3E7dfMvvCLUddWissuqMwr" },
    { title: "Titanium – David Guetta", url: "https://open.spotify.com/track/1zB4vmk8tFRmM9UULNzbLB" }
  ],
  calm: [
    { title: "Weightless – Marconi Union", url: "https://open.spotify.com/track/6JEK0CvvjDjjMUBFoXShNZ" },
    { title: "Bloom – The Paper Kites", url: "https://open.spotify.com/track/3KR2yDtvE7HkWg0TbGE4jH" }
  ],
  romantic: [
    { title: "All of Me – John Legend", url: "https://open.spotify.com/track/3U4isOIWM3VvDubwSI3y7a" },
    { title: "Perfect – Ed Sheeran", url: "https://open.spotify.com/track/0tgVpDi06FyKpA1z0VMD4v" }
  ],
  mystical: [
    { title: "Night Owl – Galimatias", url: "https://open.spotify.com/track/5Xuj3FPvHqMaLt7wVgK9cK" },
    { title: "Oblivion – Grimes", url: "https://open.spotify.com/track/1y5NZCmRz6ZgDP6Fd6rWbW" }
  ]
};

export default function MoodPage() {
  const router = useRouter();
  const { mood } = router.query;
  const colors = palettes[mood] || [];
  const moodSongs = songs[mood] || [];

  return (
    <main className="min-h-screen bg-gradient-to-br from-white to-indigo-50 p-10 text-center text-gray-800">
      <h1 className="text-3xl font-bold mb-4 capitalize">{mood} Mood Palette</h1>
      <div className="flex justify-center flex-wrap gap-6">
        {colors.map((color, i) => (
          <div key={i} className="w-32 h-32 rounded-xl shadow-lg relative" style={{ backgroundColor: color }}>
            <p className="absolute bottom-2 w-full text-white font-semibold drop-shadow-md text-sm">{color}</p>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-4">Song Recommendations 🎵</h2>
        <ul className="space-y-2">
          {moodSongs.map((song, idx) => (
            <li key={idx}>
              <a
                href={song.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline hover:text-blue-800"
              >
                {song.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-12">
        <a href="/">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition transform hover:scale-105">← Back home</button>
        </a>
      </div>
    </main>
  );
}
