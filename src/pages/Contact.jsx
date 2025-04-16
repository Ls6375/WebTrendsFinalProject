// Student Name: Neeraj Jassi
// Student ID:  8965459
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { useState } from "react";
import { toast } from "react-toastify";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Contact form submitted:", formData);
    toast.success("Thank you for your message! We will get back to you soon.");
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-green-50">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-gray-800 mb-6">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions or want to get involved? We&apos;d love to hear from
            you. Reach out through any of the channels below.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
                  placeholder="Message subject"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
                  placeholder="Your message"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-8"
          >
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <FaMapMarkerAlt className="text-green-600 text-xl mr-4" />
                  <div>
                    <h3 className="font-semibold">Address</h3>
                    <p>
                      123 Environmental Way
                      <br />
                      Green City, EC 12345
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <FaEnvelope className="text-green-600 text-xl mr-4" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p>info@ecoconserve.org</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <FaPhone className="text-green-600 text-xl mr-4" />
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p>(555) 123-4567</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Connect With Us</h2>
              <div className="grid grid-cols-2 gap-4">
                <a
                  href="https://www.facebook.com/YourPageName"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit our Facebook page"
                  className="flex items-center justify-center bg-green-50 text-green-600 p-4 rounded-lg hover:bg-green-100 transition duration-300"
                >
                  <FaFacebook className="text-2xl mr-2" />
                  Facebook
                </a>
                <a
                  href="https://twitter.com/YourHandle"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit our Twitter profile"
                  className="flex items-center justify-center bg-green-50 text-green-600 p-4 rounded-lg hover:bg-green-100 transition duration-300"
                >
                  <FaTwitter className="text-2xl mr-2" />
                  Twitter
                </a>
                <a
                  href="https://www.instagram.com/YourHandle"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit our Instagram profile"
                  className="flex items-center justify-center bg-green-50 text-green-600 p-4 rounded-lg hover:bg-green-100 transition duration-300"
                >
                  <FaInstagram className="text-2xl mr-2" />
                  Instagram
                </a>
                <a
                  href="https://www.linkedin.com/in/YourProfile"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit our LinkedIn profile"
                  className="flex items-center justify-center bg-green-50 text-green-600 p-4 rounded-lg hover:bg-green-100 transition duration-300"
                >
                  <FaLinkedin className="text-2xl mr-2" />
                  LinkedIn
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
