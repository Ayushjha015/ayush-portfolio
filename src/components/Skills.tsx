import { motion } from 'motion/react';

const skillCategories = [
  {
    title: 'Backend',
    skills: ['Python', 'FastAPI', 'SQLAlchemy', 'Node.js', 'REST API Design'],
  },
  {
    title: 'Frontend',
    skills: ['React.js', 'Vue.js', 'JavaScript', 'HTML & CSS'],
  },
  {
    title: 'Databases',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis'],
  },
  {
    title: 'AI & Automation',
    skills: ['AI Agents', 'LLM Integration', 'Automation Workflows'],
  },
  {
    title: 'DevOps & Tools',
    skills: ['Docker', 'Git & GitHub', 'GitLab'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative bg-white/[0.01]">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <h2 className="section-title-line">
            Expertise
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: catIndex * 0.1 }}
              className="glass-card p-8"
            >
              <h3 className="text-xl font-heading font-semibold text-white mb-6 flex items-center gap-2">
                <span className="text-secondary font-mono text-sm">{'//'}</span>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: catIndex * 0.1 + skillIndex * 0.05 }}
                    className="skill-pill"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
