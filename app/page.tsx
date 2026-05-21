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
  Star,
  Clock3,
  Globe,
  ChevronRight,
  CheckCircle2,
} from "lucide-react";
import {
  FaWhatsapp,
  FaTelegramPlane,
  FaTiktok,
  FaLinkedinIn,
} from "react-icons/fa";

export default function HomePage() {
  return (
    <main className="bg-[#050816] text-white overflow-hidden">

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-xl border-b border-orange-500/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
<div className="w-14 h-14 rounded-full bg-cyan-500/20 border border-cyan-400/30 flex items-center justify-center overflow-hidden">

              {/* PUT YOUR LOGO HERE */}
              <img
                src="/logo12.png"
                alt="Logo"
                className="object-cover w-full h-full"
              />

            </div>
          <div>
            <h1 className="text-3xl font-black text-orange-500">
              SDF Technology
            </h1>

            <p className="text-xs text-gray-400">
              Smart IT & Security Solutions
            </p>
          </div>

          <div className="hidden lg:flex gap-8 text-sm font-semibold">
            <a href="#home" className="hover:text-orange-400 transition">
              Home
            </a>

            <a href="#about" className="hover:text-orange-400 transition">
                About
            </a>

            <a href="#services" className="hover:text-orange-400 transition">
              Services
            </a>

            <a href="#portfolio" className="hover:text-orange-400 transition">
              Portfolio
            </a>

            <a href="#testimonials" className="hover:text-orange-400 transition">
              Reviews
            </a>

            <a href="#contact" className="hover:text-orange-400 transition">
              Contact
            </a>
          </div>

          <a
            href="#contact"
            className="hidden md:block bg-orange-500 hover:bg-orange-600 px-5 py-3 rounded-xl font-semibold transition"
          >
            Get Consultation
          </a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section
        id="home"
        className="relative min-h-screen flex items-center overflow-hidden"
      >

        {/* BACKGROUND */}
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{
            backgroundImage: "url('/office.jpg')",
          }}
        />

        <div className="absolute inset-0 bg-black/80" />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/20" />

        {/* ANIMATED GLOW */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
          }}
          className="absolute top-20 left-10 w-96 h-96 bg-orange-500/20 rounded-full blur-[120px]"
        />

        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, -60, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
          }}
          className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px]"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center pt-32">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >

            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 mb-8">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-ping" />
              Trusted by Businesses Across Ethiopia
            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-8">

              Professional
              <span className="text-orange-500"> IT Solutions </span>

              For Modern Businesses
            </h1>

            <p className="text-gray-300 text-lg md:text-xl leading-9 mb-10 max-w-2xl">
              SDF Technology provides enterprise-grade CCTV systems,
              networking, cybersecurity, remote support, and IT consulting
              services designed to help businesses grow securely and efficiently.
            </p>

            <div className="flex flex-col sm:flex-row gap-5">

              <a
                href="#services"
                className="bg-orange-500 hover:bg-orange-600 transition px-8 py-4 rounded-2xl font-bold text-lg shadow-lg shadow-orange-500/30"
              >
                Explore Services
              </a>

              <a
                href="#contact"
                className="border border-white/20 hover:border-orange-500 hover:bg-orange-500/10 transition px-8 py-4 rounded-2xl font-semibold"
              >
                Contact Experts
              </a>
            </div>

            {/* STATS */}
            <div className="grid grid-cols-3 gap-8 mt-16">

              <div>
                <h2 className="text-4xl font-black text-orange-500">
                  250+
                </h2>

                <p className="text-gray-400 mt-2">
                  Projects Completed
                </p>
              </div>

              <div>
                <h2 className="text-4xl font-black text-orange-500">
                  24/7
                </h2>

                <p className="text-gray-400 mt-2">
                  Technical Support
                </p>
              </div>

              <div>
                <h2 className="text-4xl font-black text-orange-500">
                  99%
                </h2>

                <p className="text-gray-400 mt-2">
                  Client Satisfaction
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="relative hidden lg:block"
          >

            <div className="absolute -inset-5 bg-gradient-to-r from-orange-500/30 to-cyan-500/30 blur-3xl rounded-full" />

            <img
              src="/network.jpg"
              alt="IT Solutions"
              className="relative rounded-[40px] border border-white/10 shadow-2xl"
            />

            {/* FLOAT CARD */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="absolute -bottom-8 -left-8 bg-black/80 backdrop-blur-xl border border-orange-500/30 p-6 rounded-3xl"
            >

              <h3 className="text-orange-400 text-2xl font-bold">
                Enterprise-Level Solutions
              </h3>

              <p className="text-gray-300 mt-2">
                Secure • Reliable • Scalable
              </p>

            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* TRUSTED SECTION */}
      <section className="py-14 border-y border-white/10 bg-black/40">

        <div className="max-w-7xl mx-auto px-6">

          <p className="text-center text-gray-400 uppercase tracking-[5px] mb-10">
            Trusted By Businesses, Offices & Organizations
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

            {[
              "Factories",
              "Hotels",
              "Corporate Offices",
              "Clincs",
            ].map((item, index) => (

              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-2xl py-8 font-bold text-xl"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-28 px-6">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          <img
            src="/web3.png"
            alt="About"
            className="rounded-3xl border border-white/10 shadow-2xl"
          />

          <div>

            <p className="text-orange-400 font-semibold mb-4">
              ABOUT OUR COMPANY
            </p>

            <h2 className="text-5xl font-bold mb-8">
              Reliable Technology Partner For Your Business
            </h2>

            <p className="text-gray-300 leading-8 mb-8">
              SDF Technology delivers expert networking, CCTV security, and complete IT support for homes and businesses. 
              We install LED screens, maintain computers and printers, and secure factories, hospitals, schools, and offices.
               Our mission is to drive your growth through fast, trusted, and modern digital infrastructure.
            </p>

            <div className="space-y-5">

              {[
                "Professional CCTV surveillance systems",
                "Enterprise networking & WiFi solutions",
                "Fast remote and onsite support",
                "Cybersecurity & infrastructure protection",
                "Reliable customer service and maintenance",
              ].map((item, index) => (

                <div
                  key={index}
                  className="flex items-center gap-4"
                >

                  <CheckCircle2 className="text-orange-500" />

                  <span className="text-gray-300">
                    {item}
                  </span>

                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-28 px-6 bg-[#0b1020]">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-20">

            <p className="text-orange-400 font-semibold mb-4">
              OUR SERVICES
            </p>

            <h2 className="text-5xl font-bold mb-6">
              Professional IT Services
            </h2>

            <p className="text-gray-400 max-w-3xl mx-auto text-lg">
              Smart solutions built to improve productivity,
              communication, security, and business growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {[
              {
                icon: <Camera size={50} />,
                title: "CCTV Installation",
                desc: "Professional HD/IP camera installation with remote monitoring, recording, and smart security solutions.",
              },
              {
                icon: <Network size={50} />,
                title: "Networking",
                desc: "LAN setup, WiFi optimization, structured cabling, MikroTik configuration, and enterprise networking.",
              },
              {
                icon: <MonitorSmartphone size={50} />,
                title: "IT Support",
                desc: "Desktop, laptop, printer, and server troubleshooting with fast onsite and remote support.",
              },
              {
                icon: <ShieldCheck size={50} />,
                title: "Cyber Security",
                desc: "Secure systems against modern digital threats.",
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

      {/* PORTFOLIO */}
      <section id="portfolio" className="py-28 px-6">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-20">

            <p className="text-orange-400 font-semibold mb-4">
              OUR PROJECTS
            </p>

            <h2 className="text-5xl font-bold mb-6">
              Recent Work Portfolio
            </h2>

            <p className="text-gray-400 text-lg">
              Delivering reliable IT infrastructure and security systems.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {["/cctv.png", "/p1.png", "/p2.png"].map(
              (img, index) => (

                <motion.div
                  whileHover={{ scale: 1.03 }}
                  key={index}
                  className="overflow-hidden rounded-3xl border border-white/10"
                >

                  <img
                    src={img}
                    alt="Project"
                    className="h-80 w-full object-cover"
                  />

                </motion.div>
              )
            )}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section
        id="testimonials"
        className="py-28 px-6 bg-[#0b1020]"
      >

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-20">

            <p className="text-orange-400 font-semibold mb-4">
              CLIENT REVIEWS
            </p>

            <h2 className="text-5xl font-bold mb-6">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              {
                name: "Business Manager",
                review:
                  "Excellent CCTV installation and professional support service.",
              },
              {
                name: "Office Administrator",
                review:
                  "Their networking solution improved our office productivity significantly.",
              },
              {
                name: "Hotel Owner",
                review:
                  "Reliable technical team with fast response and quality work.",
              },
            ].map((item, index) => (

              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-3xl p-8"
              >

                <div className="flex gap-1 text-orange-400 mb-5">
                  <Star fill="currentColor" />
                  <Star fill="currentColor" />
                  <Star fill="currentColor" />
                  <Star fill="currentColor" />
                  <Star fill="currentColor" />
                </div>

                <p className="text-gray-300 leading-8 mb-8">
                  "{item.review}"
                </p>

                <h4 className="font-bold text-xl">
                  {item.name}
                </h4>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 px-6 bg-gradient-to-r from-orange-500 to-orange-600 text-center">

        <h2 className="text-5xl font-black mb-8">
          Ready To Transform Your Business Technology?
        </h2>

        <p className="max-w-3xl mx-auto text-xl mb-10 text-white/90">
          Experience secure, reliable, and enterprise-level IT services
          designed to help your business grow confidently.
        </p>

        <a
          href="#contact"
          className="bg-black hover:bg-[#111] text-white px-10 py-5 rounded-2xl font-bold transition inline-flex items-center gap-3"
        >
          Start Your Project
          <ChevronRight />
        </a>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-28 px-6">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">

          <div>

            <p className="text-orange-400 font-semibold mb-4">
              CONTACT US
            </p>

            <h2 className="text-5xl font-bold mb-8">
              Let’s Discuss Your Project
            </h2>

            <p className="text-gray-400 text-lg mb-10 leading-8">
              Need networking, CCTV installation, IT support,
              or cybersecurity services? Contact our professional team today.
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

              <div className="flex items-center gap-4">
                <Clock3 className="text-orange-500" />
                <span>24/7 Support Available</span>
              </div>

                      {/* SOCIALS */}
            <div className="flex gap-5 mt-10 text-3xl">

              <a href="#" className="hover:text-cyan-400 transition">
                <FaWhatsapp />
              </a>

              <a href="#" className="hover:text-cyan-400 transition">
                <FaTelegramPlane />
              </a>

              <a href="#" className="hover:text-cyan-400 transition">
                <FaLinkedinIn />
              </a>

              <a href="#" className="hover:text-cyan-400 transition">
                <FaTiktok />
              </a>

            </div>

            </div>
          </div>

          {/* FORM */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-10">

            <h3 className="text-3xl font-bold mb-8">
              Request Consultation
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
      <footer className="border-t border-white/10 py-10 text-center text-gray-500">
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