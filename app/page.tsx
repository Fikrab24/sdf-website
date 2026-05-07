"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "CCTV Camera Installation",
    icon: "📷",
    desc: "Professional CCTV installation for homes, offices, factories, and commercial buildings.",
  },
  {
    title: "Network Installation",
    icon: "🌐",
    desc: "Reliable LAN and network setup solutions for homes and business environments.",
  },
  {
    title: "LED Screen Installation",
    icon: "🖥️",
    desc: "Modern LED display setup for promotions, offices, factories, and events.",
  },
  {
    title: "Computer & Printer Support",
    icon: "🛠️",
    desc: "Maintenance, troubleshooting, repair, and IT support services.",
  },
];

export default function HomePage() {
  return (
    <main className="bg-[#050816] text-white overflow-hidden">
      
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-cyan-400">
            SDF Technology
          </h1>

          <div className="hidden md:flex gap-8 text-sm text-gray-300 font-medium">
            <a href="#home" className="hover:text-cyan-400 transition">
              Home
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

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center px-6"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-black" />

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-5xl text-center"
        >

          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
            className="inline-block px-5 py-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 mb-6"
          >
            Professional IT & Security Solutions
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
            We Build Modern
            <span className="text-cyan-400"> IT Solutions</span>
          </h1>

          <p className="text-gray-300 text-lg md:text-2xl max-w-3xl mx-auto mb-10">
            CCTV Installation, Network Setup, LED Screen Installation,
            Computer & Printer Maintenance for Homes, Offices, Factories,
            and Government Organizations.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-5">
            <button className="px-8 py-4 rounded-2xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold transition duration-300 shadow-2xl shadow-cyan-500/30">
              Get Started
            </button>

            <button className="px-8 py-4 rounded-2xl border border-white/20 hover:border-cyan-400 hover:text-cyan-400 transition duration-300">
              View Projects
            </button>
          </div>
        </motion.div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Our Services
            </h2>

            <p className="text-gray-400 text-lg">
              Professional technology services for homes and businesses.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl p-8 hover:border-cyan-400/40 transition duration-500"
              >

                <div className="text-5xl mb-5">
                  {service.icon}
                </div>

                <h3 className="text-2xl font-bold mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  {service.desc}
                </p>

              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="py-24 px-6 bg-white/5"
      >
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Our Projects
            </h2>

            <p className="text-gray-400 text-lg">
              Upload your project photos and videos here.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {[1, 2, 3].map((item) => (
              <motion.div
                key={item}
                whileHover={{ scale: 1.03 }}
                className="h-80 rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 flex items-center justify-center text-gray-400 text-xl backdrop-blur-xl"
              >
                Project Photo / Video
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto rounded-3xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/20 backdrop-blur-xl p-12 text-center"
        >

          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Ready To Upgrade Your Technology?
          </h2>

          <p className="text-gray-300 text-lg mb-8 max-w-3xl mx-auto">
            SDF Technology delivers reliable IT solutions with professional installation and support services.
          </p>

          <button className="px-10 py-4 rounded-2xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold transition duration-300 shadow-2xl shadow-cyan-500/30">
            Contact Us Today
          </button>

        </motion.div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="py-24 px-6 bg-black/40"
      >

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          <div>
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Contact Us
            </h2>

            <p className="text-gray-300 text-lg mb-8">
              Reach out for professional CCTV, networking, LED screen,
              and maintenance services.
            </p>

            <div className="space-y-5 text-gray-300 text-lg">
              <p>📍 Addis Ababa, Ethiopia</p>
              <p>📞 +251 910105376</p>
              <p>📧 cctvcamera.eo@email.com</p>
            </div>
          </div>

          <div className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl p-10">

            <div className="space-y-5">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-black/30 border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-cyan-400"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-black/30 border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-cyan-400"
              />

              <textarea
                placeholder="Your Message"
                rows={5}
                className="w-full bg-black/30 border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-cyan-400"
              />

              <button className="w-full py-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold transition duration-300">
                Send Message
              </button>

            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 text-center text-gray-500 text-sm">
        © 2026 SDF Technology. All Rights Reserved.
      </footer>

    </main>
  );
}