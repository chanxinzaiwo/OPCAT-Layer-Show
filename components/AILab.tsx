import React, { useState } from 'react';
import { GoogleGenAI } from '@google/genai';
import { Send, Sparkles, User, Bot } from 'lucide-react';
import { marked } from 'marked';

const AILab: React.FC = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{role: 'user' | 'model', text: string}[]>([
    { role: 'model', text: '欢迎来到 OP_CAT 实验室。我是中本聪的 AI 化身。在 2010 年，我亲手禁用了这个操作码... 你想知道为什么吗？或者想聊聊它的重生？' }
  ]);
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;
    
    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const model = 'gemini-2.5-flash';
      
      const systemInstruction = `You are Satoshi Nakamoto, the creator of Bitcoin. Speak in a mysterious, knowledgeable, yet accessible tone (in Chinese). You originally disabled OP_CAT in 2010 due to concerns about memory usage (stack explosion). However, you now see that BIP-347's 520-byte limit solves this issue safely. Explain concepts simply. If asked about OP_CAT, defend its utility for covenants and L2s. Keep responses concise (under 100 words).`;

      const response = await ai.models.generateContent({
        model: model,
        contents: [
            ...messages.map(m => ({ role: m.role, parts: [{ text: m.text }] })),
            { role: 'user', parts: [{ text: userMsg }] }
        ],
        config: { systemInstruction }
      });

      const text = response.text || "连接中断...";
      setMessages(prev => [...prev, { role: 'model', text }]);
    } catch (e) {
      setMessages(prev => [...prev, { role: 'model', text: "系统繁忙，请稍后再试。" }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="ai-lab" className="py-20 bg-purple-50">
        <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-10">
                <div className="inline-block bg-purple-100 text-purple-800 px-4 py-1 rounded-full text-xs font-bold mb-4 uppercase tracking-widest border border-purple-200 flex items-center justify-center gap-2">
                    <Sparkles size={14} /> Powered by Gemini 2.5
                </div>
                <h2 className="text-3xl font-bold mb-4 text-stone-900">OP_CAT 智能实验室</h2>
                <p className="text-stone-600">
                    无论你是想了解历史，还是想构想未来的智能合约，AI 助手随时待命。
                </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl border border-purple-100 overflow-hidden flex flex-col h-[500px]">
                <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-stone-50">
                    {messages.map((msg, idx) => (
                        <div key={idx} className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                            {msg.role === 'model' && (
                                <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-white shrink-0">
                                    <Bot size={16} />
                                </div>
                            )}
                            <div className={`max-w-[80%] rounded-2xl p-4 text-sm leading-relaxed shadow-sm ${
                                msg.role === 'user' 
                                    ? 'bg-orange-100 text-orange-900 rounded-tr-none border border-orange-200' 
                                    : 'bg-white text-stone-800 rounded-tl-none border border-stone-200'
                            }`}>
                                <div dangerouslySetInnerHTML={{ __html: marked.parse(msg.text) }} />
                            </div>
                            {msg.role === 'user' && (
                                <div className="w-8 h-8 rounded-full bg-stone-200 flex items-center justify-center text-stone-500 shrink-0">
                                    <User size={16} />
                                </div>
                            )}
                        </div>
                    ))}
                    {loading && (
                        <div className="flex gap-3">
                             <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-white shrink-0">
                                <Bot size={16} />
                            </div>
                            <div className="bg-white rounded-2xl p-4 border border-stone-200 flex gap-1 items-center">
                                <div className="w-2 h-2 bg-stone-400 rounded-full animate-bounce"></div>
                                <div className="w-2 h-2 bg-stone-400 rounded-full animate-bounce delay-75"></div>
                                <div className="w-2 h-2 bg-stone-400 rounded-full animate-bounce delay-150"></div>
                            </div>
                        </div>
                    )}
                </div>

                <div className="p-4 bg-white border-t border-stone-200">
                    <div className="flex gap-2">
                        <input 
                            type="text" 
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                            placeholder="输入你的问题，例如：为什么当年OP_CAT会有风险？" 
                            className="flex-1 border border-stone-300 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500 transition-colors text-stone-900"
                        />
                        <button 
                            onClick={handleSend}
                            disabled={loading}
                            className="bg-purple-600 hover:bg-purple-700 text-white px-6 rounded-lg font-bold transition-all shadow-md disabled:opacity-50 flex items-center justify-center"
                        >
                            <Send size={20} />
                        </button>
                    </div>
                    <div className="flex gap-2 mt-3 overflow-x-auto pb-1 no-scrollbar">
                        {['🤔 为什么当年删除它？', '🛡️ 520字节限制安全吗？', '⚔️ 对比以太坊'].map(q => (
                            <button 
                                key={q}
                                onClick={() => { setInput(q.replace(/^[^\s]+\s/, '')); }}
                                className="text-xs bg-stone-100 hover:bg-purple-100 text-stone-600 hover:text-purple-700 px-3 py-1.5 rounded-full border border-stone-200 transition-colors whitespace-nowrap"
                            >
                                {q}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default AILab;