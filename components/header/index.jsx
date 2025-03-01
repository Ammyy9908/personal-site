import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAuthorImageVisible, setIsAuthorImageVisible] = useState(false);

  const menuItems = [
    { label: 'Home', href: '#' },
    { label: 'About', href: '#' },
    { label: 'Contact', href: '#' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsAuthorImageVisible(true);
      } else {
        setIsAuthorImageVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white">
      <div className="px-6 py-4 flex justify-between items-center">
        <a href="/" className="flex items-center text-black font-semibold">
          {isAuthorImageVisible && (
            <img src="/author.png" alt="Author" className="w-8 h-8 rounded-full mr-2" />
          )}
          SUMIT
        </a>

        <button
          onClick={() => setIsMobileMenuOpen(true)}
          className="text-black p-2"
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 bg-white"
          >
            <div className="px-6 py-4 flex justify-between items-center border-b border-gray-800">
              <span className="text-black font-bold">Menu</span>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-black p-2"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>
            
            <nav className="mt-8">
              <ul className="flex flex-col space-y-6 px-6">
                {menuItems.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-black text-2xl font-bold hover:text-green-500 transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;