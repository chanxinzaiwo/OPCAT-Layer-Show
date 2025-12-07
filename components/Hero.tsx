
import React from 'react';
import { ChevronDown, Zap, Lock, Box, Hammer, Bitcoin } from 'lucide-react';

interface HeroProps {
  scrollToSection: (id: string) => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 bg-black text-white">
      {/* Background Elements - Deep Black/Yellow Theme */}
      <div className="absolute top-0 left-0 w-full h-full z-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-stone-900 via-black to-black opacity-80"></div>
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

      {/* Animated Bitcoin Logo Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none opacity-10">
        <Bitcoin size={800} strokeWidth={0.3} className="text-yellow-500 animate-pulse duration-[3000ms]" />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        
        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-2 bg-yellow-500 text-black px-6 py-2 rounded-full text-sm font-black uppercase tracking-widest shadow-[0_0_20px_rgba(234,179,8,0.4)] animate-fade-in-up border border-yellow-400">
          The First OP_CAT Native Layer
        </div>
        
        {/* Main Headline */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 leading-none tracking-tighter text-white drop-shadow-2xl">
          MAKING <br />
          <span className="text-yellow-500">EVERYTHING</span> <br />
          POSSIBLE
        </h1>
        
        {/* Motto / Subheadline */}
        <div className="max-w-4xl mx-auto mb-12">
            <p className="text-xl md:text-2xl font-mono text-stone-300 bg-stone-900/50 backdrop-blur-sm p-6 rounded-xl border border-stone-800 inline-block">
                <span className="text-yellow-500 font-bold">"</span>
                We Don't Do Fancy Decks.<br className="md:hidden" /> We Build What Others <span className="text-white font-black bg-stone-800 px-2 rounded">CAN'T</span>.
                <span className="text-yellow-500 font-bold">"</span>
            </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
          <button 
            onClick={() => scrollToSection('architecture')}
            className="px-8 py-4 bg-yellow-500 hover:bg-yellow-400 text-black font-black text-lg rounded-none skew-x-[-10deg] transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(234,179,8,0.3)] flex items-center gap-3 border-2 border-yellow-500"
          >
            <div className="skew-x-[10deg] flex items-center gap-2">
              <Hammer size={24} strokeWidth={3} />
              BUILD ON BITCOIN
            </div>
          </button>
          <button 
            onClick={() => scrollToSection('why')}
            className="px-8 py-4 bg-transparent border-2 border-stone-600 text-stone-300 font-bold text-lg rounded-none skew-x-[-10deg] transition-all hover:bg-stone-800 hover:text-white hover:border-white"
          >
            <div className="skew-x-[10deg]">
              WHY OP_CAT?
            </div>
          </button>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto text-left">
          <div className="bg-stone-900 p-8 rounded-none border-l-4 border-yellow-500 hover:bg-stone-800 transition-colors group">
            <div className="flex items-center gap-3 mb-3">
                <Lock className="w-6 h-6 text-yellow-500" />
                <h3 className="font-black text-xl text-white uppercase italic">Trustless Bridge</h3>
            </div>
            <p className="text-stone-400 font-mono text-sm">
                SPV-proof verified. 100% Asset Control. <br/>No multi-sig federations.
            </p>
          </div>
          
          <div className="bg-stone-900 p-8 rounded-none border-l-4 border-yellow-500 hover:bg-stone-800 transition-colors group">
            <div className="flex items-center gap-3 mb-3">
                <Box className="w-6 h-6 text-yellow-500" />
                <h3 className="font-black text-xl text-white uppercase italic">Turing Complete</h3>
            </div>
            <p className="text-stone-400 font-mono text-sm">
                Stateful smart contracts on L1. <br/>AMM, Lending, GameFi, SocialFi.
            </p>
          </div>

          <div className="bg-stone-900 p-8 rounded-none border-l-4 border-yellow-500 hover:bg-stone-800 transition-colors group">
            <div className="flex items-center gap-3 mb-3">
                <Zap className="w-6 h-6 text-yellow-500" />
                <h3 className="font-black text-xl text-white uppercase italic">High Performance</h3>
            </div>
            <p className="text-stone-400 font-mono text-sm">
                UTXO-based parallel execution. <br/>Scalability without leaving Bitcoin.
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer opacity-50 hover:opacity-100 transition-opacity" onClick={() => scrollToSection('problem')}>
        <ChevronDown className="w-10 h-10 text-yellow-500" />
      </div>
    </section>
  );
};

export default Hero;
