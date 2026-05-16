 "use client";

import {
  Monitor,
  ShieldCheck,
  Network,
  Camera,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Star,
  CheckCircle,
  MessageCircle,
} from "lucide-react";

import { motion } from "framer-motion";

export default function HomePage() {
  const services = [
    {
      icon: <Camera size={42} />,
      title: "CCTV Installation",
      desc: "Smart surveillance systems with remote monitoring and mobile access.",
    },
    {
      icon: <Network size={42} />,
      title: "Enterprise Networking",
      desc: "Professional LAN, WAN, WiFi, Mikrotik and infrastructure solutions.",
    },
    {
      icon: <Monitor size={42} />,
      title: "IT Support",
      desc: "Reliable computer maintenance, troubleshooting and technical support.",
    },
    {
      icon: <ShieldCheck size={42} />,
      title: "Cyber Security",
      desc: "Firewall protection, secure access systems and network security.",
    },
  ];

  const whyChoose = [
    "Professional & trusted IT experts",
    "Fast response and customer support",
    "Affordable enterprise solutions",
    "Modern security technologies",
    "24/7 technical assistance",
    "Reliable long-term partnership",
  ];

  return (
    <main className="bg-[#050816] text-white overflow-hidden">

      {/* WHATSAPP FLOAT */}

      <a
        href="https://wa.me/251910105376"
        target="_blank"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 transition p-4 rounded-full shadow-2xl"
      >
        <MessageCircle size={30} />
      </a>

      {/* NAVBAR */}

      <nav className="fixed top-0 w-full z-40 bg-black/80 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-5 py-4">

          <div>
            <h1 className="text-2xl md:text-3xl font-black text-orange-400">
              SDF Technology
            </h1>

            <p className="text-gray-400 text-xs">
              Professional IT & Security Solutions
            </p>
          </div>

          <div className="hidden lg:flex gap-8 font-semibold text-sm">
            <a href="#home" className="hover:text-orange-400 transition">
              HOME
            </a>

            <a href="#about" className="hover:text-orange-400 transition">
              ABOUT
            </a>

            <a href="#services" className="hover:text-orange-400 transition">
              SERVICES
            </a>

            <a href="#projects" className="hover:text-orange-400 transition">
              PROJECTS
            </a>

            <a href="#contact" className="hover:text-orange-400 transition">
              CONTACT
            </a>
          </div>

          <button className="bg-orange-500 hover:bg-orange-600 transition px-5 py-3 rounded-xl font-bold hidden md:block">
            Contact Us
          </button>
        </div>
      </nav>

      {/* HERO SECTION */}

      <section
        id="home"
        className="min-h-screen flex items-center pt-32 px-6"
      >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >

            <div className="inline-block px-5 py-2 rounded-full border border-orange-400/20 bg-orange-400/10 text-orange-300 mb-6">
              Trusted IT Infrastructure Partner
            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-8">
              TRANSFORM YOUR BUSINESS WITH
              <span className="text-orange-400 block">
                ADVANCED TECHNOLOGY
              </span>
            </h1>

            <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-10">
              We help businesses grow with powerful networking,
              CCTV surveillance, Desktop computer and printer maintenace,cybersecurity, IT support,
              maintenance, and smart enterprise solutions designed
              for the modern world.
            </p>

            <div className="flex flex-wrap gap-5">

              <button className="bg-orange-500 hover:bg-orange-600 transition px-8 py-4 rounded-2xl font-bold flex items-center gap-3">
                Get Started <ArrowRight />
              </button>

              <button className="border border-white/20 hover:border-orange-400 transition px-8 py-4 rounded-2xl font-bold">
                View Services
              </button>

            </div>

            <div className="flex flex-wrap gap-10 mt-14">

              <div>
                <h2 className="text-4xl font-black text-orange-400">
                  150+
                </h2>

                <p className="text-gray-400">
                  Successful Projects
                </p>
              </div>

              <div>
                <h2 className="text-4xl font-black text-orange-400">
                  98%
                </h2>

                <p className="text-gray-400">
                  Client Satisfaction
                </p>
              </div>

              <div>
                <h2 className="text-4xl font-black text-orange-400">
                  24/7
                </h2>

                <p className="text-gray-400">
                  Technical Support
                </p>
              </div>

            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative"
          >

            <img
              src="/office.jpg"
              className="rounded-3xl border border-white/10 shadow-2xl"
            />

            <div className="absolute -bottom-8 left-6 bg-orange-500 px-8 py-5 rounded-2xl text-black font-black shadow-2xl">
              Your Trusted Technology Partner
            </div>

          </motion.div>
        </div>
      </section>

      {/* ABOUT */}

      <section
        id="about"
        className="py-28 px-6 border-t border-white/5"
      >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

          <img
            src="/network.jpg"
            className="rounded-3xl border border-white/10"
          />

          <div>

            <p className="text-orange-400 font-bold mb-4">
              ABOUT OUR COMPANY
            </p>

            <h2 className="text-5xl font-black mb-8">
              Building Smart & Secure Digital Infrastructure
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              SDF Technology delivers professional IT solutions
              that help businesses improve productivity, security,
              and efficiency. We combine modern technology with
              trusted support to create reliable digital systems.
            </p>

            <div className="space-y-5">

              {whyChoose.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4"
                >
                  <CheckCircle className="text-orange-400" />

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

      <section
        id="services"
        className="py-28 px-6 bg-gradient-to-b from-[#050816] to-[#0B1120]"
      >
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-20">

            <p className="text-orange-400 font-bold mb-4">
              OUR SERVICES
            </p>

            <h2 className="text-5xl font-black mb-6">
              Technology Solutions That Drive Growth
            </h2>

            <p className="text-gray-400 max-w-3xl mx-auto text-lg">
              We provide complete IT and security solutions
              tailored for businesses, organizations and enterprises.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {services.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="bg-white/5 border border-white/10 hover:border-orange-400 transition rounded-3xl p-8"
              >

                <div className="text-orange-400 mb-6">
                  {service.icon}
                </div>

                <h3 className="text-2xl font-bold mb-5">
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

      {/* PROJECTS */}

      <section
        id="projects"
        className="py-28 px-6"
      >
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-20">

            <p className="text-orange-400 font-bold mb-4">
              OUR PROJECTS
            </p>

            <h2 className="text-5xl font-black mb-6">
              Real Business Installations
            </h2>

            <p className="text-gray-400 text-lg">
              Trusted by businesses for reliable IT infrastructure.
            </p>

          </div>

          <div className="grid md:grid-cols-3 gap-8">

            <img
              src="/cctv.jpg"
              className="rounded-3xl border border-white/10 h-80 object-cover hover:scale-105 transition duration-500"
            />

            <img
              src="/network.jpg"
              className="rounded-3xl border border-white/10 h-80 object-cover hover:scale-105 transition duration-500"
            />

            <img
              src="/office.jpg"
              className="rounded-3xl border border-white/10 h-80 object-cover hover:scale-105 transition duration-500"
            />

          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}

      <section className="py-28 px-6">

        <div className="max-w-5xl mx-auto text-center">

          <p className="text-orange-400 font-bold mb-4">
            CLIENT TESTIMONIAL
          </p>

          <h2 className="text-5xl font-black mb-16">
            Why Clients Choose Us
          </h2>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-12">

            <div className="flex justify-center gap-2 text-orange-400 mb-8">
              <Star fill="orange" />
              <Star fill="orange" />
              <Star fill="orange" />
              <Star fill="orange" />
              <Star fill="orange" />
            </div>

            <p className="text-2xl text-gray-300 leading-relaxed mb-8">
              “SDF Technology transformed our company’s network and CCTV systems professionally. Their support is fast, reliable, and highly recommended.”
            </p>

            <h3 className="font-bold text-xl">
              — Business Client
            </h3>

          </div>
        </div>
      </section>

      {/* CONTACT */}

      <section
        id="contact"
        className="py-28 px-6 border-t border-white/10"
      >

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">

          <div>

            <p className="text-orange-400 font-bold mb-4">
              CONTACT US
            </p>

            <h2 className="text-5xl font-black mb-8">
              Let’s Build Your Future Technology Infrastructure
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed mb-10">
              Ready to upgrade your business with reliable IT
              solutions? Contact us today and let our experts
              help your organization grow securely and efficiently.
            </p>

            <div className="space-y-6">

              <div className="flex items-center gap-4">
                <Phone className="text-orange-400" />
                <span>+251910105376</span>
              </div>

              <div className="flex items-center gap-4">
                <Mail className="text-orange-400" />
                <span>cctvcamer.eo@gmail.com</span>
              </div>

              <div className="flex items-center gap-4">
                <MapPin className="text-orange-400" />
                <span>Addis Ababa, Ethiopia</span>
              </div>

            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-10">

            <input
              placeholder="Your Name"
              className="w-full mb-5 bg-black/30 border border-white/10 rounded-xl p-4"
            />

            <input
              placeholder="Your Email"
              className="w-full mb-5 bg-black/30 border border-white/10 rounded-xl p-4"
            />

            <textarea
              rows={5}
              placeholder="Tell us about your project..."
              className="w-full mb-6 bg-black/30 border border-white/10 rounded-xl p-4"
            />

            <button className="w-full bg-orange-500 hover:bg-orange-600 transition py-4 rounded-2xl text-lg font-bold">
              Send Message
            </button>

          </div>
        </div>
      </section>

      {/* FOOTER */}

      <footer className="border-t border-orange-500/20 bg-black py-16 px-6">

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-16">

          <div>
            <h2 className="text-3xl font-black text-orange-400 mb-4">
              SDF Technology
            </h2>

            <p className="text-gray-400 leading-relaxed">
              Delivering professional IT infrastructure,
              CCTV systems,Desktop Computer and printer maintenance, networking and enterprise
              technology solutions for modern businesses.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">
              Quick Links
            </h3>

            <div className="space-y-3 text-gray-400">

              <p>Home</p>
              <p>About Us</p>
              <p>Services</p>
              <p>Projects</p>
              <p>Contact</p>

            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">
              Contact Info
            </h3>

            <div className="space-y-4 text-gray-400">

              <p>+251900000000</p>
              <p>cctvcamera.eo@gmail.com</p>
              <p>Addis Ababa, Ethiopia</p>

            </div>
          </div>

        </div>

        <div className="border-t border-white/10 mt-14 pt-8 text-center text-gray-500">
          © 2026 SDF Technology. All rights reserved.
        </div>

      </footer>

    </main>
  );
}