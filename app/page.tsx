import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const services = [
    {
      id: "wedding",
      title: "Wedding Decor",
      description: "Elegant and romantic wedding decorations to make your special day unforgettable",
      image: "💒",
      heroImage: "/wedding-decor.jpg",
    },
    {
      id: "open-ground",
      title: "Open Ground Decor",
      description: "Stunning outdoor decorations for grand celebrations and events",
      image: "🏞️",
      heroImage: "/open-ground-decor.jpg",
    },
    {
      id: "birthday",
      title: "Birthday Decor",
      description: "Fun and festive birthday decorations for all ages",
      image: "🎂",
      heroImage: "/birthday-decor.jpg",
    },
    {
      id: "car",
      title: "Car Decor",
      description: "Beautiful car decorations for weddings and special occasions",
      image: "🚗",
      heroImage: "/car-decor.jpg",
    },
    {
      id: "reception",
      title: "Reception Decor",
      description: "Luxurious reception decorations to impress your guests",
      image: "🎉",
      heroImage: "/reception-decor.jpg",
    },
    {
      id: "balloon",
      title: "Balloon Decor",
      description: "Creative balloon arrangements and installations",
      image: "🎈",
      heroImage: "/balloon-decor.jpg",
    },
    {
      id: "haladi",
      title: "Haladi Celebration",
      description: "Traditional and vibrant Haladi ceremony decorations",
      image: "🌼",
      heroImage: "/haladi-decor.jpg",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-black via-gray-900 to-black text-white py-24 px-4">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0ZGRkQwMCIgc3Ryb2tlLXdpZHRoPSIwLjUiIG9wYWNpdHk9IjAuMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="relative w-40 h-40 md:w-52 md:h-52 lg:w-60 lg:h-60 rounded-full overflow-hidden border-4 border-golden-500 shadow-lg shadow-golden-500/50 transition-all duration-500 hover:scale-110 hover:shadow-xl hover:shadow-golden-500/60 cursor-pointer group">
                <Image
                  src="/logo.jpg"
                  alt="Omkar Decor Logo"
                  width={240}
                  height={240}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-br from-golden-500/0 to-golden-500/0 group-hover:from-golden-500/5 group-hover:to-transparent transition-all duration-500 rounded-full"></div>
              </div>
            </div>
            <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
              Transform Your Dreams Into Reality
            </p>
            <p className="text-lg md:text-xl mb-12 text-gray-400 max-w-2xl mx-auto">
              Premium decoration services for weddings, birthdays, receptions, and all your special moments
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link
                href="#services"
                className="bg-golden-500 hover:bg-golden-600 text-black px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-golden-500/50"
              >
                Explore Services
              </Link>
              <Link
                href="/contact"
                className="bg-white/10 hover:bg-white/20 text-white border border-golden-500 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Our Services
            </h2>
            <div className="w-24 h-1 bg-golden-500 mx-auto mb-4"></div>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              From intimate gatherings to grand celebrations, we bring your vision to life
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link
                key={service.id}
                href={`/services/${service.id}`}
                className="group relative bg-white border-2 border-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-golden-500/0 to-golden-500/0 group-hover:from-golden-500/10 group-hover:to-black/10 transition-all duration-300"></div>
                <div className="relative z-10">
                  {service.heroImage ? (
                    <div className="w-full h-56 overflow-hidden">
                      <Image
                        src={service.heroImage}
                        alt={`${service.title} example`}
                        width={600}
                        height={400}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  ) : (
                    <div className="text-6xl mt-8 mb-4 text-center">{service.image}</div>
                  )}
                  <div className="p-8">
                  <h3 className="text-2xl font-bold text-black mb-3 group-hover:text-golden-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 group-hover:text-gray-700">
                    {service.description}
                  </p>
                  <div className="mt-6 flex items-center text-golden-600 font-semibold group-hover:text-golden-700">
                    Learn More
                    <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-golden-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                Why Choose Omkar Decor?
              </h2>
              <div className="w-24 h-1 bg-golden-500 mb-6"></div>
              <p className="text-gray-600 text-lg mb-6">
                With years of experience in creating magical moments, Omkar Decor brings expertise, creativity, and attention to detail to every event.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-golden-500 text-2xl mr-3">✓</span>
                  <span className="text-gray-700">Premium quality materials and designs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-golden-500 text-2xl mr-3">✓</span>
                  <span className="text-gray-700">Experienced and professional team</span>
                </li>
                <li className="flex items-start">
                  <span className="text-golden-500 text-2xl mr-3">✓</span>
                  <span className="text-gray-700">Customized solutions for every event</span>
                </li>
                <li className="flex items-start">
                  <span className="text-golden-500 text-2xl mr-3">✓</span>
                  <span className="text-gray-700">On-time delivery and setup</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-golden-400 to-golden-600 rounded-2xl p-8 text-white shadow-2xl">
              <h3 className="text-3xl font-bold mb-6">Let's Create Something Beautiful</h3>
              <p className="text-lg mb-6 opacity-90">
                Ready to make your event unforgettable? Get in touch with us today for a consultation.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Contact Us Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

