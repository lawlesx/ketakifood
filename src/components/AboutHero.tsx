import Image from "next/image";

const AboutHero = () => {
  return (
    <section className="relative bg-gradient-to-br from-green-50 to-amber-50 py-20 px-4 md:px-8 lg:px-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/row-crops.jpg"
          alt="Soybean crops background"
          fill
          className="object-cover opacity-10"
          priority
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-green-800 mb-6 leading-tight">
            About Us
          </h1>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-8"></div>

          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
            Leading the global soybean trade with premium quality seeds and
            unwavering commitment to excellence
          </p>
        </div>

        {/* Featured Image */}
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/soybean-sauce.jpg"
              alt="Premium soybean seeds"
              width={800}
              height={400}
              className="w-full h-64 md:h-80 lg:h-96 object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
