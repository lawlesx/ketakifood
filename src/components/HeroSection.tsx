const HeroSection = () => {
  return (
    <section
      id="home"
      className="bg-gradient-to-br from-green-50 to-amber-50 py-16 px-4 md:px-8 lg:px-20"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-green-800 mb-6 leading-tight">
          Global Exporter of{" "}
          <span className="text-amber-600">Premium Soybean Seeds</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed">
          Supplying high-quality soybean seeds worldwide at competitive prices.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
          <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300 shadow-lg">
            Explore Our Products
          </button>
          <button className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300">
            Learn More About Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
