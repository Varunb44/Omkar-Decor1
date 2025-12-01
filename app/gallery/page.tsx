import Image from "next/image";

export default function GalleryPage() {
  const featuredImages = [
    { src: "/gallery-top-1.jpg", alt: "Stage decoration with full floral backdrop" },
    { src: "/gallery-top-2.jpg", alt: "Outdoor floral stage with hanging flowers" },
    { src: "/gallery-top-3.jpg", alt: "Indoor floral wall stage with Omkar Decoration branding" },
    { src: "/gallery-top-4.jpg", alt: "Stage with hanging floral ceiling and golden arches" },
    { src: "/gallery-top-5.jpg", alt: "Elegant indoor floral arch stage with warm lighting" },
    { src: "/gallery-top-6.jpg", alt: "Lotus-inspired floral backdrop stage decoration" },
  ];

  const galleryItems = [
    { category: "Wedding", image: "💒", count: 12, heroImage: "/wedding-decor.jpg" },
    { category: "Birthday", image: "🎂", count: 8, heroImage: "/birthday-decor.jpg" },
    { category: "Reception", image: "🎉", count: 10, heroImage: "/reception-decor.jpg" },
    { category: "Car Decor", image: "🚗", count: 15, heroImage: "/car-decor.jpg" },
    { category: "Balloon", image: "🎈", count: 9, heroImage: "/balloon-decor.jpg" },
    { category: "Haladi", image: "🌼", count: 7, heroImage: "/haladi-decor.jpg" },
    { category: "Open Ground", image: "🏞️", count: 11, heroImage: "/open-ground-decor.jpg" },
  ];

  // Simulated gallery images (in real app, these would be actual images)
  const images = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    category: galleryItems[Math.floor(Math.random() * galleryItems.length)].category,
    title: `Decoration ${i + 1}`,
  }));

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="bg-gradient-to-br from-black via-gray-900 to-black text-white py-16 px-4">
        <div className="container mx-auto max-w-7xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-golden-400 via-golden-500 to-golden-600 bg-clip-text text-transparent">
            Our Gallery
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Explore our past work and get inspired for your next event
          </p>
        </div>
      </div>

      <div className="container mx-auto max-w-7xl py-16 px-4">
        {/* Top Featured Real Gallery */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">Top Decorations</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto text-center mb-8">
            A glimpse of our most loved stage decorations and premium setups
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredImages.map((img, index) => (
              <div
                key={index}
                className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 aspect-video"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">Browse by Category</h2>
          <div className="flex flex-wrap gap-4 justify-center">
            {galleryItems.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition-all duration-300 border-2 border-gray-200 hover:border-golden-500 cursor-pointer transform hover:-translate-y-2"
              >
                <div className="text-5xl mb-3">{item.image}</div>
                <h3 className="text-xl font-bold text-black mb-2">{item.category}</h3>
                <p className="text-gray-600">{item.count} Projects</p>
              </div>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((img) => (
              <div
                key={img.id}
                className="group relative bg-gradient-to-br from-golden-400 to-golden-600 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 aspect-square"
              >
                {(() => {
                  const categoryItem = galleryItems.find(
                    (item) => item.category === img.category
                  );
                  if (categoryItem?.heroImage) {
                    return (
                      <Image
                        src={categoryItem.heroImage}
                        alt={`${categoryItem.category} decoration example`}
                        fill
                        className="object-cover"
                      />
                    );
                  }
                  return (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-6xl opacity-50 group-hover:opacity-70 transition-opacity">
                        {categoryItem?.image || "✨"}
                      </div>
                    </div>
                  );
                })()}
                <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-black/60 group-hover:from-black/10 group-hover:to-black/40 transition-all duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-bold mb-2">{img.title}</h3>
                  <p className="text-sm text-gray-200">{img.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-golden-400 to-golden-600 rounded-xl shadow-2xl p-12 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Love What You See?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let's create something beautiful for your event. Get in touch with us today!
          </p>
          <a
            href="/contact"
            className="inline-block bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}







