// Student Name: Lakhvinder Singh
// Student ID: 8959531
import { motion } from 'framer-motion';
import { FaTree, FaWater, FaSeedling, FaSun } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Initiatives() {
  const initiatives = [
    {
      icon: <FaTree className="text-4xl mb-4 text-eco-green-600" />,
      title: "Forest Conservation",
      description: "Protecting and restoring forest ecosystems worldwide through sustainable management practices and community involvement.",
      stats: "10,000+ acres protected",
    },
    {
      icon: <FaWater className="text-4xl mb-4 text-eco-green-600" />,
      title: "Ocean Cleanup",
      description: "Removing plastic waste from our oceans and implementing measures to prevent marine pollution.",
      stats: "500 tons of waste removed",
    },
    {
      icon: <FaSeedling className="text-4xl mb-4 text-eco-green-600" />,
      title: "Sustainable Agriculture",
      description: "Promoting eco-friendly farming practices and supporting local farmers in adopting sustainable methods.",
      stats: "100+ communities supported",
    },
    {
      icon: <FaSun className="text-4xl mb-4 text-eco-green-600" />,
      title: "Renewable Energy",
      description: "Advancing clean energy solutions and helping communities transition to renewable power sources.",
      stats: "25 solar projects completed",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-green-50">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-gray-800 mb-6">Our Initiatives</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our key environmental programs and their impact on creating a
            sustainable future for our planet.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {initiatives.map((initiative, index) => (
            <motion.div
              key={initiative.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition duration-300"
            >
              <div className="text-center mb-6">
                {initiative.icon}
                <h3 className="text-2xl font-bold mb-4">{initiative.title}</h3>
              </div>
              <p className="text-gray-600 mb-6">{initiative.description}</p>
              <div className="bg-eco-green-50 rounded-lg p-4 text-center">
                <p className="text-eco-green-800 font-semibold">{initiative.stats}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="bg-eco-green-600 text-white rounded-xl p-12 text-center"
        >
          <h2 className="text-3xl font-bold mb-6">Start Your Own Initiative</h2>
          <p className="text-xl mb-8">
            {`Have an idea for an environmental project? We'd love to help you bring it to life.`}
          </p>
          <Link
            to="/get-involved"
            className="bg-white text-eco-green-600 px-8 py-3 rounded-full font-bold hover:bg-eco-green-50 transition duration-300"
          >
            Propose a Project
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

export default Initiatives;