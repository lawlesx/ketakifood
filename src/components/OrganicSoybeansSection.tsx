import Image from "next/image";

const OrganicSoybeansSection = () => {
  return (
    <section id="products" className="py-16 px-4 md:px-8 lg:px-20 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-6">
              Our Organically Grown{" "}
              <span className="text-amber-600">Soybean Seeds</span>
            </h2>
            <div className="w-24 h-1 bg-amber-500 mb-8"></div>

            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                We follow sustainable farming practices that protect both people
                and the planet. Our organically grown soybean seeds are
                cultivated without harmful chemicals, making them natural,
                nutrient-rich, and eco-friendly.
              </p>

              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-green-800 mb-4">
                  🌿 Sustainable Farming Practices
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3">✓</span>
                    <span className="text-gray-700">
                      No harmful chemicals or synthetic pesticides
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3">✓</span>
                    <span className="text-gray-700">
                      Natural soil enrichment methods
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3">✓</span>
                    <span className="text-gray-700">
                      Water conservation techniques
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3">✓</span>
                    <span className="text-gray-700">
                      Biodiversity preservation
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="relative">
            {/* Main Product Image */}
            <div className="relative h-96 w-full rounded-2xl overflow-hidden shadow-2xl mb-6">
              <Image
                src="/soybeans-scoop.jpg"
                alt="Premium organic soybeans"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-800/70 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold mb-2">
                  Premium Organic Soybeans
                </h3>
                <p className="text-green-200">Naturally Grown Excellence</p>
              </div>
            </div>

            {/* Quality Indicators */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-md text-center border-2 border-green-100">
                <div className="text-2xl mb-2">🌱</div>
                <p className="text-sm font-semibold text-gray-700">
                  Chemical-Free
                </p>
                <p className="text-xs text-green-600">100%</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md text-center border-2 border-green-100">
                <div className="text-2xl mb-2">💪</div>
                <p className="text-sm font-semibold text-gray-700">
                  Nutrient Rich
                </p>
                <p className="text-xs text-green-600">Premium</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md text-center border-2 border-green-100">
                <div className="text-2xl mb-2">🏆</div>
                <p className="text-sm font-semibold text-gray-700">Certified</p>
                <p className="text-xs text-green-600">Quality</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrganicSoybeansSection;
