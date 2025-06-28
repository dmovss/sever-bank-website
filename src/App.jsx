import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Card3D from './components/Card3D';
import ParticleBackground from './components/Particles';
import { FiMenu, FiX } from 'react-icons/fi';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0c1120] to-[#1a243d] text-white overflow-x-hidden">
      <ParticleBackground />
      
      {/* Navbar */}
      <nav className="container mx-auto px-4 py-6 flex justify-between items-center">
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
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
        
        {/* Mobile Menu */}
        {menuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-16 left-0 right-0 bg-[#0c1120] z-40 flex flex-col items-center py-4 space-y-4"
          >
            {['Products', 'Features', 'Pricing', 'Contact'].map((item) => (
              <a 
                key={item}
                href="#"
                className="text-lg py-2"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <button 
              className="bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-2 rounded-full mt-2"
              onClick={() => setMenuOpen(false)}
            >
              Get Started
            </button>
          </motion.div>
        )}
      </nav>
      
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-10 md:py-16">
        <div className="flex flex-col lg:flex-row items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 mb-12 lg:mb-0 text-center lg:text-left"
          >
            <motion.h1 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              Premium Banking <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                Without Limits
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg mx-auto lg:mx-0"
            >
              Experience banking without boundaries with Sever Bank's exclusive Platinum Card. 
              No annual fees, cashback rewards, and premium benefits.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4"
            >
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 rounded-full font-medium shadow-lg shadow-blue-500/30"
              >
                Apply Now
              </motion.button>
              
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border border-white/30 px-6 py-3 rounded-full font-medium hover:bg-white/10 transition-colors"
              >
                Compare Cards
              </motion.button>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
            className="lg:w-1/2"
          >
            <Card3D />
          </motion.div>
        </div>
      </div>
      
      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-16"
        >
          Premium <span className="text-purple-400">Features</span>
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { 
              icon: "💳", 
              title: "No Annual Fees", 
              desc: "Enjoy premium benefits without any yearly charges" 
            },
            { 
              icon: "💰", 
              title: "Cashback Rewards", 
              desc: "Up to 5% cashback on all your purchases" 
            },
            { 
              icon: "🌎", 
              title: "Worldwide Access", 
              desc: "Use your card anywhere with no foreign fees" 
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-panel p-6 rounded-2xl"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-300">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Footer */}
      <footer className="py-12 border-t border-white/10 mt-16">
        <div className="container mx-auto px-4 text-center">
          <div className="text-2xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              SEVER BANK
            </span>
          </div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Premium banking solutions for modern life. Secure, fast, and convenient services tailored for you.
          </p>
          <div className="mt-8 text-gray-500">
            © {new Date().getFullYear()} Sever Bank. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;