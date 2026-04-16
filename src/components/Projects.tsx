import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const projects = [
  {
    id: 1,
    title: 'Parikshan AI',
    tagline: 'AI-powered examination platform for schools',
    description: 'A full-featured academic platform where teachers create AI-generated exams, students attempt them in a clean interface, and detailed performance analytics are delivered to students, teachers, and parents — all in one place.',
    type: 'Freelance',
    tech: ['React.js', 'FastAPI', 'Python', 'PostgreSQL', 'AI/LLM'],
    liveLink: 'https://proud-cliff-050bc3600.7.azurestaticapps.net/',
    github: '#',
    badge: 'Freelance',
    badgeClass: 'bg-primary/10 text-primary border border-primary',
    featured: true,
  },
  {
    id: 2,
    title: 'Siyu Gallery',
    tagline: 'A private encrypted gallery for your most personal memories',
    description: 'A secure shared gallery app where couples or close friends can store photos and videos in encrypted private rooms. Members are invited, content is password-protected, and everything is stored safely end-to-end.',
    type: 'Personal',
    tech: ['React.js', 'FastAPI', 'PostgreSQL', 'Encryption'],
    liveLink: 'https://siyu-gallery.vercel.app/login',
    github: '#',
    badge: 'Personal',
    badgeClass: 'bg-primary/10 text-primary border border-primary',
    featured: false,
  },
  {
    id: 3,
    title: 'Insta-Agentic',
    tagline: 'An AI agent that fully manages your Instagram account',
    description: 'An autonomous AI agent that takes over Instagram management — posting content, sharing stories, handling DMs with AI-powered responses, and managing interactions without manual intervention.',
    type: 'AI Agents',
    tech: ['Python', 'AI Agents', 'LLM', 'Instagram API'],
    liveLink: '#',
    github: '#',
    badge: 'AI Agent',
    badgeClass: 'bg-secondary/10 text-secondary border border-secondary',
    featured: false,
  },
  {
    id: 4,
    title: 'AiFitnessTrainer',
    tagline: 'Your personalized AI-powered fitness coach',
    description: 'An AI fitness trainer that generates personalized workout plans, tracks nutrition, and gives AI-driven insights into the user\'s progress over time.',
    type: 'Academic',
    tech: ['Python', 'FastAPI', 'React.js', 'LLM'],
    liveLink: '#',
    github: '#',
    badge: 'Academic',
    badgeClass: 'bg-secondary/10 text-secondary border border-secondary',
    featured: false,
  },
];

const filters = ['All', 'Freelance', 'AI Agents', 'Personal', 'Academic'];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = projects.filter(
    (project) => activeFilter === 'All' || project.type === activeFilter
  );

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12"
        >
          <h2 className="section-title-line">
            Featured Projects
          </h2>
        </motion.div>

        {/* Filter Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-4 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={cn(
                "px-5 py-2 rounded-full font-mono text-sm transition-all duration-300",
                activeFilter === filter 
                  ? "bg-primary text-background font-bold" 
                  : "glass text-gray-400 hover:text-white hover:border-primary/50"
              )}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className={cn(
                  "project-card group flex flex-col h-full",
                  project.featured ? "md:col-span-2 md:flex-row gap-8" : ""
                )}
              >
                <div className={cn("flex flex-col flex-grow z-10", project.featured ? "md:w-1/2 justify-center" : "")}>
                  <div className="flex justify-between items-start mb-4">
                    <span className={cn("text-[0.65rem] px-2 py-1 rounded font-semibold uppercase tracking-wider", project.badgeClass)}>
                      {project.badge}
                    </span>
                    <div className="flex gap-3">
                      {project.github !== '#' && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                          <Github size={20} />
                        </a>
                      )}
                      {project.liveLink !== '#' && (
                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                          <ExternalLink size={20} />
                        </a>
                      )}
                    </div>
                  </div>
                  
                  <h3 className="text-[1.1rem] font-bold mb-1.5 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-[0.8rem] opacity-70 leading-relaxed mb-3">
                    {project.description}
                  </p>
                  
                  <div className="mt-auto">
                    <p className="font-mono text-[0.7rem] text-primary opacity-80">
                      {project.tech.join(' • ')}
                    </p>
                  </div>
                </div>
                
                {project.featured && (
                  <div className="hidden md:block md:w-1/2 relative rounded-xl overflow-hidden glass border border-white/10 group-hover:border-primary/30 transition-colors">
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 mix-blend-overlay" />
                    <div className="w-full h-full min-h-[250px] flex items-center justify-center bg-[#111]">
                      <span className="font-mono text-primary/50 text-6xl opacity-20">{'{ }'}</span>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
