import { motion } from 'motion/react';
import { Typewriter } from 'react-simple-typewriter';
import { ArrowRight, ChevronDown } from 'lucide-react';
import Particles from './Particles';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <Particles />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 max-w-4xl glass-card p-8 md:p-12 relative overflow-hidden">
            <div className="absolute -top-12 -left-12 w-36 h-36 bg-[radial-gradient(circle,var(--color-primary)_0%,transparent_70%)] opacity-15 pointer-events-none" />
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-8xl font-sans font-extrabold text-white mb-4 leading-none"
            >
              Ayush<br/>Jha
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-[0.95rem] font-mono text-primary h-6 mb-6"
            >
              <Typewriter
                words={[
                  '> build_ai_agents(autonomous=True)',
                  '> create_rest_apis(fast=True)',
                  '> develop_full_stack(scalable=True)',
                  '> deliver_client_tools(loved=True)'
                ]}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-base text-[#e0e0e0] opacity-80 max-w-2xl mb-10 font-sans leading-relaxed"
            >
              Full Stack Developer & AI Builder — turning complex ideas into clean, scalable products.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#contact"
                className="btn-primary flex items-center gap-2 group"
              >
                Hire Me
              </a>
              
              <a
                href="#projects"
                className="btn-secondary flex items-center gap-2"
              >
                View Work
              </a>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="hidden lg:block lg:col-span-5 glass-card p-6 relative overflow-hidden h-fit"
          >
            <div className="flex gap-2 mb-4 border-b border-white/10 pb-4">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
              <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
            </div>
            <pre className="font-mono text-[0.85rem] leading-relaxed overflow-x-auto text-[#e0e0e0]">
              <code>
                <span className="text-secondary">class</span> <span className="text-primary">AyushJha</span>:<br/>
                {'    '}<span className="text-secondary">def</span> <span className="text-primary">__init__</span>(self):<br/>
                {'        '}self.role = <span className="text-green-400">"Full Stack & AI Builder"</span><br/>
                {'        '}self.location = <span className="text-green-400">"Ahmedabad, IN"</span><br/>
                <br/>
                {'    '}<span className="text-secondary">def</span> <span className="text-primary">get_skills</span>(self):<br/>
                {'        '}<span className="text-secondary">return</span> [<br/>
                {'            '}<span className="text-green-400">"Python"</span>, <span className="text-green-400">"FastAPI"</span>, <br/>
                {'            '}<span className="text-green-400">"React.js"</span>, <span className="text-green-400">"AI Agents"</span><br/>
                {'        '}]<br/>
                <br/>
                {'    '}<span className="text-secondary">def</span> <span className="text-primary">build_product</span>(self, idea):<br/>
                {'        '}<span className="text-secondary">if</span> idea.is_awesome():<br/>
                {'            '}<span className="text-secondary">return</span> self.execute(idea)<br/>
                {'        '}<span className="text-secondary">return</span> <span className="text-green-400">"Let's brainstorm!"</span><br/>
                <br/>
                <span className="text-gray-500"># Initialize developer</span><br/>
                dev = AyushJha()<br/>
                dev.build_product(your_idea)
              </code>
            </pre>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500"
      >
        <span className="font-mono text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}
