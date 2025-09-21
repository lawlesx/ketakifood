const AboutWhyChooseUs = () => {
  const features = [
    {
      title: "Quality-tested seeds for international markets",
      description:
        "Every batch undergoes rigorous quality testing to ensure premium standards that meet global export requirements.",
      icon: "🌱",
    },
    {
      title: "Global export expertise with proven reliability",
      description:
        "Years of experience in international trade with a track record of successful deliveries worldwide.",
      icon: "🌍",
    },
    {
      title: "Competitive prices without compromising on standards",
      description:
        "We offer the best market rates while maintaining the highest quality standards for our soybean seeds.",
      icon: "💰",
    },
    {
      title: "Strong connections with farmers for uninterrupted supply",
      description:
        "Direct partnerships with local farmers ensure consistent availability and fresh, high-quality produce.",
      icon: "🤝",
    },
  ];

  return (
    <section className="py-20 px-4 md:px-8 lg:px-20 bg-gradient-to-br from-green-50 to-amber-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-6">
            Why Choose Us
          </h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            We bring together quality, reliability, and expertise to deliver
            exceptional soybean seeds for your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 border border-gray-100"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-r from-green-100 to-amber-100 p-4 rounded-xl text-3xl flex-shrink-0">
                  {feature.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-green-800 mb-3 leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutWhyChooseUs;
