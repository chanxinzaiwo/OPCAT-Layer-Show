import React from 'react';
import { CheckCircle2, XCircle, AlertTriangle, ArrowRight } from 'lucide-react';

const WhyItWins: React.FC = () => {
  return (
    <section id="why" className="py-24 bg-black text-white border-t border-stone-800">
      <div className="container mx-auto px-6">
        
        {/* SECTION 1: THE TRILLION DOLLAR PROBLEM */}
        <div className="mb-32">
            <div className="text-center mb-20">
                <h2 className="text-4xl md:text-7xl font-black text-white mb-8 uppercase leading-tight">
                    比特币流动性 <br/>
                    <span className="text-yellow-500">万亿级难题</span>
                </h2>
                <p className="text-xl text-stone-400 max-w-3xl mx-auto font-mono">
                    最大的 Web3 资产。却被困在流动性与扩展性的牢笼中。
                </p>
            </div>

            <div className="flex flex-col lg:flex-row items-center justify-center gap-16 max-w-7xl mx-auto">
                {/* Visualizing the Scale - The Big Orange Ball */}
                <div className="relative w-full max-w-[600px] aspect-square flex items-center justify-center">
                    {/* The 2T Bubble */}
                    <div className="w-full h-full bg-orange-500 rounded-full flex flex-col items-center justify-center shadow-[0_0_100px_rgba(249,115,22,0.4)] relative z-10 animate-pulse-slow">
                        <span className="text-7xl md:text-9xl font-black text-black tracking-tighter">$2T</span>
                        <span className="text-xl md:text-3xl font-bold text-black/80 mt-2 uppercase">BTC 总供应量</span>
                    </div>

                    {/* The 12B Dot */}
                    <div className="absolute bottom-[10%] right-[10%] z-20 flex flex-col items-center">
                        <div className="relative">
                            <div className="w-6 h-6 bg-white rounded-full border-4 border-black relative z-10"></div>
                            <div className="w-6 h-6 bg-white rounded-full absolute top-0 left-0 animate-ping opacity-75"></div>
                        </div>
                        <div className="absolute top-8 left-1/2 -translate-x-1/2 w-48 text-center">
                            <div className="bg-white text-black text-xs font-bold px-2 py-1 rounded mb-1 inline-block">$12B</div>
                            <div className="text-xs font-bold text-white uppercase tracking-wider">现有“链上”方案</div>
                        </div>
                        {/* Connecting Line visual */}
                        <div className="absolute h-px w-24 bg-white/50 -right-24 top-3 hidden md:block"></div>
                    </div>
                </div>

                <div className="lg:w-1/3 text-left space-y-10">
                    <div className="bg-stone-900/50 p-6 border-l-4 border-orange-500">
                        <h3 className="text-2xl font-black text-white mb-2 uppercase">沉睡的巨人</h3>
                        <p className="text-stone-400 font-mono text-sm">
                            比特币是加密世界最大的流动性资产，但 99% 处于休眠状态。
                        </p>
                    </div>
                    <div className="bg-stone-900/50 p-6 border-l-4 border-yellow-500">
                        <h3 className="text-2xl font-black text-white mb-2 uppercase">失败的尝试</h3>
                        <p className="text-stone-400 font-mono text-sm">
                            现有的扩容方案仅捕获了不到 <span className="text-yellow-500 font-bold">1%</span> 的价值。巨大的缺口意味着巨大的机会。
                        </p>
                    </div>
                    <div className="bg-stone-900/50 p-6 border-l-4 border-white">
                        <h3 className="text-2xl font-black text-white mb-2 uppercase">终极目标</h3>
                        <p className="text-stone-400 font-mono text-sm">
                            <span className="text-white font-bold underline">完全释放</span> 比特币的万亿流动性潜力。
                        </p>
                    </div>
                </div>
            </div>
        </div>

        {/* SECTION 2: NO PERFECT SOLUTIONS YET (Comparison Matrix) */}
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-6xl font-black text-white uppercase">
                    没有完美的解决方案...直到现在
                </h2>
                <div className="h-1 w-24 bg-yellow-500 mx-auto mt-6"></div>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
                
                {/* 1. OFFCHAIN */}
                <div className="bg-stone-900 border border-stone-800 p-8 relative group hover:border-stone-700 transition-colors">
                    <div className="absolute top-0 right-0 p-4 opacity-50">
                        <div className="flex gap-2">
                            <span className="bg-stone-800 px-2 py-1 text-[10px] font-bold uppercase rounded text-stone-500">ETF</span>
                            <span className="bg-stone-800 px-2 py-1 text-[10px] font-bold uppercase rounded text-stone-500">CEX</span>
                        </div>
                    </div>
                    <h3 className="text-2xl font-black text-stone-500 mb-8 uppercase">链下方案</h3>
                    
                    <ul className="space-y-6">
                        <li className="flex gap-4">
                            <XCircle className="text-red-600 shrink-0 w-6 h-6" />
                            <div>
                                <strong className="block text-white font-bold uppercase text-sm mb-1">无区块链特性</strong>
                                <p className="text-stone-500 text-xs leading-relaxed">完全脱离链上。没有链级的透明度或可扩展性。</p>
                            </div>
                        </li>
                        <li className="flex gap-4">
                            <XCircle className="text-red-600 shrink-0 w-6 h-6" />
                            <div>
                                <strong className="block text-white font-bold uppercase text-sm mb-1">资产不受控</strong>
                                <p className="text-stone-500 text-xs leading-relaxed">完全中心化托管。用户资产由第三方控制。</p>
                            </div>
                        </li>
                    </ul>
                </div>

                {/* 2. ONCHAIN (Current) */}
                <div className="bg-stone-900 border border-stone-800 p-8 relative group hover:border-stone-700 transition-colors">
                    <div className="absolute top-0 right-0 p-4 opacity-50">
                        <div className="flex gap-2">
                            <span className="bg-stone-800 px-2 py-1 text-[10px] font-bold uppercase rounded text-stone-500">Rollups</span>
                            <span className="bg-stone-800 px-2 py-1 text-[10px] font-bold uppercase rounded text-stone-500">Sidechains</span>
                        </div>
                    </div>
                    <h3 className="text-2xl font-black text-stone-500 mb-8 uppercase">现有“链上”方案</h3>
                    
                    <ul className="space-y-6">
                        <li className="flex gap-4">
                            <AlertTriangle className="text-yellow-600 shrink-0 w-6 h-6" />
                            <div>
                                <strong className="block text-white font-bold uppercase text-sm mb-1">缺乏去中心化</strong>
                                <p className="text-stone-500 text-xs leading-relaxed">大多由中心化实体或多签控制。引入了托管风险。</p>
                            </div>
                        </li>
                        <li className="flex gap-4">
                            <AlertTriangle className="text-yellow-600 shrink-0 w-6 h-6" />
                            <div>
                                <strong className="block text-white font-bold uppercase text-sm mb-1">非比特币原生</strong>
                                <p className="text-stone-500 text-xs leading-relaxed">使用账户模型。BTC 是被跨链封装的，而非原生使用。</p>
                            </div>
                        </li>
                    </ul>
                </div>

                {/* 3. OP_CAT LAYER (Winner) */}
                <div className="bg-stone-900 border-2 border-yellow-500 p-8 relative transform lg:scale-105 shadow-[0_0_40px_rgba(234,179,8,0.1)] z-10">
                    <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-yellow-500 text-black px-6 py-2 text-xs font-black uppercase tracking-widest shadow-lg">
                        Game Changer
                    </div>
                    <h3 className="text-3xl font-black text-white mb-8 uppercase italic">OP_CAT Layer</h3>
                    
                    <ul className="space-y-6">
                        <li className="flex gap-4">
                            <CheckCircle2 className="text-green-500 shrink-0 w-6 h-6" />
                            <div>
                                <strong className="block text-white font-bold uppercase text-sm mb-1">100% 信任最小化桥</strong>
                                <p className="text-stone-400 text-xs leading-relaxed">OP_CAT Peg。通过 SPV 直接验证脚本。无托管商。</p>
                            </div>
                        </li>
                        <li className="flex gap-4">
                            <CheckCircle2 className="text-green-500 shrink-0 w-6 h-6" />
                            <div>
                                <strong className="block text-white font-bold uppercase text-sm mb-1">比特币原生</strong>
                                <p className="text-stone-400 text-xs leading-relaxed">基于 UTXO。使用 BTC 作为 Gas。继承比特币 PoW 安全性。</p>
                            </div>
                        </li>
                        <li className="flex gap-4">
                            <CheckCircle2 className="text-green-500 shrink-0 w-6 h-6" />
                            <div>
                                <strong className="block text-white font-bold uppercase text-sm mb-1">高性能</strong>
                                <p className="text-stone-400 text-xs leading-relaxed">并行执行。图灵完备智能合约。</p>
                            </div>
                        </li>
                    </ul>
                </div>

            </div>
        </div>

      </div>
    </section>
  );
};

export default WhyItWins;