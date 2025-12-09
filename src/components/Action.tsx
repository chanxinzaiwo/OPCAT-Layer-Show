import React from 'react';
import { FileText, Code } from 'lucide-react';

const Action: React.FC = () => {
  return (
    <section className="py-20 bg-orange-600 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-4xl font-bold mb-6">您的使命：成为布道者</h2>
            <p className="text-xl mb-10 opacity-90 leading-relaxed">
                不需要你会写代码。只要我们声音足够大，代码就会被合并。<br/>
                这是比特币历史上最重要的软分叉之一。
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a href="https://www.theblockbeats.info/news/55688" target="_blank" rel="noreferrer" className="bg-white text-orange-600 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-stone-100 transition-colors flex items-center justify-center gap-2">
                    <FileText size={20} /> 深度解读 (BlockBeats)
                </a>
                <a href="https://docs.opcatlabs.io" target="_blank" rel="noreferrer" className="border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
                    <Code size={20} /> 我是开发者
                </a>
            </div>
        </div>
    </section>
  );
};

export default Action;