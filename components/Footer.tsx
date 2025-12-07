import React from 'react';
import { Github, Twitter, BookOpen, Newspaper } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 border-t border-stone-800 pt-16 pb-8 text-stone-400">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
          加入 <span className="text-orange-500">变革</span>
        </h2>
        <p className="mb-10 max-w-2xl mx-auto">
          OP_CAT 不仅仅是代码。它是唤醒 2 万亿美元休眠资本的关键。
          无需高深技术背景，只要传播声音，你就是在为比特币的未来添砖加瓦。
        </p>
        
        <div className="flex justify-center gap-6 mb-12">
          <a href="#" className="p-4 rounded-full bg-stone-800 hover:bg-orange-600 hover:text-white transition-all">
            <Twitter size={24} />
          </a>
           <a href="https://github.com/sCrypt-Inc/awesome-op-cat" target="_blank" rel="noreferrer" className="p-4 rounded-full bg-stone-800 hover:bg-white hover:text-black transition-all">
            <Github size={24} />
          </a>
           <a href="https://docsend.com/view/y6tigcddbkcd3us9" target="_blank" rel="noreferrer" className="p-4 rounded-full bg-stone-800 hover:bg-blue-500 hover:text-white transition-all">
            <BookOpen size={24} />
          </a>
          <a href="https://www.theblockbeats.info/news/55688" target="_blank" rel="noreferrer" className="p-4 rounded-full bg-stone-800 hover:bg-red-500 hover:text-white transition-all" title="BlockBeats Report">
            <Newspaper size={24} />
          </a>
        </div>

        <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-stone-500">
          <p>© 2025 OP_CAT Labs. 保留所有权利。</p>
          <div className="flex gap-4 mt-4 md:mt-0">
             <span>Built for Bitcoin</span>
             <span>•</span>
             <span>Powered by sCrypt</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;