export default function CCTVDemo() {
  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-4xl text-cyan-400 font-bold mb-8">
        Live CCTV Monitoring Demo
      </h1>

      <div className="grid md:grid-cols-2 gap-6">
        <iframe
          className="w-full h-80 rounded-xl"
          src="https://www.youtube.com/embed/1EiC9bvVGnk"
        />

        <iframe
          className="w-full h-80 rounded-xl"
          src="https://www.youtube.com/embed/bNyUyrR0PHo"
        />
      </div>
    </div>
  );
}