import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const services: Record<
  string,
  {
    title: string;
    description: string;
    longDescription: string;
    features: string[];
    image: string;
    priceRange?: string;
    heroImage?: string;
  }
> = {
  wedding: {
    title: "Wedding Decor",
    description: "Elegant and romantic wedding decorations",
    longDescription: "Transform your wedding into a fairytale with our exquisite wedding decoration services. We specialize in creating magical atmospheres that reflect your personal style and vision. From intimate ceremonies to grand celebrations, our team brings years of experience and creativity to make your special day unforgettable.",
    features: [
      "Custom Mandap Design with floral and fabric decorations",
      "Elegant stage setup with backdrop and lighting",
      "Beautiful aisle decorations with petals and candles",
      "Floral centerpieces and arrangements",
      "Ambient lighting and chandeliers",
      "Entrance decorations and welcome setups",
      "Dining area decorations",
      "Photo booth setups"
    ],
    image: "💒",
    heroImage: "/wedding-decor.jpg",
    priceRange: "Starting from ₹8,000",
  },
  "open-ground": {
    title: "Open Ground Decor",
    description: "Stunning outdoor decorations for grand celebrations",
    longDescription: "Create unforgettable outdoor events with our open ground decoration services. Perfect for large gatherings, weddings, and celebrations, we provide comprehensive outdoor decoration solutions that combine functionality with breathtaking aesthetics.",
    features: [
      "Tent and canopy decorations",
      "Outdoor lighting installations",
      "Grand stage setups",
      "Seating arrangements with elegant decor",
      "Entrance gates and welcome areas",
      "Dining area decorations",
      "Pathway lighting and decorations",
      "Weather-resistant setups"
    ],
    image: "🏞️",
    priceRange: "Starting from ₹8,000",
    heroImage: "/open-ground-decor.jpg",
  },
  birthday: {
    title: "Birthday Decor",
    description: "Fun and festive birthday decorations for all ages",
    longDescription: "Make birthdays extra special with our creative and fun decoration services. Whether it's a child's first birthday, a sweet sixteen, or a milestone celebration, we create memorable experiences with theme-based decorations that bring joy and excitement.",
    features: [
      "Theme-based decoration packages",
      "Balloon arches and installations",
      "Custom backdrops and photo walls",
      "Table decorations and centerpieces",
      "Party favors and gift setups",
      "Cake table decorations",
      "Interactive photo booths",
      "Age-appropriate theme designs"
    ],
    image: "🎂",
    priceRange: "Starting from ₹8,000",
    heroImage: "/birthday-decor.jpg",
  },
  car: {
    title: "Car Decor",
    description: "Beautiful car decorations for weddings and special occasions",
    longDescription: "Make a grand entrance with our elegant car decoration services. From traditional floral designs to modern creative concepts, we transform vehicles into stunning centerpieces that complement your event's theme.",
    features: [
      "Floral car decorations with fresh flowers",
      "Traditional ribbon and garland work",
      "Modern LED lighting installations",
      "Custom design based on your preference",
      "Multiple car decoration packages",
      "Bride and groom car special designs",
      "Baraat car decorations",
      "Professional installation and removal"
    ],
    image: "🚗",
    priceRange: "Starting from ₹8,000",
    heroImage: "/car-decor.jpg",
  },
  reception: {
    title: "Reception Decor",
    description: "Luxurious reception decorations to impress your guests",
    longDescription: "Host an elegant and sophisticated reception with our luxury decoration services. We create stunning atmospheres that leave lasting impressions on your guests, combining modern design elements with timeless elegance.",
    features: [
      "Elegant centerpieces and table settings",
      "Luxury backdrop designs",
      "Ambient and mood lighting",
      "Dance floor decorations",
      "Cocktail area setups",
      "Welcome and reception areas",
      "Floral arrangements and installations",
      "Custom color schemes"
    ],
    image: "🎉",
    priceRange: "Starting from ₹8,000",
    heroImage: "/reception-decor.jpg",
  },
  balloon: {
    title: "Balloon Decor",
    description: "Creative balloon arrangements and installations",
    longDescription: "Add color, fun, and excitement to any event with our professional balloon decoration services. From simple arrangements to elaborate installations, we create stunning balloon displays that transform spaces and create memorable experiences.",
    features: [
      "Balloon arches and garlands",
      "Balloon walls and backdrops",
      "Ceiling balloon installations",
      "Custom balloon centerpieces",
      "Balloon sculptures and shapes",
      "Color-coordinated designs",
      "Helium balloon arrangements",
      "Interactive balloon installations"
    ],
    image: "🎈",
    priceRange: "Starting from ₹8,000",
    heroImage: "/balloon-decor.jpg",
  },
  haladi: {
    title: "Haladi Celebration",
    description: "Traditional and vibrant Haladi ceremony decorations",
    longDescription: "Celebrate the beautiful Haladi ceremony with our traditional and vibrant decoration services. We specialize in creating authentic and colorful setups that honor tradition while adding modern touches to make your celebration truly special.",
    features: [
      "Traditional yellow theme decorations",
      "Floral garlands and arrangements",
      "Haladi ceremony stage setup",
      "Traditional elements and props",
      "Color-coordinated venue decor",
      "Cultural theme decorations",
      "Ceremonial area setups",
      "Photography-friendly designs"
    ],
    image: "🌼",
    priceRange: "Starting from ₹8,000",
    heroImage: "/haladi-decor.jpg",
  },
};

export default function ServiceDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const service = services[params.id];

  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-black via-gray-900 to-black text-white py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-10">
            <div className="text-8xl mb-6">{service.image}</div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-golden-400 via-golden-500 to-golden-600 bg-clip-text text-transparent">
              {service.title}
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              {service.description}
            </p>
          </div>
          {service.heroImage && (
            <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-golden-500/40">
              <div className="relative w-full h-60 sm:h-72 md:h-80 lg:h-96">
                <Image
                  src={service.heroImage}
                  alt={`${service.title} decoration example`}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto max-w-7xl py-16 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-3xl font-bold text-black mb-6">About This Service</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                {service.longDescription}
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-black mb-6">What's Included</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-start p-4 bg-gray-50 rounded-lg">
                    <span className="text-golden-500 text-2xl mr-3 flex-shrink-0">✓</span>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-golden-400 to-golden-600 rounded-xl shadow-lg p-8 text-white sticky top-24">
              <h3 className="text-2xl font-bold mb-4">Service Details</h3>
              {service.priceRange && (
                <div className="mb-6">
                  <p className="text-lg mb-2">Price Range:</p>
                  <p className="text-2xl font-bold">{service.priceRange}</p>
                </div>
              )}
              <p className="text-lg mb-6 opacity-90">
                Contact us for a customized quote based on your specific requirements and event size.
              </p>
              <Link
                href="/contact"
                className="block w-full bg-black hover:bg-gray-800 text-white text-center py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 mb-4"
              >
                Get a Quote
              </Link>
              <Link
                href="/services"
                className="block w-full bg-white/20 hover:bg-white/30 text-white text-center py-3 rounded-lg font-semibold transition-all duration-300"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-black via-gray-900 to-black text-white py-16 px-4">
        <div className="container mx-auto max-w-7xl text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's work together to create something beautiful for your special occasion
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/contact"
              className="bg-golden-500 hover:bg-golden-600 text-black px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Contact Us Now
            </Link>
            <Link
              href="/gallery"
              className="bg-white/10 hover:bg-white/20 text-white border border-golden-500 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
            >
              View Gallery
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}







