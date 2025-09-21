import EmailIcon from "./Icons/EmailIcon";
import LocationIcon from "./Icons/LocationIcon";

const ContactInfo = () => {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-20 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Office Address */}
          <div className="bg-green-100 p-8 rounded-xl border border-green-100">
            <div className="flex items-start space-x-4">
              <div className="bg-green-600 p-3 rounded-lg">
                <LocationIcon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-green-800 mb-3">
                  Office Address
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Ketaki Food Mahatma Gandhi Road Khambhat, Gujarat, India
                </p>
              </div>
            </div>
          </div>

          {/* Email */}
          <div className="bg-amber-100 p-8 rounded-xl border border-amber-100">
            <div className="flex items-start space-x-4">
              <div className="bg-amber-600 p-3 rounded-lg">
                <EmailIcon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-amber-800 mb-3">
                  Email
                </h3>
                <a
                  href="mailto:info@ketakifood.com"
                  className="text-amber-700 hover:text-amber-900 font-medium transition-colors"
                >
                  info@ketakifood.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Team Description */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-green-50 to-amber-50 p-8 rounded-xl border border-gray-100">
            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Our team is here to answer your queries and provide the best
              export solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
