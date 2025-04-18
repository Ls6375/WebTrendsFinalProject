// Student Name: Ashok Subedi
// Student ID:  8972276
import { motion } from "framer-motion";
import { FaLeaf, FaUsers, FaGlobe } from "react-icons/fa";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-green-50">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-gray-800 mb-6">Our Story</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {`Since 2010, we've been at the forefront of environmental
            conservation, working tirelessly to protect our planet's precious
            ecosystems and inspire positive change in communities worldwide.`}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-xl shadow-lg p-8 text-center"
          >
            <FaLeaf className="text-5xl text-eco-green-800 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-gray-600">
              {`To protect and restore Earth's biodiversity through innovative
              conservation efforts and community engagement.`}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-xl shadow-lg p-8 text-center"
          >
            <FaUsers className="text-5xl text-eco-green-800 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Our Team</h3>
            <p className="text-gray-600">
              A dedicated group of scientists, conservationists, and volunteers
              working together for a sustainable future.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-white rounded-xl shadow-lg p-8 text-center"
          >
            <FaGlobe className="text-5xl text-eco-green-800 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Our Impact</h3>
            <p className="text-gray-600">
              Over 100 successful conservation projects across 30 countries,
              protecting endangered species and habitats.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="bg-eco-green-800 text-white rounded-xl p-12 text-center"
        >
          <h2 className="text-3xl font-bold mb-6">Join Our Mission</h2>
          <p className="text-xl mb-8">
            Together, we can make a difference. Join our community of
            environmental advocates and help us create a sustainable future for
            generations to come.
          </p>
          <Link
            to="/get-involved"
            className="bg-white text-green-800 px-8 py-3 rounded-full font-bold hover:bg-green-50 transition duration-300 inline-block"
          >
            Get Involved Today
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
