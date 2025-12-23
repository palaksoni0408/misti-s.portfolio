"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 gradient-text">
          About Me
        </h2>
        <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
          <p>
            I'm a <span className="text-accent-blue font-medium">B.Tech student in Mathematics & Computer Science</span> at RGIPT (2023–2027), 
            with a strong foundation in mathematics, computing, and systems design.
          </p>
          <p>
            My work centers on building production-grade AI systems that bridge 
            the gap between research and real-world applications. I'm particularly 
            interested in <span className="text-accent-violet font-medium">agentic AI & generative AI</span>, 
            where I explore how autonomous systems can solve complex problems 
            with minimal human intervention.
          </p>
          <p>
            What sets my approach apart is combining <span className="text-accent-emerald font-medium">product thinking with engineering execution</span>. 
            I don't just build—I design with users in mind, think about scalability, 
            and ensure that every system I create delivers measurable impact.
          </p>
          <p>
            Whether it's translating cutting-edge research into usable products or 
            architecting systems that scale, I thrive on turning ambitious ideas 
            into reality.
          </p>
        </div>
      </motion.div>
    </section>
  );
}


