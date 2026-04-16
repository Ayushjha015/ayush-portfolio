import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, Loader2, Bot, User } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const SYSTEM_INSTRUCTION = `You are an AI assistant for Ayush Jha's portfolio website. Your job is to answer questions about Ayush, his experience, projects, and skills. Be concise, friendly, and helpful. Use the following context:
Name: Ayush Jha
Role: Python Developer & AI Builder
Location: Gandhinagar/Ahmedabad, India
Contact: ayushjha246810@gmail.com, 7383507937
Experience: Python Developer at Webelight Solutions (Jan 2025 - Present), Freelance Full Stack Developer (Aug 2024 - Dec 2024).
Education: B.Tech CE from Silver Oak University (2021-2025).
Skills: Python, FastAPI, React, PostgreSQL, AI Agents, Docker, AWS S3, etc.
Projects: Parikshan AI, AiCollab, AiFitnessTrainer, Instagram AgenticAi, Siyu Gallery.
Do not make up information. If you don't know, say you don't know and suggest contacting Ayush directly.`;

type Message = {
  role: 'user' | 'model';
  text: string;
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: "Hi! I'm Ayush's AI assistant. Ask me anything about his experience, skills, or projects!" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatRef = useRef<any>(null);

  useEffect(() => {
    if (!chatRef.current) {
      chatRef.current = ai.chats.create({
        model: 'gemini-3-flash-preview',
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
          temperature: 0.7,
        }
      });
    }
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading || !chatRef.current) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const response = await chatRef.current.sendMessage({ message: userMessage });
      setMessages(prev => [...prev, { role: 'model', text: response.text || "I'm sorry, I couldn't generate a response." }]);
    } catch (error) {
      console.error("Chatbot error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "Oops! Something went wrong. Please check if the API key is configured correctly." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full bg-primary text-background shadow-lg shadow-primary/20 flex items-center justify-center ${isOpen ? 'hidden' : 'flex'}`}
      >
        <MessageSquare size={24} />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-6 right-6 z-50 w-[350px] sm:w-[400px] h-[500px] max-h-[80vh] glass-card flex flex-col overflow-hidden shadow-2xl border border-white/10"
          >
            {/* Header */}
            <div className="p-4 border-b border-white/10 bg-white/5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                  <Bot size={18} />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-white">Ayush's AI Assistant</h3>
                  <p className="text-xs text-primary opacity-80 font-mono">Online</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-black/20">
              {messages.map((msg, idx) => (
                <div 
                  key={idx} 
                  className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
                >
                  <div className={`w-8 h-8 shrink-0 rounded-full flex items-center justify-center ${msg.role === 'user' ? 'bg-secondary/20 text-secondary' : 'bg-primary/20 text-primary'}`}>
                    {msg.role === 'user' ? <User size={16} /> : <Bot size={16} />}
                  </div>
                  <div className={`max-w-[75%] p-3 rounded-2xl text-sm ${msg.role === 'user' ? 'bg-secondary text-white rounded-tr-none' : 'glass rounded-tl-none text-gray-200'}`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex gap-3 flex-row">
                  <div className="w-8 h-8 shrink-0 rounded-full bg-primary/20 text-primary flex items-center justify-center">
                    <Bot size={16} />
                  </div>
                  <div className="glass p-3 rounded-2xl rounded-tl-none flex items-center gap-2">
                    <Loader2 size={16} className="animate-spin text-primary" />
                    <span className="text-xs text-gray-400 font-mono">Typing...</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-white/10 bg-white/5">
              <form 
                onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                className="flex gap-2"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about Ayush..."
                  className="flex-1 bg-black/30 border border-white/10 rounded-full px-4 py-2 text-sm text-white focus:outline-none focus:border-primary/50 transition-colors"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="w-10 h-10 shrink-0 rounded-full bg-primary text-background flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed transition-transform hover:scale-105 active:scale-95"
                >
                  <Send size={16} className="ml-1" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
