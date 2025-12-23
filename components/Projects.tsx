"use client";

import { motion } from "framer-motion";
import { Rocket, Code, BarChart3, ExternalLink, Github, Database, Server, Cpu, Network, Layers } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    icon: Rocket,
    title: "PharmaDual",
    subtitle: "Agentic AI System",
    tech: ["React", "FastAPI", "Python", "GPT-4", "Gemini", "Docker"],
    description:
      "Designed a multi-agent AI system for pharmaceutical research workflows with asynchronous agent orchestration and cross-model reasoning.",
    achievements: [
      "~90% reduction in research turnaround time",
      "Enabled cross-model reasoning between GPT-4 and Gemini",
      "Deployed using Docker, Redis, Nginx",
    ],
    github: "https://github.com/palaksoni0408",
    demo: "#",
  },
  {
    icon: Code,
    title: "KodesCruz",
    subtitle: "AI Coding Assistant",
    tech: ["FastAPI", "LangChain", "React", "TypeScript", "WebSockets"],
    description:
      "AI-powered code explanation, debugging, and complexity analysis with real-time collaborative coding capabilities.",
    achievements: [
      "Reduced debugging time by ~40%",
      "Real-time collaborative coding with WebSockets",
      "Monaco Editor integration",
    ],
    github: "https://github.com/palaksoni0408",
    demo: "#",
  },
  {
    icon: BarChart3,
    title: "Global Health Data Visualization",
    subtitle: "Interactive Dashboards",
    tech: ["Python", "Flask", "React", "Plotly", "Docker"],
    description:
      "Built interactive dashboards for 10+ global disease burden metrics with gender-disaggregated public health insights.",
    achievements: [
      "10+ global disease burden metrics",
      "Gender-disaggregated insights",
      "Designed for policy-oriented analysis",
    ],
    github: "https://github.com/palaksoni0408",
    demo: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-container bg-dark-surface/50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-12 gradient-text flex items-center gap-3">
          <Rocket className="w-10 h-10" />
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-1 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card group"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-accent-blue to-accent-violet rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-semibold text-white mb-1">
                          {project.title}
                        </h3>
                        <p className="text-accent-violet font-medium mb-3">
                          {project.subtitle}
                        </p>
                      </div>
                      <div className="flex gap-3 mb-4 md:mb-0">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 border border-dark-border rounded-lg hover:border-accent-blue hover:text-accent-blue transition-colors"
                          aria-label="GitHub"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 border border-dark-border rounded-lg hover:border-accent-blue hover:text-accent-blue transition-colors"
                          aria-label="Live Demo"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-dark-bg border border-dark-border rounded-full text-sm text-gray-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <ul className="space-y-2">
                      {project.achievements.map((achievement, achievementIndex) => (
                        <li
                          key={achievementIndex}
                          className="flex items-start gap-2 text-gray-300"
                        >
                          <span className="text-accent-emerald mt-1">▸</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Architecture diagram placeholder */}
                    <div className="mt-6 p-6 bg-dark-bg border border-dark-border rounded-lg">
                      <div className="flex items-center gap-2 mb-4">
                        <Layers className="w-4 h-4 text-accent-blue" />
                        <span className="text-sm font-medium text-gray-400">System Architecture</span>
                      </div>
                      <div className="relative w-full h-48 md:h-56 bg-dark-surface/50 rounded-lg overflow-hidden border border-dark-border/50">
                        {index === 0 && (
                          // PharmaDual - Multi-agent system
                          <div className="p-4 h-full flex flex-col justify-between">
                            <div className="flex items-center justify-between">
                              <div className="flex flex-col items-center gap-2">
                                <div className="w-12 h-12 bg-gradient-to-br from-accent-blue/20 to-accent-blue/40 border border-accent-blue/50 rounded-lg flex items-center justify-center">
                                  <Cpu className="w-5 h-5 text-accent-blue" />
                                </div>
                                <span className="text-xs text-gray-500">Agent 1</span>
                              </div>
                              <div className="flex flex-col items-center gap-2">
                                <div className="w-12 h-12 bg-gradient-to-br from-accent-violet/20 to-accent-violet/40 border border-accent-violet/50 rounded-lg flex items-center justify-center">
                                  <Cpu className="w-5 h-5 text-accent-violet" />
                                </div>
                                <span className="text-xs text-gray-500">Agent 2</span>
                              </div>
                              <div className="flex flex-col items-center gap-2">
                                <div className="w-12 h-12 bg-gradient-to-br from-accent-emerald/20 to-accent-emerald/40 border border-accent-emerald/50 rounded-lg flex items-center justify-center">
                                  <Cpu className="w-5 h-5 text-accent-emerald" />
                                </div>
                                <span className="text-xs text-gray-500">Agent N</span>
                              </div>
                            </div>
                            <div className="flex items-center justify-center">
                              <div className="w-16 h-16 bg-gradient-to-br from-accent-blue/30 to-accent-violet/30 border-2 border-accent-blue/50 rounded-lg flex items-center justify-center">
                                <Server className="w-6 h-6 text-accent-blue" />
                              </div>
                            </div>
                            <div className="flex items-center justify-center gap-2">
                              <div className="w-3 h-3 bg-accent-blue/50 rounded-full"></div>
                              <div className="h-0.5 w-8 bg-gradient-to-r from-accent-blue to-transparent"></div>
                              <div className="flex items-center gap-1">
                                <Network className="w-4 h-4 text-gray-600" />
                                <span className="text-xs text-gray-600">Orchestrator</span>
                              </div>
                              <div className="h-0.5 w-8 bg-gradient-to-l from-accent-blue to-transparent"></div>
                              <div className="w-3 h-3 bg-accent-blue/50 rounded-full"></div>
                            </div>
                            <div className="flex items-center justify-center">
                              <div className="w-14 h-14 bg-gradient-to-br from-gray-700/30 to-gray-800/30 border border-gray-600/50 rounded-lg flex items-center justify-center">
                                <Database className="w-5 h-5 text-gray-400" />
                              </div>
                            </div>
                          </div>
                        )}
                        {index === 1 && (
                          // KodesCruz - Client-Server with WebSocket
                          <div className="p-4 h-full flex items-center justify-between">
                            <div className="flex flex-col items-center gap-2">
                              <div className="w-16 h-16 bg-gradient-to-br from-accent-blue/30 to-accent-violet/30 border-2 border-accent-blue/50 rounded-lg flex items-center justify-center">
                                <Code className="w-6 h-6 text-accent-blue" />
                              </div>
                              <span className="text-xs text-gray-500">React Client</span>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                              <div className="flex items-center gap-1">
                                <div className="w-2 h-2 bg-accent-emerald rounded-full animate-pulse"></div>
                                <div className="h-0.5 w-12 bg-gradient-to-r from-accent-emerald to-accent-blue"></div>
                                <Network className="w-4 h-4 text-accent-emerald" />
                                <div className="h-0.5 w-12 bg-gradient-to-l from-accent-emerald to-accent-blue"></div>
                                <div className="w-2 h-2 bg-accent-emerald rounded-full animate-pulse"></div>
                              </div>
                              <span className="text-xs text-gray-600">WebSocket</span>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                              <div className="w-16 h-16 bg-gradient-to-br from-accent-violet/30 to-accent-emerald/30 border-2 border-accent-violet/50 rounded-lg flex items-center justify-center">
                                <Server className="w-6 h-6 text-accent-violet" />
                              </div>
                              <span className="text-xs text-gray-500">FastAPI Server</span>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                              <div className="w-14 h-14 bg-gradient-to-br from-gray-700/30 to-gray-800/30 border border-gray-600/50 rounded-lg flex items-center justify-center">
                                <Database className="w-5 h-5 text-gray-400" />
                              </div>
                              <span className="text-xs text-gray-500">LLM API</span>
                            </div>
                          </div>
                        )}
                        {index === 2 && (
                          // Global Health - Data Pipeline
                          <div className="p-4 h-full flex flex-col justify-between">
                            <div className="flex items-center justify-between">
                              <div className="flex flex-col items-center gap-2">
                                <div className="w-12 h-12 bg-gradient-to-br from-gray-700/30 to-gray-800/30 border border-gray-600/50 rounded-lg flex items-center justify-center">
                                  <Database className="w-5 h-5 text-gray-400" />
                                </div>
                                <span className="text-xs text-gray-500">Data Source</span>
                              </div>
                              <div className="h-0.5 w-8 bg-gradient-to-r from-gray-600 to-transparent"></div>
                              <div className="flex flex-col items-center gap-2">
                                <div className="w-12 h-12 bg-gradient-to-br from-accent-blue/30 to-accent-violet/30 border border-accent-blue/50 rounded-lg flex items-center justify-center">
                                  <Server className="w-5 h-5 text-accent-blue" />
                                </div>
                                <span className="text-xs text-gray-500">Flask API</span>
                              </div>
                              <div className="h-0.5 w-8 bg-gradient-to-l from-gray-600 to-transparent"></div>
                              <div className="flex flex-col items-center gap-2">
                                <div className="w-12 h-12 bg-gradient-to-br from-accent-emerald/30 to-accent-blue/30 border border-accent-emerald/50 rounded-lg flex items-center justify-center">
                                  <BarChart3 className="w-5 h-5 text-accent-emerald" />
                                </div>
                                <span className="text-xs text-gray-500">Visualization</span>
                              </div>
                            </div>
                            <div className="flex items-center justify-center gap-3 mt-4">
                              <div className="w-8 h-8 bg-accent-blue/20 border border-accent-blue/30 rounded flex items-center justify-center">
                                <span className="text-xs text-accent-blue">10+</span>
                              </div>
                              <span className="text-xs text-gray-600">Metrics</span>
                            </div>
                          </div>
                        )}
                      </div>
                      <p className="text-xs text-gray-500 text-center mt-3 italic">
                        Architecture diagram - placeholder for visual representation
                      </p>
                    </div>
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

