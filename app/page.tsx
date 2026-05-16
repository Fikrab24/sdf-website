"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Network,
  Camera,
  MonitorSmartphone,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
} from "lucide-react";

export default function HomePage() {
  return (
    <main className="bg-black text-white overflow-hidden scroll-smooth">

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur border-b border-orange-500/20">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-extrabold text-orange-500">
              SDF Technology
            </h1>
            <p className="text-xs text-gray-400">
              Smart IT & Security Solutions
            </p>
          </div>

          <div className="hidden md:flex gap-8 text-sm font-semibold">
            <a href="#home" className="hover:text-orange-400">HOME</a>
            <a href="#about" className="hover:text-orange-400">ABOUT</a>
            <a href="#services" className="hover:text-orange-400">SERVICES</a>
            <a href="#projects" className="hover:text-orange-400">PROJECTS</a>
            <a href="#contact" className="hover:text-orange-400">CONTACT</a>
          </div>

          <a
            href="#contact"
            className="hidden md:block border border-orange-500 px-5 py-2 rounded-xl hover:bg-orange-500 transition"
          >
            Contact Us
          </a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center px-6"
      >

        {/* BACKGROUND IMAGE */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/office.jpg')",
          }}
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/75" />

        {/* ANIMATED GLOW */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-orange-500/20 blur-[120px]" />
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-cyan-500/20 blur-[120px]" />

        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="inline-block px-5 py-2 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 mb-6">
              Ethiopia’s Trusted IT & Security Partner
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-8">
              Transform Your Business With
              <span className="text-orange-500"> Advanced IT Solutions</span>
            </h1>

            <p className="text-gray-300 text-lg leading-8 mb-10 max-w-2xl">
              SDF Technology delivers enterprise-level CCTV systems,
              networking infrastructure, remote IT support, cybersecurity,
              cloud solutions, and smart business technologies designed to help
              your company grow securely and efficiently.
            </p>

            <div className="flex flex-col sm:flex-row gap-5">
              <a
                href="#services"
                className="bg-orange-500 hover:bg-orange-600 transition px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2"
              >
                Get Started
                <ChevronRight size={20} />
              </a>

              <a
                href="#contact"
                className="border border-white/20 hover:border-orange-500 hover:bg-orange-500/10 transition px-8 py-4 rounded-xl font-semibold"
              >
                Request Consultation
              </a>
            </div>

            {/* TRUST BADGES */}
            <div className="grid grid-cols-3 gap-6 mt-14">
              <div>
                <h2 className="text-4xl font-bold text-orange-500">200+</h2>
                <p className="text-gray-400 text-sm mt-2">
                  Successful Installations
                </p>
              </div>

              <div>
                <h2 className="text-4xl font-bold text-orange-500">24/7</h2>
                <p className="text-gray-400 text-sm mt-2">
                  Technical Support
                </p>
              </div>

              <div>
                <h2 className="text-4xl font-bold text-orange-500">99%</h2>
                <p className="text-gray-400 text-sm mt-2">
                  Client Satisfaction
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <img
              src="/network.jpg"
              alt="IT Infrastructure"
              className="rounded-3xl shadow-2xl border border-white/10"
            />

            <div className="absolute -bottom-6 -left-6 bg-black/80 border border-orange-500/30 backdrop-blur-xl p-6 rounded-2xl">
              <p className="text-orange-400 font-bold text-xl">
                Trusted Professional Service
              </p>
              <p className="text-gray-300 text-sm mt-2">
                Reliable solutions tailored for modern businesses.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-28 px-6 bg-[#070707]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          <img
            src="/cctv.jpg"
            alt="About"
            className="rounded-3xl border border-white/10"
          />

          <div>
            <h2 className="text-5xl font-bold mb-8">
              Why Businesses Choose
              <span className="text-orange-500"> SDF Technology</span>
            </h2>

            <p className="text-gray-300 leading-8 mb-8">
              We combine modern technology, professional support, and business-focused solutions to help organizations operate securely and efficiently.
            </p>

            <div className="space-y-5">
              {[
                "Professional CCTV & surveillance systems",
                "Enterprise networking infrastructure",
                "Reliable IT maintenance & support",
                "Cybersecurity & data protection",
                "Fast response and trusted expertise",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-5"
                >
                  <ShieldCheck className="text-orange-500" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-28 px-6">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6">
              Our Professional Services
            </h2>

            <p className="text-gray-400 max-w-3xl mx-auto text-lg">
              Smart technology solutions built to improve security,
              communication, productivity, and business performance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {[
              {
                icon: <Camera size={50} />,
                title: "CCTV Installation",
                desc: "Professional surveillance systems for homes and businesses.",
              },
              {
                icon: <Network size={50} />,
                title: "Networking",
                desc: "LAN, WiFi, fiber and enterprise network solutions.",
              },
              {
                icon: <MonitorSmartphone size={50} />,
                title: "Remote Support",
                desc: "Quick remote troubleshooting and technical assistance.",
              },
              {
                icon: <ShieldCheck size={50} />,
                title: "Cyber Security",
                desc: "Protect your business from modern cyber threats.",
              },
            ].map((service, index) => (
              <motion.div
                whileHover={{ y: -10 }}
                key={index}
                className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-orange-500/40 transition"
              >
                <div className="text-orange-500 mb-6">
                  {service.icon}
                </div>

                <h3 className="text-2xl font-bold mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-400 leading-7">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 px-6 bg-gradient-to-r from-orange-500 to-orange-600 text-center">

        <h2 className="text-5xl font-extrabold mb-8">
          Ready To Upgrade Your Business Technology?
        </h2>

        <p className="max-w-3xl mx-auto text-xl mb-10 text-white/90">
          Partner with SDF Technology and experience trusted professional IT services that improve productivity, security, and customer confidence.
        </p>

        <a
          href="#contact"
          className="bg-black text-white px-10 py-5 rounded-2xl font-bold hover:scale-105 transition inline-block"
        >
          Start Your Project
        </a>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-28 px-6 bg-black">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">

          <div>
            <h2 className="text-5xl font-bold mb-8">
              Contact Our Team
            </h2>

            <p className="text-gray-400 text-lg mb-10 leading-8">
              Need CCTV installation, networking, remote support, or IT consultation? Contact us today and let our experts help your business succeed.
            </p>

            <div className="space-y-6">

              <div className="flex items-center gap-4">
                <Phone className="text-orange-500" />
                <span>+251 910105376</span>
              </div>

              <div className="flex items-center gap-4">
                <Mail className="text-orange-500" />
                <span>cctvcamera.eo@gmail.com</span>
              </div>

              <div className="flex items-center gap-4">
                <MapPin className="text-orange-500" />
                <span>Addis Ababa, Ethiopia</span>
              </div>
            </div>

            {/* SOCIAL LINKS */}
            <div className="flex gap-5 mt-10">

              <a
                href="https://t.me/"
                target="_blank"
                className="bg-white/5 border border-white/10 hover:border-orange-500 px-5 py-3 rounded-xl"
              >
                Telegram
              </a>

              <a
                href="https://tiktok.com/"
                target="_blank"
                className="bg-white/5 border border-white/10 hover:border-orange-500 px-5 py-3 rounded-xl"
              >
                TikTok
              </a>

              <a
                href="https://facebook.com/"
                target="_blank"
                className="bg-white/5 border border-white/10 hover:border-orange-500 px-5 py-3 rounded-xl"
              >
                Facebook
              </a>
            </div>
          </div>

          {/* CONTACT FORM */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-10">

            <h3 className="text-3xl font-bold mb-8">
              Send Us A Message
            </h3>

            <div className="space-y-5">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-black border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-orange-500"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-black border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-orange-500"
              />

              <textarea
                rows={5}
                placeholder="Tell us about your project..."
                className="w-full bg-black border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-orange-500"
              />

              <button className="w-full bg-orange-500 hover:bg-orange-600 transition py-4 rounded-xl font-bold text-lg">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-8 text-center text-gray-500">
        © 2026 SDF Technology. All rights reserved.
      </footer>

      {/* WHATSAPP FLOAT */}
      <a
        href="https://wa.me/251910105376"
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 hover:scale-110 transition w-16 h-16 rounded-full flex items-center justify-center shadow-2xl z-50"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          className="w-8 h-8"
        />
      </a>
    </main>
  );
}