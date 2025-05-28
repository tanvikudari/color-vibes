import { useRouter } from 'next/router';

const palettes = {
  energetic: ['#FF6B6B', '#FFD93D', '#6BCB77', '#4D96FF'],
  calm: ['#A3CEF1', '#E7F6F2', '#C0D6DF', '#B8B5FF'],
  romantic: ['#FFC1CC', '#FFB6B9', '#FAE1DD', '#FFE5E5'],
  mystical: ['#8E44AD', '#6C5B7B', '#355C7D', '#34495E']
};

export default function MoodPage() {
  const router = useRouter();
  const { mood } = router.query;
  const colors = palettes[mood] || [];

  return (
    <main className="min-h-screen bg-white p-10 text-center">
      <h1 className="text-3xl font-bold mb-4 capitalize">{mood} Mood Palette</h1>
      <div className="flex justify-center flex-wrap gap-6">
        {colors.map((color, i) => (
          <div key={i} className="w-32 h-32 rounded-xl shadow-lg" style={{ backgroundColor: color }}>
            <p className="mt-36 text-white font-bold drop-shadow-md">{color}</p>
          </div>
        ))}
      </div>
      <div className="mt-12">
        <a href="/" className="underline text-blue-500">← Back home</a>
      </div>
    </main>
  );
}
