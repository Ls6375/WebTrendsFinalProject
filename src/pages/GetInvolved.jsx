// Student Name: Lakhvinder Singh
// Student ID: 8959531
import { motion } from 'framer-motion';
import { FaHandsHelping, FaDollarSign, FaLightbulb, FaUsers } from 'react-icons/fa';
import { useState } from 'react';
import { toast } from 'react-toastify';
import Modal from '../components/Modal';

function GetInvolved() {
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [isVolunteerModalOpen, setIsVolunteerModalOpen] = useState(false);
  const [isDonateModalOpen, setIsDonateModalOpen] = useState(false);
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const [isNetworkModalOpen, setIsNetworkModalOpen] = useState(false);

  const [volunteerForm, setVolunteerForm] = useState({
    name: '',
    email: '',
    phone: '',
    interests: '',
    availability: '',
  });

  const [donationForm, setDonationForm] = useState({
    name: '',
    email: '',
    amount: '',
    message: '',
  });

  const [projectForm, setProjectForm] = useState({
    name: '',
    email: '',
    projectName: '',
    description: '',
    location: '',
  });

  const [networkForm, setNetworkForm] = useState({
    name: '',
    email: '',
    organization: '',
    role: '',
    interests: '',
  });

  const handleVolunteerSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Volunteer form submitted:', volunteerForm);
    toast.success('Thank you for your interest in volunteering! We will contact you shortly.');
    setIsVolunteerModalOpen(false);
    setVolunteerForm({
      name: '',
      email: '',
      phone: '',
      interests: '',
      availability: '',
    });
  };

  const handleDonationSubmit = (e) => {
    e.preventDefault();
    // Here you would typically integrate with a payment processor
    console.log('Donation form submitted:', donationForm);
    toast.success(`Thank you for your donation of $${donationForm.amount}!`);
    setIsDonateModalOpen(false);
    setDonationForm({
      name: '',
      email: '',
      amount: '',
      message: '',
    });
  };

  const handleProjectSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Project form submitted:', projectForm);
    toast.success('Thank you for submitting your project idea! We will review it and get back to you soon.');
    setIsProjectModalOpen(false);
    setProjectForm({
      name: '',
      email: '',
      projectName: '',
      description: '',
      location: '',
    });
  };

  const handleNetworkSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Network form submitted:', networkForm);
    toast.success('Welcome to our network! You will receive an email with next steps shortly.');
    setIsNetworkModalOpen(false);
    setNetworkForm({
      name: '',
      email: '',
      organization: '',
      role: '',
      interests: '',
    });
  };

  const handleInputChange = (setForm, form) => (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
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
          <h1 className="text-5xl font-bold text-gray-800 mb-6">Get Involved</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join our community of environmental advocates and make a real difference
            in protecting our planet's future.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition duration-300"
          >
            <FaHandsHelping className="text-4xl text-green-600 mb-4" />
            <h2 className="text-2xl font-bold mb-4">Volunteer</h2>
            <p className="text-gray-600 mb-6">
              Join our network of dedicated volunteers and participate in local
              conservation projects, educational programs, and community events.
            </p>
            <ul className="text-gray-600 mb-6 space-y-2">
              <li>• Weekend Conservation Projects</li>
              <li>• Educational Workshops</li>
              <li>• Community Clean-up Events</li>
              <li>• Wildlife Monitoring Programs</li>
            </ul>
            <button 
              onClick={() => setIsVolunteerModalOpen(true)}
              className="w-full bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition duration-300"
            >
              Sign Up to Volunteer
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition duration-300"
          >
            <FaDollarSign className="text-4xl text-green-600 mb-4" />
            <h2 className="text-2xl font-bold mb-4">Donate</h2>
            <p className="text-gray-600 mb-6">
              Support our initiatives through financial contributions. Your donation
              helps fund critical conservation projects and educational programs.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <button 
                onClick={() => {
                  setDonationForm({ ...donationForm, amount: '25' });
                  setIsDonateModalOpen(true);
                }}
                className={`px-4 py-2 rounded-lg transition duration-300 ${
                  selectedAmount === 25 
                    ? 'bg-green-600 text-white' 
                    : 'bg-green-50 text-green-800 hover:bg-green-100'
                }`}
              >
                $25
              </button>
              <button 
                onClick={() => {
                  setDonationForm({ ...donationForm, amount: '50' });
                  setIsDonateModalOpen(true);
                }}
                className={`px-4 py-2 rounded-lg transition duration-300 ${
                  selectedAmount === 50 
                    ? 'bg-green-600 text-white' 
                    : 'bg-green-50 text-green-800 hover:bg-green-100'
                }`}
              >
                $50
              </button>
              <button 
                onClick={() => {
                  setDonationForm({ ...donationForm, amount: '100' });
                  setIsDonateModalOpen(true);
                }}
                className={`px-4 py-2 rounded-lg transition duration-300 ${
                  selectedAmount === 100 
                    ? 'bg-green-600 text-white' 
                    : 'bg-green-50 text-green-800 hover:bg-green-100'
                }`}
              >
                $100
              </button>
              <button 
                onClick={() => setIsDonateModalOpen(true)}
                className={`px-4 py-2 rounded-lg transition duration-300 ${
                  selectedAmount === 'custom' 
                    ? 'bg-green-600 text-white' 
                    : 'bg-green-50 text-green-800 hover:bg-green-100'
                }`}
              >
                Custom
              </button>
            </div>
            <button 
              onClick={() => setIsDonateModalOpen(true)}
              className="w-full bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition duration-300"
            >
              Donate Now
            </button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition duration-300"
          >
            <FaLightbulb className="text-4xl text-green-600 mb-4" />
            <h2 className="text-2xl font-bold mb-4">Start a Project</h2>
            <p className="text-gray-600 mb-6">
              Have an idea for an environmental initiative? We provide resources,
              guidance, and support to help bring your project to life.
            </p>
            <button 
              onClick={() => setIsProjectModalOpen(true)}
              className="w-full bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition duration-300"
            >
              Submit Your Idea
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition duration-300"
          >
            <FaUsers className="text-4xl text-green-600 mb-4" />
            <h2 className="text-2xl font-bold mb-4">Join Our Network</h2>
            <p className="text-gray-600 mb-6">
              Connect with like-minded individuals and organizations. Share ideas,
              resources, and opportunities for environmental action.
            </p>
            <button 
              onClick={() => setIsNetworkModalOpen(true)}
              className="w-full bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition duration-300"
            >
              Join Network
            </button>
          </motion.div>
        </div>
      </div>

      {/* Volunteer Modal */}
      <Modal
        isOpen={isVolunteerModalOpen}
        onClose={() => setIsVolunteerModalOpen(false)}
        title="Volunteer Sign Up"
      >
        <form onSubmit={handleVolunteerSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={volunteerForm.name}
              onChange={handleInputChange(setVolunteerForm, volunteerForm)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={volunteerForm.email}
              onChange={handleInputChange(setVolunteerForm, volunteerForm)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Phone</label>
            <input
              type="tel"
              name="phone"
              value={volunteerForm.phone}
              onChange={handleInputChange(setVolunteerForm, volunteerForm)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Areas of Interest</label>
            <textarea
              name="interests"
              value={volunteerForm.interests}
              onChange={handleInputChange(setVolunteerForm, volunteerForm)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              rows="3"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Availability</label>
            <textarea
              name="availability"
              value={volunteerForm.availability}
              onChange={handleInputChange(setVolunteerForm, volunteerForm)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              rows="3"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          >
            Submit
          </button>
        </form>
      </Modal>

      {/* Donation Modal */}
      <Modal
        isOpen={isDonateModalOpen}
        onClose={() => setIsDonateModalOpen(false)}
        title="Make a Donation"
      >
        <form onSubmit={handleDonationSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={donationForm.name}
              onChange={handleInputChange(setDonationForm, donationForm)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={donationForm.email}
              onChange={handleInputChange(setDonationForm, donationForm)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Amount ($)</label>
            <input
              type="number"
              name="amount"
              value={donationForm.amount}
              onChange={handleInputChange(setDonationForm, donationForm)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              required
              min="1"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Message (Optional)</label>
            <textarea
              name="message"
              value={donationForm.message}
              onChange={handleInputChange(setDonationForm, donationForm)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              rows="3"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          >
            Donate
          </button>
        </form>
      </Modal>

      {/* Project Modal */}
      <Modal
        isOpen={isProjectModalOpen}
        onClose={() => setIsProjectModalOpen(false)}
        title="Submit Your Project"
      >
        <form onSubmit={handleProjectSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={projectForm.name}
              onChange={handleInputChange(setProjectForm, projectForm)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={projectForm.email}
              onChange={handleInputChange(setProjectForm, projectForm)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Project Name</label>
            <input
              type="text"
              name="projectName"
              value={projectForm.projectName}
              onChange={handleInputChange(setProjectForm, projectForm)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Project Description</label>
            <textarea
              name="description"
              value={projectForm.description}
              onChange={handleInputChange(setProjectForm, projectForm)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              rows="4"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Location</label>
            <input
              type="text"
              name="location"
              value={projectForm.location}
              onChange={handleInputChange(setProjectForm, projectForm)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          >
            Submit Project
          </button>
        </form>
      </Modal>

      {/* Network Modal */}
      <Modal
        isOpen={isNetworkModalOpen}
        onClose={() => setIsNetworkModalOpen(false)}
        title="Join Our Network"
      >
        <form onSubmit={handleNetworkSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={networkForm.name}
              onChange={handleInputChange(setNetworkForm, networkForm)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={networkForm.email}
              onChange={handleInputChange(setNetworkForm, networkForm)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Organization</label>
            <input
              type="text"
              name="organization"
              value={networkForm.organization}
              onChange={handleInputChange(setNetworkForm, networkForm)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Role</label>
            <input
              type="text"
              name="role"
              value={networkForm.role}
              onChange={handleInputChange(setNetworkForm, networkForm)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Areas of Interest</label>
            <textarea
              name="interests"
              value={networkForm.interests}
              onChange={handleInputChange(setNetworkForm, networkForm)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              rows="3"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          >
            Join Network
          </button>
        </form>
      </Modal>
    </div>
  );
}

export default GetInvolved;