import { useRouter } from 'next/router';

const palettes = {
  energetic: ['#FF6B6B', '#FFD93D', '#6BCB77', '#4D96FF'],
  calm: ['#A3CEF1', '#E7F6F2', '#C0D6DF', '#B8B5FF'],
  romantic: ['#FFC1CC', '#FFB6B9', '#FAE1DD', '#FFE5E5'],
  dreamy: ['#8E44AD', '#6C5B7B', '#355C7D', '#34495E']
};

const songs = {
  energetic: [
    { title: "Can’t Hold Us – Macklemore", url: "https://open.spotify.com/track/3E7dfMvvCLUddWissuqMwr" },
    { title: "Titanium – David Guetta", url: "https://open.spotify.com/track/1zB4vmk8tFRmM9UULNzbLB" }
  ],
  calm: [
    { title: "Weather Any Storm – Cody Francis", url: "https://open.spotify.com/track/0eaD3F5zUC3Bq8In11nkau?si=83078ee8609a4a2b" },
    { title: "a little more time – Role Model", url: "https://open.spotify.com/track/5UhZyWfrSEhGYfIIFNYscF?si=4b570c63aa144966" }
  ],
  romantic: [
    { title: "Dreams from Bunker Hill – Cigarettes After Sex", url: "https://open.spotify.com/track/3U4isOIWM3VvDubwSI3y7a" },
    { title: "Tum Jab Paas – Prateek Kuhad", url: "https://open.spotify.com/track/3FTRSa9mWB3kKx2jkhUAN3?si=06a53ba809df421a" }
  ],
  dreamy: [
    { title: "Snow on the Beach – Taylor Swift", url: "https://open.spotify.com/track/5Xuj3FPvHqMaLt7wVgK9cK" },
    { title: "Space Song – Beach House", url: "https://open.spotify.com/track/1y5NZCmRz6ZgDP6Fd6rWbW" }
  ]
};

export default function MoodPage() {
  const router = useRouter();
  const { mood } = router.query;
  const colors = palettes[mood] || [];
  const moodSongs = songs[mood] || [];

  return (
    <main className="min-h-screen bg-gradient-to-br from-white to-indigo-50 p-10 text-center text-gray-800 animate-fade-in">
      <h1 className="text-3xl font-bold mb-4 capitalize animate-slide-in">{mood} Mood Palette</h1>
      <div className="flex justify-center flex-wrap gap-6">
        {colors.map((color, i) => (
          <div key={i} className="w-32 h-32 rounded-xl shadow-lg relative animate-fade-in" style={{ backgroundColor: color }}>
            <p className="absolute bottom-2 w-full text-white font-semibold drop-shadow-md text-sm">{color}</p>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-4 animate-fade-in">Song Recommendations 🎵</h2>
        <ul className="space-y-2">
          {moodSongs.map((song, idx) => (
            <li key={idx} className="animate-fade-in delay-100">
              <a
                href={song.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:text-indigo-800 font-medium transition-colors underline-offset-2 hover:underline"
              >
                {song.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-12">
        <a href="/">
          <button className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-2 rounded-full hover:from-indigo-600 hover:to-purple-600 transition transform hover:scale-105 animate-pulse shadow-md">← Back home</button>
        </a>
      </div>
    </main>
  );
}
