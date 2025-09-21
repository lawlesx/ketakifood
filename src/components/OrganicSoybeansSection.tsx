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

          <div className="bg-gradient-to-br from-amber-50 to-green-50 p-8 rounded-lg">
            <div className="text-center mb-6">
              <div className="text-6xl mb-4">🌾</div>
              <h3 className="text-2xl font-bold text-green-800">
                Naturally Grown Excellence
              </h3>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-white rounded">
                <span className="font-semibold text-gray-700">
                  Chemical-Free
                </span>
                <span className="text-green-600 font-bold">100%</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-white rounded">
                <span className="font-semibold text-gray-700">
                  Nutrient Rich
                </span>
                <span className="text-green-600 font-bold">Premium</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-white rounded">
                <span className="font-semibold text-gray-700">
                  Eco-Friendly
                </span>
                <span className="text-green-600 font-bold">Certified</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrganicSoybeansSection;
