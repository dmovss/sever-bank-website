import React from 'react';
import Card3D from './components/Card3D';
import Particles from './components/Particles';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0c1120] to-[#1a243d] text-white overflow-x-hidden">
      <Particles />
      <Navbar />
      
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-16 lg:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Premium Banking <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                Without Limits
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-lg">
              Experience banking without boundaries with Sever Bank's exclusive Platinum Card.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 rounded-full font-medium">
                Apply Now
              </button>
              
              <button className="bg-transparent border border-white/30 px-6 py-3 rounded-full font-medium hover:bg-white/10 transition-colors">
                Compare Cards
              </button>
            </div>
          </div>
          
          <div className="lg:w-1/2 flex justify-center">
            <Card3D />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;