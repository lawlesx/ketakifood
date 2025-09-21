import Image from "next/image";

const WhoWeAre = () => {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-20 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-6">
                Who We Are
              </h2>
              <div className="w-16 h-1 bg-amber-500 mb-8"></div>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Ketaki Food is a leading exporter of soybean seeds from India,
                serving customers worldwide with high-quality products. We are
                committed to providing seeds that are rich in protein, carefully
                processed, and packaged to meet international export standards.
              </p>

              {/* Mission Section */}
              <div className="bg-gradient-to-r from-green-50 to-amber-50 p-6 rounded-xl border-l-4 border-green-600">
                <h3 className="text-xl font-semibold text-green-800 mb-4">
                  Our Mission
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  To supply the world with premium soybean seeds while promoting
                  sustainable farming practices and long-term business
                  relationships.
                </p>
              </div>

              {/* Key Stats or Features */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-800">High</div>
                  <div className="text-sm text-gray-600">Yield Varieties</div>
                </div>
                <div className="text-center p-4 bg-amber-50 rounded-lg">
                  <div className="text-2xl font-bold text-amber-800">
                    Premium
                  </div>
                  <div className="text-sm text-gray-600">Quality Seeds</div>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/grains.jpg"
                alt="Soybean grains quality"
                width={600}
                height={500}
                className="w-full h-96 object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/20 to-transparent"></div>
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg border border-gray-100 max-w-xs">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <div>
                  <div className="font-semibold text-gray-800">
                    Export Ready
                  </div>
                  <div className="text-sm text-gray-600">
                    International Standards
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
