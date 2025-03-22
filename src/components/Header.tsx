import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface HeaderProps {
  scrollToSection: (ref: React.RefObject<HTMLDivElement>) => void;
  aboutRef: React.RefObject<HTMLDivElement>;
  skillsRef: React.RefObject<HTMLDivElement>;
  projectsRef: React.RefObject<HTMLDivElement>;
  contactRef: React.RefObject<HTMLDivElement>;
}

const Header = ({ scrollToSection, aboutRef, skillsRef, projectsRef, contactRef }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', ref: aboutRef },
    { name: 'Skills', ref: skillsRef },
    { name: 'Projects', ref: projectsRef },
    { name: 'Contact', ref: contactRef }
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
        }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <motion.div
          className="text-xl font-bold"
          whileHover={{ scale: 1.05 }}
        >
          <a href='#'>
            <span className={isScrolled ? 'text-blue-600' : 'text-white'}>Aljith</span>
            <span className={isScrolled ? 'text-gray-800' : 'text-blue-300'}>.dev</span>
          </a>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {navItems.map((item, index) => (
              <motion.li key={index}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <button
                  onClick={() => scrollToSection(item.ref)}
                  className={`${isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-300'
                    } font-medium transition-colors`}
                >
                  {item.name}
                </button>
              </motion.li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className={isScrolled ? 'text-gray-800' : 'text-white'}>
            {isMobileMenuOpen ? '✕' : '☰'}
          </span>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <motion.div
          className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
        >
          <ul className="py-4">
            {navItems.map((item, index) => (
              <li key={index} className="px-4 py-2">
                <button
                  onClick={() => {
                    scrollToSection(item.ref);
                    setIsMobileMenuOpen(false);
                  }}
                  className="text-gray-700 hover:text-blue-600 font-medium w-full text-left"
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;