import Image from "next/image";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 px-4 md:px-8 lg:px-20 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-6">
            About Ketaki Food
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 items-center mb-12">
          <div className="lg:col-span-2 space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Ketaki Food is a trusted exporter of premium-grade soybean seeds,
              serving clients across the globe. With a strong farmer network,
              strict quality checks, and a focus on timely delivery, we ensure
              every shipment meets international standards.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our soybean seeds are widely used in food processing, oil
              extraction, and animal feed, making us the preferred choice for
              businesses that value consistency and quality.
            </p>
          </div>

          <div className="relative">
            <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/grains.jpg"
                alt="High quality grain processing"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-800/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <p className="font-bold text-lg">Quality Assured</p>
                <p className="text-sm">International Standards</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-green-50 p-8 rounded-lg">
          <h3 className="text-2xl font-bold text-green-800 mb-6">
            Our Promise
          </h3>
          <ul className="space-y-4">
            <li className="flex items-start">
              <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <span className="text-gray-700">
                Trusted by clients worldwide
              </span>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <span className="text-gray-700">Strong farmer network</span>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <span className="text-gray-700">Strict quality controls</span>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <span className="text-gray-700">
                International standards compliance
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
