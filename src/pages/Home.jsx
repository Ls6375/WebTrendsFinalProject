// Student Name: Lakhvinder Singh
// Student ID: 8959531
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import {
  FaTree,
  FaUsers,
  FaProjectDiagram,
  FaArrowRight,
  FaArrowLeft,
  FaLeaf,
  FaHandshake,
  FaRecycle,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const heroImages = [
  {
    url: "forest.jpg",
    title: "Protect Our Forests",
    description: "Join us in preserving th	e lungs of our planet",
  },
  {
    url: "water.jpg",
    title: "Clean Water Initiative",
    description: "Ensuring clean water for future generations",
  },
  {
    url: "wildlife.jpg",
    title: "Wildlife Conservation",
    description: "Protecting endangered species and their habitats",
  },
];

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + heroImages.length) % heroImages.length
    );
  };

  const handleGetInvolved = () => {
    navigate("/get-involved");
  };

  return (
    <div className="min-h-screen">
      {/* Hero Slider Section */}
      <section className="relative h-[80vh] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${heroImages[currentSlide].url})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-25" />
            <div className="container mx-auto h-full flex items-center justify-center text-center relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h1 className="text-5xl font-bold text-white mb-6">
                  {heroImages[currentSlide].title}
                </h1>
                <p className="text-xl text-white mb-8">
                  {heroImages[currentSlide].description}
                </p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to="/get-involved"
                    className="bg-white text-green-600 px-8 py-3 rounded-full font-bold hover:bg-green-50 transition duration-300 inline-block"
                  >
                    Join Us Today
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-30 p-2 rounded-full text-white hover:bg-opacity-50 transition duration-300"
        >
          <FaArrowLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-30 p-2 rounded-full text-white hover:bg-opacity-50 transition duration-300"
        >
          <FaArrowRight size={24} />
        </button>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition duration-300 ${
                currentSlide === index ? "bg-white" : "bg-white bg-opacity-50"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-white">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-green-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300"
          >
            <FaTree className="text-5xl text-green-600 mx-auto mb-4" />
            <h3 className="text-4xl font-bold text-green-600 mb-2">1M+</h3>
            <p className="text-gray-600">Trees Planted</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-green-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300"
          >
            <FaUsers className="text-5xl text-green-600 mx-auto mb-4" />
            <h3 className="text-4xl font-bold text-green-600 mb-2">50K+</h3>
            <p className="text-gray-600">Volunteers Worldwide</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-green-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300"
          >
            <FaProjectDiagram className="text-5xl text-green-600 mx-auto mb-4" />
            <h3 className="text-4xl font-bold text-green-600 mb-2">100+</h3>
            <p className="text-gray-600">Conservation Projects</p>
          </motion.div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-center mb-12"
          >
            Our Approach to Conservation
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300"
            >
              <FaLeaf className="text-4xl text-green-600 mb-4" />
              <h3 className="text-xl font-bold mb-4">Sustainable Practices</h3>
              <p className="text-gray-600">
                Implementing eco-friendly solutions that balance human needs
                with environmental protection.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300"
            >
              <FaHandshake className="text-4xl text-green-600 mb-4" />
              <h3 className="text-xl font-bold mb-4">Community Engagement</h3>
              <p className="text-gray-600">
                Working closely with local communities to create lasting
                environmental impact.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300"
            >
              <FaRecycle className="text-4xl text-green-600 mb-4" />
              <h3 className="text-xl font-bold mb-4">Innovation</h3>
              <p className="text-gray-600">
                Leveraging cutting-edge technology and research for better
                conservation outcomes.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-green-500 text-white">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-6">
              Ready to Make a Difference?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join our community of environmental advocates and help us create a
              sustainable future.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleGetInvolved}
              className="bg-white text-green-600 px-8 py-3 rounded-full font-bold hover:bg-green-50 transition duration-300"
            >
              Join Us Today
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Mission Statement */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="py-20 bg-gradient-to-b from-green-50 to-white"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Mission</h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-8"></div>
            <p className="text-xl max-w-3xl mx-auto text-gray-600 leading-relaxed">
              We are dedicated to protecting Earth&apos;s biodiversity through
              conservation, education, and community engagement. Together, we can
              create a sustainable future for all.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300"
            >
              <div className="text-green-600 text-4xl mb-4">
                <FaTree />
              </div>
              <h3 className="text-xl font-bold mb-4">Conservation</h3>
              <p className="text-gray-600">
                Protecting and restoring natural habitats to preserve biodiversity
                and ensure the survival of endangered species.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300"
            >
              <div className="text-green-600 text-4xl mb-4">
                <FaUsers />
              </div>
              <h3 className="text-xl font-bold mb-4">Education</h3>
              <p className="text-gray-600">
                Empowering communities through environmental education and
                awareness programs to foster sustainable practices.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6 }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300"
            >
              <div className="text-green-600 text-4xl mb-4">
                <FaHandshake />
              </div>
              <h3 className="text-xl font-bold mb-4">Community</h3>
              <p className="text-gray-600">
                Building strong partnerships with local communities to create
                lasting environmental impact and sustainable solutions.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}

export default Home;
