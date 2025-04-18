// Student Name: Lakhvinder Singh
// Student ID: 8959531
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaLeaf, FaBars } from 'react-icons/fa';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-green-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Brand with Leaf Icon */}
        <Link to="/" className="flex items-center text-2xl font-bold">
          <FaLeaf className="mr-2" size={28} />
          EcoConserve
        </Link>

        {/* Mobile menu button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <FaBars size={24} />
        </button>

        {/* Nav links */}
        <div
          className={`${
            menuOpen ? 'block' : 'hidden'
          } md:flex space-x-6 mt-4 md:mt-0`}
        >
          <Link to="/" className="hover:text-green-200 block md:inline">
            Home
          </Link>
          <Link to="/about" className="hover:text-green-200 block md:inline">
            About
          </Link>
          <Link
            to="/initiatives"
            className="hover:text-green-200 block md:inline"
          >
            Initiatives
          </Link>
          <Link
            to="/get-involved"
            className="hover:text-green-200 block md:inline"
          >
            Get Involved
          </Link>
          <Link
            to="/contact"
            className="hover:text-green-200 block md:inline"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
