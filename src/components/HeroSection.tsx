import Image from "next/image";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative bg-gradient-to-br from-green-50 to-amber-50 py-16 px-4 md:px-8 lg:px-20 overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50/90 to-amber-50/90 z-10"></div>
        <Image
          src="/row-crops.jpg"
          alt="Soybean farming fields"
          fill
          className="object-cover opacity-20"
        />
      </div>

      <div className="relative z-20 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-green-800 mb-6 leading-tight">
              Global Exporter of{" "}
              <span className="text-amber-600">Premium Soybean Seeds</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              Supplying high-quality soybean seeds worldwide at competitive
              prices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mt-12">
              <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300 shadow-lg">
                Explore Our Products
              </button>
              <button className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300">
                Learn More About Us
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="relative h-96 w-full">
                <Image
                  src="/soybeans-scoop.jpg"
                  alt="Premium quality soybeans"
                  fill
                  className="object-cover rounded-xl shadow-xl"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-amber-500 text-white px-6 py-3 rounded-xl font-bold shadow-lg">
                Premium Quality
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
