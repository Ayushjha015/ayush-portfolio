import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

const stats = [
  { label: 'Months Exp.', value: 15, suffix: '+' },
  { label: 'Projects Shipped', value: 4, suffix: '+' },
  { label: 'Awards', value: 3, suffix: '' },
  { label: 'Tech Stack', value: 10, suffix: '+' },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 2000;
    const increment = end / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <span className="text-xl font-bold text-secondary block">
      {count}{suffix}
    </span>
  );
}

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12"
        >
          <h2 className="section-title-line">
            About Me
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-6 text-[#e0e0e0] opacity-80 font-sans text-base leading-relaxed"
          >
            <p>
              I'm Ayush Jha, a Full Stack Developer and AI enthusiast based in Ahmedabad, India. I specialize in building fast, scalable web applications and intelligent AI-powered systems — from clean REST APIs with FastAPI and PostgreSQL, to autonomous AI agents that automate real-world workflows.
            </p>
            <p>
              Currently working as a Python Developer at Webelight Solutions, I've shipped production-grade backend systems and collaborated on end-to-end product development. Outside of my day job, I take on freelance projects for clients who want modern, well-engineered websites and web apps built right the first time.
            </p>
            <p>
              If you have an idea and need someone to architect, build, and ship it — let's talk.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.1 }}
                className="stat-box flex flex-col justify-center text-center"
              >
                <Counter value={stat.value} suffix={stat.suffix} />
                <span className="text-[0.7rem] uppercase tracking-[1px] opacity-60 mt-1">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
