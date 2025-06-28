import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <div className="bg-gradient-to-r from-bankPrimary to-bankSecondary text-white">
      <div className="container mx-auto px-6 py-24 flex flex-col md:flex-row">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="md:w-1/2"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Banking Solutions for Modern Life
          </h1>
          <p className="text-xl mb-8">
            Secure, fast, and convenient banking services tailored for you
          </p>
          <div className="flex gap-4">
            <button className="bg-white text-bankPrimary px-8 py-3 rounded-full font-bold hover:bg-gray-100">
              Open Account
            </button>
            <button className="border-2 border-white px-8 py-3 rounded-full font-bold hover:bg-white/10">
              Learn More
            </button>
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="md:w-1/2 mt-10 md:mt-0"
        >
          {/* Replace with actual card image */}
          <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-80" />
        </motion.div>
      </div>
    </div>
  );
}