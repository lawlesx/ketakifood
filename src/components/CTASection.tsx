"use client";
import { useWeb3Form } from "@/hooks/useWeb3Form";

const CTASection = () => {
  const { formData, isSubmitting, submitStatus, handleChange, handleSubmit } =
    useWeb3Form({
      customSubject: "New Contact from Ketaki Food Homepage",
    });

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
            {/* Success Message */}
            {submitStatus === "success" && (
              <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg">
                ✅ Thank you! We will get back to you soon.
              </div>
            )}

            {/* Error Message */}
            {submitStatus === "error" && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                ❌ Sorry, there was an error. Please try again.
              </div>
            )}

            <div>
              <label
                htmlFor="cta-name"
                className="block text-left font-semibold text-gray-700 mb-2"
              >
                Full Name *
              </label>
              <input
                type="text"
                id="cta-name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label
                htmlFor="cta-phone"
                className="block text-left font-semibold text-gray-700 mb-2"
              >
                Phone Number *
              </label>
              <input
                type="tel"
                id="cta-phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                placeholder="Enter your phone number"
              />
            </div>

            <div>
              <label
                htmlFor="cta-city"
                className="block text-left font-semibold text-gray-700 mb-2"
              >
                City *
              </label>
              <input
                type="text"
                id="cta-city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                placeholder="Enter your city"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full cursor-pointer bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Sending...
                </span>
              ) : (
                "Send Message"
              )}
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
