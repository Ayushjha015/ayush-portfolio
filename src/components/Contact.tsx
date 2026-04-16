import { useState, type FormEvent } from 'react';
import { motion } from 'motion/react';
import { Mail, Linkedin, FileText, Send, Loader2 } from 'lucide-react';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const resumeLink = import.meta.env.VITE_RESUME_LINK || "https://drive.google.com/file/d/1cHv44r718YMun-C7CXSRQwnusN6hMW7r/view?usp=sharing";

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate API call
      setSubmitStatus('success');
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <h2 className="section-title-line">
            Connect
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="contact-card-bg p-8 flex flex-col gap-4"
          >
            <h3 className="text-3xl font-heading font-bold text-white mb-2">
              Let's build something <span className="text-primary">together.</span>
            </h3>
            <p className="text-[#e0e0e0] opacity-80 font-sans text-base mb-6 leading-relaxed">
              Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
            </p>

            <div className="space-y-4">
              <a href="mailto:ayushjha246810@gmail.com" className="flex items-center gap-3 text-[#e0e0e0] hover:text-primary transition-colors group">
                <Mail size={18} className="text-primary" />
                <span className="font-mono text-[0.85rem] text-primary">ayushjha246810@gmail.com</span>
              </a>
              
              <a href="https://linkedin.com/in/ayush-jha-a85b18214" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[#e0e0e0] hover:text-primary transition-colors group">
                <Linkedin size={18} className="text-primary" />
                <span className="font-mono text-[0.85rem]">linkedin.com/in/ayush-jha</span>
              </a>

              <a href={resumeLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[#e0e0e0] hover:text-primary transition-colors group">
                <FileText size={18} className="text-primary" />
                <span className="font-mono text-[0.85rem]">View Resume</span>
              </a>
            </div>
            
            <div className="mt-auto pt-8">
              <div className="text-[0.8rem] opacity-60">Sector 3B, Gandhinagar, 382006</div>
              <div className="text-[0.8rem] opacity-60 mt-1">7383507937</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 space-y-6">
              <div>
                <label htmlFor="name" className="block text-[0.8rem] uppercase tracking-[1px] opacity-60 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="user_name"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors font-sans"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-[0.8rem] uppercase tracking-[1px] opacity-60 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="user_email"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors font-sans"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-[0.8rem] uppercase tracking-[1px] opacity-60 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors font-sans resize-none"
                  placeholder="Hello Ayush..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {isSubmitting ? (
                  <Loader2 size={20} className="animate-spin" />
                ) : (
                  <>
                    Send Message
                    <Send size={18} />
                  </>
                )}
              </button>

              {submitStatus === 'success' && (
                <p className="text-green-400 text-sm font-mono text-center">Message sent successfully!</p>
              )}
              {submitStatus === 'error' && (
                <p className="text-red-400 text-sm font-mono text-center">Failed to send message. Please try again.</p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
