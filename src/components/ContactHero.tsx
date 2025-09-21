"use client";

const ContactHero = () => {
  return (
    <section className="bg-gradient-to-br from-green-50 to-amber-50 py-20 px-4 md:px-8 lg:px-20">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-green-800 mb-6 leading-tight">
          Contact Us
        </h1>
        <div className="w-24 h-1 bg-amber-500 mx-auto mb-8"></div>

        <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-8">
          Get in Touch With Our Team
        </h2>

        <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-3xl mx-auto">
          Whether you want to partner with us, place an order, or learn more
          about our soybean seed exports, we&apos;d love to hear from you.
        </p>

        <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-green-100 max-w-2xl mx-auto">
          <p className="text-lg font-semibold text-green-800">
            Looking for a reliable soybean seed exporter?{" "}
            <a
              href="#inquiry-form"
              className="text-green-600 hover:text-green-800 underline decoration-2 underline-offset-2 hover:decoration-3 transition-all duration-200 cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById("inquiry-form");
                if (element) {
                  const headerHeight = 80;
                  const elementPosition = element.offsetTop - headerHeight;
                  window.scrollTo({
                    top: elementPosition,
                    behavior: "smooth",
                  });
                }
              }}
            >
              Let&apos;s connect.
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
