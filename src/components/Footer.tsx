import Link from "next/link";
import {
  EmailIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  LocationIcon,
} from "./Icons";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
  ];

  const socialLinks = [
    { name: "LinkedIn", href: "#", icon: LinkedInIcon },
    { name: "Facebook", href: "#", icon: FacebookIcon },
    { name: "Instagram", href: "#", icon: InstagramIcon },
  ];

  return (
    <footer className="bg-green-800 text-white py-12 px-4 md:px-8 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-amber-300 mb-4">
              Ketaki Food
            </h3>
            <p className="text-green-100 leading-relaxed mb-4">
              Delivering premium soybean seeds from India to the world.
            </p>
            <p className="text-green-200 text-sm">
              © 2025 Ketaki Food. All Rights Reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold text-amber-300 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-green-100 hover:text-amber-300 transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-xl font-semibold text-amber-300 mb-4">
              Contact Information
            </h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <EmailIcon className="w-5 h-5 text-amber-300 mt-1" />
                <div>
                  <p className="text-green-100">
                    <span className="font-semibold">Email:</span>
                  </p>
                  <a
                    href="mailto:info@ketakifood.com"
                    className="text-amber-300 hover:text-amber-200 transition-colors duration-300"
                  >
                    info@ketakifood.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <LocationIcon className="w-5 h-5 text-amber-300 mt-1" />
                <div>
                  <p className="text-green-100 font-semibold">Address:</p>
                  <p className="text-green-200 text-sm leading-relaxed">
                    Mahatma Gandhi Road Mumbai India
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div className="border-t border-green-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-green-100 text-sm">
                Follow us on social media for updates and news
              </p>
            </div>

            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="bg-green-700 hover:bg-amber-600 p-3 rounded-full transition-colors duration-300 group"
                    title={social.name}
                  >
                    <IconComponent className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="text-center mt-6 pt-6 border-t border-green-700">
            <p className="text-green-200 text-sm">
              Trusted exporter of premium soybean seeds • Quality • Reliability
              • Global Reach
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
