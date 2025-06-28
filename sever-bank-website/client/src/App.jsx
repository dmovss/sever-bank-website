// src/App.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Card3D from './components/Card3D';
import Particles from './components/Particles';
import Navbar from './components/Navbar';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  const [activeFeature, setActiveFeature] = useState(0);
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0c1120] to-[#1a243d] text-white overflow-x-hidden">
      <Particles />
      
      <div className="container mx-auto px-4">
        <Navbar />
        
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row items-center py-16 lg:py-24">
          <div className="lg:w-1/2 mb-16 lg:mb-0">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Premium Banking <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                Without Limits
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl text-gray-300 mb-8 max-w-lg"
            >
              Experience banking without boundaries with Sever Bank's exclusive Platinum Card.
            </motion.p>
            
            <div className="flex flex-wrap gap-4">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 rounded-full font-medium"
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
            </div>
          </div>
          
          <div className="lg:w-1/2 flex justify-center">
            <Card3D />
          </div>
        </div>
        
        {/* Features Section */}
        <Features activeFeature={activeFeature} setActiveFeature={setActiveFeature} />
      </div>
      
      <Footer />
    </div>
  );
}

export default App;