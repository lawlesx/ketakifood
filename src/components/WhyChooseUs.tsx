import Image from "next/image";

const WhyChooseUs = () => {
  const features = [
    {
      title: "Premium Non-GMO Soybean Seeds",
      description:
        "Naturally grown, high-quality seeds without genetic modification",
      icon: "🌱",
    },
    {
      title: "Competitive International Pricing",
      description:
        "Best value for premium quality with transparent pricing structure",
      icon: "💰",
    },
    {
      title: "Reliable Farmer Network",
      description: "Strong partnerships ensuring consistent supply and quality",
      icon: "🤝",
    },
    {
      title: "On-time Global Delivery",
      description: "Dependable logistics and timely shipments worldwide",
      icon: "🚚",
    },
  ];

  return (
    <section
      id="why-choose"
      className="relative py-16 px-4 md:px-8 lg:px-20 bg-gradient-to-br from-green-50 to-white overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/grains.jpg"
          alt="Agricultural background"
          fill
          sizes="100vw"
          priority
          className="object-cover opacity-35"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-6">
            Why Choose Ketaki Food
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We stand out in the global soybean market through our commitment to
            quality, reliability, and customer satisfaction.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center border border-green-100"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-green-800 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
