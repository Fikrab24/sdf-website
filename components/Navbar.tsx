export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between">
        <h1 className="text-cyan-400 font-bold text-xl">
          FikNet Technology
        </h1>

        <div className="hidden md:flex gap-6 text-gray-300">
          <a href="#services">Services</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contact">Contact</a>
          <a href="/dashboard">Dashboard</a>
        </div>
      </div>
    </nav>
  );
}