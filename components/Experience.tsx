"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="section-container bg-dark-surface/50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-12 gradient-text flex items-center gap-3">
          <Briefcase className="w-10 h-10" />
          Experience
        </h2>

        <div className="card">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-1">
                Research & Development Intern (Product & Strategy)
              </h3>
              <p className="text-accent-blue font-medium">Yapassio</p>
            </div>
            <div className="text-gray-400 text-sm md:text-base mt-2 md:mt-0">
              May 2024 – Aug 2024 | Uttar Pradesh, India
            </div>
          </div>

          <ul className="space-y-3 text-gray-300 mt-6">
            <li className="flex items-start gap-3">
              <span className="text-accent-emerald mt-2">▸</span>
              <span>
                Conducted large-scale research across <span className="text-accent-blue font-medium">260+ career domains</span>
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent-emerald mt-2">▸</span>
              <span>
                Designed <span className="text-accent-blue font-medium">60+ assessment questions</span> evaluating logical reasoning, analytical aptitude, and emotional intelligence
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent-emerald mt-2">▸</span>
              <span>
                Synthesized research into <span className="text-accent-blue font-medium">standardized decision frameworks</span> used in counseling workflows
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent-emerald mt-2">▸</span>
              <span>
                Collaborated with product teams to improve <span className="text-accent-blue font-medium">usability, consistency, and scalability</span>
              </span>
            </li>
          </ul>
        </div>
      </motion.div>
    </section>
  );
}

