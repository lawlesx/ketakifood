"use client";
import { useState } from "react";

const CTASection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", phone: "", city: "" });
  };

  return (
    <section
      id="contact"
      className="py-16 px-4 md:px-8 lg:px-20 bg-gradient-to-br from-amber-50 to-green-50"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-6">
          Looking for a reliable soybean seed exporter?
        </h2>
        <div className="w-24 h-1 bg-amber-500 mx-auto mb-8"></div>
        <p className="text-xl text-gray-700 mb-12 leading-relaxed">
          Contact us today and let&apos;s build a lasting partnership.
        </p>

        <div className="bg-white p-8 rounded-lg shadow-xl border border-green-100 max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-green-800 mb-6">
            Get in Touch
          </h3>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-left font-semibold text-gray-700 mb-2"
              >
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-left font-semibold text-gray-700 mb-2"
              >
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                placeholder="Enter your phone number"
              />
            </div>

            <div>
              <label
                htmlFor="city"
                className="block text-left font-semibold text-gray-700 mb-2"
              >
                City *
              </label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                placeholder="Enter your city"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Send Message
            </button>
          </form>

          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-gray-600">
              Or reach us directly at:{" "}
              <a
                href="mailto:info@ketakifood.com"
                className="text-green-600 hover:text-green-700 font-semibold"
              >
                info@ketakifood.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
