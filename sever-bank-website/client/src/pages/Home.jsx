import { motion } from 'framer-motion';
import Card3D from '../components/Card3D';
import ParticleBackground from '../components/Particles';
import GlassPanel from '../components/GlassPanel';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white">
      <ParticleBackground />
      
      <header className="container mx-auto py-8 px-4">
        <div className="flex justify-between items-center">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-3xl font-bold">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              SEVER BANK
            </span>
          </motion.div>
          <nav>
            <ul className="flex space-x-8">
              {['Products', 'Features', 'Pricing', 'Contact'].map((item) => (
                <motion.li 
                  key={item}
                  whileHover={{ scale: 1.05 }}
                  className="cursor-pointer hover:text-blue-300 transition-colors"
                >
                  {item}
                </motion.li>
              ))}
              <motion.button 
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-2 rounded-full"
              >
                Get Started
              </motion.button>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto py-16 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
            >
              The Future of <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                Banking is Here
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-300 mb-8 max-w-lg"
            >
              Experience the ultimate convenience with Sever Bank's Platinum Card.
              No annual fees, cashback, and premium benefits.
            </motion.p>
            
            <div className="flex flex-wrap gap-4">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 rounded-full text-lg font-bold"
              >
                Apply Now
              </motion.button>
              
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-white/30 px-8 py-4 rounded-full text-lg font-bold hover:bg-white/10 transition-colors"
              >
                Learn More
              </motion.button>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl rounded-full w-full h-full"></div>
            <Card3D />
          </div>
        </div>
        
        <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8">
          <GlassPanel>
            <div className="text-4xl mb-4">💳</div>
            <h3 className="text-2xl font-bold mb-3">No Annual Fees</h3>
            <p className="text-gray-300">Enjoy premium benefits without any yearly charges</p>
          </GlassPanel>
          
          <GlassPanel>
            <div className="text-4xl mb-4">💰</div>
            <h3 className="text-2xl font-bold mb-3">Cashback Rewards</h3>
            <p className="text-gray-300">Up to 5% cashback on all your purchases</p>
          </GlassPanel>
          
          <GlassPanel>
            <div className="text-4xl mb-4">🌎</div>
            <h3 className="text-2xl font-bold mb-3">Worldwide Access</h3>
            <p className="text-gray-300">Use your card anywhere with no foreign fees</p>
          </GlassPanel>
        </div>
      </main>
    </div>
  );
}