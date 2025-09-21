"use client";

import { useWeb3Form } from "@/hooks/useWeb3Form";

const ContactForm = () => {
  const { formData, isSubmitting, submitStatus, handleChange, handleSubmit } =
    useWeb3Form({
      customSubject: "New Inquiry from Ketaki Food Contact Page",
    });

  return (
    <section
      id="inquiry-form"
      className="py-16 px-4 md:px-8 lg:px-20 bg-gradient-to-br from-green-50 to-amber-50"
    >
      <div className="max-w-2xl mx-auto">
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-gray-100">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
              Send an Inquiry
            </h2>
            <p className="text-gray-600">
              Fill out the form below and we&apos;ll get back to you as soon as
              possible.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Success Message */}
            {submitStatus === "success" && (
              <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg">
                ✅ Thank you for your inquiry! We will get back to you soon.
              </div>
            )}

            {/* Error Message */}
            {submitStatus === "error" && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                ❌ Sorry, there was an error sending your message. Please try
                again.
              </div>
            )}

            {/* Name Field */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                placeholder="Enter your full name"
              />
            </div>

            {/* Phone Number Field */}
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-semibold text-gray-700 mb-2"
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
                disabled={isSubmitting}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                placeholder="Enter your phone number"
              />
            </div>

            {/* City Field */}
            <div>
              <label
                htmlFor="city"
                className="block text-sm font-semibold text-gray-700 mb-2"
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
                disabled={isSubmitting}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                placeholder="Enter your city"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full cursor-pointer bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold py-4 px-6 rounded-lg hover:from-green-700 hover:to-green-800 transform hover:scale-105 transition-all duration-200 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
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
                "Send Inquiry"
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
