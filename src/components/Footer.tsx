import Link from "next/link";
import {
  Phone,
  MapPin,
  Clock,
  Facebook,
  MessageCircle,
  Mail,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-luxury-dark text-white">
      {/* Main footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-luxury-gold text-luxury-dark p-2 rounded-lg font-bold text-xl">
                TC
              </div>
              <div>
                <h3 className="text-xl font-bold text-luxury-gold">
                  Telecom Fair
                </h3>
                <p className="text-sm text-gray-300">
                  Premium Mobile Experience
                </p>
              </div>
            </div>
            <p className="text-gray-300 text-sm">
              Your trusted mobile retail partner in Keshabpur, Khulna. We
              provide genuine products with excellent after-sales service since
              2020.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-luxury-gold hover:text-white transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-luxury-gold hover:text-white transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-luxury-gold hover:text-white transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-luxury-gold">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-luxury-gold transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/shop"
                  className="text-gray-300 hover:text-luxury-gold transition-colors"
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-300 hover:text-luxury-gold transition-colors"
                >
                  Mobile Services
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-luxury-gold transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-luxury-gold transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-luxury-gold">
              Categories
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/shop?category=mobile"
                  className="text-gray-300 hover:text-luxury-gold transition-colors"
                >
                  Mobile Phones
                </Link>
              </li>
              <li>
                <Link
                  href="/shop?category=accessory"
                  className="text-gray-300 hover:text-luxury-gold transition-colors"
                >
                  Accessories
                </Link>
              </li>
              <li>
                <Link
                  href="/shop?brand=apple"
                  className="text-gray-300 hover:text-luxury-gold transition-colors"
                >
                  iPhone
                </Link>
              </li>
              <li>
                <Link
                  href="/shop?brand=samsung"
                  className="text-gray-300 hover:text-luxury-gold transition-colors"
                >
                  Samsung
                </Link>
              </li>
              <li>
                <Link
                  href="/shop?brand=xiaomi"
                  className="text-gray-300 hover:text-luxury-gold transition-colors"
                >
                  Xiaomi
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-luxury-gold">
              Contact Info
            </h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-luxury-gold mt-0.5" />
                <div>
                  <p className="text-gray-300 text-sm">Main Road, Keshabpur</p>
                  <p className="text-gray-300 text-sm">Khulna, Bangladesh</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-luxury-gold" />
                <p className="text-gray-300 text-sm">+880 1234-567890</p>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-luxury-gold mt-0.5" />
                <div>
                  <p className="text-gray-300 text-sm">
                    Sat-Thu: 9:00 AM - 9:00 PM
                  </p>
                  <p className="text-gray-300 text-sm">
                    Friday: 2:00 PM - 9:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-luxury-gray py-4">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            © 2024 Telecom Fair. All rights reserved.
          </p>
          <p className="text-gray-300 text-sm mt-2 md:mt-0">
            Developed by Zayed Bin Hamid
          </p>
          <p className="text-gray-300 text-sm mt-2 md:mt-0">
            SEO: Mobile Phone Shop in Keshabpur | Best Mobile Accessories
            Keshabpur
          </p>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/8801234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors z-50"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </footer>
  );
};

export default Footer;
