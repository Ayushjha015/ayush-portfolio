import { motion } from 'motion/react';

const experiences = [
  {
    id: 1,
    role: 'Python Developer',
    company: 'Webelight Solutions',
    period: 'Jan 25 – Present (15 mos)',
    location: 'Ahmedabad',
    description: [
      'Serving as a python web developer to make restful api services for the web application using the fastapi framework and postgresql as a database.',
    ],
  },
  {
    id: 2,
    role: 'B.Tech CE',
    company: 'Silver Oak University',
    period: 'Nov 21 - Apr 25',
    location: 'Ahmedabad',
    description: [
      'Completed the bachelors of technology in computer engineering.',
    ],
  },
  {
    id: 3,
    role: 'Secondary & Higher Secondary',
    company: 'Kendriya Vidhyalaya no. 1',
    period: 'Jan 18 - May 21',
    location: 'Sector 30 Gnr',
    description: [
      'Completed secondary and higher secondary education in A group (physics, chemistry & maths).',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative bg-white/[0.01]">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <h2 className="section-title-line">
            Experience & Education
          </h2>
        </motion.div>

        <div className="flex flex-col gap-3">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.2 }}
              className="grid md:grid-cols-[140px_1fr] border-l-2 border-secondary pl-[15px] ml-[5px] relative"
            >
              {/* Timeline Dot */}
              <div className="absolute w-2 h-2 bg-secondary rounded-full -left-[5px] top-1.5" />
              
              <div className="mb-2 md:mb-0">
                <span className="text-[0.75rem] font-mono opacity-60">
                  {exp.period}
                </span>
              </div>
              
              <div>
                <div className="font-bold text-[0.9rem]">
                  {exp.role}
                </div>
                <div className="text-[0.85rem] text-primary mb-3">
                  {exp.company}
                </div>
                
                <ul className="space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex gap-2 text-[#e0e0e0] opacity-80 font-sans text-sm leading-relaxed">
                      <span className="text-primary mt-1 opacity-50 text-xs">▹</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
