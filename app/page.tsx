export default function SDFWebsite() {
  const services = [
    {
      title: 'CCTV Camera Installation',
      desc: 'Professional CCTV camera installation for homes, offices, factories, shops, and commercial buildings with secure monitoring solutions.',
    },
    {
      title: 'Network Installation',
      desc: 'Structured network installation for homes and offices including router setup, cabling, Wi‑Fi configuration, and internet sharing solutions.',
    },
    {
      title: 'LED Screen Installation',
      desc: 'Modern LED screen installation services for offices, factories, events, advertisements, and government promotion systems.',
    },
    {
      title: 'Desktop & Printer Maintenance',
      desc: 'Professional desktop troubleshooting, printer maintenance, software installation, hardware support, and IT technical assistance.',
    },
  ];

  const testimonials = [
    {
      name: 'Abel Trading PLC',
      feedback:
        'SDF installed our office CCTV and networking professionally. Their team was fast and highly skilled.',
    },
    {
      name: 'Bright Factory',
      feedback:
        'The LED screen installation completely transformed our company presentation area.',
    },
    {
      name: 'Home Client',
      feedback:
        'Excellent maintenance support and quick response whenever we need technical help.',
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen font-sans">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-950 opacity-95"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 lg:py-36">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="uppercase tracking-[0.3em] text-gray-400 text-sm mb-4">
                Smart Digital Future
              </p>

              <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
                SDF
                <span className="block text-gray-400 text-3xl md:text-5xl mt-4">
                  Your First Choice For Professional IT Solutions
                </span>
              </h1>

              <p className="text-gray-300 text-lg leading-relaxed max-w-xl mb-8">
                We provide professional CCTV camera installation, network installation for homes and offices, LED screen installation, desktop maintenance, printer support, and complete IT solutions for homes, offices, factories, and government organizations.
              </p>

              <div className="flex flex-wrap gap-4">
                <button className="bg-white text-black px-6 py-3 rounded-2xl font-semibold hover:scale-105 transition">
                  Get Started
                </button>

                <button className="border border-gray-600 px-6 py-3 rounded-2xl hover:bg-gray-900 transition">
                  View Projects
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8 shadow-2xl backdrop-blur-lg">
                <div className="space-y-5">
                  <div className="bg-black rounded-2xl p-5 border border-gray-800">
                    <h3 className="text-xl font-semibold mb-2">Professional Installation</h3>
                    <p className="text-gray-400">
                      Reliable CCTV, networking, desktop, and printer solutions installed by experienced technicians.
                    </p>
                  </div>

                  <div className="bg-black rounded-2xl p-5 border border-gray-800">
                    <h3 className="text-xl font-semibold mb-2">24/7 Technical Support</h3>
                    <p className="text-gray-400">
                      Desktop support, printer maintenance, and troubleshooting whenever you need assistance.
                    </p>
                  </div>

                  <div className="bg-black rounded-2xl p-5 border border-gray-800">
                    <h3 className="text-xl font-semibold mb-2">Trusted By Clients</h3>
                    <p className="text-gray-400">
                      Our goal is to become the first choice for every customer.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="mb-14 text-center">
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We deliver professional security, networking, LED display, desktop maintenance, and printer support solutions with quality, reliability, and modern installation standards.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-950 border border-gray-800 rounded-3xl p-7 hover:border-gray-600 hover:-translate-y-2 transition duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-gray-800 mb-6"></div>
              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Portfolio */}
      <section className="bg-gray-950 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14 text-center">
            <h2 className="text-4xl font-bold mb-4">Projects & Media</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Showcase installation photos, testimonial videos, completed projects,
              and TikTok promotional content.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-black rounded-3xl h-72 border border-gray-800 flex items-center justify-center text-gray-500 text-lg">
              Upload LED Screen Project Photos Here
            </div>

            <div className="bg-black rounded-3xl h-72 border border-gray-800 flex items-center justify-center text-gray-500 text-lg">
              Upload CCTV Installation Photos Here
            </div>

            <div className="bg-black rounded-3xl h-72 border border-gray-800 flex items-center justify-center text-gray-500 text-lg">
              Upload Testimonial Videos Here
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="mb-14 text-center">
          <h2 className="text-4xl font-bold mb-4">What Clients Say</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Real feedback from satisfied customers and organizations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-gray-950 border border-gray-800 rounded-3xl p-8"
            >
              <p className="text-gray-300 leading-relaxed mb-6">
                “{item.feedback}”
              </p>

              <div>
                <h4 className="font-semibold text-lg">{item.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gradient-to-b from-black to-gray-950 py-20 border-t border-gray-900">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Why Choose SDF?
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-gray-950 rounded-3xl border border-gray-800 p-8">
              <h3 className="text-2xl font-semibold mb-3">Professional Team</h3>
              <p className="text-gray-400">
                Experienced technicians focused on quality and reliability.
              </p>
            </div>

            <div className="bg-gray-950 rounded-3xl border border-gray-800 p-8">
              <h3 className="text-2xl font-semibold mb-3">Modern Solutions</h3>
              <p className="text-gray-400">
                Smart installations using modern technologies and standards.
              </p>
            </div>

            <div className="bg-gray-950 rounded-3xl border border-gray-800 p-8">
              <h3 className="text-2xl font-semibold mb-3">Client Satisfaction</h3>
              <p className="text-gray-400">
                We aim to become the first and trusted choice for every client.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="max-w-5xl mx-auto px-6 py-24 text-center">
        <h2 className="text-5xl font-bold mb-6">
          Ready To Work With SDF?
        </h2>

        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">
          Contact us today for professional installation, maintenance,
          and networking solutions.
        </p>

        <div className="bg-gray-950 border border-dashed border-gray-700 rounded-3xl p-10 mb-10 text-center text-gray-500">
          Upload Company Logo Here
        </div>

        <div className="bg-gray-950 border border-dashed border-gray-700 rounded-3xl p-10 mb-10 text-center text-gray-500">
          Upload TikTok Videos Here
        </div>

        <div className="bg-gray-950 border border-dashed border-gray-700 rounded-3xl p-10 mb-10 text-center text-gray-500">
          Upload Client Testimonial Photos Here
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12 text-left">
          <div className="bg-gray-950 border border-gray-800 rounded-3xl p-6">
            <h3 className="text-2xl font-semibold mb-4">Address</h3>
            <p className="text-gray-400">
              Add Company Address Here
            </p>
          </div>

          <div className="bg-gray-950 border border-gray-800 rounded-3xl p-6">
            <h3 className="text-2xl font-semibold mb-4">Phone & WhatsApp</h3>
            <p className="text-gray-400">
              Add Phone Number Here
            </p>
          </div>

          <div className="bg-gray-950 border border-gray-800 rounded-3xl p-6">
            <h3 className="text-2xl font-semibold mb-4">Email</h3>
            <p className="text-gray-400">
              Add Company Email Here
            </p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <button className="bg-white text-black px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition">
            Contact Us
          </button>

          <button className="border border-gray-700 px-8 py-4 rounded-2xl hover:bg-gray-900 transition">
            TikTok Portfolio
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-900 py-8 text-center text-gray-500 text-sm">
        © 2026 SDF Technology Solutions. All rights reserved.
      </footer>
      <a
  href="https://wa.me/251910105376"
  target="_blank"
  className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-full shadow-lg transition"
>
  WhatsApp
</a>
    </div>
  );
}

