// src/components/Navbar.jsx
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <nav className="py-6 flex justify-between items-center">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-2xl font-bold"
      >
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          SEVER BANK
        </span>
      </motion.div>
      
      {/* Desktop Navigation */}
      <div className="hidden md:flex space-x-8 items-center">
        {['Products', 'Features', 'Pricing', 'Contact'].map((item) => (
          <motion.a 
            key={item}
            href="#"
            whileHover={{ 
              scale: 1.05,
              background: 'linear-gradient(to right, #3b82f6, #8b5cf6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
            className="text-gray-300 hover:text-white transition-colors"
          >
            {item}
          </motion.a>
        ))}
        <motion.button 
          whileHover={{ scale: 1.05 }}
          className="bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-2 rounded-full"
        >
          Get Started
        </motion.button>
      </div>
      
      {/* Mobile Menu Button */}
      <button 
        className="md:hidden z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="w-6 h-0.5 bg-white mb-1.5"></div>
        <div className="w-6 h-0.5 bg-white mb-1.5"></div>
        <div className="w-6 h-0.5 bg-white"></div>
      </button>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 bg-[#0c1120] z-40 flex flex-col items-center justify-center space-y-8"
          >
            {['Products', 'Features', 'Pricing', 'Contact'].map((item) => (
              <motion.a 
                key={item}
                href="#"
                className="text-2xl"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </motion.a>
            ))}
            <motion.button 
              className="bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-3 rounded-full text-xl mt-4"
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}