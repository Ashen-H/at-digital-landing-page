import React, { useState } from 'react';
import logoImage from '../assets/Logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { title: 'HOME', href: '#', type: 'mobileview' },
    { title: 'SERVICES', href: '#' },
    { title: 'ABOUT US', href: '#' },
    { title: 'CONTACT US', href: '#' },
    { title: 'CAREERS', href: '#' }
  ];

  return (
    <header className="bg-primary py-4 px-4 lg:px-20 relative">
      <div className="flex justify-between items-center md:max-w-full">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logoImage} alt="Logo" className="logo-image" />
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          {menuItems
            .filter(item => item.type !== 'mobileview')
            .map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="text-white hover:text-accent-white transition-colors"
              >
                {item.title}
              </a>
            ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-16 6h16" />
            </svg>
          )}
        </button>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed md:hidden inset-0 bg-primary transform ${
            isMenuOpen ? 'translate-x-0' : '-translate-x-full'
          } transition-transform duration-300 ease-in-out`}
          style={{ top: '0', left: '0', right: '0', bottom: '0' }}
        >
          <div className="flex flex-col h-full pt-20 bg-white">
            <nav className="flex flex-col">
              {menuItems.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className="text-primary hover:text-accent-white transition-colors p-4"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.title}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;