import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <nav className="py-6 flex justify-between items-center">
      <div className="text-2xl font-bold">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          SEVER BANK
        </span>
      </div>
      
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
      
      <button className="md:hidden">
        <div className="w-6 h-0.5 bg-white mb-1.5"></div>
        <div className="w-6 h-0.5 bg-white mb-1.5"></div>
        <div className="w-6 h-0.5 bg-white"></div>
      </button>
    </nav>
  );
}