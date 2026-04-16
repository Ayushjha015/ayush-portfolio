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
    liveLink: import.meta.env.VITE_PROJECT_PARIKSHAN_LINK || 'https://proud-cliff-050bc3600.7.azurestaticapps.net/',
    github: import.meta.env.VITE_GITHUB_PARIKSHAN_LINK || '#',
    badge: 'Freelance',
    badgeClass: 'bg-primary/10 text-primary border border-primary',
    featured: true,
  },
  {
    id: 2,
    title: 'AiCollab',
    tagline: 'Collaborative AI platform with all AI tools integrated at one place',
    description: 'User can use multiple AI tools for free at one place with one master account.',
    type: 'Academic',
    tech: ['React.js', 'FastAPI', 'Python', 'AI/LLM'],
    liveLink: import.meta.env.VITE_PROJECT_AICOLLAB_LINK || '#',
    github: import.meta.env.VITE_GITHUB_AICOLLAB_LINK || '#',
    badge: 'Academic',
    badgeClass: 'bg-primary/10 text-primary border border-primary',
    featured: true,
  },
  {
    id: 3,
    title: 'AiFitnessTrainer',
    tagline: 'An AI powered fitness trainer for personalized fitness training',
    description: 'User can make AI powered personalized workout plans, track nutrition, get AI insights of their progress etc.',
    type: 'Academic',
    tech: ['Python', 'FastAPI', 'React.js', 'LLM'],
    liveLink: import.meta.env.VITE_PROJECT_AIFITNESS_LINK || '#',
    github: import.meta.env.VITE_GITHUB_AIFITNESS_LINK || '#',
    badge: 'Academic',
    badgeClass: 'bg-secondary/10 text-secondary border border-secondary',
    featured: false,
  },
  {
    id: 4,
    title: 'Instagram AgenticAi',
    tagline: 'An AI powered agent that controls instagram handles completely',
    description: 'It posts, shares stories, handles DM(s), manages interaction etc. of an instagram account and uses AI to chat over DM(s).',
    type: 'AI Agents',
    tech: ['Python', 'AI Agents', 'LLM', 'Instagram API'],
    liveLink: import.meta.env.VITE_PROJECT_INSTA_LINK || '#',
    github: import.meta.env.VITE_GITHUB_INSTA_LINK || '#',
    badge: 'Personal',
    badgeClass: 'bg-primary/10 text-primary border border-primary',
    featured: false,
  },
  {
    id: 5,
    title: 'Siyu Gallery',
    tagline: 'A personal secret gallery to store your secret and personal memories',
    description: 'It stores images in shared rooms where you can invite members, and members can share and store images and videos safely with a password in an encrypted and secure way.',
    type: 'Personal',
    tech: ['React.js', 'FastAPI', 'PostgreSQL', 'Encryption'],
    liveLink: import.meta.env.VITE_PROJECT_SIYU_LINK || 'https://siyu-gallery.vercel.app/login',
    github: import.meta.env.VITE_GITHUB_SIYU_LINK || '#',
    badge: 'Personal',
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
