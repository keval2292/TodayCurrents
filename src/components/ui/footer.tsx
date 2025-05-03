import Link from 'next/link';
import { Twitter, Facebook, Instagram } from 'lucide-react';

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/news', label: 'News' },
  { href: '/contact', label: 'Contact' },
];

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 mt-20">
      <div className="border-t border-gray-300"></div>

      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12 pb-8 border-b border-gray-200">
          <h3 className="text-2xl font-semibold">HeroNews</h3>
          <p className="text-sm text-gray-500 mt-2 max-w-xl mx-auto">
            Stay updated with the latest news and stories from around the world.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="flex justify-center mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 text-center md:text-left max-w-6xl w-full">
            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="hover:text-gray-900 transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter Signup */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Subscribe to Our Newsletter</h4>
              <p className="text-sm text-gray-500 mb-4">
                Get the latest updates delivered straight to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row justify-center md:justify-start items-center gap-4">
                <input
                  type="email"
                  placeholder="Your Email Address"
                  className="border border-gray-300 rounded-md px-4 py-2 w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow duration-300"
                />
                <button
                  type="submit"
                  className="bg-gray-800 hover:bg-gray-900 text-white rounded-md px-6 py-2 whitespace-nowrap transition-all duration-300 transform hover:scale-105"
                >
                  Subscribe
                </button>
              </div>
            </div>

            {/* Social Icons */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <p className="text-sm text-gray-500 mb-4">
                Connect with us on our social channels.
              </p>
              <div className="flex justify-center md:justify-start space-x-4">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-500 transition-all duration-300 hover:scale-110 p-2 rounded-full bg-gray-200"
                  aria-label="Twitter"
                >
                  <Twitter size={24} />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-700 transition-all duration-300 hover:scale-110 p-2 rounded-full bg-gray-200"
                  aria-label="Facebook"
                >
                  <Facebook size={24} />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-pink-500 transition-all duration-300 hover:scale-110 p-2 rounded-full bg-gray-200"
                  aria-label="Instagram"
                >
                  <Instagram size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>


        {/* Copyright */}
        <div className="pt-8 border-t border-gray-200 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} HeroNews. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
