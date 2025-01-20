// src/components/Navbar.jsx
import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import logoImage from '../assets/Logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-primary py-4 px-6 fixed w-full top-0 z-50">
      <div className="px-10 max-w-full mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
          <img src={logoImage} alt="Logo" className="logo-image" />
          </div>

         
          <div className="hidden md:flex space-x-8">
            <a href="#services" className="text-white hover:text-secondary">SERVICES</a>
            <a href="#about" className="text-white hover:text-secondary">ABOUT US</a>
            <a href="#contact" className="text-white hover:text-secondary">CONTACT US</a>
            <a href="#careers" className="text-white hover:text-secondary">CAREERS</a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>
          </div>
        </div>

       
      </div>
    </nav>
  );
};

export default Navbar;