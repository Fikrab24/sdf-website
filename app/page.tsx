"use client";

import { useEffect, useState } from "react";

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Professional IT & Security Solutions",
      subtitle:
        "CCTV Installation, Networking, LED Screens, Printer & Desktop Support",
    },
    {
      title: "Smart Networking For Factorty,Homes & Offices",
      subtitle:
        "Reliable LAN setup, WiFi configuration, troubleshooting & maintenance",
    },
    {
      title: "Trusted Technical Support Company",
      subtitle:
        "Fast support, modern technology and reliable service for businesses",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const services = [
    {
      icon: "📷",
      title: "CCTV Camera Installation",
      desc: "Professional CCTV setup for homes, offices, stores and companies.",
    },
    {
      icon: "🌐",
      title: "Network Installation",
      desc: "LAN, WiFi, router configuration and structured cabling solutions.",
    },
    {
      icon: "🖥️",
      title: "Desktop & Laptop Support",
      desc: "Hardware repair, software installation and troubleshooting.",
    },
    {
      icon: "🖨️",
      title: "Printer Maintenance",
      desc: "Printer setup, repair, network sharing and maintenance services.",
    },
    {
      icon: "📺",
      title: "LED Screen Installation",
      desc: "Modern LED display installation for businesses and events.",
    },
    {
      icon: "🛠️",
      title: "IT Technical Support",
      desc: "Remote and onsite technical support for companies and individuals.",
    },
  ];

  const testimonials = [
    {
      name: "Business Client",
      text: "Professional networking and CCTV installation service. Highly recommended.",
    },
    {
      name: "Office Manager",
      text: "Fast technical support and excellent printer maintenance service.",
    },
    {
      name: "Home Customer",
      text: "Clean installation and reliable internet setup for our home office.",
    },
  ];

  return (
    <main className="bg-[#050816] text-white overflow-hidden">

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/30 border-b border-cyan-500/10">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="text-2xl font-bold text-cyan-400">
            SDF Technology
          </h1>

          <div className="hidden md:flex gap-8 text-sm text-gray-300">
            <a href="#about" className="hover:text-cyan-400 transition">
              About
            </a>
            <a href="#services" className="hover:text-cyan-400 transition">
              Services
            </a>
            <a href="#portfolio" className="hover:text-cyan-400 transition">
              Portfolio
            </a>
            <a href="#testimonials" className="hover:text-cyan-400 transition">
              Testimonials
            </a>
            <a href="#contact" className="hover:text-cyan-400 transition">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center px-6">

        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-purple-500/10"></div>

        <div className="absolute w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-3xl top-[-100px] left-[-100px] animate-pulse"></div>

        <div className="absolute w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl bottom-[-100px] right-[-100px] animate-pulse"></div>

        <div className="relative z-10 text-center max-w-5xl transition-all duration-700">

          <div className="inline-block px-5 py-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 mb-6">
            <span className="text-cyan-300 text-sm">
              Professional IT & Security Solutions
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-8">
            {slides[currentSlide].title}
          </h1>

          <p className="text-gray-300 text-xl max-w-3xl mx-auto mb-10">
            {slides[currentSlide].subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <a
              href="#services"
              className="px-8 py-4 bg-cyan-500 hover:bg-cyan-400 rounded-xl text-black font-bold transition"
            >
              Explore Services
            </a>

            <a
              href="#contact"
              className="px-8 py-4 border border-cyan-400 rounded-xl hover:bg-cyan-400/10 transition"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-16 border-y border-white/10 bg-black/20">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center px-6">

          <div>
            <h2 className="text-4xl font-bold text-cyan-400">200+</h2>
            <p className="text-gray-400 mt-2">Projects Completed</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-cyan-400">24/7</h2>
            <p className="text-gray-400 mt-2">Technical Support</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-cyan-400">100%</h2>
            <p className="text-gray-400 mt-2">Client Satisfaction</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-cyan-400">5+</h2>
            <p className="text-gray-400 mt-2">Years Experience</p>
          </div>

        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-28 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          <div>
            <p className="text-cyan-400 mb-4 font-semibold">ABOUT US</p>

            <h2 className="text-5xl font-bold mb-8">
              Smart IT Solutions For Modern Businesses
            </h2>

            <p className="text-gray-300 leading-8 mb-6">
              SDF Technology provides professional IT infrastructure,
              networking, CCTV security systems, LED displays, printer
              maintenance and technical support services.
            </p>

            <p className="text-gray-300 leading-8">
              Our mission is to help businesses and homes stay connected,
              secure and productive using modern technology solutions.
            </p>
          </div>

          <div className="rounded-3xl border border-cyan-400/20 bg-white/5 backdrop-blur-xl h-[420px] flex items-center justify-center text-gray-400 text-xl">
            Upload Company Photo / Video Here
          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="py-28 px-6 bg-gradient-to-b from-transparent to-black/40"
      >
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-20">
            <p className="text-cyan-400 font-semibold mb-4">
              OUR SERVICES
            </p>

            <h2 className="text-5xl font-bold">
              Professional Technology Services
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {services.map((service, index) => (
              <div
                key={index}
                className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl hover:border-cyan-400/40 hover:scale-105 transition duration-300"
              >
                <div className="text-6xl mb-6">{service.icon}</div>

                <h3 className="text-2xl font-bold mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-400 leading-7">
                  {service.desc}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="py-28 px-6">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-20">
            <p className="text-cyan-400 font-semibold mb-4">
              PORTFOLIO
            </p>

            <h2 className="text-5xl font-bold">
              Recent Projects
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="h-80 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl flex items-center justify-center text-gray-400 text-xl hover:scale-105 transition"
              >
                Project Photo / Video
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section
        id="testimonials"
        className="py-28 px-6 bg-black/30"
      >
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-20">
            <p className="text-cyan-400 font-semibold mb-4">
              TESTIMONIALS
            </p>

            <h2 className="text-5xl font-bold">
              What Clients Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {testimonials.map((item, index) => (
              <div
                key={index}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
              >
                <p className="text-gray-300 leading-7 mb-6">
                  "{item.text}"
                </p>

                <h3 className="text-cyan-400 font-bold">
                  {item.name}
                </h3>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-28 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">

          <div>
            <p className="text-cyan-400 font-semibold mb-4">
              CONTACT US
            </p>

            <h2 className="text-5xl font-bold mb-8">
              Let's Work Together
            </h2>

            <div className="space-y-5 text-gray-300 text-lg">
              <p>📍 Addis Ababa, Ethiopia</p>
              <p>📞 +251 910105376</p>
              <p>📧 cctvcamera.eo@email.com</p>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

            <form className="space-y-6">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-4 rounded-xl bg-black/30 border border-white/10 outline-none"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-4 rounded-xl bg-black/30 border border-white/10 outline-none"
              />

              <textarea
                placeholder="Your Message"
                rows={5}
                className="w-full p-4 rounded-xl bg-black/30 border border-white/10 outline-none"
              ></textarea>

              <button className="w-full py-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold transition">
                Send Message
              </button>

            </form>

          </div>
          <a
  href="https://wa.me/251910105376"
  target="_blank"
  className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-full shadow-lg transition"
>
  WhatsApp
</a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-8 text-center text-gray-500">
        © 2026 SDF Technology. All rights reserved.
      </footer>

    </main>
  );
}