"use client";

import { motion } from "framer-motion";
import { Code2, Database, Palette, Wrench } from "lucide-react";

const techCategories = [
  {
    icon: Code2,
    title: "AI / ML",
    technologies: [
      "LLMs",
      "OpenAI",
      "LangChain",
      "TensorFlow",
      "Scikit-learn",
    ],
    color: "from-accent-blue to-cyan-500",
  },
  {
    icon: Database,
    title: "Backend",
    technologies: [
      "FastAPI",
      "Flask",
      "Docker",
      "Redis",
      "PostgreSQL",
    ],
    color: "from-accent-violet to-purple-500",
  },
  {
    icon: Palette,
    title: "Frontend",
    technologies: [
      "React",
      "TypeScript",
      "MERN Stack",
    ],
    color: "from-accent-emerald to-green-500",
  },
  {
    icon: Wrench,
    title: "Data & Tools",
    technologies: [
      "SQL",
      "Git",
      "Jupyter",
      "Streamlit",
    ],
    color: "from-orange-500 to-red-500",
  },
];

export default function TechStack() {
  return (
    <section id="tech-stack" className="section-container bg-dark-surface/50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-12 gradient-text flex items-center gap-3">
          <Code2 className="w-10 h-10" />
          Tech Stack
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {techCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center mb-4`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {category.title}
                </h3>
                <ul className="space-y-2">
                  {category.technologies.map((tech, techIndex) => (
                    <li
                      key={techIndex}
                      className="text-gray-300 flex items-center gap-2"
                    >
                      <span className="text-accent-emerald">▸</span>
                      {tech}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}

