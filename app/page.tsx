export default function HomePage() {
  const services = [
    {
      title: 'CCTV Camera Installation',
      description:
        'Professional CCTV installation for homes, offices, factories, and governmental institutions.',
      icon: '📷',
    },
    {
      title: 'Network Installation',
      description:
        'Secure and reliable networking solutions for homes, offices, and businesses.',
      icon: '🌐',
    },
    {
      title: 'LED Screen Installation',
      description:
        'Indoor and outdoor LED screen setup for promotions, events, and business branding.',
      icon: '🖥️',
    },
    {
      title: 'Desktop & Printer Support',
      description:
        'Maintenance, troubleshooting, repairs, and technical support services.',
      icon: '🛠️',
    },
  ];

  return (
    <main className="bg-[#0B0F19] text-white min-h-screen overflow-hidden">
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-black/30 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-wide text-cyan-400">
            SDF Technology
          </h1>

          <div className="hidden md:flex gap-8 text-sm font-medium text-gray-300">
            <a href="#about" className="hover:text-cyan-400 transition">
              About
            </a>
            <a href="#services" className="hover:text-cyan-400 transition">
              Services
            </a>
            <a href="#projects" className="hover:text-cyan-400 transition">
              Projects
            </a>
            <a href="#contact" className="hover:text-cyan-400 transition">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative flex items-center justify-center min-h-screen px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-transparent blur-3xl" />

        <div className="relative z-10 text-center max-w-5xl">
          <div className="inline-block mb-6 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 text-sm">
            Professional IT & Security Solutions
          </div>

          <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
            SDF
            <span className="text-cyan-400"> Technology</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-10">
            CCTV Camera Installation • Network Installation • LED Screen Setup •
            IT Maintenance & Support
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-5">
            <a
              href="#services"
              className="px-8 py-4 rounded-2xl bg-cyan-500 hover:bg-cyan-400 text-black font-semibold shadow-lg shadow-cyan-500/30 transition duration-300 hover:scale-105"
            >
              Explore Services
            </a>

            <a
              href="#contact"
              className="px-8 py-4 rounded-2xl border border-cyan-400/40 bg-white/5 backdrop-blur-md hover:bg-cyan-500/10 transition duration-300 hover:scale-105"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-cyan-400 uppercase tracking-widest text-sm mb-4">
              About Us
            </p>

            <h2 className="text-4xl font-bold mb-6 leading-tight">
              Your First Choice For Smart IT & Security Solutions
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              SDF Technology provides professional installation and support
              services for homes, offices, factories, and organizations.
            </p>

            <p className="text-gray-400 text-lg leading-relaxed">
              We specialize in CCTV systems, networking infrastructure, LED
              displays, desktop maintenance, printer support, and complete IT
              technical services.
            </p>
          </div>

          <div className="relative">
            <div className="rounded-3xl border border-cyan-400/20 bg-white/5 backdrop-blur-xl p-10 h-[400px] flex items-center justify-center text-gray-400 text-xl">
              Upload Company Photo / Video Here
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 px-6 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-cyan-400 uppercase tracking-widest text-sm mb-4">
              Our Services
            </p>

            <h2 className="text-4xl font-bold">
              Professional Solutions For Modern Businesses
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 hover:border-cyan-400/40 hover:-translate-y-3 transition duration-500"
              >
                <div className="text-5xl mb-6">{service.icon}</div>

                <h3 className="text-2xl font-semibold mb-4 group-hover:text-cyan-400 transition">
                  {service.title}
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-cyan-400 uppercase tracking-widest text-sm mb-4">
              Portfolio
            </p>

            <h2 className="text-4xl font-bold mb-4">Our Recent Projects</h2>

            <p className="text-gray-400 text-lg">
              Upload your project images and TikTok videos here.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="h-72 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-lg flex items-center justify-center text-gray-500 hover:border-cyan-400/40 transition"
              >
                Project Photo / Video
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 px-6 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-cyan-400 uppercase tracking-widest text-sm mb-4">
            Testimonials
          </p>

          <h2 className="text-4xl font-bold mb-16">
            What Our Clients Say
          </h2>

          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-12 text-center">
            <p className="text-xl text-gray-300 italic leading-relaxed mb-8">
              “Professional service, fast installation, and reliable technical
              support. Highly recommended.”
            </p>

            <h4 className="text-cyan-400 font-semibold text-lg">
              Client Name
            </h4>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-cyan-400 uppercase tracking-widest text-sm mb-4">
              Contact Us
            </p>

            <h2 className="text-4xl font-bold mb-6">
              Let’s Build Your Next Project
            </h2>

            <div className="space-y-5 text-gray-300 text-lg">
              <p>📍 Addis Ababa, Ethiopia</p>
              <p>📞 +251 910105376</p>
              <p>📧 cctvcamera.eo@email.com</p>
              <p>🕒 Mon - Sat : 8:00 AM - 6:00 PM</p>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 space-y-5">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-black/30 border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-cyan-400"
            />

            <input
              type="text"
              placeholder="Phone Number"
              className="w-full bg-black/30 border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-cyan-400"
            />

            <textarea
              placeholder="Your Message"
              rows={5}
              className="w-full bg-black/30 border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-cyan-400"
            />

            <button className="w-full py-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-semibold transition duration-300">
              Send Inquiry
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-8 px-6 text-center text-gray-500">
        <p>
          © 2026 SDF Technology — Your First Choice For Smart IT & Security
          Solutions
        </p>
      </footer>

      {/* WHATSAPP BUTTON */}
      <a
        href="https://wa.me/251910105376"
        target="_blank"
        className="fixed bottom-6 right-6 w-16 h-16 rounded-full bg-green-500 flex items-center justify-center text-3xl shadow-2xl hover:scale-110 transition z-50"
      >
        💬
      </a>
    </main>
  );
}
