import Link from "next/link";

export default function ServicesPage() {
  const services = [
    {
      id: "wedding",
      title: "Wedding Decor",
      description: "Elegant and romantic wedding decorations to make your special day unforgettable. We create magical atmospheres with floral arrangements, lighting, and exquisite details.",
      features: ["Floral Arrangements", "Mandap Decor", "Stage Decor", "Lighting", "Aisle Decor"],
      image: "💒",
    },
    {
      id: "open-ground",
      title: "Open Ground Decor",
      description: "Stunning outdoor decorations for grand celebrations and events. Perfect for large gatherings with beautiful setups.",
      features: ["Tent Decor", "Outdoor Lighting", "Stage Setup", "Seating Arrangements", "Entrance Decor"],
      image: "🏞️",
    },
    {
      id: "birthday",
      title: "Birthday Decor",
      description: "Fun and festive birthday decorations for all ages. From kids' parties to milestone celebrations.",
      features: ["Theme-based Decor", "Balloon Arches", "Party Backdrops", "Table Decor", "Photo Booths"],
      image: "🎂",
    },
    {
      id: "car",
      title: "Car Decor",
      description: "Beautiful car decorations for weddings and special occasions. Make your ride stand out with elegant floral and ribbon work.",
      features: ["Floral Car Decor", "Ribbon Work", "Lighting", "Custom Designs", "Multiple Car Packages"],
      image: "🚗",
    },
    {
      id: "reception",
      title: "Reception Decor",
      description: "Luxurious reception decorations to impress your guests. Elegant and sophisticated designs for memorable evenings.",
      features: ["Centerpieces", "Table Settings", "Backdrop Design", "Ambient Lighting", "Dance Floor Decor"],
      image: "🎉",
    },
    {
      id: "balloon",
      title: "Balloon Decor",
      description: "Creative balloon arrangements and installations. Add color and fun to any event with our professional balloon decorations.",
      features: ["Balloon Arches", "Balloon Walls", "Ceiling Decor", "Centerpieces", "Custom Shapes"],
      image: "🎈",
    },
    {
      id: "haladi",
      title: "Haladi Celebration",
      description: "Traditional and vibrant Haladi ceremony decorations. Celebrate with colorful yellow themes and traditional elements.",
      features: ["Yellow Theme Decor", "Floral Arrangements", "Traditional Elements", "Stage Decor", "Ceremony Setup"],
      image: "🌼",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="bg-gradient-to-br from-black via-gray-900 to-black text-white py-16 px-4">
        <div className="container mx-auto max-w-7xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-golden-400 via-golden-500 to-golden-600 bg-clip-text text-transparent">
            Our Services
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover our wide range of decoration services for all your special occasions
          </p>
        </div>
      </div>

      <div className="container mx-auto max-w-7xl py-20 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-gray-200 hover:border-golden-500"
            >
              <div className="p-8">
                <div className="text-6xl mb-4 text-center">{service.image}</div>
                <h2 className="text-2xl font-bold text-black mb-3">{service.title}</h2>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <span className="text-golden-500 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/services/${service.id}`}
                  className="block w-full bg-golden-500 hover:bg-golden-600 text-black text-center py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}







