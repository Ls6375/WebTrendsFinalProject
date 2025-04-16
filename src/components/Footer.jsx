// Student Name: Lakhvinder Singh
// Student ID: 8959531
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { toast } from 'react-toastify';

function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error('Please enter a valid email address');
      return;
    }

    // Simulate successful subscription
    toast.success('Thank you for subscribing to our newsletter!');
    setEmail('');
  };

  return (
    <footer className="bg-green-600 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">EcoConserve</h3>
            <p className="text-green-100">
              Working together for a sustainable future. Join us in our mission to protect and preserve our planet.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-green-100 hover:text-white transition duration-300">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-green-100 hover:text-white transition duration-300">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-green-100 hover:text-white transition duration-300">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-green-100 hover:text-white transition duration-300">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-green-100 hover:text-white transition duration-300">About Us</Link>
              </li>
              <li>
                <Link to="/initiatives" className="text-green-100 hover:text-white transition duration-300">Initiatives</Link>
              </li>
              <li>
                <Link to="/get-involved" className="text-green-100 hover:text-white transition duration-300">Get Involved</Link>
              </li>
              <li>
                <Link to="/contact" className="text-green-100 hover:text-white transition duration-300">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <FaEnvelope className="text-green-100" />
                <a href="mailto:info@ecoconserve.org" className="text-green-100 hover:text-white transition duration-300">
                  info@ecoconserve.org
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <FaPhone className="text-green-100" />
                <a href="tel:+15551234567" className="text-green-100 hover:text-white transition duration-300">
                  (555) 123-4567
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <FaMapMarkerAlt className="text-green-100" />
                <span className="text-green-100">
                  123 Green Street, Eco City, EC 12345
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4">Stay Updated</h3>
            <p className="text-green-100 mb-4">
              Subscribe to our newsletter for the latest updates and conservation news.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="w-full px-4 py-2 rounded-lg bg-green-700 text-white placeholder-green-300 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <button
                type="submit"
                className="w-full bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-green-500 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-green-100 text-sm">
              &copy; {new Date().getFullYear()} EcoConserve. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;