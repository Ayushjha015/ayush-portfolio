import { Linkedin, Github, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-8 border-t border-white/10 bg-background relative z-10">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-center md:text-left">
          <p className="font-mono text-[0.8rem] text-[#e0e0e0] opacity-80">
            Designed & Built by <span className="text-primary font-bold">Ayush Jha</span>
          </p>
          <p className="font-mono text-[0.7rem] text-[#e0e0e0] opacity-50 mt-1">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
        
        <div className="flex items-center gap-4">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-[#e0e0e0] opacity-70 hover:opacity-100 hover:text-primary transition-colors">
            <Github size={18} />
          </a>
          <a href="https://linkedin.com/in/ayush-jha-a85b18214" target="_blank" rel="noopener noreferrer" className="text-[#e0e0e0] opacity-70 hover:opacity-100 hover:text-primary transition-colors">
            <Linkedin size={18} />
          </a>
          <a href="mailto:ayushjha246810@gmail.com" className="text-[#e0e0e0] opacity-70 hover:opacity-100 hover:text-primary transition-colors">
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
