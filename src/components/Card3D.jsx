import React, { useState } from 'react';

export default function Card3D() {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="flex justify-center items-center h-[300px] md:h-[400px]">
      <div 
        className="relative w-[300px] h-[190px] md:w-[340px] md:h-[214px] perspective-1000 cursor-pointer"
        onClick={() => setFlipped(!flipped)}
      >
        <div className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${flipped ? 'rotate-y-180' : ''}`}>
          {/* Card Front */}
          <div className="absolute w-full h-full backface-hidden bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl p-6 shadow-xl border border-white/20">
            <div className="flex justify-between items-start mb-8">
              <div className="text-2xl font-bold">Sever Bank</div>
              <div className="text-3xl">💳</div>
            </div>
            
            <div className="text-xl font-mono mb-4">**** **** **** 1234</div>
            
            <div className="flex justify-between">
              <div>
                <div className="text-xs text-white/70">Card Holder</div>
                <div>John Doe</div>
              </div>
              <div>
                <div className="text-xs text-white/70">Expires</div>
                <div>12/28</div>
              </div>
            </div>
          </div>
          
          {/* Card Back */}
          <div className="absolute w-full h-full backface-hidden bg-gradient-to-br from-purple-700 to-blue-600 rounded-2xl shadow-xl rotate-y-180 border border-white/20">
            <div className="h-12 bg-black/30 mt-8 mb-6"></div>
            <div className="px-6">
              <div className="h-8 bg-white/80 rounded flex items-center justify-end pr-2">
                <div className="text-black font-bold text-sm">123</div>
              </div>
              <div className="mt-4 text-sm text-center text-white/80">
                Customer Service: 1-800-SEVER-BANK
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl rounded-full -z-10"></div>
      </div>
    </div>
  );
}