import Image from "next/image";

const WhyStandOutSection = () => {
  const standoutFeatures = [
    {
      title: "Grown using sustainable methods",
      description:
        "Our farming practices prioritize environmental responsibility and long-term soil health",
      icon: "🌱",
    },
    {
      title: "Free from synthetic fertilizers and pesticides",
      description:
        "Pure, natural cultivation without harmful chemical interventions",
      icon: "🚫",
    },
    {
      title: "Rich in protein and natural nutrition",
      description:
        "High nutritional value with naturally occurring proteins and essential nutrients",
      icon: "💪",
    },
    {
      title: "Certified for purity and international standards",
      description:
        "Quality assurance through rigorous testing and international certifications",
      icon: "🏆",
    },
  ];

  return (
    <section className="relative py-16 px-4 md:px-8 lg:px-20 bg-gradient-to-br from-green-600 to-green-800 text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/row-crops.jpg"
          alt="Sustainable farming background"
          fill
          className="object-cover opacity-10"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Why Our Organic Soybeans Stand Out
          </h2>
          <div className="w-24 h-1 bg-amber-400 mx-auto mb-8"></div>
          <p className="text-xl text-green-100 max-w-3xl mx-auto leading-relaxed">
            Choosing our organic soybeans means investing in premium quality
            while supporting a healthier and more sustainable future.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {standoutFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 hover:bg-white/15 transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="text-3xl flex-shrink-0">{feature.icon}</div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-amber-300">
                    {feature.title}
                  </h3>
                  <p className="text-green-100 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20">
          <h3 className="text-2xl font-bold mb-4 text-amber-300">
            Our Commitment to Excellence
          </h3>
          <p className="text-lg text-green-100 leading-relaxed max-w-4xl mx-auto">
            We aim to deliver more than just seeds. At Ketaki Food, we provide
            long-term business value by ensuring every shipment maintains
            purity, nutrition, and sustainability.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyStandOutSection;
