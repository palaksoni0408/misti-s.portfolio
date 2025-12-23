"use client";

import { motion } from "framer-motion";
import { GraduationCap, School, Award } from "lucide-react";

const education = [
  {
    icon: GraduationCap,
    institution: "Rajiv Gandhi Institute of Petroleum Technology (RGIPT)",
    degree: "B.Tech — Mathematics & Computer Science",
    period: "2023–2027",
    highlights: [],
  },
  {
    icon: School,
    institution: "Narayana Junior College",
    degree: "Intermediate (MPC)",
    period: "Completed",
    highlights: ["98%"],
  },
  {
    icon: School,
    institution: "Carmel Convent School",
    degree: "Matriculation",
    period: "Completed",
    highlights: [
      "95.4%",
      "Ex-General Secretary",
      "Music (Casio), Throwball",
      "Top 0.1% in Mathematics Standard",
    ],
  },
];

export default function Education() {
  return (
    <section id="education" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-12 gradient-text flex items-center gap-3">
          <GraduationCap className="w-10 h-10" />
          Education
        </h2>

        <div className="space-y-6">
          {education.map((edu, index) => {
            const Icon = edu.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card"
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent-blue to-accent-violet rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-1">
                      {edu.institution}
                    </h3>
                    <p className="text-accent-violet font-medium mb-2">
                      {edu.degree}
                    </p>
                    <p className="text-gray-400 text-sm mb-3">{edu.period}</p>
                    {edu.highlights.length > 0 && (
                      <ul className="space-y-1">
                        {edu.highlights.map((highlight, highlightIndex) => (
                          <li
                            key={highlightIndex}
                            className="text-gray-300 text-sm flex items-center gap-2"
                          >
                            <span className="text-accent-emerald">▸</span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}

